import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    year: "2020 - PRESENT",
    title: "BloomHub Technology",
    role: "Application Developer",
    desc: "As a product designer at a leading e-commerce company, I was responsible for designing user interfaces for the company's online shopping platform. I collaborated closely with the company's marketing and development teams to create designs that not only looked great but also drove conversions and increased sales.",
  },
  {
    year: "2018 - 2020",
    title: "Skyward Company Limited",
    role: "Product Designer",
    desc: "At a software startup, I worked as a product designer on a team that was responsible for developing a new mobile app. I was responsible for creating wireframes, designing user interfaces, and conducting user testing to ensure that the app was intuitive and user-friendly. My work helped the company launch a successful app that received positive feedback from users.",
  },
  {
    year: "2012 - 2018",
    title: "Atlas Innovations",
    role: "Senior Developer",
    desc: "As a freelance product designer, I worked with a variety of clients across different industries. I designed packaging for a new food product, created marketing materials for a fashion brand, and developed user interfaces for a healthcare startup. My ability to adapt to different industries and design challenges made me a valuable asset to my clients.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#070707] px-6 md:px-16 lg:px-24 py-24 text-white">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-[#acacac] text-4xl md:text-6xl font-medium tracking-tight">
          Education & Experience
        </h2>
        <p className="text-white/50 mt-6 text-lg">
          Established history of success in design and development, consistently
          delivering valuable insights and driving results.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[20px] top-0 w-[2px] h-full bg-white/10"></div>

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-16 mb-16"
          >
            <div className="absolute left-[12px] top-3 w-4 h-4 rounded-full bg-[#C6FF00] border-4 border-[#0b0a1a]"></div>

            <span className="inline-block mb-4 px-4 py-1 text-xs border border-white/20 rounded-full text-[#C6FF00]">
              {item.year}
            </span>

            <h3 className="text-2xl md:text-3xl text-[#acacac]">{item.title}</h3>

            <p className="text-white/50 mt-2 text-sm">@{item.role}</p>

            <p className="text-white/50 mt-4 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
