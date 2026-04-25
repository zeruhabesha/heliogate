import { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
  id,
}: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="container-wide">{children}</div>
  </section>
);

export const SectionEyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow mb-6">{children}</p>
);

export const SectionTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight ${className}`}>
    {children}
  </h2>
);
