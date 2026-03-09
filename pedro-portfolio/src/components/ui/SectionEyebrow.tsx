interface SectionEyebrowProps {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[0.58rem] tracking-[0.2em] text-white/30">{number}</span>
      <div className="w-6 h-px bg-white/[0.18]" />
      <span className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-white/30">{label}</span>
    </div>
  );
}
