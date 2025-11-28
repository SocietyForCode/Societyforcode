"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Briefcase, Users } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully!");
    event.target.reset();
  } else {
    setResult("Something went wrong. Try again!");
  }
};

  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "business", label: "For Businesses", icon: <Briefcase className="w-5 h-5" /> },
    { id: "creator", label: "For Creators", icon: <Users className="w-5 h-5" /> },
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f9f9fb] flex flex-col items-center justify-center py-20 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 text-center"
      >
        Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E3FCB] to-[#7E65D6]">Connect</span>
      </motion.h2>

      {/* Tab Switcher */}
      <div className="flex gap-4 mb-12 bg-white rounded-full shadow-sm p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#5E3FCB] to-[#7E65D6] text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 md:p-12 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "business" ? (
            <motion.div
              key="business"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Partner with SFC
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have a product idea, digital transformation goal, or enterprise
                project in mind? Let’s collaborate to bring it to life with design,
                strategy, and technology that performs.
              </p>

              <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6 mt-6">
                <input type="hidden" name="access_key" value="00136e9e-424f-4865-aa8c-b5b53baef012" />
  <input type="hidden" name="form_type" value="business_inquiry" />
                <input type="text" name="full_name" placeholder="Full Name" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="email" name="business_email" placeholder="Business Email" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="text"  name="company"  placeholder="Company Name" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="text" name="budget" placeholder="Project Budget" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <textarea name="project_details" placeholder="Tell us about your project..." rows="4" className="md:col-span-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                         <button type="submit" className="cursor-pointer mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#5E3FCB] to-[#7E65D6] text-white font-medium flex items-center gap-2 hover:shadow-lg transition-all mx-auto">
                Send Message <Send className="w-4 h-4" />
              </button>
              </form>
<p className="text-center mt-2 text-gray-700">{result}</p>
     
            </motion.div>
          ) : (
            <motion.div
              key="creator"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Join the Collective
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We’re a community of developers, designers, and creators building
                for businesses — and for the community itself. Join us to
                collaborate, learn, and create impact together.
              </p>

              <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6 mt-6">
                  <input type="hidden" name="access_key" value="00136e9e-424f-4865-aa8c-b5b53baef012" />
  <input type="hidden" name="form_type" value="creator_application" />
                <input type="text" name="full_name" placeholder="Full Name" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="email" name="email" placeholder="Email Address" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="text" name="skills" placeholder="Role / Skillset" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <input type="text" name="portfolio" placeholder="Portfolio or GitHub (optional)" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
                <textarea  name="reason"  placeholder="Tell us why you’d like to join..." rows="4" className="md:col-span-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5E3FCB]" />
              <button  type="submit" className="cursor-pointer mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#5E3FCB] to-[#7E65D6] text-white font-medium flex items-center gap-2 hover:shadow-lg transition-all mx-auto">
                Send Application <Send className="w-4 h-4" />
              </button>
              </form>

             <p className="text-center mt-2 text-gray-700">{result}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
