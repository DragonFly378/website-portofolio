import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import BlogLayout from "../Layout/BlogLayout";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import avatar from "../assets/img/apis.png";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const BlogDetail = React.memo(() => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    setStatus("loading");
    api
      .getArticle(slug)
      .then((data) => {
        setArticle(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [slug]);

  if (status === "loading") {
    return (
      <BlogLayout>
        <div className="flex items-center justify-center min-h-screen bg-blog-bg">
          <div className="w-10 h-10 border-2 border-blog-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      </BlogLayout>
    );
  }

  if (status === "error" || !article) {
    return (
      <BlogLayout>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6 bg-blog-bg">
          <p className="text-blog-ink text-2xl font-serif">Artikel tidak ditemukan</p>
          <Link to="/blog" className="text-blog-muted hover:text-blog-accent transition-colors duration-300">
            ← Back to Blog
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <SEO
        title={`${article.title} - Blog | Muhammad Hafiz Hisbullah`}
        description={article.excerpt}
        path={`/blog/${slug}`}
        image={article.cover_url || undefined}
      />
      <article className="blog-detail bg-blog-bg">
        <div className="w-11/12 lg:w-7/12 mx-auto max-w-[720px] py-12 lg:py-20">
          <Link
            to="/blog"
            className="text-blog-muted hover:text-blog-accent text-sm transition-colors duration-300"
          >
            ← Back to Blog
          </Link>

          <h1 className="font-serif text-blog-ink text-3xl lg:text-5xl font-semibold leading-tight mt-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={avatar}
              alt="Muhammad Hafiz Hisbullah"
              className="w-10 h-10 rounded-full object-cover ring-1 ring-blog-hairline"
            />
            <div className="text-sm">
              <p className="text-blog-ink-soft">Muhammad Hafiz Hisbullah</p>
              <p className="text-blog-muted">
                {formatDate(article.published_at)}
                {article.reading_time_minutes
                  ? ` · ${article.reading_time_minutes} min read`
                  : ""}
              </p>
            </div>
          </div>

          <div className="h-px bg-blog-hairline mt-8"></div>

          {article.cover_url && (
            <img
              src={article.cover_url}
              alt={article.title}
              className="w-full rounded-lg mt-10"
              loading="eager"
              decoding="async"
            />
          )}

          <div className="mt-10">
            <MarkdownRenderer content={article.content} />
          </div>

          <div className="h-px bg-blog-hairline mt-4 mb-8"></div>

          <div className="flex items-center justify-between">
            {article.tags?.length > 0 && (
              <p className="text-blog-muted text-sm">{article.tags.join(" · ")}</p>
            )}
            <Link
              to="/blog"
              className="text-blog-muted hover:text-blog-accent text-sm transition-colors duration-300 ml-auto"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
});

BlogDetail.displayName = "BlogDetail";

export default BlogDetail;
