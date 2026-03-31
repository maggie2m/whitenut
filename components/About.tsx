const cards = [
  { emoji: "🎯", title: "Our Mission", text: "To make cutting-edge AI and digital technology accessible, affordable, and impactful for every business." },
  { emoji: "🚀", title: "Our Vision", text: "To become a globally recognised AI-first product studio built from the ground up in India." },
  { emoji: "🤝", title: "Our Approach", text: "We listen first, build lean, and iterate fast — always keeping your goals at the centre of every decision." },
  { emoji: "💡", title: "Why Us", text: "Small team, big results. You get direct access to the people building your product — no middlemen, no fluff." },
];

export default function About() {
  return (
    <section id="about" className="relative z-[2] px-6 md:px-[60px] py-20 md:py-[100px] max-w-[1300px] mx-auto">
      <div className="reveal">
        <span className="inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA] mb-4">
          About Us
        </span>
        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-12"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Who We Are
        </h2>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-5">
          <p className="text-[#8A95B0] leading-[1.9] text-base">
            Whitenut is a young, ambitious digital solutions company based in India, focused on building intelligent and beautiful technology products. We work at the intersection of AI, web, and mobile — turning complex problems into simple, powerful solutions.
          </p>
          <p className="text-[#8A95B0] leading-[1.9] text-base">
            We are a freshly launched startup with a clear focus — building smart, purposeful technology. From our very first project, we&apos;ve been committed to quality over quantity, and that mindset drives everything we do.
          </p>
          <p className="text-[#8A95B0] leading-[1.9] text-base">
            We believe great technology should be accessible to every business — whether you&apos;re a startup finding your footing or an established brand looking to evolve. We&apos;re not just a service provider; we&apos;re a long-term technology partner.
          </p>
        </div>

        {/* Cards 2x2 */}
        <div className="grid grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-[#161B27] border border-white/[0.06] rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h4
                className="font-bold mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {c.title}
              </h4>
              <p className="text-[#8A95B0] text-sm leading-[1.6]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
