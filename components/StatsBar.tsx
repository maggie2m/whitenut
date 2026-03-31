const stats = [
  { num: "10+", label: "Projects Delivered" },
  { num: "2+", label: "AI Models Deployed" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "∞", label: "Lines of Passion" },
];

export default function StatsBar() {
  return (
    <div className="relative z-[2] bg-[#161B27] border-y border-white/[0.06] px-6 md:px-[60px] py-7 flex flex-wrap justify-center gap-8 md:gap-20">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className="font-extrabold text-3xl bg-gradient-to-br from-[#FF6B35] to-[#FFB830] bg-clip-text text-transparent"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {s.num}
          </div>
          <div className="text-xs text-[#8A95B0] mt-1 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
