"use client";
import BlogMarkdown from "../_components/BlogMarkdown";
import TableOfContents from "../_components/TableOfContents";
import blogs from "../data/blogs.json";
import Image from "next/image";
import Navbar from "@/app/components/ui/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { useEffect, useState, use } from "react";

export default function BlogPage({ params }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const unwrappedParams = use(params);
  const blog = blogs.find((b) => b.slug === unwrappedParams.slug);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500 font-inter">Blog not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white selection:bg-[#5e3fcb] selection:text-white pb-32">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-[#5e3fcb] to-[#8b5cf6]"
            style={{ width: `${scrollProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/Blogs"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-[#5e3fcb] transition-colors mb-8 font-inter"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            <div className="flex flex-col gap-6 max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-[#5e3fcb]/10 text-[#5e3fcb] text-xs font-bold uppercase tracking-widest rounded-full w-fit font-inter">
                {blog.category}
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold text-gray-900 leading-[1.05]">
                {blog.blogTitle}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-inter pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{blog.authorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{blog.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{blog.readingTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Cover Image with Artistic Overlap */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20"
        >
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.coverImage}
              alt={blog.blogTitle}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for artistic effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Content with Sidebar Layout */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            {/* Sticky Sidebar - Table of Contents */}
            <aside className="order-2 lg:order-1">
              <TableOfContents content={blog.blogBody} />
            </aside>

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 max-w-3xl"
            >
              <BlogMarkdown content={blog.blogBody} />

              {/* Tags */}
              <div className="mt-24 pt-12 border-t-2 border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-inter">
                  Related Topics
                </p>
                <div className="flex flex-wrap gap-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full hover:bg-[#5e3fcb]/10 hover:text-[#5e3fcb] transition-all cursor-default font-inter border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5e3fcb] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-2xl font-syne flex-shrink-0">
                    {blog.authorName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-2 font-syne">
                      {blog.authorName}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                      Technology writer and industry analyst specializing in {blog.category.toLowerCase()}.
                      Passionate about making complex technical concepts accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
    </>
  );
}

