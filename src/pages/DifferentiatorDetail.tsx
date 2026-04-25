import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { differentiators, getDifferentiator } from "@/lib/differentiators";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

const DifferentiatorDetail = () => {
  const { slug } = useParams();
  const item = getDifferentiator(slug);

  if (!item) {
    return <Navigate to="/why-heliogate" replace />;
  }

  const next = differentiators[(differentiators.findIndex((entry) => entry.slug === item.slug) + 1) % differentiators.length];

  return (
    <Layout>
      <section className="relative min-h-[72svh] pt-32 pb-16 md:pt-44 md:pb-24 border-b border-hairline overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 md:bg-fixed"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative container-wide w-full">
          <Link to="/why-heliogate" className="link-underline mb-10">
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            Why HelioGate
          </Link>
          <p className="eyebrow mb-6">{item.index} - Differentiation</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
            {item.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">{item.short}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <SectionEyebrow>What this means</SectionEyebrow>
            <SectionTitle>Practical operating discipline, not positioning.</SectionTitle>
          </div>
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mb-10">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="bg-background p-6">
                  <p className="font-serif-display text-2xl leading-tight">{metric.value}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-hairline">
              {item.proof.map((proof, index) => (
                <div key={proof} className="grid grid-cols-12 gap-5 py-6 border-b border-hairline">
                  <span className="col-span-2 md:col-span-1 font-mono-tag text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>
                  <p className="col-span-10 md:col-span-11 text-lg leading-relaxed">{proof}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <SectionEyebrow>Sequence</SectionEyebrow>
            <SectionTitle>How it is applied.</SectionTitle>
          </div>
          <div className="md:col-span-8 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed">{item.outcome}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {item.process.map((step, index) => (
            <div key={step} className="bg-background p-7 md:p-8 group hover:bg-card transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono-tag text-[10px] text-muted-foreground">0{index + 1} / 04</span>
                <Check className="w-4 h-4 text-muted-foreground group-hover:text-signal transition-colors" />
              </div>
              <p className="font-serif-display text-2xl leading-tight">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Next differentiator</p>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {next.title}
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-wrap md:justify-end gap-4">
            <Link to={`/why-heliogate/${next.slug}`} className="btn-primary group">
              <span>Read Next</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
            <Link to="/engage" className="btn-ghost">
              Engage
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DifferentiatorDetail;
