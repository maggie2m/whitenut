export default function CTA() {
  return (
    <div
      id="contact"
      className="relative z-[2] bg-[#161B27] border-y border-white/[0.06] text-center overflow-hidden px-6 md:px-[60px] py-20 md:py-[100px]"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.12)_0%,transparent_70%)] pointer-events-none" />

      <span className="relative z-[1] inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA] mb-4">
        Get In Touch
      </span>

      <h2
        className="relative z-[1] font-extrabold tracking-tight mb-4"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
      >
        Ready to Build Something
        <br />
        <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFB830] bg-clip-text text-transparent">
          Extraordinary?
        </span>
      </h2>

      <p className="relative z-[1] text-[#8A95B0] text-base max-w-[480px] mx-auto mb-9">
        Whether it&apos;s an AI model, a web platform, or a mobile app — let&apos;s talk about what we can build together.
      </p>

      <div className="relative z-[1] flex flex-wrap gap-4 justify-center">
        <a
          href="mailto:whitenut.data@gmail.com"
          className="bg-gradient-to-br from-[#FF6B35] to-[#FFB830] text-white font-bold px-8 py-4 rounded-full text-sm md:text-base no-underline inline-block transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          whitenut.data@gmail.com
        </a>
        <a
          href="tel:+919539814897"
          className="bg-transparent border border-white/20 text-[#F0F4FF] font-semibold px-8 py-4 rounded-full text-sm md:text-base no-underline inline-block transition-all duration-200 hover:border-[#00D4AA] hover:bg-[#00D4AA]/8"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          +91 95398 14897
        </a>
      </div>
    </div>
  );
}
