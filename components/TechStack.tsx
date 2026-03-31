const techItems = [
  "🐍 Python","🧠 TensorFlow","⚛️ React","🌀 Next.js","📱 Flutter",
  "🔥 Firebase","☁️ Google Cloud","🤗 Hugging Face","👁️ OpenCV",
  "🚀 FastAPI","🐳 Docker","🔗 GitHub Actions","🎨 Gradio","📊 PyTorch",
];

export default function TechStack() {
  const items = [...techItems, ...techItems];
  return (
    <div className="relative z-[2] py-5">
      <div className="text-center mb-8">
        <span className="inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA]">
          Technology Stack
        </span>
      </div>

      <div className="relative overflow-hidden py-10">
        {/* Fade masks */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#06080F] to-transparent z-[2] pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#06080F] to-transparent z-[2] pointer-events-none" />

        <div className="animate-marquee flex gap-5 w-max">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#161B27] border border-white/[0.07] px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap flex items-center gap-2.5 text-[#F0F4FF]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
