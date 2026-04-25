import { ReactNode } from "react";

export const Marquee = ({ items }: { items: string[] }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-hairline py-6 marquee-mask">
      <div className="flex marquee-track whitespace-nowrap gap-16">
        {doubled.map((it, i) => (
          <span key={i} className="font-mono-tag text-[11px] uppercase tracking-[0.28em] text-muted-foreground inline-flex items-center gap-16">
            {it}
            <span className="w-1 h-1 bg-foreground/40 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};

export const Stat = ({ value, label, sub }: { value: string; label: string; sub?: ReactNode }) => (
  <div className="flex flex-col gap-3">
    <p className="font-serif-display text-5xl md:text-6xl tracking-tight leading-none">{value}</p>
    <p className="eyebrow">{label}</p>
    {sub && <p className="text-xs text-muted-foreground leading-relaxed max-w-[20ch]">{sub}</p>}
  </div>
);
