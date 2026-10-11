import React from "react";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Timeline from "../components/Timeline";
import Profile from "../assets/images/profile.png";
import { FiGlobe, FiPenTool, FiLayers } from "react-icons/fi";

const Counter = ({
  endValue,
  duration = 2000,
}: {
  endValue: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  const target = parseInt(endValue.replace(/\D/g, ""));
  const suffix = endValue.replace(/[0-9]/g, "");

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { number: "8+", label: "Years Of Experience" },
    { number: "1k+", label: "Complete Projects" },
    { number: "90+", label: "Client Satisfactions" },
    { number: "20+", label: "Cup of coffee" },
  ];

  return (
    <div className="w-full py-15">
      <section className="bg-[#0b0a1a] text-[#bfbfbf] py-20 px-10">
        <h1 className="text-7xl md:text-[70px] font-medium tracking-tight mb-12">
          About me
        </h1>

        <p className="text-[#bfbfbf] text-xl md:text-xl  leading-relaxed mb-10 px-20">
          With over 12 years of dedicated focus on designing products that
          achieve business goals, I <br /> have established myself as a trusted
          professional in the industry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-40 mt-1">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col ">
              <span className="text-5xl font-semibold">
                <Counter endValue={stat.number} />
              </span>
              <span className="text-gray-500 uppercase tracking-tighter text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white px-6 md:px-16 lg:px-14 py-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-12 lg:gap-16 items-start">
          <div className="w-full h-[520px] md:h-[600px] overflow-hidden">
            <img
              src={Profile}
              alt="Stefany"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full">
            <h2 className="mt-25 text-3xl md:text-4xl sm:text-[58px] leading-[1.1] tracking-tight text-[#bfbfbf]">
              A Passionate <span className="text-[#C6FF00]">Web Designer</span>{" "}
              Turning <br />
              <span className="text-[#C6FF00]">Ideas</span> Into Visually
              Stunning, User- <br /> Friendly Websites.
            </h2>

            <div className="mt-10 space-y-6 text-white/60 text-base md:text-sm leading-relaxed">
              <p>
                Hello! I'm Stefany, a self-taught & award-winning Digital
                Designer & Developer with over fifteen years of work experience.
                I started in my children's room and got pro at renowned digital
                nexum AG agencies.
              </p>

              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure latin words, consectetur, from a Lorem Ipsum
                passage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Timeline />

      <section className="bg-[#] text-white px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl tracking-tighter mb-6 text-[#acacac]">
              Services
            </h2>
            <p className="text-[#acacac]  text-lg italic font-light leading-relaxed px-10">
              "My Services Pave the Way for Exceptional Experiences, Where
              Quality and Commitment <br /> Define Every Interaction."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#070707] p-10 rounded-[20px] border border-white/5 hover:border-[#C6FF00] transition-all">
              <FiGlobe className="text-[#C6FF00] text-4xl mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-[#acacac]">
                Brand Identity Design
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                bionik gives you the block & kits you need to create a true
                website within minutes.
              </p>
            </div>

            <div className="bg-[#070707] p-10 rounded-[20px] border border-white/5 hover:border-[#C6FF00] transition-all">
              <FiPenTool className="text-[#C6FF00] text-4xl mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-[#acacac]">
                Website Design
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                boinik gives you the block & kits you need to create a true
                websites within minutes.
              </p>
            </div>

            <div className="bg-[#070707] p-10 rounded-[20px] border border-white/5 hover:border-[#C6FF00] transition-all">
              <FiLayers className="text-[#C6FF00] text-4xl mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-[#acacac]">
                Application Design
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                boinik gives you the block & kits you need to create a true
                websites within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;
