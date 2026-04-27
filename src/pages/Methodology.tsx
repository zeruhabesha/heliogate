import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { executionSteps } from "@/lib/siteContent";
import { localizeExecutionStep, siteUi } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight, ShieldCheck } from "lucide-react";

const world = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80";
const validationCore = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80";
const mineSignal = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80";
const logisticsReview = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";

const Methodology = () => {
  const { lang } = useI18n();
  const copy = siteUi(lang);
  const localizedSteps = executionSteps.map((step, index) => localizeExecutionStep(step, index, lang));
  const controls = {
    en: ["Supplier validation", "Buyer readiness", "Regulatory navigation", "Documentation integrity"],
    fr: ["Validation fournisseur", "Preparation acheteur", "Navigation reglementaire", "Integrite documentaire"],
    zh: ["供应方验证", "买方准备度", "监管导航", "文件完整性"],
    ar: ["التحقق من المورد", "جاهزية المشتري", "التنقل التنظيمي", "سلامة الوثائق"],
  }[lang];

  return (
    <Layout>
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
        style={{ backgroundImage: `url(${world})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
      </div>
      <div className="relative container-wide">
        <p className="eyebrow mb-6">{copy.methodEyebrow}</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          {copy.methodTitle}
        </h1>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-4">
          <SectionEyebrow>{copy.methodStage}</SectionEyebrow>
          <SectionTitle>{copy.methodStageTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {copy.methodLead}
          </p>
        </div>
      </div>
      <div className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="img-frame aspect-[16/9] border border-hairline">
          <img src={validationCore} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
        </div>
        <div className="img-frame aspect-[16/9] border border-hairline">
          <img src={mineSignal} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
        </div>
        <div className="img-frame aspect-[16/9] border border-hairline">
          <img src={logisticsReview} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-px border border-hairline bg-hairline">
        {localizedSteps.map((step, index) => (
          <div key={step.title} className="bg-background p-7 md:p-8 group hover:bg-card transition-colors">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono-tag text-[10px] text-muted-foreground">0{index + 1} / 06</span>
              <ShieldCheck className="h-4 w-4 text-muted-foreground group-hover:text-signal" />
            </div>
            <p className="font-serif-display text-2xl leading-tight">{step.title}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-hairline">
      <div className="grid md:grid-cols-4 gap-px bg-hairline border border-hairline">
        {controls.map((item) => (
          <div key={item} className="bg-background p-7">
            <p className="font-serif-display text-2xl leading-tight">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/services" className="link-underline">
          {copy.services}
          <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
        </Link>
      </div>
    </Section>
  </Layout>
  );
};

export default Methodology;
