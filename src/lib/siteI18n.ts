import type { Lang } from "@/i18n/translations";

const ui = {
  en: {
    servicesEyebrow: "Services & Solutions",
    servicesTitle: "Structured service lines with dedicated execution pages.",
    servicesLead: "Each service group has its own detailed page covering scope, delivery process, governance controls, and expected outputs.",
    servicesGroup: "Service groups",
    servicesIndexTitle: "No dropdowns. Each service opens into its own page.",
    qualified: "Qualified engagement",
    mandate: "Start with a mandate, not a menu.",
    request: "Request Engagement",
    backServices: "Services",
    overview: "Overview",
    overviewTitle: "What this service covers.",
    scope: "Detailed scope",
    scopeTitle: "From mandate definition to controlled execution.",
    process: "Delivery process",
    processTitle: "How the work progresses.",
    governance: "Governance controls",
    outputs: "Typical outputs",
    next: "Next service",
    readNext: "Read Next",
    engage: "Engage",
    visual: "Execution visual",
    context: "Interactive context",
    service: "Service",
    methodEyebrow: "Execution methodology",
    methodTitle: "From opportunity signal to scalable corridor playbook.",
    methodStage: "Six-stage process",
    methodStageTitle: "Research, compliance, alignment, execution.",
    methodLead: "HelioGate integrates validation, supplier and buyer review, documentation integrity, community considerations, and corridor-specific regulation before execution deepens.",
    networkEyebrow: "Partners, impact & CSR",
    networkTitle: "Build the expert network around sustainable corridor execution.",
    partnerEcosystem: "Partner ecosystem",
    partnerTitle: "Client and partner categories.",
    csr: "Community & sustainability",
    csrTitle: "Development-aligned corridor work.",
    csrBody: "HelioGate evaluates opportunities through sustainability, safety, local participation, compliance, and equitable stakeholder benefit. The platform is designed to support national development agendas while maintaining disciplined private-sector execution.",
    join: "Join Our Network",
    insightsEyebrow: "Insights & Publications",
    insightsTitle: "Corridor intelligence, sector reports, and execution notes.",
    insightsLead: "Search public summaries by sector, corridor theme, method, or publication type. Full briefs are released selectively to qualified counterparties.",
    search: "Search by sector, corridor, report, or topic",
    noResults: "No public resource matched that search.",
    requestBrief: "Request brief",
  },
  fr: {
    servicesEyebrow: "Services et solutions",
    servicesTitle: "Lignes de services structurees avec des pages d'execution dediees.",
    servicesLead: "Chaque groupe de services dispose de sa propre page detaillee couvrant le perimetre, le processus, la gouvernance et les livrables attendus.",
    servicesGroup: "Groupes de services",
    servicesIndexTitle: "Aucun menu deroulant. Chaque service ouvre sa propre page.",
    qualified: "Engagement qualifie",
    mandate: "Commencer par un mandat, pas par un menu.",
    request: "Demander un engagement",
    backServices: "Services",
    overview: "Vue d'ensemble",
    overviewTitle: "Ce que couvre ce service.",
    scope: "Perimetre detaille",
    scopeTitle: "De la definition du mandat a l'execution controlee.",
    process: "Processus de livraison",
    processTitle: "Comment le travail progresse.",
    governance: "Controles de gouvernance",
    outputs: "Livrables types",
    next: "Service suivant",
    readNext: "Lire la suite",
    engage: "Engager",
    visual: "Visuel d'execution",
    context: "Contexte interactif",
    service: "Service",
    methodEyebrow: "Methodologie d'execution",
    methodTitle: "Du signal d'opportunite au playbook de corridor scalable.",
    methodStage: "Processus en six etapes",
    methodStageTitle: "Recherche, conformite, alignement, execution.",
    methodLead: "HelioGate integre validation, revue fournisseurs et acheteurs, integrite documentaire, considerations communautaires et regulation specifique au corridor avant d'approfondir l'execution.",
    networkEyebrow: "Partenaires, impact et RSE",
    networkTitle: "Construire le reseau d'experts autour d'une execution durable des corridors.",
    partnerEcosystem: "Ecosysteme de partenaires",
    partnerTitle: "Categories de clients et partenaires.",
    csr: "Communaute et durabilite",
    csrTitle: "Travail de corridor aligne sur le developpement.",
    csrBody: "HelioGate evalue les opportunites selon la durabilite, la securite, la participation locale, la conformite et le benefice equitable des parties prenantes.",
    join: "Rejoindre notre reseau",
    insightsEyebrow: "Analyses et publications",
    insightsTitle: "Intelligence de corridor, rapports sectoriels et notes d'execution.",
    insightsLead: "Recherchez les resumes publics par secteur, theme de corridor, methode ou type de publication. Les notes completes sont diffusees aux contreparties qualifiees.",
    search: "Rechercher par secteur, corridor, rapport ou sujet",
    noResults: "Aucune ressource publique ne correspond a cette recherche.",
    requestBrief: "Demander la note",
  },
  zh: {
    servicesEyebrow: "服务与解决方案",
    servicesTitle: "面向执行的结构化服务线。",
    servicesLead: "每个服务组都有独立详情页，说明范围、交付流程、治理控制和预期成果。",
    servicesGroup: "服务组",
    servicesIndexTitle: "不使用下拉菜单。每项服务进入独立页面。",
    qualified: "合格合作",
    mandate: "从明确授权开始，而不是从菜单开始。",
    request: "请求合作",
    backServices: "服务",
    overview: "概览",
    overviewTitle: "本服务涵盖的内容。",
    scope: "详细范围",
    scopeTitle: "从授权定义到受控执行。",
    process: "交付流程",
    processTitle: "工作如何推进。",
    governance: "治理控制",
    outputs: "典型成果",
    next: "下一项服务",
    readNext: "继续阅读",
    engage: "合作",
    visual: "执行视觉",
    context: "互动场景",
    service: "服务",
    methodEyebrow: "执行方法",
    methodTitle: "从机会信号到可扩展的走廊执行手册。",
    methodStage: "六阶段流程",
    methodStageTitle: "研究、合规、对齐、执行。",
    methodLead: "HelioGate在深化执行前整合验证、供应商和买方审查、文件完整性、社区因素以及走廊特定监管。",
    networkEyebrow: "合作伙伴、影响与CSR",
    networkTitle: "围绕可持续走廊执行建立专家网络。",
    partnerEcosystem: "合作生态",
    partnerTitle: "客户与合作伙伴类别。",
    csr: "社区与可持续发展",
    csrTitle: "与发展目标一致的走廊工作。",
    csrBody: "HelioGate从可持续性、安全、本地参与、合规和公平利益角度评估机会。",
    join: "加入我们的网络",
    insightsEyebrow: "洞察与出版物",
    insightsTitle: "走廊情报、行业报告和执行笔记。",
    insightsLead: "按行业、走廊主题、方法或出版类型搜索公开摘要。完整简报仅向合格交易方发布。",
    search: "按行业、走廊、报告或主题搜索",
    noResults: "没有匹配的公开资源。",
    requestBrief: "请求简报",
  },
  ar: {
    servicesEyebrow: "الخدمات والحلول",
    servicesTitle: "خطوط خدمات منظمة بصفحات تنفيذ مخصصة.",
    servicesLead: "لكل مجموعة خدمات صفحة تفصيلية تغطي النطاق وعملية التسليم وضوابط الحوكمة والمخرجات المتوقعة.",
    servicesGroup: "مجموعات الخدمات",
    servicesIndexTitle: "لا توجد قوائم منسدلة. كل خدمة تفتح صفحة مستقلة.",
    qualified: "تواصل مؤهل",
    mandate: "نبدأ من التفويض وليس من قائمة خدمات عامة.",
    request: "طلب تواصل",
    backServices: "الخدمات",
    overview: "نظرة عامة",
    overviewTitle: "ما الذي تغطيه هذه الخدمة.",
    scope: "النطاق التفصيلي",
    scopeTitle: "من تعريف التفويض إلى التنفيذ المنضبط.",
    process: "عملية التسليم",
    processTitle: "كيف يتقدم العمل.",
    governance: "ضوابط الحوكمة",
    outputs: "المخرجات النموذجية",
    next: "الخدمة التالية",
    readNext: "اقرأ التالي",
    engage: "تواصل",
    visual: "مشهد التنفيذ",
    context: "سياق تفاعلي",
    service: "خدمة",
    methodEyebrow: "منهجية التنفيذ",
    methodTitle: "من إشارة الفرصة إلى دليل ممر قابل للتوسع.",
    methodStage: "عملية من ست مراحل",
    methodStageTitle: "بحث وامتثال ومواءمة وتنفيذ.",
    methodLead: "تدمج HelioGate التحقق ومراجعة الموردين والمشترين وسلامة الوثائق واعتبارات المجتمع والتنظيم الخاص بالممر قبل تعميق التنفيذ.",
    networkEyebrow: "الشركاء والأثر والمسؤولية المجتمعية",
    networkTitle: "بناء شبكة الخبراء حول تنفيذ مستدام للممرات.",
    partnerEcosystem: "منظومة الشركاء",
    partnerTitle: "فئات العملاء والشركاء.",
    csr: "المجتمع والاستدامة",
    csrTitle: "عمل ممرات متوافق مع التنمية.",
    csrBody: "تقيّم HelioGate الفرص عبر الاستدامة والسلامة والمشاركة المحلية والامتثال والمنفعة العادلة لأصحاب المصلحة.",
    join: "انضم إلى شبكتنا",
    insightsEyebrow: "الرؤى والمنشورات",
    insightsTitle: "استخبارات الممرات وتقارير القطاعات وملاحظات التنفيذ.",
    insightsLead: "ابحث في الملخصات العامة حسب القطاع أو موضوع الممر أو المنهجية أو نوع المنشور. تصدر المذكرات الكاملة للأطراف المؤهلة.",
    search: "ابحث حسب القطاع أو الممر أو التقرير أو الموضوع",
    noResults: "لا توجد موارد عامة مطابقة.",
    requestBrief: "طلب المذكرة",
  },
} as const;

