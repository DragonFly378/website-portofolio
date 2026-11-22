/**
 * Regenerates public/sitemap.xml and public/llms.txt before every build, so
 * published blog posts (which live in the database, not the repo) are
 * always included. Runs as a `prebuild` step; never fails the build — if the
 * API is unreachable, it falls back to static routes only.
 */

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://hafizhb.com";
const API_URL = process.env.VITE_API_URL || "https://api.hafizhb.com/api";
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "monthly" },
  { path: "/shots", priority: "0.6", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
  { path: "/link", priority: "0.3", changefreq: "yearly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/project/ccphase", priority: "0.7", changefreq: "yearly" },
  { path: "/project/jaktrans", priority: "0.7", changefreq: "yearly" },
  { path: "/project/rwpintar", priority: "0.7", changefreq: "yearly" },
  { path: "/project/nomads", priority: "0.7", changefreq: "yearly" },
  { path: "/project/uxin", priority: "0.7", changefreq: "yearly" },
  { path: "/project/myquranku", priority: "0.7", changefreq: "yearly" },
  { path: "/project/doctoron", priority: "0.7", changefreq: "yearly" },
  { path: "/shots/1", priority: "0.5", changefreq: "yearly" },
  { path: "/shots/2", priority: "0.5", changefreq: "yearly" },
  { path: "/shots/3", priority: "0.5", changefreq: "yearly" },
  { path: "/shots/4", priority: "0.5", changefreq: "yearly" },
  { path: "/shots/5", priority: "0.5", changefreq: "yearly" },
  { path: "/shots/6", priority: "0.5", changefreq: "yearly" },
];

async function getArticles() {
  try {
    const res = await fetch(`${API_URL}/articles`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.warn(`[seo-files] Could not fetch articles: ${err.message}`);
    return [];
  }
}

function buildSitemap(articles) {
  const urls = [
    ...STATIC_ROUTES.map(
      (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    ),
    ...articles.map(
      (a) => `  <url>
    <loc>${BASE_URL}/blog/${a.slug}</loc>
    <lastmod>${new Date(a.published_at).toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

function buildLlmsTxt(articles) {
  const postLines =
    articles.length > 0
      ? articles
          .slice(0, 20)
          .map((a) => `- [${a.title}](${BASE_URL}/blog/${a.slug}): ${a.excerpt}`)
          .join("\n")
      : "- No posts published yet.";

  return `# Muhammad Hafiz Hisbullah

> Product Designer & Frontend Developer based in Indonesia, working across UI/UX design and React/frontend development.

Personal portfolio and blog. The portfolio showcases UI/UX and frontend case studies; the blog is informal, personal writing not limited to any one topic.

## Key pages

- [Home](${BASE_URL}/): introduction and featured work
- [Projects](${BASE_URL}/projects): UI/UX and frontend case studies
- [Shots](${BASE_URL}/shots): design exploration and concept work
- [About](${BASE_URL}/about): background and skills
- [Contact](${BASE_URL}/contact): ways to get in touch
- [Blog](${BASE_URL}/blog): personal writing

## Recent blog posts

${postLines}
`;
}

async function main() {
  const articles = await getArticles();

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), buildSitemap(articles));
  fs.writeFileSync(path.join(PUBLIC_DIR, "llms.txt"), buildLlmsTxt(articles));

  console.log(`[seo-files] sitemap.xml and llms.txt regenerated (${articles.length} posts).`);
}

main().catch((err) => {
  console.warn(`[seo-files] Skipped due to error: ${err.message}`);
  process.exit(0);
});
