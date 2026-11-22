/**
 * Prerenders each route to static HTML after `vite build`, so crawlers that
 * don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, CCBot, and
 * others) see real content instead of the empty SPA shell. Real browsers
 * still get the same files, then React hydrates over them (see index.jsx).
 *
 * Runs as a `postbuild` step. Never fails the deploy: any error here is
 * logged and swallowed so a prerendering hiccup can't block shipping an
 * already-working build.
 */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const puppeteer = require("puppeteer");

const DIST = path.join(__dirname, "..", "dist");
const PORT = 5050;
const BASE = `http://localhost:${PORT}`;
const API_URL = process.env.VITE_API_URL || "https://api.hafizhb.com/api";

const STATIC_ROUTES = [
  "/",
  "/link",
  "/projects",
  "/shots",
  "/shots/1",
  "/shots/2",
  "/shots/3",
  "/shots/4",
  "/shots/5",
  "/shots/6",
  "/about",
  "/contact",
  "/blog",
  "/summary",
  "/project/ccphase",
  "/project/jaktrans",
  "/project/rwpintar",
  "/project/nomads",
  "/project/uxin",
  "/project/myquranku",
  "/project/doctoron",
];

async function getBlogRoutes() {
  try {
    const res = await fetch(`${API_URL}/articles`);
    if (!res.ok) return [];
    const articles = await res.json();
    return articles.map((a) => `/blog/${a.slug}`);
  } catch (err) {
    console.warn(`[prerender] Could not fetch articles, skipping blog posts: ${err.message}`);
    return [];
  }
}

function startServer() {
  return spawn("npx", ["serve", DIST, "-l", String(PORT), "-s"], {
    stdio: "ignore",
  });
}

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Static server did not start in time");
}

/**
 * react-helmet-async injects per-page <meta>/<link rel="canonical"> tags
 * (marked data-rh="true") alongside the static defaults already in
 * index.html — it has no way to know about or remove those. Without this,
 * every prerendered page ends up with duplicate/conflicting meta tags. Keep
 * only the Helmet-rendered version when both exist.
 */
function dedupeHead(html) {
  const helmetKeys = new Set();
  const metaTagRegex = /<meta\s+(name|property)="([^"]+)"[^>]*>/g;
  let match;
  while ((match = metaTagRegex.exec(html))) {
    if (match[0].includes('data-rh="true"')) helmetKeys.add(`${match[1]}:${match[2]}`);
  }

  let result = html.replace(metaTagRegex, (tag, attr, key) => {
    if (helmetKeys.has(`${attr}:${key}`) && !tag.includes('data-rh="true"')) return "";
    return tag;
  });

  const canonicalLinks = [...result.matchAll(/<link rel="canonical"[^>]*>/g)];
  if (canonicalLinks.length > 1) {
    const helmetCanonical = canonicalLinks.find((m) => m[0].includes('data-rh="true"'));
    const keep = helmetCanonical ? helmetCanonical[0] : canonicalLinks[0][0];
    let first = true;
    result = result.replace(/<link rel="canonical"[^>]*>/g, (tag) => {
      if (tag !== keep) return "";
      if (!first) return "";
      first = false;
      return tag;
    });
  }

  return result;
}

function routeToFile(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

async function run() {
  const routes = [...STATIC_ROUTES, ...(await getBlogRoutes())];

  const server = startServer();
  await waitForServer();

  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      // The local preview server's origin (http://localhost:PORT) will never
      // match the production API's ALLOWED_ORIGIN, so the app's own fetch
      // calls would get CORS-blocked during this crawl-only browser session.
      // Safe here: this browser only ever loads our own site, read-only.
      "--disable-web-security",
      "--disable-site-isolation-trials",
    ],
  });

  let ok = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
      const html = dedupeHead(await page.content());
      const file = routeToFile(route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
      ok += 1;
    } catch (err) {
      console.warn(`[prerender] Failed on ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.kill();
  console.log(`[prerender] Done: ${ok}/${routes.length} routes.`);
}

run().catch((err) => {
  console.warn(`[prerender] Skipped due to error: ${err.message}`);
  process.exit(0);
});
