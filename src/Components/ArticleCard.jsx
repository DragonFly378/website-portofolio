import React from "react";
import { Link } from "react-router-dom";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const ArticleCard = React.memo(({ article }) => {
  return (
    <Link to={`/blog/${article.slug}`} className="article-row group block py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          <p className="text-blog-muted text-sm mb-2">
            {formatDate(article.published_at)}
            {article.reading_time_minutes ? ` · ${article.reading_time_minutes} min read` : ""}
          </p>

          <h2 className="font-serif text-blog-ink text-2xl lg:text-3xl font-semibold leading-snug group-hover:text-blog-accent transition-colors duration-300">
            {article.title}
          </h2>

          <p className="text-blog-ink-soft text-base lg:text-lg leading-7 mt-3">
            {article.excerpt}
          </p>

          {article.tags?.length > 0 && (
            <p className="text-blog-muted text-sm mt-4">{article.tags.join(" · ")}</p>
          )}
        </div>

        {article.cover_url && (
          <div className="hidden sm:block w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 overflow-hidden rounded-md">
            <img
              src={article.cover_url}
              alt={article.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </Link>
  );
});

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;
