const services = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "Custom AI models, computer vision systems, NLP pipelines, and intelligent automation. We turn your data into decisions.",
    accentFrom: "#FF6B35",
    accentTo: "#FFB830",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "High-performance, beautifully designed websites and web apps built with modern stacks. Fast, responsive, and scalable.",
    accentFrom: "#00D4AA",
    accentTo: "#0A84FF",
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Cross-platform mobile apps for iOS and Android. Clean UX, robust backend, seamless experience from day one.",
    accentFrom: "#7C3AED",
    accentTo: "#FF2D78",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-[2] px-6 md:px-[60px] py-20 md:py-[100px] max-w-[1300px] mx-auto">
      <div className="reveal">
        <span className="inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA] mb-4">
          What We Do
        </span>
        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Our Core Services
        </h2>
        <p className="text-[#8A95B0] text-base leading-[1.7] max-w-[520px] mb-14">
          From intelligent AI systems to pixel-perfect interfaces — we build end-to-end digital products.
        </p>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative bg-[#161B27] border border-white/[0.06] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 cursor-default"
          >
            {/* Accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
              style={{ background: `linear-gradient(90deg, ${s.accentFrom}, ${s.accentTo})` }}
            />
            <span className="text-4xl mb-5 block">{s.icon}</span>
            <h3
              className="font-bold text-[1.2rem] mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.title}
            </h3>
            <p className="text-[#8A95B0] text-sm leading-[1.6]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