export const siteUi = (lang: Lang) => ui[lang] ?? ui.en;

export const serviceText = {
  en: {
    "cross-border-transaction-structuring": {
      title: "Cross-Border Transaction Structuring",
      summary: "End-to-end transaction architecture for cross-border opportunities where counterparties, documentation, capital, route logic, and regulatory conditions must align before execution.",
    },
    "construction-electromechanical-turnkeys": {
      title: "Construction & Electromechanical Turnkeys",
      summary: "Structured coordination for turnkey construction, MEP, electromechanical, industrial, and infrastructure-linked packages from design through commissioning.",
    },
    "ict-consultancy-digital-solutions": {
      title: "ICT Consultancy & Digital Solutions",
      summary: "Digital infrastructure, telecom systems, IoT, software platforms, fintech/payment rails, and e-government solution design for corridor operations.",
    },
    "education-sector-software": {
      title: "Education-Sector Software",
      summary: "Learning platforms, school operations systems, digital content workflows, reporting tools, and implementation support for education institutions.",
    },
    "facilities-security-management": {
      title: "Facilities & Security Management",
      summary: "Facilities operations, premium security coordination, SOPs, workforce controls, compliance reporting, and service-level management for strategic assets.",
    },
    "financial-fund-management": {
      title: "Financial & Fund Management",
      summary: "Investment advisory, fund structuring, capital mobilization, payment coordination, reporting, and risk controls tied to validated opportunities.",
    },
  },
  fr: {
    "cross-border-transaction-structuring": {
      title: "Structuration de transactions transfrontalieres",
      summary: "Architecture de bout en bout pour les opportunites transfrontalieres ou contreparties, documentation, capital, route et regulation doivent etre alignes avant execution.",
    },
    "construction-electromechanical-turnkeys": {
      title: "Construction et projets electromecaniques cle en main",
      summary: "Coordination structuree de projets de construction, MEP, electromechaniques, industriels et infrastructurels, de la conception a la mise en service.",
    },
    "ict-consultancy-digital-solutions": {
      title: "Conseil TIC et solutions numeriques",
      summary: "Infrastructure numerique, telecoms, IoT, logiciels, rails fintech et solutions e-gouvernementales pour les operations de corridor.",
    },
    "education-sector-software": {
      title: "Logiciels pour le secteur education",
      summary: "Plateformes d'apprentissage, systemes de gestion scolaire, contenus numeriques, reporting et appui a la mise en oeuvre.",
    },
    "facilities-security-management": {
      title: "Gestion des installations et de la securite",
      summary: "Operations de sites, securite premium, procedures, controles d'effectifs, reporting de conformite et gestion de niveaux de service.",
    },
    "financial-fund-management": {
      title: "Gestion financiere et de fonds",
      summary: "Conseil en investissement, structuration de fonds, mobilisation de capital, coordination des paiements, reporting et controles de risque.",
    },
  },
  zh: {
    "cross-border-transaction-structuring": { title: "跨境交易结构设计", summary: "为跨境机会建立端到端交易架构，使交易方、文件、资本、路线和监管条件在执行前完成对齐。" },
    "construction-electromechanical-turnkeys": { title: "建筑与机电交钥匙项目", summary: "从设计、采购、安装到调试，协调建筑、MEP、机电、工业和基础设施相关项目。" },
    "ict-consultancy-digital-solutions": { title: "ICT咨询与数字解决方案", summary: "面向走廊运营的数字基础设施、通信系统、物联网、软件平台、金融科技支付和电子政务方案。" },
    "education-sector-software": { title: "教育行业软件", summary: "学习平台、学校运营系统、数字内容流程、报告工具以及教育机构实施支持。" },
    "facilities-security-management": { title: "设施与安全管理", summary: "设施运营、高端安保协调、SOP、人员控制、合规报告以及战略资产服务管理。" },
    "financial-fund-management": { title: "金融与基金管理", summary: "投资咨询、基金结构、资本动员、支付协调、报告以及与已验证机会相关的风险控制。" },
  },
  ar: {
    "cross-border-transaction-structuring": { title: "هيكلة المعاملات العابرة للحدود", summary: "تصميم كامل للمعاملات العابرة للحدود حيث يجب مواءمة الأطراف والوثائق ورأس المال والمسار والمتطلبات التنظيمية قبل التنفيذ." },
    "construction-electromechanical-turnkeys": { title: "الإنشاءات والمشاريع الكهروميكانيكية الجاهزة", summary: "تنسيق منظم لمشاريع البناء وMEP والحزم الصناعية والبنية التحتية من التصميم حتى التشغيل." },
    "ict-consultancy-digital-solutions": { title: "استشارات تقنية وحلول رقمية", summary: "بنية رقمية واتصالات وإنترنت الأشياء ومنصات برمجية وحلول دفع وحكومة إلكترونية لعمليات الممرات." },
    "education-sector-software": { title: "برمجيات قطاع التعليم", summary: "منصات تعلم وأنظمة تشغيل مدرسية ومحتوى رقمي وأدوات تقارير ودعم تنفيذ للمؤسسات التعليمية." },
    "facilities-security-management": { title: "إدارة المرافق والأمن", summary: "تشغيل مرافق وتنسيق أمني وإجراءات تشغيل وضوابط فرق العمل وتقارير امتثال وإدارة مستويات الخدمة." },
    "financial-fund-management": { title: "الإدارة المالية وإدارة الصناديق", summary: "استشارات استثمار وهيكلة صناديق وتعبئة رأس مال وتنسيق مدفوعات وتقارير وضوابط مخاطر مرتبطة بفرص موثقة." },
  },
} as const;

