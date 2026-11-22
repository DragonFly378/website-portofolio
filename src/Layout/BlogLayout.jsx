import React from "react";
import { useLocation } from "react-router-dom";
import BlogNavbar from "../Components/BlogNavbar";
import BlogFooter from "../Components/BlogFooter";

const BlogLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="bg-blog-bg min-h-screen flex flex-col">
      <BlogNavbar active={location.pathname} />
      <div className="flex-1">{children}</div>
      <BlogFooter />
    </div>
  );
};

export default BlogLayout;
