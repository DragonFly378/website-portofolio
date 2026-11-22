import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../assets/img/arrow-down.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import BlogThemeToggle from "./BlogThemeToggle";

const BlogNavbar = React.memo(({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = useMemo(
    () => [
      { name: "Home", value: "/" },
      { name: "Projects", value: "/projects" },
      { name: "Shots", value: "/shots" },
      { name: "Blog", value: "/blog" },
      { name: "Contact", value: "/contact" },
    ],
    []
  );

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className="blog-navbar bg-blog-bg border-b border-blog-hairline sticky top-0 z-40">
      {/* mobile */}
      <div className="lg:hidden w-11/12 mx-auto py-5 flex items-center justify-between">
        <Link to="/" className="font-serif italic text-blog-accent text-xl">
          dragonfly378.
        </Link>
        <div className="flex items-center gap-x-3">
          <BlogThemeToggle />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <img src={isOpen ? arrowUp : arrowDown} alt="" className="w-4" />
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-blog-bg border-t border-blog-hairline`}
      >
        <div className="w-11/12 mx-auto flex flex-col gap-y-4">
          {tabs.map((item, itemIdx) => (
            <Link
              key={itemIdx}
              to={item.value}
              onClick={toggleMenu}
              className={`${
                active === item.value ? "text-blog-accent" : "text-blog-muted"
              } hover:text-blog-ink transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex items-center justify-between w-11/12 xl:w-8/12 mx-auto py-6">
        <Link to="/" className="font-serif italic text-blog-accent text-2xl">
          dragonfly378.
        </Link>
        <div className="flex items-center gap-x-8">
          <nav className="flex gap-x-8 text-sm">
            {tabs.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                to={item.value}
                className={`${
                  active === item.value ? "text-blog-accent" : "text-blog-muted"
                } hover:text-blog-ink transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <BlogThemeToggle />
        </div>
      </div>
    </header>
  );
});

BlogNavbar.displayName = "BlogNavbar";

export default BlogNavbar;
