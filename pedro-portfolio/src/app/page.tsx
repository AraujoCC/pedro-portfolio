import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/sections/About";
import Tech from "@/sections/Tech";
import Experience from "@/sections/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="relative w-full flex items-center justify-center py-2">
      <div className="w-full max-w-[1100px] mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Tech />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
