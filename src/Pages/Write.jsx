import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import SEO from "../Components/SEO";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { api } from "../lib/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faHeading,
  faLink,
  faImage,
  faQuoteLeft,
  faCode,
  faListUl,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";

const TOOLBAR_ITEMS = [
  { type: "bold", icon: faBold, label: "Bold" },
  { type: "italic", icon: faItalic, label: "Italic" },
  { type: "h2", icon: faHeading, label: "Heading" },
  { type: "quote", icon: faQuoteLeft, label: "Quote" },
  { type: "code", icon: faCode, label: "Code" },
  { type: "link", icon: faLink, label: "Link" },
  { type: "image", icon: faImage, label: "Image" },
  { type: "ul", icon: faListUl, label: "Bullet list" },
  { type: "ol", icon: faListOl, label: "Numbered list" },
];

const emptyForm = {
  id: null,
  title: "",
  excerpt: "",
  content: "",
  cover_url: "",
  tagsText: "",
  status: "draft",
};

const Write = React.memo(() => {
  const [authed, setAuthed] = useState(null); // null = checking, false, true
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [tab, setTab] = useState("write"); // write | preview
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const contentRef = useRef(null);

  const refreshArticles = useCallback(() => {
    api.listAdminArticles().then(setArticles).catch(() => {});
  }, []);

  useEffect(() => {
    api
      .me()
      .then(() => {
        setAuthed(true);
        refreshArticles();
      })
      .catch(() => setAuthed(false));
  }, [refreshArticles]);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setLoginError("");
      try {
        await api.login(password);
        setAuthed(true);
        setPassword("");
        refreshArticles();
      } catch (err) {
        setLoginError(err.message);
      }
    },
    [password, refreshArticles]
  );

  const handleLogout = useCallback(async () => {
    await api.logout().catch(() => {});
    setAuthed(false);
    setArticles([]);
    setForm(emptyForm);
  }, []);

  const loadArticle = useCallback(async (id) => {
    const data = await api.getAdminArticle(id);
    setForm({
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      cover_url: data.cover_url || "",
      tagsText: (data.tags || []).join(", "),
      status: data.status,
    });
    setFormError("");
    setTab("write");
  }, []);

  const handleField = useCallback((field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleSave = useCallback(
    async (status) => {
      setFormError("");

      if (!form.title || !form.excerpt || !form.content) {
        setFormError("Judul, excerpt, dan konten wajib diisi.");
        return;
      }

      setSaving(true);
      const payload = {
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        cover_url: form.cover_url || null,
        tags: form.tagsText
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        status,
      };

      try {
        const saved = form.id
          ? await api.updateArticle(form.id, payload)
          : await api.createArticle(payload);

        setForm((prev) => ({ ...prev, id: saved.id, status: saved.status }));
        refreshArticles();
      } catch (err) {
        setFormError(err.message);
      } finally {
        setSaving(false);
      }
    },
    [form, refreshArticles]
  );

  const applyMarkdown = useCallback((type) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const selected = value.slice(selectionStart, selectionEnd);

    let insertText = selected;
    let selStart = selectionStart;
    let selEnd = selectionEnd;

    const place = (text, relStart, relLength) => {
      insertText = text;
      selStart = selectionStart + relStart;
      selEnd = selStart + relLength;
    };

    switch (type) {
      case "bold": {
        const label = selected || "teks tebal";
        place(`**${label}**`, 2, label.length);
        break;
      }
      case "italic": {
        const label = selected || "teks miring";
        place(`*${label}*`, 1, label.length);
        break;
      }
      case "h2": {
        const label = selected || "Judul";
        place(`## ${label}`, 3, label.length);
        break;
      }
      case "quote": {
        const label = selected || "Kutipan";
        place(`> ${label}`, 2, label.length);
        break;
      }
      case "code": {
        const label = selected || "kode";
        if (label.includes("\n")) {
          place(`\`\`\`\n${label}\n\`\`\``, 4, label.length);
        } else {
          place(`\`${label}\``, 1, label.length);
        }
        break;
      }
      case "link": {
        const label = selected || "teks link";
        place(`[${label}](url)`, label.length + 3, 3);
        break;
      }
      case "image": {
        const label = selected || "alt text";
        place(`![${label}](url)`, label.length + 4, 3);
        break;
      }
      case "ul": {
        const label = selected || "poin";
        place(`- ${label}`, 2, label.length);
        break;
      }
      case "ol": {
        const label = selected || "poin";
        place(`1. ${label}`, 3, label.length);
        break;
      }
      default:
        return;
    }

    const newValue = value.slice(0, selectionStart) + insertText + value.slice(selectionEnd);
    setForm((prev) => ({ ...prev, content: newValue }));

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(selStart, selEnd);
    });
  }, []);

  const handleDelete = useCallback(async () => {
    if (!form.id) return;
    if (!window.confirm(`Hapus "${form.title}"? Tidak bisa dibatalkan.`)) return;

    await api.deleteArticle(form.id);
    setForm(emptyForm);
    refreshArticles();
  }, [form.id, form.title, refreshArticles]);

  if (authed === null) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-10 h-10 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (!authed) {
    return (
      <Layout>
        <SEO title="Write" path="/write" noindex />
        <div className="flex items-center justify-center min-h-[70vh] px-6">
          <form
            onSubmit={handleLogin}
            className="bg-dark-blue/30 border border-orange/20 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-y-4"
          >
            <h1 className="text-orange text-2xl font-rodetta text-center">Write</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
              autoFocus
              className="bg-dark-blue border border-orange/30 rounded-lg px-4 py-2 text-light-blue
                         focus:outline-none focus:border-orange transition-colors duration-300"
            />
            {loginError && <p className="text-red text-sm">{loginError}</p>}
            <button
              type="submit"
              className="bg-orange hover:bg-orange/90 text-dark-blue font-semibold py-2 rounded-full transition-all duration-300"
            >
              Masuk
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Write" path="/write" noindex />
      <section className="write-section w-11/12 xl:w-10/12 mx-auto my-8 lg:my-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-orange text-2xl lg:text-3xl font-rodetta">Write</h1>
          <button
            onClick={handleLogout}
            className="text-light-blue hover:text-orange text-sm transition-colors duration-300"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar: article list */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setForm(emptyForm);
                setFormError("");
                setTab("write");
              }}
              className="bg-orange/10 hover:bg-orange text-light-blue hover:text-dark-blue
                         border-2 border-orange px-4 py-2 rounded-full font-semibold text-sm
                         transition-all duration-300"
            >
              + New Article
            </button>

            <div className="flex flex-col gap-y-2 mt-2">
              {articles.map((a) => (
                <button
                  key={a.id}
                  onClick={() => loadArticle(a.id)}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-300 ${
                    form.id === a.id
                      ? "border-orange bg-orange/10"
                      : "border-orange/10 hover:border-orange/40"
                  }`}
                >
                  <span className="block text-light-blue text-sm truncate">{a.title}</span>
                  <span
                    className={`text-xs ${
                      a.status === "published" ? "text-orange" : "text-light-blue/50"
                    }`}
                  >
                    {a.status}
                  </span>
                </button>
              ))}
              {articles.length === 0 && (
                <p className="text-light-blue/50 text-sm italic px-1">Belum ada artikel.</p>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-y-4">
            <input
              value={form.title}
              onChange={handleField("title")}
              placeholder="Judul artikel"
              className="bg-dark-blue/30 border border-orange/20 rounded-lg px-4 py-3
                         text-light-blue text-xl font-rodetta focus:outline-none focus:border-orange
                         transition-colors duration-300"
            />

            <textarea
              value={form.excerpt}
              onChange={handleField("excerpt")}
              placeholder="Excerpt — ringkasan 1-2 kalimat"
              rows={2}
              className="bg-dark-blue/30 border border-orange/20 rounded-lg px-4 py-3
                         text-light-blue resize-none focus:outline-none focus:border-orange
                         transition-colors duration-300"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                value={form.cover_url}
                onChange={handleField("cover_url")}
                placeholder="Cover image URL (opsional)"
                className="flex-1 bg-dark-blue/30 border border-orange/20 rounded-lg px-4 py-2
                           text-light-blue text-sm focus:outline-none focus:border-orange
                           transition-colors duration-300"
              />
              <input
                value={form.tagsText}
                onChange={handleField("tagsText")}
                placeholder="Tags, pisahkan dengan koma"
                className="flex-1 bg-dark-blue/30 border border-orange/20 rounded-lg px-4 py-2
                           text-light-blue text-sm focus:outline-none focus:border-orange
                           transition-colors duration-300"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setTab("write")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  tab === "write"
                    ? "bg-orange text-dark-blue font-semibold"
                    : "text-light-blue/70 border border-orange/20"
                }`}
              >
                Write
              </button>
              <button
                onClick={() => setTab("preview")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  tab === "preview"
                    ? "bg-orange text-dark-blue font-semibold"
                    : "text-light-blue/70 border border-orange/20"
                }`}
              >
                Preview
              </button>
            </div>

            {tab === "write" ? (
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-1 bg-dark-blue/30 border border-orange/20 border-b-0 rounded-t-lg px-2 py-2">
                  {TOOLBAR_ITEMS.map((item) => (
                    <button
                      key={item.type}
                      type="button"
                      title={item.label}
                      aria-label={item.label}
                      onClick={() => applyMarkdown(item.type)}
                      className="w-8 h-8 flex items-center justify-center rounded-md text-light-blue/70
                                 hover:text-orange hover:bg-orange/10 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-sm" />
                    </button>
                  ))}
                </div>
                <textarea
                  ref={contentRef}
                  value={form.content}
                  onChange={handleField("content")}
                  placeholder="Tulis dengan Markdown..."
                  rows={18}
                  className="bg-dark-blue/30 border border-orange/20 rounded-b-lg px-4 py-3
                             text-light-blue font-mono text-sm leading-6 resize-y
                             focus:outline-none focus:border-orange transition-colors duration-300"
                />
              </div>
            ) : (
              <div className="bg-dark-blue/30 border border-orange/20 rounded-lg px-6 py-4 min-h-[300px]">
                {form.content ? (
                  <MarkdownRenderer content={form.content} />
                ) : (
                  <p className="text-light-blue/50 italic">Belum ada konten buat di-preview.</p>
                )}
              </div>
            )}

            {formError && <p className="text-red text-sm">{formError}</p>}

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                disabled={saving}
                onClick={() => handleSave("draft")}
                className="border-2 border-orange text-light-blue hover:bg-orange hover:text-dark-blue
                           px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
                           disabled:opacity-50"
              >
                Save Draft
              </button>
              <button
                disabled={saving}
                onClick={() => handleSave("published")}
                className="bg-orange hover:bg-orange/90 text-dark-blue
                           px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
                           disabled:opacity-50"
              >
                {form.status === "published" ? "Update Published" : "Publish"}
              </button>
              {form.id && (
                <button
                  onClick={handleDelete}
                  className="text-red hover:underline text-sm ml-auto"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
});

Write.displayName = "Write";

export default Write;
