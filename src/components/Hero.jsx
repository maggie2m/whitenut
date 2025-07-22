import React from 'react';
import { FaCode, FaMobileAlt, FaGamepad, FaChartLine, FaPalette } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="text-white text-center py-20 px-6 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(220 70% 15%))',
      }}
    >
      <h1 className="text-4xl md:text-7xl font-bold mt-20 max-w-4xl mx-auto">
        Crafting Digital <span className="text-[#ffcc33]">Excellence</span>
      </h1>
      <p className="mt-6 max-w-3xl text-gray-300 mx-auto text-xl md:text-2xl">
        We transform visionary ideas into extraordinary digital experiences through
        cutting-edge software development, innovative design, and strategic technology solutions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button
          className="text-white font-semibold px-6 py-3 rounded hover:shadow-2xl text-lg"
          style={{
            backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))',
          }}
        >
          Start Your Project
        </button>
        <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black text-lg">
          View Our Work
        </button>
      </div>

      {/* Services */}
      <div className="mt-16 flex justify-center flex-wrap gap-10">
        <ServiceItem icon={<FaCode size={28} />} label="Web Development" />
        <ServiceItem icon={<FaMobileAlt size={28} />} label="Mobile Apps" />
        <ServiceItem icon={<FaGamepad size={28} />} label="Game Development" />
        <ServiceItem icon={<FaChartLine size={28} />} label="Analytics" />
        <ServiceItem icon={<FaPalette size={28} />} label="Design" />
      </div>
    </section>
  );
}

function ServiceItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-gray-300  transition-all duration-300">
      <div className="bg-white/10 p-5 rounded-full shadow-lg mb-3 text-[#ffcc33]">{icon}</div>
      <p className="text-sm md:text-base">{label}</p>
    </div>
  );
}
