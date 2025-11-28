"use client";
import blogs from "./data/blogs.json";
import BlogCard from "./_components/BlogCard";
import Navbar from "@/app/components/ui/Navbar";
import { motion } from "framer-motion";
import Footer from "@/app/components/sections/footer";

export default function BlogsPage() {
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white selection:bg-[#5e3fcb] selection:text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-syne font-bold text-gray-900 mb-8 tracking-tight">
              Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e3fcb] to-[#8a6fe6]">
                Perspectives
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-2xl leading-relaxed">
              Deep dives into enterprise strategies, technology trends, and the future of digital transformation.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        {featuredBlog && (
          <section className="px-6 md:px-12 max-w-[1400px]  mx-auto mb-24">
            <div className="border-t border-gray-200 pt-12">
              <span className="block font-inter text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">
                Featured Story
              </span>
              <BlogCard blog={featuredBlog} index={0} />
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-32">
          <div className="border-t border-gray-200 pt-12">
            <span className="block font-inter text-xs font-bold tracking-widest uppercase text-gray-400 mb-12">
              Latest Articles
            </span>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {remainingBlogs.map((blog, idx) => (
                <BlogCard key={blog.id} blog={blog} index={idx + 1} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
