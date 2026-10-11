const LogoSlider = () => {
  const logos = [
    "Walmart",
    "LinkedIn",
    "Google",
    "Slack",
    "Amazon",
  ];

  return (
    <section className="bg-[#0b0a1a] py-20 border-t border-white/5 overflow-hidden">

      <h2 className="text-center text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-white/60 mb-14 font-medium">
        Company I Worked With
      </h2>

      <div className="relative w-full overflow-hidden">

        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0b0a1a] to-transparent z-10"></div>

        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0b0a1a] to-transparent z-10"></div>

        <div className="flex w-max animate-scroll items-center gap-20 md:gap-32">

          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="text-white/30 text-3xl md:text-5xl font-semibold whitespace-nowrap hover:text-white transition duration-300 cursor-pointer"
            >
              {logo}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LogoSlider;