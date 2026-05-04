import type { Lang } from "@/i18n/translations";

type Topic = {
  keywords: string[];
  answers: Record<Lang, string>;
};

const fallbackLang = (lang: Lang): Lang => (["en", "fr", "zh", "ar"].includes(lang) ? lang : "en");

const topics: Topic[] = [
  {
    keywords: ["platform", "who", "about", "heliogate", "mission", "what do you do"],
    answers: {
      en: "HelioGate Investment Group is a cross-border execution platform. It structures real opportunities by aligning operators, buyers, capital partners, documentation, and corridor-specific execution conditions before a transaction is advanced.",
      fr: "HelioGate Investment Group est une plateforme d'execution transfrontaliere. Elle structure des opportunites reelles en alignant operateurs, acheteurs, partenaires financiers, documentation et conditions d'execution propres aux corridors avant l'avancement d'une transaction.",
      zh: "HelioGate Investment Group 是一个跨境执行平台。它在推进交易前，对齐运营方、买方、资本伙伴、文件和通道特定执行条件，从而结构化真实机会。",
      ar: "HelioGate Investment Group منصة تنفيذ عابرة للحدود. تقوم بهيكلة الفرص الحقيقية عبر مواءمة المشغلين والمشترين وشركاء رأس المال والوثائق وشروط تنفيذ الممر قبل تقدم الصفقة.",
    },
  },
  {
    keywords: ["sector", "mining", "minerals", "trade", "infrastructure", "commodity", "commodities"],
    answers: {
      en: "HelioGate focuses on mining and minerals, strategic trade, and corridor-linked infrastructure. The work is selective and centered on opportunities where verification, capital alignment, logistics, and cross-border documentation all matter.",
      fr: "HelioGate intervient dans le minier et les mineraux, le commerce strategique et les infrastructures liees aux corridors. Le travail est selectif et centre sur les opportunites ou la verification, l'alignement du capital, la logistique et la documentation transfrontaliere sont essentiels.",
      zh: "HelioGate 关注采矿与矿产、战略贸易以及通道相关基础设施。工作具有选择性，聚焦于验证、资本对齐、物流和跨境文件都重要的机会。",
      ar: "تركز HelioGate على التعدين والمعادن والتجارة الاستراتيجية والبنية التحتية المرتبطة بالممرات. العمل انتقائي ويركز على الفرص التي تتطلب التحقق ومواءمة رأس المال واللوجستيات والوثائق العابرة للحدود.",
    },
  },
  {
    keywords: ["corridor", "corridors", "route", "jurisdiction", "cross-border", "cross border"],
    answers: {
      en: "Corridor intelligence means structured visibility into where supply, demand, regulation, logistics, and counterparties can align. HelioGate introduces corridor briefs only when there is a credible path to execution.",
      fr: "L'intelligence de corridor donne une visibilite structuree sur l'alignement possible entre offre, demande, reglementation, logistique et contreparties. HelioGate ne presente des notes de corridor que lorsqu'un chemin d'execution credible existe.",
      zh: "通道情报是对供应、需求、监管、物流和交易方能否对齐的结构化可见性。只有存在可信执行路径时，HelioGate 才会发布通道简报。",
      ar: "استخبارات الممر تعني رؤية منظمة لمواضع توافق العرض والطلب والتنظيم واللوجستيات والأطراف. تقدم HelioGate موجزات الممر فقط عندما يوجد مسار تنفيذ موثوق.",
    },
  },
  {
    keywords: ["process", "framework", "gate", "validation", "validate", "structure", "execution"],
    answers: {
      en: "The execution framework moves from signal to validation, structuring, alignment, and execution. Opportunities that do not pass validation or lack a clear execution path are not advanced.",
      fr: "Le cadre d'execution passe du signal a la validation, puis a la structuration, a l'alignement et a l'execution. Les opportunites qui ne passent pas la validation ou qui n'ont pas de chemin d'execution clair ne sont pas avancees.",
      zh: "执行框架从信号进入验证、结构设计、对齐和执行。未通过验证或缺少清晰执行路径的机会不会推进。",
      ar: "ينتقل إطار التنفيذ من الإشارة إلى التحقق ثم الهيكلة والمواءمة والتنفيذ. الفرص التي لا تجتاز التحقق أو لا تملك مسار تنفيذ واضحا لا تتقدم.",
    },
  },
  {
    keywords: ["invest", "investor", "capital", "finance", "funding", "partner", "partnership"],
    answers: {
      en: "Capital participation is handled through qualified engagement only. HelioGate first tests execution relevance, counterparty readiness, documentation, and corridor fit before deeper information is shared.",
      fr: "La participation du capital se fait uniquement par engagement qualifie. HelioGate verifie d'abord la pertinence d'execution, la preparation des contreparties, la documentation et l'alignement du corridor avant de partager des informations plus detaillees.",
      zh: "资本参与仅通过合格合作处理。HelioGate 会先测试执行相关性、交易方准备度、文件和通道匹配，再共享更深入信息。",
      ar: "تتم مشاركة رأس المال عبر تواصل مؤهل فقط. تختبر HelioGate أولا صلة التنفيذ وجاهزية الأطراف والوثائق وملاءمة الممر قبل مشاركة معلومات أعمق.",
    },
  },
  {
    keywords: ["contact", "engage", "inquiry", "email", "brief", "access", "request"],
    answers: {
      en: "To engage, use the inquiry flow on the Engage page or contact info@heliogategroup.com. For support, use support@heliogategroup.com. Include your role, organization, corridor or sector interest, and the execution context you want reviewed.",
      fr: "Pour engager un echange, utilisez le formulaire de la page Engagement ou contactez info@heliogategroup.com. Pour le support, utilisez support@heliogategroup.com. Indiquez votre role, votre organisation, le corridor ou secteur concerne et le contexte d'execution a examiner.",
      zh: "如需合作，请使用“联系”页面的咨询流程，或联系 info@heliogategroup.com。支持请使用 support@heliogategroup.com。请说明您的角色、机构、关注的通道或行业，以及希望评估的执行背景。",
      ar: "للتواصل، استخدم نموذج الاستفسار في صفحة التواصل أو راسل info@heliogategroup.com. وللدعم استخدم support@heliogategroup.com. اذكر دورك وجهتك والممر أو القطاع محل الاهتمام وسياق التنفيذ المطلوب مراجعته.",
    },
  },
];

