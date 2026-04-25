import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowUpRight } from "lucide-react";
import topo from "@/assets/intel-topo.jpg";

const Insights = () => {
  const { t } = useI18n();
  const items = [1, 2, 3, 4].map((i) => ({
    cat: t(`ins.${i}.cat`),
    title: t(`ins.${i}.t`),
    body: t(`ins.${i}.d`),
    date: t(`ins.${i}.date`),
  }));

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={topo} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">— Insights</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("ins.title")}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("ins.sub")}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {items.map((it, i) => (
            <article key={i} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-muted-foreground border border-hairline px-2 py-1">
                  {it.cat}
                </span>
                <span className="font-mono-tag text-[10px] text-muted-foreground">{it.date}</span>
              </div>
              <h2 className="font-serif-display text-3xl md:text-4xl leading-[1.1] tracking-tight mb-5">
                {it.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">{it.body}</p>
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 font-mono-tag text-[10px] uppercase tracking-[0.22em] text-foreground link-underline"
              >
                {t("ins.read")}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground italic">{t("ins.note")}</p>
      </Section>
    </Layout>
  );
};

export default Insights;
