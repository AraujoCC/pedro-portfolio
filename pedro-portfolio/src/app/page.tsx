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
    <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Divider />
      <div className="glass-section"><About /></div>
      <Divider />
      <div className="glass-section"><Tech /></div>
      <Divider />
      <div className="glass-section"><Experience /></div>
      <Divider />
      <div className="glass-section"><Projects /></div>
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}