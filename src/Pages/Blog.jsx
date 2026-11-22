import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import BlogLayout from "../Layout/BlogLayout";
import ArticleCard from "../Components/ArticleCard";
import { api } from "../lib/api";

const Blog = React.memo(() => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    api
      .listArticles()
      .then((data) => {
        setArticles(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <BlogLayout>
      <SEO
        title="Blog - Muhammad Hafiz Hisbullah"
        description="Tulisan tentang desain, kode, dan proses di baliknya — dari Muhammad Hafiz Hisbullah."
        path="/blog"
      />
      <section className="blog-section bg-blog-bg">
        <div className="w-11/12 lg:w-7/12 mx-auto max-w-[720px] py-12 lg:py-20">
          <header className="mb-10 lg:mb-14">
            <h1 className="text-blog-accent text-4xl lg:text-5xl font-rodetta tracking-wide">
              Blog
            </h1>
            <p className="text-blog-muted text-base lg:text-lg mt-2">
              Tulisan tentang desain, kode, dan proses di baliknya.
            </p>
            <div className="h-px bg-blog-hairline mt-8"></div>
          </header>

          {status === "loading" && (
            <div className="flex py-16">
              <div className="w-8 h-8 border-2 border-blog-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {status === "error" && (
            <p className="text-blog-muted py-16">
              Gagal memuat artikel. Coba lagi beberapa saat lagi.
            </p>
          )}

          {status === "ready" && articles.length === 0 && (
            <p className="text-blog-muted py-16 italic">
              Belum ada tulisan. Tunggu update berikutnya.
            </p>
          )}

          {status === "ready" && articles.length > 0 && (
            <div className="divide-y divide-blog-hairline">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </BlogLayout>
  );
});

Blog.displayName = "Blog";

export default Blog;
