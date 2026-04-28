import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
const architecture = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80";
const identityPartners = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80";
const executionDashboard = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";
const topo = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80";
const room = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80";
import { impactMetrics, values } from "@/lib/siteContent";
import { localizeMetric, localizeValue } from "@/lib/siteI18n";
import { ArrowRight, Compass, Target } from "lucide-react";

const Platform = () => {
  const { t, lang } = useI18n();
  const copy = {
    en: {
      platform: "Platform Overview",
      identity: "Identity",
      mission: "Mission",
      vision: "Vision",
      missionBody: "Enable structured and executable cross-border transactions through disciplined validation, alignment, and coordination.",
      visionBody: "Create sustainable cross-border trade corridors that connect real operators, reliable capital, and development-aligned opportunity.",
      values: "Values",
      valuesTitle: "How HelioGate interacts with every mandate.",
      valuesLead: "The platform aligns private-sector execution with national development agendas by prioritizing integrity, sustainability, safety, community partnership, innovation, and operational excellence.",
      approach: "Approach",
      discipline: "Discipline",
      applied: "APPLIED",
      impact: "Impact indicators",
      engagement: "Engagement",
      cta: "Build with a structured execution platform.",
      stats: [
        { v: "EU - MEA - APAC", l: "Operating reach" },
        { v: "Direct", l: "Counterparty model" },
        { v: "Selective", l: "Engagement basis" },
      ],
    },
    fr: {
      platform: "Vue d'ensemble de la plateforme",
      identity: "Identite",
      mission: "Mission",
      vision: "Vision",
      missionBody: "Permettre des transactions transfrontalieres structurees et executables grace a la validation, l'alignement et la coordination.",
      visionBody: "Creer des corridors commerciaux durables reliant operateurs reels, capital fiable et opportunites alignees sur le developpement.",
      values: "Valeurs",
      valuesTitle: "Comment HelioGate agit dans chaque mandat.",
      valuesLead: "La plateforme aligne l'execution privee avec les agendas de developpement en priorisant integrite, durabilite, securite, partenariat communautaire, innovation et excellence.",
      approach: "Approche",
      discipline: "Discipline",
      applied: "APPLIQUE",
      impact: "Indicateurs d'impact",
      engagement: "Engagement",
      cta: "Construire avec une plateforme d'execution structuree.",
      stats: [
        { v: "EU - MEA - APAC", l: "Portee operationnelle" },
        { v: "Direct", l: "Modele de contrepartie" },
        { v: "Selectif", l: "Base d'engagement" },
      ],
    },
    zh: {
      platform: "平台概览",
      identity: "身份",
      mission: "使命",
      vision: "愿景",
      missionBody: "通过严格验证、对齐和协调，实现结构化且可执行的跨境交易。",
      visionBody: "创建可持续跨境贸易走廊，连接真实运营方、可靠资本和发展导向机会。",
      values: "价值观",
      valuesTitle: "HelioGate如何处理每一项授权。",
      valuesLead: "平台通过诚信、可持续、安全、社区伙伴关系、创新和卓越运营，使私营部门执行与发展议程保持一致。",
      approach: "方法",
      discipline: "纪律",
      applied: "已应用",
      impact: "影响指标",
      engagement: "合作",
      cta: "与结构化执行平台一起建设。",
      stats: [
        { v: "EU - MEA - APAC", l: "运营覆盖" },
        { v: "直接", l: "交易方模式" },
        { v: "选择性", l: "合作基础" },
      ],
    },
    ar: {
      platform: "نظرة عامة على المنصة",
      identity: "الهوية",
      mission: "المهمة",
      vision: "الرؤية",
      missionBody: "تمكين معاملات عابرة للحدود منظمة وقابلة للتنفيذ عبر التحقق والمواءمة والتنسيق.",
      visionBody: "إنشاء ممرات تجارة عابرة للحدود مستدامة تربط المشغلين الحقيقيين ورأس المال الموثوق والفرص المتوافقة مع التنمية.",
      values: "القيم",
      valuesTitle: "كيف تتعامل HelioGate مع كل تفويض.",
      valuesLead: "توائم المنصة التنفيذ الخاص مع أجندات التنمية عبر النزاهة والاستدامة والسلامة والشراكة المجتمعية والابتكار والتميز.",
      approach: "النهج",
      discipline: "الانضباط",
      applied: "مطبق",
      impact: "مؤشرات الأثر",
      engagement: "التواصل",
      cta: "ابن مع منصة تنفيذ منظمة.",
      stats: [
        { v: "EU - MEA - APAC", l: "نطاق التشغيل" },
        { v: "مباشر", l: "نموذج الأطراف" },
        { v: "انتقائي", l: "أساس التواصل" },
      ],
    },
  }[lang];
  const localizedValues = values.map((value, index) => localizeValue(value, index, lang));
  const localizedMetrics = impactMetrics.map((metric, index) => localizeMetric(metric, index, lang));

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
          style={{ backgroundImage: `url(${architecture})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">- {copy.platform}</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("plat.title")}
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <SectionEyebrow>01 - {copy.identity}</SectionEyebrow>
            <SectionTitle>{t("plat.who.t")}</SectionTitle>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={identityPartners} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 md:pt-2">
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.25] tracking-tight">{t("plat.who.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("plat.who.p2")}</p>
            <div className="pt-8 mt-8 border-t border-hairline grid grid-cols-3 gap-px bg-hairline border border-hairline">
              {copy.stats.map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <p className="font-serif-display text-xl">{s.v}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="img-frame aspect-[21/8] border border-hairline">
              <img src={executionDashboard} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-foreground">{copy.approach}</span>
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-signal">{copy.applied}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>02 - {copy.mission}</SectionEyebrow>
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
        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
          <div className="bg-background p-8 md:p-10">
            <Target className="mb-8 h-6 w-6 text-signal" />
            <p className="eyebrow mb-4">{copy.mission}</p>
            <p className="font-serif-display text-3xl leading-tight">{copy.missionBody}</p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <Compass className="mb-8 h-6 w-6 text-signal" />
            <p className="eyebrow mb-4">{copy.vision}</p>
            <p className="font-serif-display text-3xl leading-tight">{copy.visionBody}</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <SectionEyebrow>{copy.values}</SectionEyebrow>
            <SectionTitle>{copy.valuesTitle}</SectionTitle>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{copy.valuesLead}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {localizedValues.map((value) => (
            <div key={value.title} className="bg-background p-7">
              <p className="font-serif-display text-2xl">{value.title}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <SectionEyebrow>03 - {copy.approach}</SectionEyebrow>
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
            <SectionEyebrow>04 - {copy.discipline}</SectionEyebrow>
            <SectionTitle>{t("plat.risk.t")}</SectionTitle>
            <div className="mt-10 img-frame aspect-[16/11]">
              <img src={topo} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("plat.risk.lead")}</p>
            <ul>
              {["l1", "l2", "l3", "l4"].map((k, i) => (
                <li key={k} className="flex items-baseline gap-5 py-5 border-b border-hairline group hover:pl-3 transition-all">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i + 1}</span>
                  <span className="font-serif-display text-xl flex-1">{t(`plat.risk.${k}`)}</span>
                  <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity font-mono-tag text-[10px]">
                    {copy.applied}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionEyebrow>{copy.impact}</SectionEyebrow>
        <div className="grid md:grid-cols-4 gap-px bg-hairline border border-hairline mt-6">
          {localizedMetrics.map((metric) => (
            <div key={metric.label} className="bg-background p-7">
              <p className="font-serif-display text-4xl">{metric.value}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative border-t border-hairline py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={room} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="relative container-wide text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-6">- {copy.engagement}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[1.05]">{copy.cta}</h2>
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
