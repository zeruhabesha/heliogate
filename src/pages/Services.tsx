import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { serviceGroups } from "@/lib/siteContent";
import { localizeService, siteUi } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import architecture from "@/assets/platform-architecture.jpg";
import transactionImage from "@/assets/service-transaction-structuring.jpg";
import digitalImage from "@/assets/service-ict-digital.jpg";
import fundImage from "@/assets/service-financial-fund.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Services = () => {
  const { lang } = useI18n();
  const copy = siteUi(lang);
  const localizedServices = serviceGroups.map((service) => localizeService(service, lang));

  return (
    <Layout>
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
        style={{ backgroundImage: `url(${architecture})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
      </div>
      <div className="relative container-wide">
        <p className="eyebrow mb-6">{copy.servicesEyebrow}</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
          {copy.servicesTitle}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {copy.servicesLead}
        </p>
      </div>
    </section>

    <Section>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionEyebrow>{copy.servicesGroup}</SectionEyebrow>
          <SectionTitle>{copy.servicesIndexTitle}</SectionTitle>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[transactionImage, digitalImage, fundImage].map((image, index) => (
              <div key={index} className="img-frame aspect-[4/3] border border-hairline">
                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
              </div>
            ))}
          </div>
          <div className="border border-hairline">
          {localizedServices.map((group, index) => {
            const Icon = group.icon;
            return (
              <Link
                key={group.slug}
                to={`/services/${group.slug}`}
                className="group grid gap-5 border-b border-hairline p-6 transition-colors last:border-b-0 hover:bg-card md:grid-cols-12 md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-hairline text-signal md:col-span-1">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="md:col-span-6">
                  <p className="font-serif-display text-3xl leading-tight tracking-tight">{group.title}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{group.summary}</p>
                </div>
                <div className="img-frame hidden aspect-[16/9] md:col-span-3 md:block">
                  <img
                    src={group.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-100 saturate-125 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/15 via-transparent to-transparent" />
                </div>
                <div className="flex items-start justify-between md:col-span-2 md:justify-end md:gap-6">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{index + 1}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-signal" />
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      </div>
    </Section>

    <Section className="border-t border-hairline text-center">
      <p className="eyebrow mb-6">{copy.qualified}</p>
      <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
        {copy.mandate}
      </h2>
      <Link to="/engage" className="btn-primary mt-10">
        <span>{copy.request}</span>
        <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
      </Link>
    </Section>
  </Layout>
  );
};

export default Services;
