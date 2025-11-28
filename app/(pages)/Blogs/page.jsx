import blogs from "./data/blogs.json";
import BlogCard from "./_components/BlogCard";
import Navbar from "@/app/components/ui/Navbar";

export default function BlogsPage() {
  return (
    <>
    <Navbar/>
    <section className="w-full min-h-screen py-24 px-6 bg-[#f9f9fb]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">
          Insights & Stories
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Read deep dives, enterprise strategies, and technology insights from
          our experts across ServiceNow, AI, Cybersecurity, Cloud, and more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
