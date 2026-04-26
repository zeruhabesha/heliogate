import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import corridor from "@/assets/corridor.jpg";
import corridorVideo from "@/assets/corridor-loop.mp4.asset.json";
import world from "@/assets/world-corridors.jpg";
import mining from "@/assets/sector-mining.jpg";
import trade from "@/assets/sector-trade.jpg";
import infra from "@/assets/sector-infrastructure.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Corridors = () => {
  const { t, lang } = useI18n();
  const copy = {
    en: { intelligence: "Corridor Intelligence", mandate: "Mandate", active: "Active", corridor: "Corridor", signal: "Signal", live: "Live", mining: "Mining", sector: "Sector", status: "Status", qAligned: "Q-aligned", counterparties: "Counterparties", emerging: "Emerging", preActive: "Pre-Active", visibility: "Structured visibility", sectors: "Sectors" },
    fr: { intelligence: "Intelligence de corridor", mandate: "Mandat", active: "Actif", corridor: "Corridor", signal: "Signal", live: "Direct", mining: "Mines", sector: "Secteur", status: "Statut", qAligned: "Qualifie", counterparties: "Contreparties", emerging: "Emergent", preActive: "Pre-actif", visibility: "Visibilite structuree", sectors: "Secteurs" },
    zh: { intelligence: "通道情报", mandate: "授权", active: "活跃", corridor: "通道", signal: "信号", live: "实时", mining: "采矿", sector: "行业", status: "状态", qAligned: "已合格对齐", counterparties: "交易方", emerging: "新兴", preActive: "预活跃", visibility: "结构化可见性", sectors: "行业" },
    ar: { intelligence: "استخبارات الممر", mandate: "التفويض", active: "نشط", corridor: "الممر", signal: "إشارة", live: "مباشر", mining: "التعدين", sector: "القطاع", status: "الحالة", qAligned: "مؤهل", counterparties: "الأطراف", emerging: "ناشئ", preActive: "قبل النشاط", visibility: "رؤية منظمة", sectors: "القطاعات" },
  }[lang];

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <video
            src={corridorVideo.url}
            poster={world}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">- {copy.intelligence}</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("cor.title")}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("cor.sub")}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>{copy.mandate}</SectionEyebrow>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.25] tracking-tight">{t("cor.intro.1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("cor.intro.2")}</p>
          </div>
        </div>
      </Section>

      {/* Active corridor */}
      <Section className="border-t border-hairline">
        <SectionEyebrow>{copy.active}</SectionEyebrow>
        <div className="grid md:grid-cols-12 gap-10 mt-2 items-start">
          <div className="md:col-span-5">
            <SectionTitle>{t("cor.active.title")}</SectionTitle>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="signal-dot" />
                <span className="eyebrow text-foreground">{t("cor.active.status")}</span>
              </div>
              <p className="eyebrow">{t("cor.active.phase")}</p>
            </div>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={corridor} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground">{copy.corridor} - 01</span>
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-signal">{copy.signal} - {copy.live}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 border-l border-hairline pl-10 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("cor.active.lead")}</p>
            <ul className="space-y-0">
              {["l1", "l2", "l3", "l4"].map((k, i) => (
                <li key={k} className="flex items-baseline gap-5 py-5 border-b border-hairline">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i + 1}</span>
                  <span className="text-base">{t(`cor.active.${k}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground italic">{t("cor.active.foot")}</p>

            <div className="mt-10 grid grid-cols-3 gap-px bg-hairline border border-hairline">
              {[
                { v: copy.mining, l: copy.sector },
                { v: copy.active, l: copy.status },
                { v: copy.qAligned, l: copy.counterparties },
              ].map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <p className="font-serif-display text-lg">{s.v}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Future corridors with images */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <SectionEyebrow>{copy.emerging}</SectionEyebrow>
            <SectionTitle>{t("cor.future.title")}</SectionTitle>
          </div>
          <div className="md:col-span-7 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("cor.future.lead")}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: trade, k: "l1", idx: "02" },
            { img: infra, k: "l2", idx: "03" },
            { img: mining, k: "l3", idx: "04" },
          ].map((c) => (
            <div key={c.k} className="tilt-card group">
              <div className="img-frame aspect-[4/3]">
                <img src={c.img} alt="" loading="lazy" className="w-full h-full object-cover opacity-70 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground/90">{copy.corridor} - {c.idx}</span>
                  <span className="font-mono-tag text-[10px] tracking-[0.22em] text-muted-foreground border border-foreground/30 px-2 py-0.5">
                    {copy.preActive}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="font-serif-display text-2xl leading-tight">{t(`cor.future.${c.k}`)}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground italic">{t("cor.future.foot")}</p>
      </Section>

      {/* CTA */}
      <Section className="border-t border-hairline text-center">
        <p className="eyebrow mb-6">- {copy.visibility}</p>
        <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight">{t("cor.cta")}</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link to="/engage" className="btn-primary group">
            <span>{t("nav.cta")}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
          <Link to="/sectors" className="btn-ghost">
            {copy.sectors}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Corridors;
