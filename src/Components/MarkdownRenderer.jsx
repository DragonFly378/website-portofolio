import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

const components = {
  h2: ({ children }) => (
    <h2 className="font-serif text-blog-ink text-2xl lg:text-3xl font-semibold mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-blog-ink text-xl lg:text-2xl font-semibold mt-10 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-serif text-blog-ink-soft text-lg lg:text-xl leading-8 lg:leading-9 mb-6">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blog-accent underline underline-offset-4 hover:text-blog-ink transition-colors duration-300"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-blog-accent pl-6 my-8 font-serif text-blog-ink text-xl lg:text-2xl italic leading-relaxed">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 font-serif text-blog-ink-soft text-lg lg:text-xl leading-8 lg:leading-9 mb-6 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 font-serif text-blog-ink-soft text-lg lg:text-xl leading-8 lg:leading-9 mb-6 space-y-2">
      {children}
    </ol>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-blog-hairline text-blog-accent px-1.5 py-0.5 rounded text-[0.85em] font-mono">
        {children}
      </code>
    ) : (
      <code className="block bg-blog-hairline text-blog-ink-soft p-5 rounded-lg overflow-x-auto text-sm leading-6 font-mono my-6">
        {children}
      </code>
    ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} loading="lazy" className="w-full rounded-lg my-8" />
  ),
  hr: () => <hr className="border-blog-hairline my-12" />,
};

const MarkdownRenderer = React.memo(({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeSanitize]}
    components={components}
  >
    {content}
  </ReactMarkdown>
));

MarkdownRenderer.displayName = "MarkdownRenderer";

export default MarkdownRenderer;
