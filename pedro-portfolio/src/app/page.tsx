import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/sections/About";
import Tech from "@/sections/Tech";
import Experience from "@/sections/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
