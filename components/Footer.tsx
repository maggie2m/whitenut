const services = ["AI Development","Web Development","App Development","ML Consulting"];

const portfolio = [
  { label: "EN Malayalam", href: "https://enmalayalam.com/" },
  { label: "AJ Interiors", href: "https://www.ajinteriors.shop/" },
  { label: "Dog Breed AI", href: "https://huggingface.co/spaces/whitenut/findmypet" },
  { label: "Footfall Counter", href: "https://github.com/sajai-whitenut" },
];

const company = [
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/sajai-whitenut" },
  { label: "Hugging Face", href: "https://huggingface.co/whitenut" },
];

const socials = [
  { label: "GH", href: "https://github.com/sajai-whitenut" },
  { label: "HF", href: "https://huggingface.co/whitenut" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-[#8A95B0] hover:text-[#FF6B35] text-sm transition-colors duration-200 no-underline"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-[#0D1117] px-6 md:px-[60px] pt-14 pb-9 border-t border-white/[0.06]">
      <div className="max-w-[1300px] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-[#FF6B35] to-[#FFB830] bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              ⬡ Whitenut
            </div>
            <p className="text-[#8A95B0] text-sm leading-[1.7] max-w-[280px]">
              Building intelligent digital products — AI, web, and mobile solutions crafted with precision and purpose.
            </p>
            <div className="flex gap-4 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[0.75rem] font-bold text-[#8A95B0] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-200 no-underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5
              className="font-bold text-sm text-[#F0F4FF] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Services
            </h5>
            <ul className="list-none space-y-2.5">
              {services.map((item) => (
                <li key={item}><FooterLink href="#services">{item}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h5
              className="font-bold text-sm text-[#F0F4FF] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Portfolio
            </h5>
            <ul className="list-none space-y-2.5">
              {portfolio.map((item) => (
                <li key={item.label}><FooterLink href={item.href}>{item.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5
              className="font-bold text-sm text-[#F0F4FF] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Company
            </h5>
            <ul className="list-none space-y-2.5">
              {company.map((item) => (
                <li key={item.label}><FooterLink href={item.href}>{item.label}</FooterLink></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[#8A95B0] text-xs">
          <span>Built with ❤️ in India</span>
          <span>© {new Date().getFullYear()} Whitenut. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
