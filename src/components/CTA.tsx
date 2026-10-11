const CTA = () => {
  return (
    <section className="bg-[#060516] px-4 md:px-10 py-23">

      <div className="bg-[#c4f000] text-black rounded-[20px] py-10 md:py-16 text-center px-4">

        <h2 className="text-xl md:text-5xl lg:text-6xl">
          Are You Ready to kickstart your project?
        </h2>

        <p className="mt-6 text-sm md:text-lg max-w-6xl">
          Reach out and let's make it happen ✨ I'm available for freelance or full-time opportunities to push the <br />boundaries of design and deliver exceptional work.
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
          Let's Talk
        </button>

      </div>

      <p className="mt-10 text-center text-xs text-white/60">
        © Copyright <span className="text-[#c4f000]">Wize</span> All Right Reserved.
      </p>

    </section>
  );
};

export default CTA;