const serviceDetailFallback = {
  fr: {
    overview: "HelioGate definit le mandat, valide les exigences operationnelles, coordonne les contreparties et structure un chemin d'execution controle pour ce service.",
    items: ["Analyse des besoins", "Architecture de solution", "Selection des partenaires", "Gouvernance de deploiement"],
    scope: [
      ["Definition du mandat", "Clarifier les objectifs, les roles, la geographie, les contraintes et les conditions d'execution."],
      ["Validation des contreparties", "Verifier capacite, mandat, documentation, credibilite operationnelle et disponibilite."],
      ["Architecture d'execution", "Structurer les etapes, les responsabilites, les flux documentaires, les paiements et les jalons."],
      ["Coordination et reporting", "Aligner les parties prenantes et maintenir une gouvernance claire jusqu'aux livrables."],
    ],
    process: ["Reception du mandat", "Analyse", "Selection des partenaires", "Plan d'execution", "Gouvernance", "Support d'adoption"],
    governance: ["Revue de conformite", "Controles documentaires", "Reporting des niveaux de service", "Gestion des risques"],
    outputs: ["Note de cadrage", "Carte d'integration", "Feuille de route", "Modele de gouvernance"],
  },
  zh: {
    overview: "HelioGate会界定授权、验证运营要求、协调交易方，并为该服务建立受控的执行路径。",
    items: ["需求评估", "方案架构", "伙伴选择", "部署治理"],
    scope: [
      ["授权定义", "明确目标、角色、地域、约束和执行条件。"],
      ["交易方验证", "审查能力、授权、文件、运营可信度和可用性。"],
      ["执行架构", "设计步骤、责任、文件流、支付路径和里程碑。"],
      ["协调与报告", "对齐利益相关方，并保持清晰治理直到交付。"],
    ],
    process: ["授权接收", "需求分析", "伙伴选择", "执行计划", "治理控制", "采用支持"],
    governance: ["合规审查", "文件控制", "服务级别报告", "风险管理"],
    outputs: ["范围说明", "集成地图", "部署路线图", "治理模型"],
  },
  ar: {
    overview: "تحدد HelioGate التفويض وتتحقق من المتطلبات التشغيلية وتنسق الأطراف وتبني مسار تنفيذ منضبط لهذه الخدمة.",
    items: ["تقييم الاحتياج", "هندسة الحل", "اختيار الشركاء", "حوكمة النشر"],
    scope: [
      ["تعريف التفويض", "توضيح الأهداف والأدوار والجغرافيا والقيود وشروط التنفيذ."],
      ["التحقق من الأطراف", "مراجعة القدرة والتفويض والوثائق والمصداقية التشغيلية والجاهزية."],
      ["هندسة التنفيذ", "تصميم الخطوات والمسؤوليات وتدفق الوثائق ومسار الدفع والمراحل."],
      ["التنسيق والتقارير", "مواءمة أصحاب المصلحة والحفاظ على حوكمة واضحة حتى التسليم."],
    ],
    process: ["استقبال التفويض", "تحليل الاحتياج", "اختيار الشركاء", "خطة التنفيذ", "ضوابط الحوكمة", "دعم التبني"],
    governance: ["مراجعة الامتثال", "ضوابط الوثائق", "تقارير مستوى الخدمة", "إدارة المخاطر"],
    outputs: ["مذكرة نطاق", "خريطة تكامل", "خارطة طريق", "نموذج حوكمة"],
  },
} as const;

