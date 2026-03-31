const steps = [
  { num: "01", title: "Discover", desc: "We understand your goals, users, and technical requirements in depth before writing a single line of code." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and architecture planned to perfection — visual and functional clarity first." },
  { num: "03", title: "Build", desc: "Agile development with weekly milestones. Clean code, tested, and optimized for performance." },
  { num: "04", title: "Launch", desc: "Deployment, monitoring, and post-launch support to make sure everything runs smoothly in production." },
];

export default function Process() {
  return (
    <section id="process" className="relative z-[2] px-6 md:px-[60px] py-20 md:py-[100px] max-w-[1300px] mx-auto">
      <div className="reveal text-center max-w-[600px] mx-auto mb-16">
        <span className="inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA] mb-4">
          How We Work
        </span>
        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Our Process
        </h2>
        <p className="text-[#8A95B0] text-base leading-[1.7]">
          From idea to launch — here&apos;s how we turn your vision into a working product.
        </p>
      </div>

      <div className="reveal relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
        {/* Connector line — desktop only */}
        <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#FF6B35] to-[#00D4AA] z-0" />

        {steps.map((s) => (
          <div key={s.num} className="text-center px-4 md:px-5 relative z-[1]">
            <div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB830] flex items-center justify-center font-extrabold text-xl mx-auto mb-5 shadow-[0_0_30px_rgba(255,107,53,0.4)]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.num}
            </div>
            <h4
              className="font-bold text-base mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.title}
            </h4>
            <p className="text-[#8A95B0] text-sm leading-[1.6]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
