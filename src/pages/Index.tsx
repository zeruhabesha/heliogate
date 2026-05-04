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
import homeTradePort from "@/assets/home-trade-port-color.jpg";
import homeActiveMineDetail from "@/assets/home-active-mine-detail.jpg";
import homeMiningSignal from "@/assets/hh.jpg";
import homeCorridorSignal from "@/assets/home-corridor-signal-wide.jpg";
import homeIntelligence from "@/assets/home-intelligence-color.jpg";
import homeTrustLogistics from "@/assets/home-trust-logistics-wide.jpg";
import whyHelioGateImage1 from "@/assets/1 (1).jpg";
import whyHelioGateImage2 from "@/assets/1 (2).jpg";
import whyHelioGateImage3 from "@/assets/1 (3).jpg";
import whyHelioGateImage4 from "@/assets/1 (4).jpg";
import { ArrowRight, ArrowUpRight, ArrowDown, Globe2, ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { differentiators } from "@/lib/differentiators";
import { localizeDifferentiator } from "@/lib/siteI18n";

const homeIntroInfrastructure = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80";
const homeValidationCore = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80";
const homeMethodProcess = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80";
const homeArchitectureModules = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80";
const homeInstitutionMeeting = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80";
const whyHelioGateImages = [whyHelioGateImage1, whyHelioGateImage2, whyHelioGateImage3, whyHelioGateImage4];
const strategicPillarsByLang = {
  en: {
    eyebrow: "Operating foundations",
    title: "Pan-African reach, disciplined governance, long-horizon growth",
    lead: "HelioGate operates across corridor environments where institutional credibility, execution discipline, and durable partnerships matter.",
    cards: [
      { icon: Globe2, title: "Geographic reach", body: "Cross-border corridor exposure across mining, trade, and infrastructure markets." },
      { icon: ShieldCheck, title: "Governance", body: "Transparent mandate screening, documented validation, and accountable counterpart selection." },
      { icon: TrendingUp, title: "Strategic growth", body: "Selective growth through bankable throughput, verified demand, and execution quality." },
      { icon: Landmark, title: "Institutional heritage", body: "Built for long-term alignment with operators, institutions, and sovereign-linked stakeholders." },
    ],
  },
  fr: {
    eyebrow: "Fondations operationnelles",
    title: "Portee panafricaine, gouvernance rigoureuse, croissance de long terme",
    lead: "HelioGate opere dans des environnements de corridor ou la credibilite institutionnelle, la discipline d'execution et les partenariats durables sont essentiels.",
    cards: [
      { icon: Globe2, title: "Portee geographique", body: "Presence transfrontaliere sur des corridors lies aux mines, au commerce et a l'infrastructure." },
      { icon: ShieldCheck, title: "Gouvernance", body: "Selection transparente des mandats, validation documentee et choix responsable des contreparties." },
      { icon: TrendingUp, title: "Croissance strategique", body: "Croissance selective fondee sur un debit bancable, une demande verifiee et une execution fiable." },
      { icon: Landmark, title: "Ancrage institutionnel", body: "Concu pour un alignement de long terme avec operateurs, institutions et parties prenantes souveraines." },
    ],
  },
  zh: {
    eyebrow: "运营基础",
    title: "泛非覆盖、严谨治理、长期增长",
    lead: "HelioGate 在重视机构可信度、执行纪律和长期合作关系的通道环境中开展业务。",
    cards: [
      { icon: Globe2, title: "地理覆盖", body: "覆盖采矿、贸易与基础设施相关的跨境通道市场。" },
      { icon: ShieldCheck, title: "治理", body: "透明的项目筛选、可追踪的验证流程与负责的交易方选择。" },
      { icon: TrendingUp, title: "战略增长", body: "围绕可融资吞吐量、经验证需求与高质量执行进行选择性增长。" },
      { icon: Landmark, title: "机构化基础", body: "面向与运营方、机构及主权相关方的长期协同而构建。" },
    ],
  },
  ar: {
    eyebrow: "مرتكزات التشغيل",
    title: "انتشار افريقي واسع وحوكمة منضبطة ونمو طويل المدى",
    lead: "تعمل HelioGate عبر بيئات الممرات حيث المصداقية المؤسسية وانضباط التنفيذ والشراكات المستدامة عوامل حاسمة.",
    cards: [
      { icon: Globe2, title: "الانتشار الجغرافي", body: "حضور عابر للحدود عبر ممرات التعدين والتجارة والبنية التحتية." },
      { icon: ShieldCheck, title: "الحوكمة", body: "فحص شفاف للفرص وتحقق موثق واختيار مسؤول للاطراف المقابلة." },
      { icon: TrendingUp, title: "النمو الاستراتيجي", body: "نمو انتقائي قائم على تدفقات قابلة للتمويل وطلب موثق وجودة تنفيذ." },
      { icon: Landmark, title: "الركيزة المؤسسية", body: "مبني على مواءمة طويلة المدى مع المشغلين والمؤسسات والجهات المرتبطة بالسيادة." },
    ],
  },
} as const;

const partnerStripByLang = {
  en: { label: "Selected network", items: ["Operators", "Trade Finance Institutions", "Sovereign Counterparties", "Qualified Investors", "Logistics Networks", "Technical Advisors"] },
  fr: { label: "Reseau selectionne", items: ["Operateurs", "Institutions de finance commerciale", "Contreparties souveraines", "Investisseurs qualifies", "Reseaux logistiques", "Conseillers techniques"] },
  zh: { label: "精选网络", items: ["运营方", "贸易金融机构", "主权交易方", "合格投资者", "物流网络", "技术顾问"] },
  ar: { label: "شبكة مختارة", items: ["المشغلون", "مؤسسات تمويل التجارة", "الاطراف السيادية", "المستثمرون المؤهلون", "شبكات لوجستية", "مستشارون فنيون"] },
} as const;

const Index = () => {
  const { t, lang } = useI18n();
  const strategicPillars = strategicPillarsByLang[lang];
  const partnerStrip = partnerStripByLang[lang];
  const copy = {
    en: { sectors: "Sectors", sector: "Sector", secTitle: "Sectors of Engagement", secLead: "We focus where execution complexity is high and corridor alignment creates structural advantage.", mining: "Mining", miningTitle: "Mining & Minerals", miningBody: "Critical and industrial minerals - copper, gold, manganese, lithium-grade. Operator-anchored, validated production.", trade: "Trade", tradeTitle: "Strategic Trade", tradeBody: "Commodity flows aligned to verified offtake routes and qualified buyer mandates across long-haul corridors.", infrastructure: "Infrastructure", infraTitle: "Infrastructure", infraBody: "Logistics, processing, and corridor-linked infrastructure structured around real throughput and bankable counterparties.", active: "Active", structuring: "Structuring", emerging: "Emerging", corridor: "Corridor", signal: "Signal", live: "Live", corridorMap: "Corridor map", scroll: "Scroll to explore", metrics: ["Active corridors monitored", "Counterparty jurisdictions", "Validated before capital", "Selective engagement model"], marquee: ["Mining", "Strategic Trade", "Cross-Border Finance", "Industrial Supply", "Corridor Intelligence", "Execution Discipline", "Sovereign Alignment"], missionEyebrow: "Foundation", missionTitle: "Mission and vision", missionLead: "HelioGate is built around disciplined validation, selective execution, and long-horizon corridor alignment.", missionTag: "Validated before capital", missionLabel: "Mission", missionBody: "To identify, validate, and structure corridor-linked opportunities in mining, strategic trade, and infrastructure before capital is deployed.", missionFoot: "Structured mandate", visionLabel: "Vision", visionBody: "To become a trusted platform for disciplined cross-border execution where institutions, operators, and investors align around real assets, verified demand, and bankable corridors.", visionFoot: "Institutional horizon", procEyebrow: "Method", procTitle: "Five gates between signal and capital", procLead: "Each gate is a structural filter. Opportunities that do not pass a gate do not progress, regardless of size.", trustEyebrow: "- Operating context", trustTitle: "Working at the level of institutions", trustLead: "HelioGate operates with operators, sovereign-aligned counterparties, trade-finance institutions, and qualified investors. Engagement is structured, not transactional.", activeCorridors: "Active corridors", jurisdictions: "Jurisdictions", validated: "Validated", engagement: "Engagement", exploreModel: "Explore the full model", ctaPanelEyebrow: "Next step" },
    fr: { sectors: "Secteurs", sector: "Secteur", secTitle: "Secteurs d'engagement", secLead: "Nous intervenons la ou la complexite d'execution est elevee et ou l'alignement corridor cree un avantage structurel.", mining: "Mines", miningTitle: "Mines et mineraux", miningBody: "Mineraux critiques et industriels, production validee et ancree par operateurs.", trade: "Commerce", tradeTitle: "Commerce strategique", tradeBody: "Flux de matieres alignes sur des routes d'enlevement verifiees et des mandats acheteurs qualifies.", infrastructure: "Infrastructure", infraTitle: "Infrastructure", infraBody: "Logistique, transformation et infrastructure de corridor structurees autour d'un debit reel.", active: "Actif", structuring: "Structuration", emerging: "Emergent", corridor: "Corridor", signal: "Signal", live: "Direct", corridorMap: "Carte corridor", scroll: "Defiler pour explorer", metrics: ["Corridors actifs suivis", "Juridictions de contreparties", "Valide avant capital", "Modele d'engagement selectif"], marquee: ["Mines", "Commerce strategique", "Finance transfrontaliere", "Approvisionnement industriel", "Intelligence corridor", "Discipline d'execution", "Alignement souverain"], missionEyebrow: "Fondation", missionTitle: "Mission et vision", missionLead: "HelioGate repose sur une validation rigoureuse, une execution selective et un alignement de corridor a long terme.", missionTag: "Valide avant capital", missionLabel: "Mission", missionBody: "Identifier, valider et structurer des opportunites liees aux corridors dans les mines, le commerce strategique et l'infrastructure avant le deploiement du capital.", missionFoot: "Mandat structure", visionLabel: "Vision", visionBody: "Devenir une plateforme de confiance pour une execution transfrontaliere rigoureuse, ou institutions, operateurs et investisseurs s'alignent autour d'actifs reels, d'une demande verifiee et de corridors bancables.", visionFoot: "Horizon institutionnel", procEyebrow: "Methode", procTitle: "Cinq portes entre le signal et le capital", procLead: "Chaque porte est un filtre structurel. Les opportunites qui ne passent pas une porte ne progressent pas.", trustEyebrow: "- Contexte operationnel", trustTitle: "Travailler au niveau des institutions", trustLead: "HelioGate travaille avec operateurs, contreparties institutionnelles, finance commerciale et investisseurs qualifies. L'engagement est structure, pas transactionnel.", activeCorridors: "Corridors actifs", jurisdictions: "Juridictions", validated: "Valide", engagement: "Engagement", exploreModel: "Explorer le modele complet", ctaPanelEyebrow: "Prochaine etape" },
    zh: { sectors: "行业", sector: "行业", secTitle: "合作行业", secLead: "我们专注于执行复杂度高、通道对齐能形成结构性优势的领域。", mining: "采矿", miningTitle: "采矿与矿产", miningBody: "关键和工业矿产机会，以运营方验证的生产为基础。", trade: "贸易", tradeTitle: "战略贸易", tradeBody: "大宗商品流与已验证的承购路线和合格买方授权对齐。", infrastructure: "基础设施", infraTitle: "基础设施", infraBody: "围绕真实吞吐量和可靠交易方构建物流、加工和通道基础设施。", active: "活跃", structuring: "构建中", emerging: "新兴", corridor: "通道", signal: "信号", live: "实时", corridorMap: "通道地图", scroll: "向下浏览", metrics: ["监测中的活跃通道", "交易方司法辖区", "资本进入前验证", "选择性合作模式"], marquee: ["采矿", "战略贸易", "跨境金融", "工业供应", "通道情报", "执行纪律", "主权对齐"], missionEyebrow: "基础", missionTitle: "使命与愿景", missionLead: "HelioGate 建立在严格验证、选择性执行和长期通道协同之上。", missionTag: "资本进入前验证", missionLabel: "使命", missionBody: "在资本投入之前，识别、验证并结构化采矿、战略贸易和基础设施领域中与通道相关的机会。", missionFoot: "结构化使命", visionLabel: "愿景", visionBody: "成为值得信赖的跨境执行平台，让机构、运营方和投资者围绕真实资产、经验证需求和可融资通道实现协同。", visionFoot: "机构化视野", procEyebrow: "方法", procTitle: "从信号到资本的五道关口", procLead: "每一道关口都是结构化筛选。未通过关口的机会不会继续推进。", trustEyebrow: "- 运营背景", trustTitle: "在机构层面开展工作", trustLead: "HelioGate与运营方、主权对齐交易方、贸易金融机构和合格投资者合作。合作是结构化的，而非单次交易。", activeCorridors: "活跃通道", jurisdictions: "司法辖区", validated: "已验证", engagement: "合作", exploreModel: "查看完整模型", ctaPanelEyebrow: "下一步" },
    ar: { sectors: "القطاعات", sector: "القطاع", secTitle: "قطاعات التواصل", secLead: "نركز حيث تكون تعقيدات التنفيذ عالية وحيث يخلق توافق الممر ميزة هيكلية.", mining: "التعدين", miningTitle: "التعدين والمعادن", miningBody: "فرص معادن حرجة وصناعية ترتكز على إنتاج تم التحقق منه من المشغلين.", trade: "التجارة", tradeTitle: "التجارة الاستراتيجية", tradeBody: "تدفقات سلع متوافقة مع مسارات شراء موثقة وتفويضات مشترين مؤهلين.", infrastructure: "البنية التحتية", infraTitle: "البنية التحتية", infraBody: "لوجستيات ومعالجة وبنية ممرات مبنية حول تدفق حقيقي وأطراف موثوقة.", active: "نشط", structuring: "قيد الهيكلة", emerging: "ناشئ", corridor: "الممر", signal: "إشارة", live: "مباشر", corridorMap: "خريطة الممر", scroll: "مرر للاستكشاف", metrics: ["ممرات نشطة قيد المتابعة", "ولايات الأطراف", "تم التحقق قبل رأس المال", "نموذج تواصل انتقائي"], marquee: ["التعدين", "التجارة الاستراتيجية", "التمويل العابر للحدود", "الإمداد الصناعي", "استخبارات الممرات", "انضباط التنفيذ", "المواءمة السيادية"], missionEyebrow: "الاساس", missionTitle: "المهمة والرؤية", missionLead: "يقوم HelioGate على التحقق المنضبط والتنفيذ الانتقائي ومواءمة الممرات على المدى الطويل.", missionTag: "تم التحقق قبل راس المال", missionLabel: "المهمة", missionBody: "تحديد الفرص المرتبطة بالممرات والتحقق منها وهيكلتها في التعدين والتجارة الاستراتيجية والبنية التحتية قبل توظيف راس المال.", missionFoot: "تفويض منظم", visionLabel: "الرؤية", visionBody: "أن نصبح منصة موثوقة للتنفيذ العابر للحدود حيث تتوافق المؤسسات والمشغلون والمستثمرون حول اصول حقيقية وطلب موثق وممرات قابلة للتمويل.", visionFoot: "افق مؤسسي", procEyebrow: "المنهجية", procTitle: "خمس بوابات بين الإشارة ورأس المال", procLead: "كل بوابة مرشح هيكلي. الفرص التي لا تعبر البوابة لا تتقدم.", trustEyebrow: "- سياق التشغيل", trustTitle: "العمل على مستوى المؤسسات", trustLead: "تعمل HelioGate مع المشغلين والأطراف المؤسسية ومؤسسات تمويل التجارة والمستثمرين المؤهلين. التواصل منظم وليس عابرا.", activeCorridors: "ممرات نشطة", jurisdictions: "ولايات", validated: "متحقق", engagement: "تواصل", exploreModel: "استكشف النموذج الكامل", ctaPanelEyebrow: "الخطوة التالية" },
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
            <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-2">
              <span className="inline-flex items-center gap-2 border border-hairline bg-background/40 px-3 py-2 font-mono-tag text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm">
                <span className="signal-dot" />
                {copy.metrics[2]}
              </span>
              <span className="inline-flex items-center gap-2 border border-hairline bg-background/40 px-3 py-2 font-mono-tag text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm">
                {copy.metrics[3]}
              </span>
            </div>
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

      {/* STRATEGIC PILLARS */}
      <Section className="border-t border-hairline bg-gradient-to-b from-card/40 via-background to-background">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div className="max-w-4xl">
            <SectionEyebrow>{strategicPillars.eyebrow}</SectionEyebrow>
            <SectionTitle>{strategicPillars.title}</SectionTitle>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">{strategicPillars.lead}</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-hairline border border-hairline">
          {strategicPillars.cards.map((card) => (
            <div key={card.title} className="group relative overflow-hidden bg-background p-7 md:p-8 hover:bg-card transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-signal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="inline-flex items-center justify-center w-10 h-10 border border-hairline bg-card/70 mb-6">
                <card.icon className="w-5 h-5 text-signal" />
              </div>
              <p className="font-serif-display text-2xl leading-tight mb-3">{card.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INTRO */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <SectionEyebrow>{t("intro.eyebrow")}</SectionEyebrow>
            <div className="mt-10 grid grid-cols-5 gap-3">
              <div className="img-frame col-span-3 aspect-[4/5] border border-hairline">
                <img src={homeIntroInfrastructure} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
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
            <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-6 items-start">
              <div className="pt-6 border-t border-hairline space-y-1">
                <p className="font-serif-display text-2xl text-muted-foreground">{t("intro.focus.1")}</p>
                <p className="font-serif-display text-2xl">{t("intro.focus.2")}</p>
              </div>
              <div className="border border-hairline bg-card/40 p-6">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{copy.signal}</p>
                <p className="mt-4 font-serif-display text-3xl leading-none">04</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{copy.activeCorridors}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION / VISION */}
      <Section className="border-t border-hairline bg-gradient-to-b from-background via-card/20 to-background">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <SectionEyebrow>{copy.missionEyebrow}</SectionEyebrow>
            <SectionTitle>{copy.missionTitle}</SectionTitle>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-sm">
              {copy.missionLead}
            </p>
            <div className="mt-10 flex items-center gap-3">
              <span className="signal-dot" />
              <span className="eyebrow text-foreground">{copy.missionTag}</span>
            </div>
          </div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden border border-hairline bg-card/60 p-8 md:p-10 min-h-[320px] flex flex-col justify-between shadow-[var(--shadow-elev)]">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{copy.missionLabel}</p>
                <span className="font-serif-display text-5xl text-foreground/10">01</span>
              </div>
              <p className="relative mt-10 font-serif-display text-2xl md:text-3xl leading-[1.2] tracking-tight">
                {copy.missionBody}
              </p>
              <div className="relative mt-10 pt-6 border-t border-hairline">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.missionFoot}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-hairline bg-background p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-tl from-signal/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{copy.visionLabel}</p>
                <span className="font-serif-display text-5xl text-foreground/10">02</span>
              </div>
              <p className="relative mt-10 font-serif-display text-2xl md:text-3xl leading-[1.2] tracking-tight text-muted-foreground">
                {copy.visionBody}
              </p>
              <div className="relative mt-10 pt-6 border-t border-hairline">
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.visionFoot}
                </p>
              </div>
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
      <Section className="border-t border-hairline bg-gradient-to-b from-card/35 via-background to-background">
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
          <img src={homeMethodProcess} alt="" loading="lazy" className="w-full h-full object-cover saturate-125 contrast-105" />
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
                <li key={k} className="flex items-baseline gap-4 pb-5 border-b border-hairline">
                  <span className="font-mono-tag text-[10px] text-muted-foreground w-6 pt-1">0{i + 1}</span>
                  <span className="text-base leading-relaxed">{t(`active.${k}`)}</span>
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
                <img src={homeArchitectureModules} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
              </div>
              <div className="img-frame aspect-[16/9]">
                <img src={homeInstitutionMeeting} alt="" loading="lazy" className="h-full w-full object-cover opacity-100 saturate-125 contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TRUST STRIP */}
      <Section className="border-t border-hairline bg-gradient-to-b from-background via-card/25 to-background">
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

      {/* PARTNER STRIP */}
      <Section className="border-t border-hairline py-14 md:py-16 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="border border-hairline bg-card/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <p className="eyebrow">{partnerStrip.label}</p>
            <p className="text-sm text-muted-foreground">
              Institutional ecosystem aligned for execution
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {partnerStrip.items.map((item) => (
              <span
                key={item}
                className="group inline-flex items-center gap-3 border border-hairline bg-background px-4 py-3.5 font-mono-tag text-[10px] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 bg-signal inline-block group-hover:scale-125 transition-transform" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{t("diff.eyebrow")}</SectionEyebrow>
            <SectionTitle>{t("diff.title")}</SectionTitle>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {whyHelioGateImages.map((image, index) => (
                <div key={index} className="img-frame aspect-square border border-hairline">
                  <img src={image} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>
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
        <div className="relative overflow-hidden border border-hairline bg-gradient-to-br from-card/60 via-background to-card/40 p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[var(--shadow-elev)]">
          <div className="absolute inset-0" style={{ background: "var(--gradient-spot)" }} />
          <div className="relative">
            <p className="eyebrow mb-3">{copy.ctaPanelEyebrow}</p>
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
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