type ServiceDetailShape = {
  overview?: string;
  items?: string[];
  scope?: { title: string; body: string }[];
  process?: string[];
  governance?: string[];
  outputs?: string[];
};

export const localizeService = <T extends { slug: string; title: string; summary: string } & ServiceDetailShape>(service: T, lang: Lang): T => {
  const localized = serviceText[lang]?.[service.slug as keyof typeof serviceText.en];
  const detail = lang === "en" ? undefined : serviceDetailFallback[lang];
  if (!localized && !detail) return service;

  return {
    ...service,
    ...localized,
    ...(detail && service.overview ? { overview: detail.overview } : {}),
    ...(detail && service.items ? { items: detail.items.slice(0, service.items.length) } : {}),
    ...(detail && service.scope ? { scope: detail.scope.slice(0, service.scope.length).map(([title, body]) => ({ title, body })) } : {}),
    ...(detail && service.process ? { process: detail.process.slice(0, service.process.length) } : {}),
    ...(detail && service.governance ? { governance: detail.governance.slice(0, service.governance.length) } : {}),
    ...(detail && service.outputs ? { outputs: detail.outputs.slice(0, service.outputs.length) } : {}),
  } as T;
};

const sectorTitles = {
  fr: {
    "mining-minerals": "Mines et mineraux",
    "construction-electromechanical": "Construction et electromechanique",
    "ict-telecom-fintech": "TIC, telecoms et fintech",
    "education-software": "Logiciels education",
    "facilities-security": "Gestion des installations et securite",
    "management-consulting": "Conseil en management",
    "fund-management": "Gestion financiere et de fonds",
    "import-export": "Services import / export",
    "agriculture-agribusiness": "Agriculture et agro-industrie",
    "energy-utilities": "Energie et services publics",
    "hospitality-tourism": "Hotellerie et tourisme",
    "health-logistics": "Sante et logistique",
  },
  zh: {
    "mining-minerals": "采矿与矿产",
    "construction-electromechanical": "建筑与机电",
    "ict-telecom-fintech": "ICT、电信与金融科技",
    "education-software": "教育软件",
    "facilities-security": "设施与安全管理",
    "management-consulting": "管理咨询",
    "fund-management": "金融与基金管理",
    "import-export": "进出口服务",
    "agriculture-agribusiness": "农业与农商",
    "energy-utilities": "能源与公用事业",
    "hospitality-tourism": "酒店与旅游",
    "health-logistics": "医疗与物流",
  },
  ar: {
    "mining-minerals": "التعدين والمعادن",
    "construction-electromechanical": "الإنشاءات والكهروميكانيك",
    "ict-telecom-fintech": "تقنية المعلومات والاتصالات والتقنية المالية",
    "education-software": "برمجيات التعليم",
    "facilities-security": "إدارة المرافق والأمن",
    "management-consulting": "الاستشارات الإدارية",
    "fund-management": "الإدارة المالية والصناديق",
    "import-export": "خدمات الاستيراد والتصدير",
    "agriculture-agribusiness": "الزراعة والأعمال الزراعية",
    "energy-utilities": "الطاقة والمرافق",
    "hospitality-tourism": "الضيافة والسياحة",
    "health-logistics": "الصحة واللوجستيات",
  },
} as const;

