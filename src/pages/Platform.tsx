import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import architecture from "@/assets/platform-architecture.jpg";
import topo from "@/assets/intel-topo.jpg";
import room from "@/assets/engage-room.jpg";
import { ArrowRight } from "lucide-react";

const Platform = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={architecture} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">— Platform Overview</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("plat.title")}
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <SectionEyebrow>01 — Identity</SectionEyebrow>
            <SectionTitle>{t("plat.who.t")}</SectionTitle>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={architecture} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 md:pt-2">
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.25] tracking-tight">{t("plat.who.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("plat.who.p2")}</p>
            <div className="pt-8 mt-8 border-t border-hairline grid grid-cols-3 gap-px bg-hairline border border-hairline">
              {[
                { v: "EU · MEA · APAC", l: "Operating reach" },
                { v: "Direct", l: "Counterparty model" },
                { v: "Selective", l: "Engagement basis" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <p className="font-serif-display text-xl">{s.v}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>02 — Mission</SectionEyebrow>
            <SectionTitle>{t("plat.mission.t")}</SectionTitle>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.25] tracking-tight max-w-3xl">
              {t("plat.mission.p")}
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <SectionEyebrow>03 — Approach</SectionEyebrow>
            <SectionTitle>{t("plat.app.t")}</SectionTitle>
          </div>
          <div className="md:col-span-8 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("plat.app.lead")}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background p-10 group hover:bg-card transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tag text-[10px] text-muted-foreground">0{i} / 03</span>
                <span className="w-6 h-px bg-foreground group-hover:bg-signal transition-colors" />
              </div>
              <p className="font-serif-display text-3xl mb-4 tracking-tight">{t(`plat.app.${i}.t`)}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`plat.app.${i}.d`)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <SectionEyebrow>04 — Discipline</SectionEyebrow>
            <SectionTitle>{t("plat.risk.t")}</SectionTitle>
            <div className="mt-10 img-frame aspect-[16/11]">
              <img src={topo} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("plat.risk.lead")}</p>
            <ul>
              {["l1", "l2", "l3", "l4"].map((k, i) => (
                <li
                  key={k}
                  className="flex items-baseline gap-5 py-5 border-b border-hairline group hover:pl-3 transition-all"
                >
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i + 1}</span>
                  <span className="font-serif-display text-xl flex-1">{t(`plat.risk.${k}`)}</span>
                  <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity font-mono-tag text-[10px]">
                    APPLIED
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="relative border-t border-hairline py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={room} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="relative container-wide text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-6">— Engagement</p>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
            Build with a structured execution platform.
          </h2>
          <Link to="/engage" className="btn-primary mt-10">
            <span>{t("nav.cta")}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
