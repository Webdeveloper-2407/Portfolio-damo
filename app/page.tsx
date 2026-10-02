import type { CSSProperties } from "react";
import mountainBg from "./components/images/mountain-bg.png";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function Home() {
  const shellStyle = {
    "--mountain-bg": `url(${mountainBg.src})`,
  } as CSSProperties;

  return (
    <div className="siteShell" style={shellStyle}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
