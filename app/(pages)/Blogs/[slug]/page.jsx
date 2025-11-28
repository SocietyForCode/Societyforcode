import BlogMarkdown from "../_components/BlogMarkdown";
import blogs from "../data/blogs.json";
import Image from "next/image";


export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <p className="text-center pt-40">Blog not found.</p>;
  }

  return (
    <section className="w-full min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Blog Cover */}
        <div className="relative w-full h-[380px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={blog.coverImage}
            alt={blog.blogTitle}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {blog.blogTitle}
        </h1>

        <div className="flex items-center gap-4 text-gray-500 mb-10">
          <p>✦ {blog.authorName}</p>
          <p>✦ {blog.publishDate}</p>
          <p>✦ {blog.readingTime}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {blog.tags.map((t) => (
            <span
              key={t}
              className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Blog Content */}
        <BlogMarkdown content={blog.blogBody} />
      </div>
    </section>
  );
}
