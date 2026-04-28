import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { sectors } from "@/lib/siteContent";
import { localizeSector } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import miningMineralsImage from "@/assets/Mining & Minerals.jpg";

const mineral = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=80";
const sectorImageBySlug: Record<string, string> = {
  "mining-minerals": miningMineralsImage,
  "construction-electromechanical": "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=1600&q=80",
  "ict-telecom-fintech": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  "education-software": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  "facilities-security": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  "management-consulting": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  "fund-management": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  "import-export": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
  "agriculture-agribusiness": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
  "energy-utilities": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
  "hospitality-tourism": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  "health-logistics": "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=1600&q=80",
};

const signalClass = {
  Active: "text-signal",
  Emerging: "text-foreground",
  Future: "text-muted-foreground",
};

const signalLabels = {
  en: { Active: "Active", Emerging: "Emerging", Future: "Future", industries: "Industries", industryTitle: "Active, emerging, and future opportunity signals.", engage: "Engagement", services: "Services" },
  fr: { Active: "Actif", Emerging: "Emergent", Future: "Futur", industries: "Industries", industryTitle: "Signaux d'opportunite actifs, emergents et futurs.", engage: "Engagement", services: "Services" },
  zh: { Active: "活跃", Emerging: "新兴", Future: "未来", industries: "行业", industryTitle: "活跃、新兴和未来机会信号。", engage: "合作", services: "服务" },
  ar: { Active: "نشط", Emerging: "ناشئ", Future: "مستقبلي", industries: "الصناعات", industryTitle: "إشارات فرص نشطة وناشئة ومستقبلية.", engage: "التواصل", services: "الخدمات" },
};

const pageCopy = {
  en: { eyebrow: "08 - Sectors", title: "Sectors", lead: "Three execution domains where HelioGate concentrates structuring capacity.", cta: "Discuss a sector mandate", request: "Request Engagement" },
  fr: { eyebrow: "08 - Secteurs", title: "Secteurs", lead: "Domaines d'execution ou HelioGate concentre sa capacite de structuration.", cta: "Discuter d'un mandat sectoriel", request: "Demander un engagement" },
  zh: { eyebrow: "08 - 行业", title: "行业", lead: "HelioGate集中结构化能力的执行领域。", cta: "讨论行业授权", request: "申请合作" },
  ar: { eyebrow: "08 - القطاعات", title: "القطاعات", lead: "مجالات تنفيذ تركز فيها HelioGate قدرات الهيكلة.", cta: "ناقش تفويضا قطاعيا", request: "طلب تعاون" },
};

const Sectors = () => {
  const { t, lang } = useI18n();
  const labels = signalLabels[lang] ?? signalLabels.en;
  const page = pageCopy[lang] ?? pageCopy.en;
  const localizedSectors = sectors.map((sector) => localizeSector(sector, lang));
  return (
    <Layout>
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
        style={{ backgroundImage: `url(${mineral})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
      </div>
      <div className="relative container-wide">
        <p className="eyebrow mb-6">{page.eyebrow}</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          {page.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {page.lead}
        </p>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-4">
          <SectionEyebrow>{labels.industries}</SectionEyebrow>
          <SectionTitle>{labels.industryTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {localizedSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <a key={sector.slug} href={`#${sector.slug}`} className="group bg-background p-6 hover:bg-card transition-colors">
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-hairline text-signal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`font-mono-tag text-[10px] uppercase tracking-[0.18em] ${signalClass[sector.signal]}`}>
                    {labels[sector.signal]}
                  </span>
                </div>
                <p className="font-serif-display text-2xl leading-tight">{sector.title}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{sector.summary}</p>
              </a>
            );
          })}
        </div>
      </div>
    </Section>

    <Section className="border-t border-hairline">
      <div className="space-y-20">
        {localizedSectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <article id={sector.slug} key={sector.slug} className="grid md:grid-cols-12 gap-10 scroll-mt-28">
              <div className="md:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center border border-hairline text-signal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{index + 1}</span>
                </div>
                <SectionTitle className="!text-3xl md:!text-4xl">{sector.title}</SectionTitle>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{sector.opportunity}</p>
              </div>
              <div className="md:col-span-8">
                <div className="img-frame mb-6 aspect-[21/8] border border-hairline">
                  <img
                    src={sectorImageBySlug[sector.slug] ?? sectorImageBySlug["management-consulting"]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover saturate-125 contrast-105"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
                  {sector.offerings.map((offering, offeringIndex) => (
                    <div key={offering} className="bg-background p-6">
                      <p className="font-mono-tag text-[10px] text-muted-foreground mb-5">0{offeringIndex + 1}</p>
                      <p className="text-base leading-relaxed">{offering}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>

    <Section className="border-t border-hairline text-center">
      <p className="eyebrow mb-6">{labels.engage}</p>
      <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight">{page.cta}</h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <Link to="/engage" className="btn-primary">
          <span>{page.request}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
        <Link to="/services" className="btn-ghost">
          {labels.services}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Section>
    </Layout>
  );
};

export default Sectors;
