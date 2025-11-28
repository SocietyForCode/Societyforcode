"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TableOfContents({ content }) {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Extract headings from markdown content
        const headingRegex = /^##\s+(.+)$/gm;
        const matches = [];
        let match;

        while ((match = headingRegex.exec(content)) !== null) {
            const title = match[1];
            const id = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            matches.push({ id, title });
        }

        setHeadings(matches);

        // Set up intersection observer for active heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        // Observe all h2 elements
        setTimeout(() => {
            const h2Elements = document.querySelectorAll("h2[id]");
            h2Elements.forEach((el) => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="sticky top-32 hidden lg:block"
        >
            <div className="pr-8 border-l-2 border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 pl-6 font-inter">
                    Table of Contents
                </p>
                <nav className="space-y-3">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={`block pl-6 text-sm font-medium transition-all duration-200 font-inter border-l-2 -ml-[2px] ${activeId === heading.id
                                    ? "text-[#5e3fcb] border-[#5e3fcb]"
                                    : "text-gray-500 hover:text-gray-900 border-transparent"
                                }`}
                        >
                            {heading.title}
                        </a>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
}
