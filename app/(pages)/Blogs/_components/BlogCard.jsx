import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ blog, index }) {
  return (
    <Link href={`/Blogs/${blog.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col gap-4"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={blog.coverImage}
            alt={blog.blogTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gray-500 font-inter">
            <span>{blog.category}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{blog.readingTime}</span>
          </div>

          <h3 className="text-2xl font-syne font-bold leading-tight text-gray-900 group-hover:text-[#5e3fcb] transition-colors duration-300">
            {blog.blogTitle}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 font-inter">
            {blog.blogBody.replace(/[#*]/g, "").substring(0, 150)}...
          </p>

          <div className="pt-2">
            <span className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-0.5 group-hover:border-[#5e3fcb] transition-colors duration-300 font-inter">
              Read Article
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
