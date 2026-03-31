"use client";

import dynamic from "next/dynamic";
import { useScrollReveal } from "@/components/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Divider from "@/components/Divider";
import AIPortfolio from "@/components/AIPortfolio";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), { ssr: false });

export default function Home() {
  useScrollReveal();
  return (
    <>
      <ParticleCanvas />

      {/* Ambient glow rings */}
      <div className="fixed top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full opacity-[0.06] pointer-events-none z-0" style={{ background: "#FF6B35", filter: "blur(100px)" }} />
      <div className="fixed bottom-[20%] left-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none z-0" style={{ background: "#00D4AA", filter: "blur(100px)" }} />

      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Divider />
      <AIPortfolio />
      <Divider />
      <TechStack />
      <Divider />
      <Process />
      <Divider />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