const localizedSummaries = {
  fr: "Structuration sectorielle avec validation des acteurs, coordination des partenaires, documentation controlee et alignement corridor avant execution.",
  zh: "面向行业的结构化支持，在执行前完成交易方验证、伙伴协调、文件控制和走廊对齐。",
  ar: "هيكلة قطاعية تشمل التحقق من الأطراف وتنسيق الشركاء وضبط الوثائق ومواءمة الممر قبل التنفيذ.",
} as const;

export const localizeSector = <T extends { slug: string; title: string; summary: string; opportunity: string; offerings: string[] }>(sector: T, lang: Lang): T => {
  if (lang === "en") return sector;
  const title = sectorTitles[lang]?.[sector.slug as keyof typeof sectorTitles.fr];
  return {
    ...sector,
    title: title ?? sector.title,
    summary: localizedSummaries[lang] ?? sector.summary,
    opportunity: localizedSummaries[lang] ?? sector.opportunity,
    offerings: sector.offerings.map((offering, index) => {
      const fallback = {
        fr: ["Validation et recherche", "Coordination des partenaires", "Documentation et conformite", "Execution et reporting"],
        zh: ["验证与研究", "伙伴协调", "文件与合规", "执行与报告"],
        ar: ["التحقق والبحث", "تنسيق الشركاء", "الوثائق والامتثال", "التنفيذ والتقارير"],
      }[lang];
      return fallback?.[index] ?? offering;
    }),
  };
};

