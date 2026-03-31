"use client";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden z-[1]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,8,15,0.3)_0%,rgba(6,8,15,0.85)_100%)] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-[860px] px-6">
        {/* Badge */}
        <div className="anim-badge inline-flex items-center gap-2 bg-[#FF6B35]/12 border border-[#FF6B35]/30 px-[18px] py-1.5 rounded-full text-xs text-[#FF6B35] font-semibold tracking-[1px] uppercase mb-7">
          <span className="animate-pulse-dot w-[7px] h-[7px] bg-[#FF6B35] rounded-full inline-block" />
          Digital Solutions &amp; Services
        </div>

        {/* Title */}
        <h1
          className="anim-title font-extrabold leading-none tracking-[-2px] mb-6"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          <span className="text-[#F0F4FF]">Building the Future</span>
          <br />
          <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFB830] to-[#00D4AA] bg-clip-text text-transparent">
            with Intelligence
          </span>
        </h1>

        {/* Sub */}
        <p className="anim-sub text-base md:text-lg text-[#8A95B0] leading-[1.7] max-w-[560px] mx-auto mb-10">
          We craft AI systems, websites, and apps that don&apos;t just work — they think, adapt, and grow with your business.
        </p>

        {/* Buttons */}
        <div className="anim-btns flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("ai")}
            className="bg-gradient-to-br from-[#FF6B35] to-[#FFB830] text-white font-bold px-9 py-4 rounded-full text-base border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Explore Portfolio
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-transparent border border-white/20 text-[#F0F4FF] font-semibold px-9 py-4 rounded-full text-base cursor-pointer transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA]/8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-bounce-scroll absolute bottom-9 left-1/2 z-[2] flex flex-col items-center gap-2 text-[#8A95B0] text-[0.75rem] tracking-[2px] uppercase">
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-[#8A95B0] to-transparent" />
      </div>
    </div>
  );
}
