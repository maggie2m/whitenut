import React from "react";
export default function VisionSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-semibold">
          About{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))",
            }}
          >
            Our Vision
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-lg mx-auto">
          Founded on the belief that technology should elevate human potential,
          we combine artistic vision with technical mastery to create digital
          experiences that inspire and empower.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-semibold mb-2">Our Story</h3>
          <p className="text-gray-500 text-lg">
            What began as a shared passion for creating exceptional digital
            experiences has evolved into a premium software development company
            that serves visionary businesses worldwide.
          </p>
          <p className="mt-5 text-gray-500  text-lg">
            We specialize in crafting bespoke applications, websites, games, and
            business analytics solutions that don't just meet requirements—they
            exceed expectations and set new industry standards.
          </p>
          <div className="flex gap-8 mt-6 text-accent font-bold">
            <div className="text-4xl text-[#FFC105]">
              150+
              <br />
              <span className="text-sm font-normal text-gray-600">
                Projects Delivered
              </span>
            </div>
            <div className="text-4xl text-[#FFC105]">
              98%
              <br />
              <span className="text-sm font-normal text-gray-600">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="relative">
            <div
              className="absolute top-3 left-2 w-full h-5/7 transform rotate-4 rounded-xl z-2"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))",
              }}
            ></div>

            <div className="relative z-10 bg-white p-6 rounded-xl shadow-md border text-gray-700">
              <h3 className="text-xl font-bold mb-2 text-black">Our Mission</h3>
              <p className="mb-4">
                To empower businesses and individuals through innovative
                technology solutions that combine aesthetic excellence with
                functional superiority.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-[#FFC105] text-2xl">•</span>
                  <span>Innovation-driven development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFC105] text-2xl">•</span>
                  <span>Premium quality assurance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFC105] text-2xl">•</span>
                  <span>Client-centric approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
