const aiProjects = [
  {
    badge: "Computer Vision",
    badgeColor: "#00D4AA",
    mediaType: "video",
    mediaSrc: "/Aivedio1.mp4",
    title: "Footfall Counter AI",
    desc: "Real-time people counting and movement tracking using deep learning and computer vision. Tracks entry/exit, crowd density, and movement patterns for smart retail and security applications.",
    tags: ["Python", "OpenCV", "TensorFlow", "Object Detection", "YOLOv8"],
  },
  {
    badge: "Image Classification",
    badgeColor: "#FFB830",
    mediaType: "image",
    mediaSrc: "/Aiimage1.jpeg",
    title: "Dog Breed Analyzer AI",
    desc: "Upload any dog photo and get top-5 breed predictions with confidence scores. Trained on 120+ breeds from the ImageNet Dog dataset. Live on Hugging Face Spaces as whitenut/findmypet.",
    tags: ["TensorFlow", "Transfer Learning", "Gradio", "Hugging Face", "CNN"],
  },
];

export default function AIPortfolio() {
  return (
    <section id="ai" className="relative z-[2] px-6 md:px-[60px] py-20 md:py-[100px] max-w-[1300px] mx-auto">
      <div className="reveal">
        <span className="inline-block text-[0.75rem] font-bold tracking-[3px] uppercase text-[#00D4AA] mb-4">
          Portfolio — AI Models
        </span>
        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          AI We&apos;ve Built
        </h2>
        <p className="text-[#8A95B0] text-base leading-[1.7] max-w-[520px] mb-14">
          Intelligent systems that see, count, recognize, and analyze — built on real deep learning.
        </p>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-7">
        {aiProjects.map((p) => (
          <div
            key={p.title}
            className="bg-[#161B27] border border-white/[0.06] rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Media */}
            <div className="relative h-56 md:h-64 bg-gradient-to-br from-[#0D1117] to-[#161B27] overflow-hidden">
              {p.mediaType === "video" ? (
                <video
                  src={p.mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full  h-56 md:h-64 object-cover"
                />
              ) : (
                <img
                  src={p.mediaSrc}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#161B27]" />
              <div
                className="absolute top-4 right-4 bg-[#06080F]/80 border border-white/10 backdrop-blur px-3 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[1px] uppercase"
                style={{ color: p.badgeColor }}
              >
                {p.badge}
              </div>
            </div>

            {/* Body */}
            <div className="px-7 pt-6 pb-7">
              <h3
                className="font-bold text-xl mb-2.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#8A95B0] text-sm leading-[1.6] mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-[#8A95B0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-8 text-center flex flex-wrap gap-4 justify-center">
        <a
          href="https://huggingface.co/spaces/whitenut/findmypet"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#FF6B35] to-[#FFB830] text-white font-bold px-9 py-4 rounded-full text-base no-underline inline-block transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Try Dog Breed AI ↗
        </a>
      
      </div>
    </section>
  );
}