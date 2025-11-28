"use client";
import ReactMarkdown from "react-markdown";

export default function BlogMarkdown({ content }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-3xl font-bold mt-10 mb-4" />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-2xl font-semibold mt-8 mb-3" />
        ),
        p: ({ node, ...props }) => <p {...props} className="leading-8 mb-4" />,
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc ml-6 mb-4" />
        ),
        li: ({ node, ...props }) => (
          <li {...props} className="mb-1 leading-7" />
        ),
      }}
    >
      {content}
      </ReactMarkdown>
    </div>
  );
}
