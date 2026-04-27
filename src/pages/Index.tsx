import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { Marquee, Stat } from "@/components/site/Marquee";
import { ImageCard } from "@/components/site/ImageCard";
import { useI18n } from "@/i18n/I18nProvider";
import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import mining from "@/assets/sector-mining.jpg";
import trade from "@/assets/sector-trade.jpg";
import infra from "@/assets/sector-infrastructure.jpg";
import homeIntroCrane from "@/assets/home-intro-crane-color.jpg";
import homeTradePort from "@/assets/home-trade-port-color.jpg";
import homeActiveMineDetail from "@/assets/home-active-mine-detail.jpg";
import homeValidationCore from "@/assets/home-validation-core.jpg";
import homeMiningSignal from "@/assets/home-mining-signal-color.jpg";
import homeCorridorSignal from "@/assets/home-corridor-signal-wide.jpg";
import homeIntelligence from "@/assets/home-intelligence-color.jpg";
import homeRouteMap from "@/assets/home-route-map-color.jpg";
import homeInstitutionCrane from "@/assets/home-institution-crane-wide.jpg";
import homeTrustLogistics from "@/assets/home-trust-logistics-wide.jpg";
import world from "@/assets/world-corridors.jpg";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { differentiators } from "@/lib/differentiators";
import { localizeDifferentiator } from "@/lib/siteI18n";

