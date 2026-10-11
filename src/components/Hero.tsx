import profile from "../assets/images/profile.png";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

      <div className="w-full max-w-[350px] md:max-w-[400px] h-[380px] md:h-[450px] rounded-[30px] overflow-hidden">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="max-w-2xl text-center lg:text-left">

        <h1 className="text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#bfbfbf]">
          I am product designer, indie maker, and digital nomad living in internet.
        </h1>

        <p className="text-white/50 mt-6 text-base md:text-lg">
          Hi, I'm Stefany I'm a freelance product designer with 12+ years of experience focusing on app interfaces.
        </p>

        <button className="mt-8 bg-[#C6FF00] text-black px-6 md:px-7 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition">
          Download CV
          <FiDownload />
        </button>

      </div>
    </section>
  );
};

export default Hero;