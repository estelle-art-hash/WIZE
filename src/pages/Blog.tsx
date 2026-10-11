import React from "react";
import CTA from "../components/CTA";
import { div, image } from "framer-motion/client";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      image: blog1,
      date: "POSTED ON AUG 28",
      title: "Create a Landing Page That Performs Great",
      tag: "HELP",
    },
    {
      image: blog2,
      date: "POSTED ON AUG 29",
      title: "Starting and Growing a Career in Web Design",
      tag: "BRANDING",
    },
    {
      image: blog3,
      date: "POSTED ON AUG 29",
      title: "How Can Designers Prepare for the Future?",
      tag: "DESIGN",
    },
  ];

  return (
    <div className="bg-[#070618] min-h-screen text-[#c4c4c4]">
      <section className="px-10 pt-28 pb-44 pb-20 max-w-7xl">
        <h1 className="text-7xl md:text-[80px] md:px-tracking-tighter mb-8">
          Blog
        </h1>
        <p className="text-[#bfbfbf] text-lg md:px-14 leading-relaxed">
          I write about design, productivity, tech and my creative process.
          Subscribe to my newsletter to stay in touch. I sync once a month with
          no spam and ads.
        </p>
      </section>

      <section className="bg-[#070707] px-10 pb-32 flex flex-col gap-24">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-center gap-10 cursor-pointer mb-0"
          >
            <div className="relative w-full md:w-[500px] h-[350px] rounded-[4px] overflow-hidden flex-shrink-0 bg-black">
              <div className="absolute top-6 left-8 z-10 text-[10px] tracking-widest text-white/60 uppercase">
                {post.tag}
              </div>
              <img
                src={post.image}
                className="w-full h-full object-cover transition-all duration-700 group-hover:blur-md group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-6 left-8 z-20 text-[10px] tracking-widest text-white/60 uppercase">
                {post.tag}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="text-white/40 text-[-10px] tracking-[0.2em] font-medium uppercase">
                {post.date}
              </span>
              <h2 className="text-3xl md:text-[44px] leading-[1.1] tracking-tight max-w-[600px]">
                {post.title}
              </h2>
              <button className="mt-4 bg-[#C6FF00] text-black px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                Read more <span className="text-lg ">→</span>
              </button>
            </div>
          </div>
        ))}
      </section>
      <CTA />
    </div>
  );
};

export default Blog;
