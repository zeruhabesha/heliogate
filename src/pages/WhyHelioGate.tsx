import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { differentiators } from "@/lib/differentiators";
import world from "@/assets/world-corridors.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const WhyHelioGate = () => (
  <Layout>
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
        style={{ backgroundImage: `url(${world})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative container-wide">
        <p className="eyebrow mb-6">06 - Differentiation</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          Why HelioGate
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A structured operating model for counterparties who need clarity before capital, logistics, and execution commitments are introduced.
        </p>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionEyebrow>Decision logic</SectionEyebrow>
          <SectionTitle>Five reasons the model is different.</SectionTitle>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-hairline">
            {differentiators.map((item) => (
              <Link
                key={item.slug}
                to={`/why-heliogate/${item.slug}`}
                className="group grid md:grid-cols-12 gap-5 py-7 border-b border-hairline hover:bg-card/50 transition-colors"
              >
                <span className="md:col-span-1 font-mono-tag text-[10px] text-muted-foreground">{item.index}</span>
                <div className="md:col-span-10">
                  <p className="font-serif-display text-2xl md:text-3xl leading-tight tracking-tight">{item.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">{item.short}</p>
                </div>
                <span className="md:col-span-1 flex md:justify-end text-muted-foreground group-hover:text-foreground">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section className="border-t border-hairline">
      <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
        {[
          { value: "Validated", label: "Before capital conversations deepen" },
          { value: "Controlled", label: "No open deal circulation" },
          { value: "Corridor-led", label: "Built around executable routes" },
        ].map((item) => (
          <div key={item.label} className="bg-background p-8 md:p-10">
            <p className="font-serif-display text-3xl md:text-4xl">{item.value}</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-hairline text-center">
      <p className="eyebrow mb-6">Engagement</p>
      <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
        Discuss a qualified execution path.
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <Link to="/engage" className="btn-primary group">
          <span>Request Engagement</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
        <Link to="/platform" className="btn-ghost">
          Platform
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default WhyHelioGate;
