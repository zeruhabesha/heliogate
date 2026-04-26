import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { getServiceGroup, serviceGroups } from "@/lib/siteContent";
import { localizeService, siteUi } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";

const ServiceDetail = () => {
  const { lang } = useI18n();
  const copy = siteUi(lang);
  const { slug } = useParams();
  const baseService = getServiceGroup(slug);

  if (!baseService) {
    return <Navigate to="/services" replace />;
  }

  const service = localizeService(baseService, lang);
  const serviceIndex = serviceGroups.findIndex((item) => item.slug === service.slug);
  const next = localizeService(serviceGroups[(serviceIndex + 1) % serviceGroups.length], lang);
  const Icon = service.icon;

  return (
    <Layout>
      <section className="relative min-h-[74svh] pt-32 pb-16 md:pt-44 md:pb-24 border-b border-hairline overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative container-wide w-full">
          <Link to="/services" className="link-underline mb-10">
            <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
            {copy.backServices}
          </Link>
          <div className="mb-8 flex h-14 w-14 items-center justify-center border border-hairline text-signal">
            <Icon className="h-6 w-6" />
          </div>
          <p className="eyebrow mb-6">{copy.service} 0{serviceIndex + 1}</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-5xl">
            {service.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">{service.summary}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <SectionEyebrow>{copy.overview}</SectionEyebrow>
            <SectionTitle>{copy.overviewTitle}</SectionTitle>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground">{copy.service}</span>
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-signal">0{serviceIndex + 1}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.25] tracking-tight">
              {service.overview}
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
              {service.items.map((item, index) => (
                <div key={item} className="bg-background p-5">
                  <p className="font-mono-tag text-[10px] text-muted-foreground mb-4">0{index + 1}</p>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="mb-12 img-frame aspect-[21/7] border border-hairline">
          <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-foreground">{copy.visual}</span>
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-signal">{copy.context}</span>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <SectionEyebrow>{copy.scope}</SectionEyebrow>
            <SectionTitle>{copy.scopeTitle}</SectionTitle>
          </div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {service.scope.map((item, index) => (
              <article key={item.title} className="bg-background p-7 md:p-8">
                <p className="font-mono-tag text-[10px] text-muted-foreground mb-6">0{index + 1}</p>
                <h2 className="font-serif-display text-2xl leading-tight">{item.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>{copy.process}</SectionEyebrow>
            <SectionTitle>{copy.processTitle}</SectionTitle>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-hairline">
              {service.process.map((step, index) => (
                <div key={step} className="grid grid-cols-12 gap-5 border-b border-hairline py-6">
                  <span className="col-span-2 md:col-span-1 font-mono-tag text-[10px] text-muted-foreground">0{index + 1}</span>
                  <p className="col-span-10 md:col-span-11 font-serif-display text-2xl leading-tight">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
          <div className="bg-background p-8 md:p-10">
            <ShieldCheck className="mb-8 h-6 w-6 text-signal" />
            <p className="eyebrow mb-6">{copy.governance}</p>
            <div className="space-y-5">
              {service.governance.map((item) => (
                <p key={item} className="flex gap-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="bg-background p-8 md:p-10">
            <Check className="mb-8 h-6 w-6 text-signal" />
            <p className="eyebrow mb-6">{copy.outputs}</p>
            <div className="space-y-5">
              {service.outputs.map((item) => (
                <p key={item} className="flex gap-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">{copy.next}</p>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05] tracking-tight">{next.title}</h2>
          </div>
          <div className="md:col-span-5 flex flex-wrap md:justify-end gap-4">
            <Link to={`/services/${next.slug}`} className="btn-primary group">
              <span>{copy.readNext}</span>
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
            <Link to="/engage" className="btn-ghost">
              {copy.engage}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ServiceDetail;