const steps = {
  fr: [
    ["Reception de l'opportunite", "Definir le mandat, les roles, la geographie, le signal commercial et les documents requis avant toute introduction."],
    ["Recherche et validation", "Verifier fournisseurs, acheteurs, capacite, logique de route, contraintes juridiques et credibilite operationnelle."],
    ["Structuration", "Concevoir la sequence de transaction, les controles de risque, la documentation, les paiements et la gouvernance."],
    ["Alignement", "Coordonner operateurs, acheteurs, capital, regulateurs, prestataires et partenaires locaux autour d'un seul chemin."],
    ["Execution", "Piloter jalons, integrite documentaire, actions des contreparties, conformite et regulation propre au corridor."],
    ["Passage a l'echelle", "Transformer l'execution repetable en playbooks de corridor, reseaux partenaires et expansion durable."],
  ],
  zh: [
    ["机会接收", "在任何市场介绍前明确授权、角色、地域、商业信号和所需文件。"],
    ["研究与验证", "验证供应方、买方、产能、路线逻辑、法律约束、社区因素和运营可信度。"],
    ["结构设计", "设计交易顺序、风险控制、文件栈、支付路径和治理模型。"],
    ["对齐", "围绕单一执行路径协调运营方、买方、资本伙伴、监管方、服务商和本地伙伴。"],
    ["执行", "管理里程碑、文件完整性、交易方行动、合规节点和走廊监管。"],
    ["扩展", "将可重复执行转化为走廊手册、伙伴网络和可持续扩张机会。"],
  ],
  ar: [
    ["استقبال الفرصة", "تحديد التفويض والأدوار والجغرافيا والإشارة التجارية والوثائق قبل أي تعريف بالسوق."],
    ["البحث والتحقق", "التحقق من الموردين والمشترين والقدرة والمسار والقيود القانونية والمصداقية التشغيلية."],
    ["الهيكلة", "تصميم تسلسل المعاملة وضوابط المخاطر وحزمة الوثائق ومسار الدفع ونموذج الحوكمة."],
    ["المواءمة", "تنسيق المشغلين والمشترين ورأس المال والجهات التنظيمية ومقدمي الخدمات والشركاء المحليين."],
    ["التنفيذ", "إدارة المراحل وسلامة الوثائق وإجراءات الأطراف ونقاط الامتثال وتنظيمات الممر."],
    ["التوسع", "تحويل التنفيذ المتكرر إلى أدلة ممرات وشبكات شركاء وفرص توسع مستدامة."],
  ],
} as const;

export const localizeExecutionStep = <T extends { title: string; body: string }>(step: T, index: number, lang: Lang): T => {
  const localized = lang === "en" ? undefined : steps[lang]?.[index];
  return localized ? { ...step, title: localized[0], body: localized[1] } : step;
};

const valueSets = {
  fr: [
    ["Integrite", "Pas de circulation ouverte des dossiers, pas de positionnement speculatif et pas de divulgation sans pertinence."],
    ["Durabilite", "Les opportunites sont evaluees selon la durabilite du corridor, l'environnement et le benefice communautaire."],
    ["Excellence", "La documentation, la validation et la discipline d'execution sont traitees comme une infrastructure essentielle."],
    ["Partenariat communautaire", "Les operateurs locaux, institutions et priorites de developpement sont consideres dans chaque corridor."],
    ["Innovation", "Les systemes numeriques, l'intelligence operationnelle et les nouveaux modeles de capital renforcent l'execution."],
    ["Securite", "Les risques operationnels, securitaires, conformite et parties prenantes sont identifies tot et geres."],
  ],
  zh: [
    ["诚信", "不公开流转交易，不做投机定位，不进行无关披露。"],
    ["可持续", "按走廊耐久性、环境状态和社区收益评估机会。"],
    ["卓越", "文件、验证和执行纪律被视为核心基础设施。"],
    ["社区伙伴关系", "每条走廊都考虑本地运营方、机构和发展优先事项。"],
    ["创新", "数字系统、情报流程和新资本模型支持更好的执行。"],
    ["安全", "运营、安全、合规和利益相关方风险会尽早识别并管理。"],
  ],
  ar: [
    ["النزاهة", "لا تداول مفتوح للفرص ولا تموضع مضاربي ولا إفصاح بلا صلة."],
    ["الاستدامة", "تقيم الفرص حسب استدامة الممر والأثر البيئي والمنفعة المجتمعية."],
    ["التميز", "تعد الوثائق والتحقق وانضباط التنفيذ بنية أساسية للعمل."],
    ["الشراكة المجتمعية", "تؤخذ الجهات المحلية والمؤسسات وأولويات التنمية في الاعتبار في كل ممر."],
    ["الابتكار", "تدعم الأنظمة الرقمية وسير عمل المعلومات ونماذج رأس المال الجديدة تنفيذًا أفضل."],
    ["السلامة", "تظهر مخاطر التشغيل والأمن والامتثال وأصحاب المصلحة مبكرًا وتدار بعناية."],
  ],
} as const;

export const localizeValue = <T extends { title: string; body: string }>(value: T, index: number, lang: Lang): T => {
  const localized = lang === "en" ? undefined : valueSets[lang]?.[index];
  return localized ? { ...value, title: localized[0], body: localized[1] } : value;
};

