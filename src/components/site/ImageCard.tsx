import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const ImageCard = ({
  image,
  index,
  eyebrow,
  title,
  body,
  to,
  cta = "Explore",
  tall,
}: {
  image: string;
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  to: string;
  cta?: string;
  tall?: boolean;
}) => (
  <Link to={to} className="group block tilt-card">
    <div className={`img-frame ${tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
      <img src={image} alt="" loading="lazy" className="w-full h-full object-cover opacity-70 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground/80">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
    </div>
    <div className="p-7 flex items-start gap-6 justify-between">
      <div className="flex-1">
        <p className="font-serif-display text-2xl md:text-3xl leading-tight tracking-tight mb-3">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
      <span className="shrink-0 inline-flex items-center gap-2 font-mono-tag text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground transition-colors">
        {cta}
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </div>
  </Link>
);
