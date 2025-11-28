"use client";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";

export default function BlogMarkdown({ content }) {
  const contentRef = useRef(null);

  useEffect(() => {
    // Add IDs to h2 elements for table of contents linking
    if (contentRef.current) {
      const h2Elements = contentRef.current.querySelectorAll("h2");
      h2Elements.forEach((h2) => {
        const id = h2.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        h2.id = id;
      });

      // Add drop cap to first paragraph
      const firstP = contentRef.current.querySelector("p");
      if (firstP && firstP.textContent) {
        const text = firstP.textContent;
        const firstLetter = text.charAt(0);
        const restOfText = text.slice(1);

        firstP.innerHTML = `<span class="float-left text-7xl font-bold leading-[0.8] mr-3 mt-2 text-[#5e3fcb] font-syne">${firstLetter}</span>${restOfText}`;
      }
    }
  }, [content]);

  return (
    <div ref={contentRef} className="prose prose-lg max-w-none prose-headings:font-syne prose-p:font-inter prose-li:font-inter">
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              className="text-3xl md:text-4xl font-bold mt-20 mb-8 text-gray-900 leading-tight relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#5e3fcb] before:to-[#8b5cf6] before:rounded-full"
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              className="text-2xl md:text-3xl font-semibold mt-12 mb-6 text-gray-900"
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              {...props}
              className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-800"
            />
          ),
          p: ({ node, ...props }) => (
            <p
              {...props}
              className="leading-relaxed mb-6 text-gray-700 text-lg text-justify first-of-type:text-xl first-of-type:leading-relaxed"
            />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-none ml-0 mb-8 space-y-3 text-gray-700" />
          ),
          li: ({ node, ...props }) => (
            <li
              {...props}
              className="leading-relaxed pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#5e3fcb] before:font-bold"
            />
          ),
          strong: ({ node, ...props }) => (
            <strong {...props} className="font-bold text-gray-900 bg-yellow-50 px-1 rounded" />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className="border-l-4 border-[#5e3fcb] pl-8 pr-8 py-6 my-10 italic text-xl text-gray-800 bg-gradient-to-r from-[#5e3fcb]/5 to-transparent rounded-r-2xl"
            />
          ),
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code
                {...props}
                className="bg-gray-100 text-[#5e3fcb] px-2 py-0.5 rounded text-sm font-mono"
              />
            ) : (
              <code
                {...props}
                className="block bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto"
              />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
