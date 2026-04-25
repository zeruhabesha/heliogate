import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { Marquee, Stat } from "@/components/site/Marquee";
import { ImageCard } from "@/components/site/ImageCard";
import { useI18n } from "@/i18n/I18nProvider";
import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import mining from "@/assets/sector-mining.jpg";
import trade from "@/assets/sector-trade.jpg";
import infra from "@/assets/sector-infrastructure.jpg";
import topo from "@/assets/intel-topo.jpg";
import mineral from "@/assets/detail-mineral.jpg";
import world from "@/assets/world-corridors.jpg";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { differentiators } from "@/lib/differentiators";

const Index = () => {
  const { t } = useI18n();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-spot)" }} />
        </div>

        <div className="relative container-wide pb-20 md:pb-28 pt-32 w-full">
          <div className="max-w-5xl">
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="signal-dot" />
              <p className="eyebrow text-foreground">{t("hero.eyebrow")}</p>
            </div>
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.96] tracking-tight reveal reveal-delay-1">
              {t("hero.headline.1")}
              <br />
              <span className="text-muted-foreground">{t("hero.headline.2")}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed reveal reveal-delay-2">
              {t("hero.sub")}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5 reveal reveal-delay-3">
              <Link to="/engage" className="btn-primary group">
                <span>{t("hero.cta.1")}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link to="/corridors" className="btn-ghost group">
                {t("hero.cta.2")}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <p className="mt-10 eyebrow reveal reveal-delay-4">— {t("hero.note")}</p>
          </div>

          {/* Hero metrics rail */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border-t border-hairline reveal reveal-delay-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-background/60 backdrop-blur-sm p-6 md:p-8">
                <p className="font-serif-display text-3xl md:text-4xl">{t(`hero.metric.${i}.v`)}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  {t(`hero.metric.${i}.l`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-muted-foreground">
            <ArrowDown className="w-3.5 h-3.5 float-slow" />
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em]">{t("hero.scroll")}</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={[1, 2, 3, 4, 5, 6, 7].map((i) => t(`marquee.${i}`))} />

      {/* INTRO */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>{t("intro.eyebrow")}</SectionEyebrow>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-serif-display text-3xl md:text-4xl leading-[1.2] tracking-tight">{t("intro.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t("intro.p2")}</p>
            <div className="pt-6 border-t border-hairline space-y-1">
              <p className="font-serif-display text-2xl text-muted-foreground">{t("intro.focus.1")}</p>
              <p className="font-serif-display text-2xl">{t("intro.focus.2")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO + image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <SectionEyebrow>{t("what.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("what.title")}</SectionTitle>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-md">{t("what.lead")}</p>
            <div className="mt-10 img-frame aspect-[4/5] hidden md:block">
              <img src={mineral} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="md:col-span-7 grid gap-px bg-hairline border border-hairline">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i} / 04</span>
                  <span className="w-6 h-px bg-foreground/40 group-hover:bg-signal transition-colors" />
                </div>
                <p className="font-serif-display text-3xl md:text-4xl mb-3 tracking-tight">{t(`what.b${i}.t`)}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{t(`what.b${i}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted-foreground italic max-w-2xl">{t("what.foot")}</p>
      </Section>

      {/* SECTORS PREVIEW */}
      <Section className="border-t border-hairline">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <SectionEyebrow>{t("sec.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("sec.title")}</SectionTitle>
          </div>
          <Link to="/sectors" className="link-underline">
            {t("nav.sectors")}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">{t("sec.lead")}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <ImageCard
            image={mining}
            index="01 / Mining"
            eyebrow="Active"
            title={t("sec.mining.t")}
            body={t("sec.mining.d")}
            to="/sectors"
            cta="Sector"
          />
          <ImageCard
            image={trade}
            index="02 / Trade"
            eyebrow="Structuring"
            title={t("sec.trade.t")}
            body={t("sec.trade.d")}
            to="/sectors"
            cta="Sector"
          />
          <ImageCard
            image={infra}
            index="03 / Infrastructure"
            eyebrow="Emerging"
            title={t("sec.infra.t")}
            body={t("sec.infra.d")}
            to="/sectors"
            cta="Sector"
          />
        </div>
      </Section>

      {/* FLOW with corridor map background */}
      <section className="relative border-t border-hairline py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={world} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background" />
        </div>
        <div className="relative container-wide">
          <SectionEyebrow>{t("proc.eyebrow")}</SectionEyebrow>
          <SectionTitle className="max-w-3xl">{t("proc.title")}</SectionTitle>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("proc.lead")}</p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-hairline border border-hairline">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-background/85 backdrop-blur-sm p-7 group hover:bg-card transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i} / 05</span>
                  <span className="w-6 h-px bg-foreground group-hover:bg-signal transition-colors" />
                </div>
                <p className="font-serif-display text-xl mb-3">{t(`flow.s${i}.t`)}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(`flow.s${i}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE SIGNAL with image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{t("active.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("active.title")}</SectionTitle>
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="signal-dot" />
              <span className="eyebrow text-foreground">{t("active.status")}</span>
            </div>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={mining} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground">CORRIDOR · 01</span>
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-signal">SIGNAL · LIVE</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 border-l border-hairline pl-10 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("active.lead")}</p>
            <ul className="space-y-4 mb-10">
              {["l1", "l2", "l3"].map((k, i) => (
                <li key={k} className="flex items-baseline gap-4 pb-4 border-b border-hairline">
                  <span className="font-mono-tag text-[10px] text-muted-foreground w-6">0{i + 1}</span>
                  <span className="text-base">{t(`active.${k}`)}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic mb-10">{t("active.foot")}</p>
            <Link to="/corridors" className="link-underline">
              {t("nav.corridors")}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ARCHITECTURE with side image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <SectionEyebrow>{t("arch.eyebrow")}</SectionEyebrow>
          </div>
          <div className="md:col-span-8">
            <SectionTitle>{t("arch.title")}</SectionTitle>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 img-frame aspect-[4/5]">
            <img src={topo} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="md:col-span-7 border-t border-hairline">
            {[
              { k: "l1", tag: null },
              { k: "l2", tag: null },
              { k: "l3", tag: t("arch.l3.tag") },
              { k: "l4", tag: t("arch.l4.tag") },
            ].map((row, i) => (
              <div
                key={row.k}
                className="grid grid-cols-12 gap-4 py-7 border-b border-hairline group hover:bg-card/40 transition-colors"
              >
                <div className="col-span-1 font-mono-tag text-xs text-muted-foreground">0{i + 1}</div>
                <div className="col-span-11 md:col-span-5">
                  <p className="font-serif-display text-2xl">{t(`arch.${row.k}.t`)}</p>
                  {row.tag && (
                    <span className="inline-block mt-2 font-mono-tag text-[10px] uppercase tracking-[0.18em] text-muted-foreground border border-hairline px-2 py-0.5">
                      {row.tag}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                  {t(`arch.${row.k}.d`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TRUST STRIP */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{t("trust.eyebrow")}</p>
            <SectionTitle>{t("trust.title")}</SectionTitle>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">{t("trust.lead")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
              <Stat value="04" label="Active corridors" />
              <Stat value="12+" label="Jurisdictions" />
              <Stat value="100%" label="Validated" />
              <Stat value="1:1" label="Engagement" />
            </div>
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{t("diff.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("diff.title")}</SectionTitle>
          </div>
          <div className="md:col-span-7">
            <ul>
              {differentiators.map((item) => (
                <li key={item.slug} className="border-b border-hairline">
                  <Link
                    to={`/why-heliogate/${item.slug}`}
                    className="flex items-baseline gap-6 py-6 group hover:pl-3 transition-all duration-300"
                  >
                    <span className="font-mono-tag text-[10px] text-muted-foreground">{item.index}</span>
                    <span className="font-serif-display text-xl md:text-2xl flex-1">{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-signal transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/why-heliogate" className="link-underline mt-8">
              Explore the full model
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-hairline">
        <div className="text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-8">{t("cta.eyebrow")}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] tracking-tight">{t("cta.title")}</h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("cta.lead")}</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link to="/engage" className="btn-primary group">
              <span>{t("cta.btn.1")}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
            <Link to="/engage" className="btn-ghost">
              {t("cta.btn.2")}
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