const Index = () => {
  const { t, lang } = useI18n();
  const copy = {
    en: { sectors: "Sectors", sector: "Sector", secTitle: "Sectors of Engagement", secLead: "We focus where execution complexity is high and corridor alignment creates structural advantage.", mining: "Mining", miningTitle: "Mining & Minerals", miningBody: "Critical and industrial minerals - copper, gold, manganese, lithium-grade. Operator-anchored, validated production.", trade: "Trade", tradeTitle: "Strategic Trade", tradeBody: "Commodity flows aligned to verified offtake routes and qualified buyer mandates across long-haul corridors.", infrastructure: "Infrastructure", infraTitle: "Infrastructure", infraBody: "Logistics, processing, and corridor-linked infrastructure structured around real throughput and bankable counterparties.", active: "Active", structuring: "Structuring", emerging: "Emerging", corridor: "Corridor", signal: "Signal", live: "Live", corridorMap: "Corridor map", scroll: "Scroll to explore", metrics: ["Active corridors monitored", "Counterparty jurisdictions", "Validated before capital", "Selective engagement model"], marquee: ["Mining", "Strategic Trade", "Cross-Border Finance", "Industrial Supply", "Corridor Intelligence", "Execution Discipline", "Sovereign Alignment"], procEyebrow: "Method", procTitle: "Five gates between signal and capital", procLead: "Each gate is a structural filter. Opportunities that do not pass a gate do not progress, regardless of size.", trustEyebrow: "- Operating context", trustTitle: "Working at the level of institutions", trustLead: "HelioGate operates with operators, sovereign-aligned counterparties, trade-finance institutions, and qualified investors. Engagement is structured, not transactional.", activeCorridors: "Active corridors", jurisdictions: "Jurisdictions", validated: "Validated", engagement: "Engagement", exploreModel: "Explore the full model" },
    fr: { sectors: "Secteurs", sector: "Secteur", secTitle: "Secteurs d'engagement", secLead: "Nous intervenons la ou la complexite d'execution est elevee et ou l'alignement corridor cree un avantage structurel.", mining: "Mines", miningTitle: "Mines et mineraux", miningBody: "Mineraux critiques et industriels, production validee et ancree par operateurs.", trade: "Commerce", tradeTitle: "Commerce strategique", tradeBody: "Flux de matieres alignes sur des routes d'enlevement verifiees et des mandats acheteurs qualifies.", infrastructure: "Infrastructure", infraTitle: "Infrastructure", infraBody: "Logistique, transformation et infrastructure de corridor structurees autour d'un debit reel.", active: "Actif", structuring: "Structuration", emerging: "Emergent", corridor: "Corridor", signal: "Signal", live: "Direct", corridorMap: "Carte corridor", scroll: "Defiler pour explorer", metrics: ["Corridors actifs suivis", "Juridictions de contreparties", "Valide avant capital", "Modele d'engagement selectif"], marquee: ["Mines", "Commerce strategique", "Finance transfrontaliere", "Approvisionnement industriel", "Intelligence corridor", "Discipline d'execution", "Alignement souverain"], procEyebrow: "Methode", procTitle: "Cinq portes entre le signal et le capital", procLead: "Chaque porte est un filtre structurel. Les opportunites qui ne passent pas une porte ne progressent pas.", trustEyebrow: "- Contexte operationnel", trustTitle: "Travailler au niveau des institutions", trustLead: "HelioGate travaille avec operateurs, contreparties institutionnelles, finance commerciale et investisseurs qualifies. L'engagement est structure, pas transactionnel.", activeCorridors: "Corridors actifs", jurisdictions: "Juridictions", validated: "Valide", engagement: "Engagement", exploreModel: "Explorer le modele complet" },
    zh: { sectors: "行业", sector: "行业", secTitle: "合作行业", secLead: "我们专注于执行复杂度高、通道对齐能形成结构性优势的领域。", mining: "采矿", miningTitle: "采矿与矿产", miningBody: "关键和工业矿产机会，以运营方验证的生产为基础。", trade: "贸易", tradeTitle: "战略贸易", tradeBody: "大宗商品流与已验证的承购路线和合格买方授权对齐。", infrastructure: "基础设施", infraTitle: "基础设施", infraBody: "围绕真实吞吐量和可靠交易方构建物流、加工和通道基础设施。", active: "活跃", structuring: "构建中", emerging: "新兴", corridor: "通道", signal: "信号", live: "实时", corridorMap: "通道地图", scroll: "向下浏览", metrics: ["监测中的活跃通道", "交易方司法辖区", "资本进入前验证", "选择性合作模式"], marquee: ["采矿", "战略贸易", "跨境金融", "工业供应", "通道情报", "执行纪律", "主权对齐"], procEyebrow: "方法", procTitle: "从信号到资本的五道关口", procLead: "每一道关口都是结构化筛选。未通过关口的机会不会继续推进。", trustEyebrow: "- 运营背景", trustTitle: "在机构层面开展工作", trustLead: "HelioGate与运营方、主权对齐交易方、贸易金融机构和合格投资者合作。合作是结构化的，而非单次交易。", activeCorridors: "活跃通道", jurisdictions: "司法辖区", validated: "已验证", engagement: "合作", exploreModel: "查看完整模型" },
    ar: { sectors: "القطاعات", sector: "القطاع", secTitle: "قطاعات التواصل", secLead: "نركز حيث تكون تعقيدات التنفيذ عالية وحيث يخلق توافق الممر ميزة هيكلية.", mining: "التعدين", miningTitle: "التعدين والمعادن", miningBody: "فرص معادن حرجة وصناعية ترتكز على إنتاج تم التحقق منه من المشغلين.", trade: "التجارة", tradeTitle: "التجارة الاستراتيجية", tradeBody: "تدفقات سلع متوافقة مع مسارات شراء موثقة وتفويضات مشترين مؤهلين.", infrastructure: "البنية التحتية", infraTitle: "البنية التحتية", infraBody: "لوجستيات ومعالجة وبنية ممرات مبنية حول تدفق حقيقي وأطراف موثوقة.", active: "نشط", structuring: "قيد الهيكلة", emerging: "ناشئ", corridor: "الممر", signal: "إشارة", live: "مباشر", corridorMap: "خريطة الممر", scroll: "مرر للاستكشاف", metrics: ["ممرات نشطة قيد المتابعة", "ولايات الأطراف", "تم التحقق قبل رأس المال", "نموذج تواصل انتقائي"], marquee: ["التعدين", "التجارة الاستراتيجية", "التمويل العابر للحدود", "الإمداد الصناعي", "استخبارات الممرات", "انضباط التنفيذ", "المواءمة السيادية"], procEyebrow: "المنهجية", procTitle: "خمس بوابات بين الإشارة ورأس المال", procLead: "كل بوابة مرشح هيكلي. الفرص التي لا تعبر البوابة لا تتقدم.", trustEyebrow: "- سياق التشغيل", trustTitle: "العمل على مستوى المؤسسات", trustLead: "تعمل HelioGate مع المشغلين والأطراف المؤسسية ومؤسسات تمويل التجارة والمستثمرين المؤهلين. التواصل منظم وليس عابرا.", activeCorridors: "ممرات نشطة", jurisdictions: "ولايات", validated: "متحقق", engagement: "تواصل", exploreModel: "استكشف النموذج الكامل" },
  }[lang];
  const localizedDifferentiators = differentiators.map((item) => localizeDifferentiator(item, lang));

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-spot)" }} />
        </div>

        <div className="relative container-wide pb-20 md:pb-28 pt-32 w-full">
          <div className="max-w-5xl">
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="signal-dot" />
              <p className="eyebrow text-foreground">{t("hero.eyebrow")}</p>
            </div>
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.96] tracking-tight reveal reveal-delay-1">
              {t("hero.headline.1")}
              <br />
              <span className="text-muted-foreground">{t("hero.headline.2")}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed reveal reveal-delay-2">
              {t("hero.sub")}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5 reveal reveal-delay-3">
              <Link to="/engage" className="btn-primary group">
                <span>{t("hero.cta.1")}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link to="/corridors" className="btn-ghost group">
                {t("hero.cta.2")}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <p className="mt-10 eyebrow reveal reveal-delay-4">— {t("hero.note")}</p>
          </div>

          {/* Hero metrics rail */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border-t border-hairline reveal reveal-delay-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-background/60 backdrop-blur-sm p-6 md:p-8">
                <p className="font-serif-display text-3xl md:text-4xl">{t(`hero.metric.${i}.v`)}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  {copy.metrics[i - 1]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-muted-foreground">
            <ArrowDown className="w-3.5 h-3.5 float-slow" />
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em]">{copy.scroll}</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={copy.marquee} />

      {/* INTRO */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>{t("intro.eyebrow")}</SectionEyebrow>
            <div className="mt-10 grid grid-cols-5 gap-3">
              <div className="img-frame col-span-3 aspect-[4/5] border border-hairline">
                <img src={homeIntroCrane} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
              </div>
              <div className="col-span-2 space-y-3 pt-10">
                <div className="img-frame aspect-square border border-hairline">
                  <img src={homeTradePort} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                </div>
                <div className="img-frame aspect-[4/5] border border-hairline">
                  <img src={homeActiveMineDetail} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-serif-display text-3xl md:text-4xl leading-[1.2] tracking-tight">{t("intro.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t("intro.p2")}</p>
            <div className="pt-6 border-t border-hairline space-y-1">
              <p className="font-serif-display text-2xl text-muted-foreground">{t("intro.focus.1")}</p>
              <p className="font-serif-display text-2xl">{t("intro.focus.2")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO + image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <SectionEyebrow>{t("what.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("what.title")}</SectionTitle>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-md">{t("what.lead")}</p>
            <div className="mt-10 img-frame aspect-[4/5] hidden md:block">
              <img src={homeValidationCore} alt="" loading="lazy" className="w-full h-full object-cover opacity-100 saturate-125 contrast-105" />
            </div>
          </div>
          <div className="md:col-span-7 grid gap-px bg-hairline border border-hairline">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i} / 04</span>
                  <span className="w-6 h-px bg-foreground/40 group-hover:bg-signal transition-colors" />
                </div>
                <p className="font-serif-display text-3xl md:text-4xl mb-3 tracking-tight">{t(`what.b${i}.t`)}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{t(`what.b${i}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted-foreground italic max-w-2xl">{t("what.foot")}</p>
      </Section>

      {/* SECTORS PREVIEW */}
      <Section className="border-t border-hairline">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <SectionEyebrow>08 - {copy.sectors}</SectionEyebrow>
            <SectionTitle>{copy.secTitle}</SectionTitle>
          </div>
          <Link to="/sectors" className="link-underline">
            {copy.sectors}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">{copy.secLead}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <ImageCard
            image={mining}
            index={`01 / ${copy.mining}`}
            eyebrow={copy.active}
            title={copy.miningTitle}
            body={copy.miningBody}
            to="/sectors"
            cta={copy.sector}
          />
          <ImageCard
            image={trade}
            index={`02 / ${copy.trade}`}
            eyebrow={copy.structuring}
            title={copy.tradeTitle}
            body={copy.tradeBody}
            to="/sectors"
            cta={copy.sector}
          />
          <ImageCard
            image={infra}
            index={`03 / ${copy.infrastructure}`}
            eyebrow={copy.emerging}
            title={copy.infraTitle}
            body={copy.infraBody}
            to="/sectors"
            cta={copy.sector}
          />
        </div>
      </Section>

      {/* FLOW with corridor map background */}
      <section className="relative border-t border-hairline py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img src={world} alt="" loading="lazy" className="w-full h-full object-cover saturate-125 contrast-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-background/70" />
        </div>
        <div className="relative container-wide">
          <SectionEyebrow>{copy.procEyebrow}</SectionEyebrow>
          <SectionTitle className="max-w-3xl">{copy.procTitle}</SectionTitle>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{copy.procLead}</p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-hairline border border-hairline">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-background/85 backdrop-blur-sm p-7 group hover:bg-card transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tag text-[10px] text-muted-foreground">0{i} / 05</span>
                  <span className="w-6 h-px bg-foreground group-hover:bg-signal transition-colors" />
                </div>
                <p className="font-serif-display text-xl mb-3">{t(`flow.s${i}.t`)}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(`flow.s${i}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE SIGNAL with image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{t("active.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("active.title")}</SectionTitle>
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="signal-dot" />
              <span className="eyebrow text-foreground">{t("active.status")}</span>
            </div>
            <div className="mt-10 img-frame aspect-[4/5]">
              <img src={homeMiningSignal} alt="" loading="lazy" className="w-full h-full object-cover opacity-100 saturate-125 contrast-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground">{copy.corridor} - 01</span>
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-signal">{copy.signal} - {copy.live}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 border-l border-hairline pl-10 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("active.lead")}</p>
            <ul className="space-y-4 mb-10">
              {["l1", "l2", "l3"].map((k, i) => (
                <li key={k} className="flex items-baseline gap-4 pb-4 border-b border-hairline">
                  <span className="font-mono-tag text-[10px] text-muted-foreground w-6">0{i + 1}</span>
                  <span className="text-base">{t(`active.${k}`)}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic mb-10">{t("active.foot")}</p>
            <Link to="/corridors" className="link-underline">
              {copy.corridor}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="mt-12 img-frame aspect-[16/7] border border-hairline">
              <img src={homeCorridorSignal} alt="" loading="lazy" className="w-full h-full object-cover opacity-100 saturate-125 contrast-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-foreground">{copy.corridorMap}</span>
                <span className="font-mono-tag text-[10px] tracking-[0.22em] text-signal">{copy.active}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ARCHITECTURE with side image */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <SectionEyebrow>{t("arch.eyebrow")}</SectionEyebrow>
          </div>
          <div className="md:col-span-8">
            <SectionTitle>{t("arch.title")}</SectionTitle>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 img-frame aspect-[4/5]">
            <img src={homeIntelligence} alt="" loading="lazy" className="w-full h-full object-cover opacity-100 saturate-125 contrast-105" />
          </div>
          <div className="md:col-span-7 border-t border-hairline">
            {[
              { k: "l1", tag: null },
              { k: "l2", tag: null },
              { k: "l3", tag: t("arch.l3.tag") },
              { k: "l4", tag: t("arch.l4.tag") },
            ].map((row, i) => (
              <div
                key={row.k}
                className="grid grid-cols-12 gap-4 py-7 border-b border-hairline group hover:bg-card/40 transition-colors"
              >
                <div className="col-span-1 font-mono-tag text-xs text-muted-foreground">0{i + 1}</div>
                <div className="col-span-11 md:col-span-5">
                  <p className="font-serif-display text-2xl">{t(`arch.${row.k}.t`)}</p>
                  {row.tag && (
                    <span className="inline-block mt-2 font-mono-tag text-[10px] uppercase tracking-[0.18em] text-muted-foreground border border-hairline px-2 py-0.5">
                      {row.tag}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                  {t(`arch.${row.k}.d`)}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-px bg-hairline border-x border-b border-hairline">
              <div className="img-frame aspect-[16/9]">
                <img src={homeRouteMap} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
              </div>
              <div className="img-frame aspect-[16/9]">
                <img src={homeInstitutionCrane} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TRUST STRIP */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{copy.trustEyebrow}</p>
            <SectionTitle>{copy.trustTitle}</SectionTitle>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">{copy.trustLead}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
              <Stat value="04" label={copy.activeCorridors} />
              <Stat value="12+" label={copy.jurisdictions} />
              <Stat value="100%" label={copy.validated} />
              <Stat value="1:1" label={copy.engagement} />
            </div>
            <div className="mt-8 img-frame aspect-[21/7] border border-hairline">
              <img src={homeTrustLogistics} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-foreground">{copy.corridor}</span>
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-signal">{copy.structuring}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{t("diff.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("diff.title")}</SectionTitle>
          </div>
          <div className="md:col-span-7">
            <ul>
              {localizedDifferentiators.map((item) => (
                <li key={item.slug} className="border-b border-hairline">
                  <Link
                    to={`/why-heliogate/${item.slug}`}
                    className="flex items-baseline gap-6 py-6 group hover:pl-3 transition-all duration-300"
                  >
                    <span className="font-mono-tag text-[10px] text-muted-foreground">{item.index}</span>
                    <span className="font-serif-display text-xl md:text-2xl flex-1">{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-signal transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/why-heliogate" className="link-underline mt-8">
              {copy.exploreModel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-hairline">
        <div className="text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-8">{t("cta.eyebrow")}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] tracking-tight">{t("cta.title")}</h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("cta.lead")}</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link to="/engage" className="btn-primary group">
              <span>{t("cta.btn.1")}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
            <Link to="/engage" className="btn-ghost">
              {t("cta.btn.2")}
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
