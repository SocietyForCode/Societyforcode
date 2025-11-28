import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/Blogs/${blog.slug}`}>
      <div className="group bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative w-full h-56">
          <Image
            src={blog.coverImage}
            alt={blog.blogTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5e3fcb] transition">
            {blog.blogTitle}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            {blog.authorName} • {blog.readingTime}
          </p>

          <div className="flex gap-2 flex-wrap">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