const metricLabels = {
  fr: ["Juridictions de contreparties", "Corridors actifs suivis", "Domaines sectoriels couverts", "Validation avant capital"],
  zh: ["交易方司法辖区", "监测中的活跃走廊", "覆盖行业领域", "资本进入前验证"],
  ar: ["ولايات الأطراف المقابلة", "ممرات نشطة قيد المتابعة", "مجالات قطاعية مغطاة", "التحقق قبل رأس المال"],
} as const;

export const localizeMetric = <T extends { value: string; label: string }>(metric: T, index: number, lang: Lang): T => {
  const label = lang === "en" ? undefined : metricLabels[lang]?.[index];
  return label ? { ...metric, label } : metric;
};

const partners = {
  fr: ["Agences gouvernementales", "Operateurs", "Investisseurs", "Partenaires de developpement", "ONG", "Fournisseurs techniques"],
  zh: ["政府机构", "运营方", "投资者", "发展伙伴", "非政府组织", "技术供应商"],
  ar: ["الجهات الحكومية", "المشغلون", "المستثمرون", "شركاء التنمية", "المنظمات غير الحكومية", "الموردون التقنيون"],
} as const;

export const localizePartner = (partner: string, index: number, lang: Lang) => {
  return lang === "en" ? partner : partners[lang]?.[index] ?? partner;
};

const resourceSets = {
  fr: [
    ["Note corridor", "Mines", "Pourquoi la structure corridor precede le capital"],
    ["Rapport sectoriel", "TIC", "Rails numeriques pour l'execution transfrontaliere"],
    ["Methode", "Commerce", "L'integrite documentaire comme infrastructure de risque"],
    ["Note", "Construction", "Preparation cle en main dans les corridors industriels"],
    ["Livre blanc", "Capital", "Participation structuree apres validation"],
    ["Note terrain", "Installations", "Fiabilite operationnelle autour des actifs strategiques"],
  ],
  zh: [
    ["走廊简报", "采矿", "为什么走廊结构先于资本"],
    ["行业报告", "ICT", "跨境执行的数字轨道"],
    ["方法", "贸易", "文件完整性作为风险基础设施"],
    ["简报", "建筑", "工业走廊中的交钥匙准备度"],
    ["白皮书", "资本", "验证后的结构化参与"],
    ["现场笔记", "设施", "战略资产周边的运营可靠性"],
  ],
  ar: [
    ["مذكرة ممر", "التعدين", "لماذا تسبق هيكلة الممر رأس المال"],
    ["تقرير قطاعي", "تقنية المعلومات", "ال rails الرقمية للتنفيذ العابر للحدود"],
    ["منهجية", "التجارة", "سلامة الوثائق كبنية للمخاطر"],
    ["موجز", "الإنشاءات", "جاهزية التسليم الجاهز عبر الممرات الصناعية"],
    ["ورقة بيضاء", "رأس المال", "المشاركة المنظمة بعد التحقق"],
    ["ملاحظة ميدانية", "المرافق", "الموثوقية التشغيلية حول الأصول الاستراتيجية"],
  ],
} as const;

export const localizeResource = <T extends { cat: string; sector: string; title: string }>(resource: T, index: number, lang: Lang): T => {
  const localized = lang === "en" ? undefined : resourceSets[lang]?.[index];
  return localized ? { ...resource, cat: localized[0], sector: localized[1], title: localized[2] } : resource;
};

const differentiatorText = {
  fr: {
    "execution-focused": ["Centre sur l'execution, pas speculatif", "HelioGate avance les opportunites selon des conditions executables, pas selon le bruit du marche."],
    "no-open-deal-circulation": ["Pas de circulation ouverte des dossiers", "Les opportunites ne sont pas diffusees dans des reseaux ouverts. L'acces depend du role, de la pertinence et de l'execution."],
    "structured-validation": ["Validation structuree avant le capital", "La validation intervient avant l'implication du capital afin que les incertitudes de base soient resolues tot."],
    "corridor-intelligence": ["Approche d'intelligence par corridor", "HelioGate evalue les opportunites par les routes, juridictions, acheteurs, logistique et timing qui rendent l'execution possible."],
    "selective-engagement": ["Engagement selectif avec partenaires qualifies", "HelioGate travaille avec des participants disposant d'une capacite, d'un mandat, d'un acces operationnel ou d'un capital pertinent."],
  },
  zh: {
    "execution-focused": ["聚焦执行，而非投机", "HelioGate围绕可执行条件推进机会，而不是市场噪音或抽象交易兴趣。"],
    "no-open-deal-circulation": ["不公开流转交易", "机会不会被广播到松散网络，访问取决于角色、相关性和执行匹配。"],
    "structured-validation": ["资本进入前结构化验证", "验证先于资本介入，避免投资者和运营方在后期解决基础不确定性。"],
    "corridor-intelligence": ["基于走廊的情报方法", "HelioGate通过路线、司法辖区、买方、物流和时机评估机会。"],
    "selective-engagement": ["仅与合格伙伴选择性合作", "HelioGate与具备相关能力、授权、运营入口或资本匹配的参与方合作。"],
  },
  ar: {
    "execution-focused": ["مرتكز على التنفيذ لا المضاربة", "تتقدم HelioGate بالفرص وفق شروط قابلة للتنفيذ لا وفق ضجيج السوق."],
    "no-open-deal-circulation": ["لا تداول مفتوح للصفقات", "لا تبث الفرص في شبكات مفتوحة. يعتمد الوصول على الدور والملاءمة والتنفيذ."],
    "structured-validation": ["تحقق منظم قبل رأس المال", "يحدث التحقق قبل دخول رأس المال حتى لا تعالج الأطراف الغموض الأساسي متأخرًا."],
    "corridor-intelligence": ["نهج استخبارات قائم على الممرات", "تقيم HelioGate الفرص عبر المسار والولاية والمشتري واللوجستيات والتوقيت."],
    "selective-engagement": ["تواصل انتقائي مع شركاء مؤهلين", "تعمل HelioGate مع مشاركين لديهم قدرة أو تفويض أو وصول تشغيلي أو مواءمة رأسمالية."],
  },
} as const;

