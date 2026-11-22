import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { getStoredBlogTheme, applyBlogTheme } from "../lib/blogTheme";

const OPTIONS = [
  { value: "auto", label: "Auto", icon: faCircleHalfStroke },
  { value: "light", label: "Light", icon: faSun },
  { value: "dark", label: "Dark", icon: faMoon },
];

const BlogThemeToggle = React.memo(() => {
  const [theme, setTheme] = useState("auto");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const stored = getStoredBlogTheme();
    setTheme(stored);
    applyBlogTheme(stored);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const choose = useCallback((value) => {
    setTheme(value);
    applyBlogTheme(value);
    setOpen(false);
  }, []);

  const current = OPTIONS.find((o) => o.value === theme) || OPTIONS[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change appearance"
        aria-haspopup="true"
        aria-expanded={open}
        className="text-blog-muted hover:text-blog-ink transition-colors duration-300 w-8 h-8 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={current.icon} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-36 bg-blog-bg border border-blog-hairline rounded-lg py-1 shadow-lg z-50"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              role="menuitemradio"
              aria-checked={theme === option.value}
              onClick={() => choose(option.value)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2.5 transition-colors duration-300 ${
                theme === option.value
                  ? "text-blog-accent"
                  : "text-blog-muted hover:text-blog-ink"
              }`}
            >
              <FontAwesomeIcon icon={option.icon} className="w-3" />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

BlogThemeToggle.displayName = "BlogThemeToggle";

export default BlogThemeToggle;
