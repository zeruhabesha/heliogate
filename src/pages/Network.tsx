import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { impactMetrics, partnerTypes } from "@/lib/siteContent";
import { localizeMetric, localizePartner, siteUi } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import room from "@/assets/network-operations-matrix-new.svg";
import corridorSignal from "@/assets/network-alliance-spectrum-new.svg";
import institutionCrane from "@/assets/engage-corridor-grid-new.svg";
import { ArrowRight, Leaf, Users } from "lucide-react";

const Network = () => {
  const { lang } = useI18n();
  const copy = siteUi(lang);
  const localizedMetrics = impactMetrics.map((metric, index) => localizeMetric(metric, index, lang));
  const localizedPartners = partnerTypes.map((partner, index) => localizePartner(partner, index, lang));

  return (
    <Layout>
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
        style={{ backgroundImage: `url(${room})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/40" />
      </div>
      <div className="relative container-wide">
        <p className="eyebrow mb-6">{copy.networkEyebrow}</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          {copy.networkTitle}
        </h1>
      </div>
    </section>

    <Section>
      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="img-frame aspect-[21/10] border border-hairline">
          <img src={corridorSignal} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
        </div>
        <div className="img-frame aspect-[21/10] border border-hairline">
          <img src={institutionCrane} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-px bg-hairline border border-hairline">
        {localizedMetrics.map((metric) => (
          <div key={metric.label} className="bg-background p-8">
            <p className="font-serif-display text-4xl">{metric.value}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">{metric.label}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-hairline">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionEyebrow>{copy.partnerEcosystem}</SectionEyebrow>
          <SectionTitle>{copy.partnerTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
          {localizedPartners.map((partner) => (
            <div key={partner} className="bg-background p-7 flex gap-4">
              <Users className="h-5 w-5 text-signal shrink-0" />
              <p className="font-serif-display text-2xl leading-tight">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="border-t border-hairline">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <SectionEyebrow>{copy.csr}</SectionEyebrow>
          <SectionTitle>{copy.csrTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8">
          <div className="flex gap-5 border border-hairline bg-card p-8">
            <Leaf className="h-7 w-7 shrink-0 text-signal" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy.csrBody}
            </p>
          </div>
          <Link to="/engage" className="btn-primary mt-10">
            <span>{copy.join}</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </Section>
  </Layout>
  );
};

export default Network;
