import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FiX } from "react-icons/fi";
import img1 from "../assets/images/p1.png";
import img2 from "../assets/images/p2.png";
import img3 from "../assets/images/p3.png";
import img4 from "../assets/images/p4.png";
import img5 from "../assets/images/p5.png";

  const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#0b0a1a] px-10 md:px-20 py-24">
      <div className="absolute left-10 top-10 z-0">
        <p className="text-white/40 text-sm italic font-light -rotate-12 mb-1">Some recent work</p>
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/40 fill-none stroke-current opacity-50 -rotate-45">
          <path d="M5 5C5 5 25 5 25 25M25 25L15 25M25 25L25 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ProjectCard image={img1} title="Branding" description="Glasses of Cocktail" heightClass="h-[500px]" onClick={() => setSelectedImg(img1)} />
        <ProjectCard image={img2} title="Mockup" description="A Branch with Flowers" heightClass="h-[500px]" onClick={() => setSelectedImg(img2)} />
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-5">
        <ProjectCard image={img3} title="Video" description="Orange Rose Flower" heightClass="h-[350px]" onClick={() => setSelectedImg(img3)} />
        <ProjectCard image={img4} title="Branding" description="Green Plant on a Desk" heightClass="h-[350px]" onClick={() => setSelectedImg(img4)} />
        <ProjectCard image={img5} title="Mockup" description="Orange Rose Flower" heightClass="h-[350px]" onClick={() => setSelectedImg(img5)} />
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-4xl hover:text-[#C6FF00] transition">
            <FiX />
          </button>

          <img 
            src={selectedImg} 
            alt="Project Popout" 
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-in zoom-in duration-300" 
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