const differentiatorDetailFallback = {
  fr: {
    proof: [
      "Chaque mandat est teste selon la preparation des contreparties, la realite operationnelle, la documentation et les contraintes du corridor.",
      "Le capital n'est introduit qu'apres clarification suffisante de la logique d'execution.",
      "Le modele favorise moins d'opportunites, mais mieux qualifiees, plutot qu'une large circulation.",
    ],
    process: ["Definir le mandat", "Valider les faits", "Cartographier les dependances", "Avancer les chemins qualifies"],
    metrics: [["Valide", "Avant approfondissement"], ["Controle", "Acces par pertinence"], ["Direct", "Parcours de contrepartie"]],
    outcome: "Le resultat est un environnement d'execution plus discipline ou les parties savent ce qui doit etre vrai avant d'engager temps, capital et reputation.",
  },
  zh: {
    proof: [
      "每项授权都会按交易方准备度、运营事实、文件路径和走廊约束进行测试。",
      "只有在执行逻辑足够清晰后，资本才会进入对话。",
      "平台优先选择更少但更合格的机会，而不是广泛流转。",
    ],
    process: ["定义授权", "验证运营事实", "绘制执行依赖", "推进合格路径"],
    metrics: [["已验证", "深化前完成"], ["受控", "按相关性访问"], ["直接", "交易方路径"]],
    outcome: "结果是更有纪律的执行环境，各方在投入时间、资本和声誉前清楚需要满足的条件。",
  },
  ar: {
    proof: [
      "يتم اختبار كل تفويض حسب جاهزية الأطراف والواقع التشغيلي ومسار الوثائق وقيود الممر.",
      "لا يدخل رأس المال إلا بعد وضوح منطق التنفيذ بدرجة كافية.",
      "يفضل النموذج فرصًا أقل وأكثر تأهيلاً بدل التداول الواسع.",
    ],
    process: ["تعريف التفويض", "التحقق من الحقائق", "رسم تبعيات التنفيذ", "تقديم المسارات المؤهلة"],
    metrics: [["متحقق", "قبل التعمق"], ["منضبط", "وصول حسب الصلة"], ["مباشر", "مسار الأطراف"]],
    outcome: "النتيجة بيئة تنفيذ أكثر انضباطًا يعرف فيها المشاركون ما يجب إثباته قبل التزام الوقت ورأس المال والسمعة.",
  },
} as const;

type DifferentiatorDetailShape = {
  proof?: string[];
  process?: string[];
  metrics?: { value: string; label: string }[];
  outcome?: string;
};

export const localizeDifferentiator = <T extends { slug: string; title: string; short: string } & DifferentiatorDetailShape>(item: T, lang: Lang): T => {
  const localized = lang === "en" ? undefined : differentiatorText[lang]?.[item.slug as keyof typeof differentiatorText.fr];
  const detail = lang === "en" ? undefined : differentiatorDetailFallback[lang];
  if (!localized && !detail) return item;

  return {
    ...item,
    ...(localized ? { title: localized[0], short: localized[1] } : {}),
    ...(detail && item.proof ? { proof: detail.proof.slice(0, item.proof.length) } : {}),
    ...(detail && item.process ? { process: detail.process.slice(0, item.process.length) } : {}),
    ...(detail && item.metrics ? { metrics: detail.metrics.slice(0, item.metrics.length).map(([value, label]) => ({ value, label })) } : {}),
    ...(detail && item.outcome ? { outcome: detail.outcome } : {}),
  } as T;
};