const suggestions: Record<Lang, string[]> = {
  en: [
    "What does HelioGate do?",
    "Which sectors does HelioGate focus on?",
    "How does qualified engagement work?",
  ],
  fr: [
    "Que fait HelioGate ?",
    "Quels secteurs HelioGate couvre-t-elle ?",
    "Comment fonctionne l'engagement qualifie ?",
  ],
  zh: [
    "HelioGate 做什么？",
    "HelioGate 关注哪些行业？",
    "合格合作如何运作？",
  ],
  ar: [
    "ماذا تفعل HelioGate؟",
    "ما القطاعات التي تركز عليها HelioGate؟",
    "كيف يعمل التواصل المؤهل؟",
  ],
};

const fallbackAnswers: Record<Lang, string> = {
  en: "I can help with HelioGate's platform, sectors, corridors, execution framework, and engagement process. For transaction-specific details, qualified engagement is required.",
  fr: "Je peux aider sur la plateforme HelioGate, ses secteurs, ses corridors, son cadre d'execution et son processus d'engagement. Pour les details propres a une transaction, un engagement qualifie est requis.",
  zh: "我可以帮助说明 HelioGate 的平台、行业、通道、执行框架和合作流程。具体交易细节需要合格合作。",
  ar: "يمكنني المساعدة في شرح منصة HelioGate وقطاعاتها وممراتها وإطار التنفيذ وعملية التواصل. التفاصيل الخاصة بالصفقات تتطلب تواصلا مؤهلا.",
};

export const getSuggestions = (lang: Lang) => suggestions[fallbackLang(lang)];

export const generateAnswer = (question: string, lang: Lang) => {
  const activeLang = fallbackLang(lang);
  const normalized = question.toLowerCase();
  const topic = topics.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)));

  return topic ? topic.answers[activeLang] : fallbackAnswers[activeLang];
};
