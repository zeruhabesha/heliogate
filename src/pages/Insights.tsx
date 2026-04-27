import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { resources } from "@/lib/siteContent";
import { localizeResource, siteUi } from "@/lib/siteI18n";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowUpRight, Search } from "lucide-react";
import topo from "@/assets/insights-research-desk.jpg";
import corridorImage from "@/assets/corridor-industrial-route.jpg";
import mapImage from "@/assets/home-route-map-color.jpg";
import signalImage from "@/assets/home-mining-signal-color.jpg";

const Insights = () => {
  const { lang } = useI18n();
  const copy = siteUi(lang);
  const [query, setQuery] = useState("");
  const localizedResources = useMemo(
    () => resources.map((resource, index) => localizeResource(resource, index, lang)),
    [lang],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return localizedResources;
    return localizedResources.filter((item) =>
      [item.cat, item.sector, item.title, item.date].some((value) => value.toLowerCase().includes(q)),
    );
  }, [localizedResources, query]);
  const cardImages = [corridorImage, mapImage, signalImage];

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 md:bg-fixed"
          style={{ backgroundImage: `url(${topo})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">{copy.insightsEyebrow}</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {copy.insightsTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {copy.insightsLead}
          </p>
        </div>
      </section>

      <Section>
        <label className="mb-10 flex items-center gap-4 border border-hairline bg-background px-5 py-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.search}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>

        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {filtered.map((it, index) => (
            <article key={`${it.cat}-${it.title}`} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <div className="img-frame mb-7 aspect-[16/9] border border-hairline">
                <img src={cardImages[index % cardImages.length]} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
              </div>
              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-muted-foreground border border-hairline px-2 py-1">
                  {it.cat}
                </span>
                <span className="font-mono-tag text-[10px] text-muted-foreground">{it.date}</span>
              </div>
              <p className="font-mono-tag text-[10px] uppercase tracking-[0.18em] text-signal mb-4">{it.sector}</p>
              <h2 className="font-serif-display text-3xl md:text-4xl leading-[1.1] tracking-tight mb-8">
                {it.title}
              </h2>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 font-mono-tag text-[10px] uppercase tracking-[0.22em] text-foreground link-underline"
              >
                {copy.requestBrief}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-8 text-sm text-muted-foreground">{copy.noResults}</p>
        )}
      </Section>
    </Layout>
  );
};

export default Insights;
