import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import img1 from "../assets/images/p1.png";
import img2 from "../assets/images/p2.png";
import img3 from "../assets/images/p3.png";
import img4 from "../assets/images/p4.png";
import img5 from "../assets/images/p5.png";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="bg-[#070618] min-h-screen text-[#c4c4c4]">
      <section className="px-10 pt-28 pb-44 pb-20 max-w-7xl">
        <h1 className="text-7xl md:text-[80px] md:px- tracking-tighter mb-8">
          Projects
        </h1>
        <p className="text-[#bfbfbf] text-lg md:px-14 leading-relaxed">
          Check out portfolio of top-notch projects that I've delivered to both
          clients and the <br /> community. I'm more than happy to answer any
          questions you may have about how we can <br /> collaborate to achieve
          your objectives. Feel free to get in touch with me.
        </p>
      </section>

      <section className="relative overflow-hidden bg-[#060516] px-10 md:px-20 py-24">
        <div className="absolute left-10 top-10 z-0">
          <p className="text-white/40 text-sm italic font-light -rotate-12 mb-1">
            Some recent work
          </p>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="text-white/40 fill-none stroke-current opacity-50 -rotate-45"
          >
            <path
              d="M5 5C5 5 25 5 25 25M25 25L15 25M25 25L25 15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            image={img1}
            title="Branding"
            description="Glasses of Cocktail"
            heightClass="h-[500px]"
          />
          <ProjectCard
            image={img2}
            title="Mockup"
            description="A Branch with Flowers"
            heightClass="h-[500px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-5">
          <ProjectCard
            image={img3}
            title="Video"
            description="Orange Rose Flower"
            heightClass="h-[350px]"
          />

          <ProjectCard
            image={img4}
            title="Branding"
            description="Green Plant on a Desk"
            heightClass="h-[350px]"
          />
          <ProjectCard
            image={img5}
            title="Mockup"
            description="Orange Rose Flower"
            heightClass="h-[350px]"
          />
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ProjectPage;
