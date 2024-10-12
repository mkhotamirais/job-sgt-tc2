"use client";

import About from "@/components/about";
import Help from "@/components/help";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Citizens from "@/components/citizens";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen *:font-dm-sans">
      <Hero />
      <About />
      <Projects />
      <Help />
      <Team />
      <Citizens />
      <Partners />
      <Contact />
    </div>
  );
}
