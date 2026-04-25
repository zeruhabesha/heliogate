import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight } from "lucide-react";
import mining from "@/assets/sector-mining.jpg";
import trade from "@/assets/sector-trade.jpg";
import infra from "@/assets/sector-infrastructure.jpg";
import mineral from "@/assets/detail-mineral.jpg";

const SectorBlock = ({
  index,
  image,
  reverse,
  heading,
  lead,
  bullets,
}: {
  index: string;
  image: string;
  reverse?: boolean;
  heading: string;
  lead: string;
  bullets: string[];
}) => (
  <div className={`grid md:grid-cols-12 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
    <div className="md:col-span-7 img-frame aspect-[16/11]">
      <img src={image} alt="" loading="lazy" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute top-5 left-5 font-mono-tag text-[10px] tracking-[0.22em] text-foreground/80">{index}</div>
    </div>
    <div className="md:col-span-5">
      <SectionTitle className="!text-3xl md:!text-4xl">{heading}</SectionTitle>
      <p className="mt-6 text-base text-muted-foreground leading-relaxed">{lead}</p>
      <ul className="mt-8 border-t border-hairline">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-baseline gap-4 py-4 border-b border-hairline">
            <span className="font-mono-tag text-[10px] text-muted-foreground w-6">0{i + 1}</span>
            <span className="text-sm">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Sectors = () => {
  const { t } = useI18n();
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
          <p className="eyebrow mb-6">— Sectors</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("sectors.title")}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("sectors.sub")}</p>
        </div>
      </section>

      <Section>
        <div className="space-y-32">
          <SectorBlock
            index="01 / Mining & Minerals"
            image={mining}
            heading={t("sectors.mining.h")}
            lead={t("sectors.mining.lead")}
            bullets={[t("sectors.mining.b1"), t("sectors.mining.b2"), t("sectors.mining.b3"), t("sectors.mining.b4")]}
          />
          <SectorBlock
            index="02 / Strategic Trade"
            image={trade}
            reverse
            heading={t("sectors.trade.h")}
            lead={t("sectors.trade.lead")}
            bullets={[t("sectors.trade.b1"), t("sectors.trade.b2"), t("sectors.trade.b3"), t("sectors.trade.b4")]}
          />
          <SectorBlock
            index="03 / Infrastructure"
            image={infra}
            heading={t("sectors.infra.h")}
            lead={t("sectors.infra.lead")}
            bullets={[t("sectors.infra.b1"), t("sectors.infra.b2"), t("sectors.infra.b3"), t("sectors.infra.b4")]}
          />
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <p className="eyebrow mb-6">— By qualified engagement only</p>
        <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight">{t("sectors.cta")}</h2>
        <Link to="/engage" className="btn-primary mt-10">
          <span>{t("nav.cta")}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
      </Section>
    </Layout>
  );
};

export default Sectors;
