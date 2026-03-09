export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-black to-[#050507] border-t border-white/[0.07] px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="font-mono text-[0.62rem] tracking-[0.07em] text-white/30">
        © 2025 Pedro Isaac · Built with care.
      </p>

      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#6effa0] animate-pulse"
          style={{ boxShadow: "0 0 5px #6effa0", animationDuration: "2.5s" }}
        />
        <span className="font-mono text-[0.62rem] tracking-[0.08em] text-[rgba(110,255,140,0.65)]">
          Open to internships
        </span>
      </div>

      <p className="font-mono text-[0.65rem] tracking-[0.1em] text-white/30">
        PI.dev
      </p>
    </footer>
  );
}
