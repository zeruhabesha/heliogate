import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { differentiators } from "@/lib/differentiators";
import { localizeDifferentiator } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import world from "@/assets/world-corridors.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const copyMap = {
  en: { eyebrow: "Differentiation", title: "Why HelioGate", lead: "A structured operating model for counterparties who need clarity before capital, logistics, and execution commitments are introduced.", logic: "Decision logic", logicTitle: "Five reasons the model is different.", engagement: "Engagement", cta: "Discuss a qualified execution path.", request: "Request Engagement", platform: "Platform" },
  fr: { eyebrow: "Differenciation", title: "Pourquoi HelioGate", lead: "Un modele operationnel structure pour les contreparties qui ont besoin de clarte avant le capital, la logistique et les engagements d'execution.", logic: "Logique de decision", logicTitle: "Cinq raisons qui rendent le modele different.", engagement: "Engagement", cta: "Discuter d'un parcours d'execution qualifie.", request: "Demander un engagement", platform: "Plateforme" },
  zh: { eyebrow: "差异化", title: "为什么选择 HelioGate", lead: "面向交易方的结构化运营模式，在资本、物流和执行承诺进入前提供清晰度。", logic: "决策逻辑", logicTitle: "该模式不同的五个原因。", engagement: "合作", cta: "讨论合格的执行路径。", request: "请求合作", platform: "平台" },
  ar: { eyebrow: "التميّز", title: "لماذا HelioGate", lead: "نموذج تشغيلي منظم للأطراف التي تحتاج وضوحا قبل رأس المال واللوجستيات والتزامات التنفيذ.", logic: "منطق القرار", logicTitle: "خمسة أسباب تجعل النموذج مختلفا.", engagement: "التواصل", cta: "ناقش مسار تنفيذ مؤهلا.", request: "طلب تواصل", platform: "المنصة" },
};

const WhyHelioGate = () => {
  const { lang } = useI18n();
  const copy = copyMap[lang] ?? copyMap.en;
  const localizedDifferentiators = differentiators.map((item) => localizeDifferentiator(item, lang));
  const stats = {
    en: [
      { value: "Validated", label: "Before capital conversations deepen" },
      { value: "Controlled", label: "No open deal circulation" },
      { value: "Corridor-led", label: "Built around executable routes" },
    ],
    fr: [
      { value: "Valide", label: "Avant que les discussions capital s'approfondissent" },
      { value: "Controle", label: "Pas de circulation ouverte des dossiers" },
      { value: "Par corridor", label: "Construit autour de routes executables" },
    ],
    zh: [
      { value: "已验证", label: "在资本对话深化之前" },
      { value: "受控", label: "不公开流转交易" },
      { value: "走廊驱动", label: "围绕可执行路线构建" },
    ],
    ar: [
      { value: "متحقق", label: "قبل تعميق محادثات رأس المال" },
      { value: "منضبط", label: "لا تداول مفتوح للصفقات" },
      { value: "قائم على الممر", label: "مبني حول مسارات قابلة للتنفيذ" },
    ],
  }[lang];

  return (
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
        <p className="eyebrow mb-6">06 - {copy.eyebrow}</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          {copy.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {copy.lead}
        </p>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionEyebrow>{copy.logic}</SectionEyebrow>
          <SectionTitle>{copy.logicTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-hairline">
            {localizedDifferentiators.map((item) => (
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
        {stats.map((item) => (
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
      <p className="eyebrow mb-6">{copy.engagement}</p>
      <h2 className="font-serif-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
        {copy.cta}
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <Link to="/engage" className="btn-primary group">
          <span>{copy.request}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
        <Link to="/platform" className="btn-ghost">
          {copy.platform}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Section>
    </Layout>
  );
};

export default WhyHelioGate;
