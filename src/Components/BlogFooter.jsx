import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sosmed } from "../datas";

const BlogFooter = React.memo(() => {
  return (
    <footer className="blog-footer bg-blog-bg border-t border-blog-hairline">
      <div className="w-11/12 lg:w-7/12 mx-auto max-w-[720px] py-12 flex flex-col gap-y-6">
        <p className="font-serif italic text-blog-ink text-lg">
          Thanks for reading — more thoughts soon.
        </p>

        <div className="flex gap-x-5 text-blog-muted">
          {sosmed.map((item, itemIdx) => (
            <a
              key={itemIdx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Connect on ${item.name}`}
              className="hover:text-blog-accent transition-colors duration-300"
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-blog-muted pt-6 border-t border-blog-hairline">
          <span>Muhammad Hafiz Hisbullah</span>
          <Link to="/" className="hover:text-blog-accent transition-colors duration-300">
            Back to portfolio →
          </Link>
        </div>
      </div>
    </footer>
  );
});

BlogFooter.displayName = "BlogFooter";

export default BlogFooter;
