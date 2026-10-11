import { useState } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  heightClass: string;
  onClick: () => void; 
}

const ProjectCard = ({ image, title, description, heightClass, onClick }) => {
  return (
    <div
       onClick={onClick}
      className={`relative group rounded-[32px] overflow-hidden ${heightClass} w-full bg-black cursor-pointer`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:blur-sm"
      />

      <div className="absolute top-6 right-8 z-20">
        <p className="text-[10px] uppercase tracking-widest text-white font-bold rounded-2xl bg-black">
          {title}
        </p>
      </div>

      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-10 bg-black/40">
        <h3 className="text-white text-3xl font-bold tracking-tight">
          {description || "View Project"}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
