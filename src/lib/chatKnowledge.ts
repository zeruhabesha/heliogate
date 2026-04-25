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
      zh: "HelioGate Investment Group is a cross-border execution platform. It structures real opportunities by aligning operators, buyers, capital partners, documentation, and corridor-specific execution conditions before a transaction is advanced.",
      ar: "HelioGate Investment Group is a cross-border execution platform. It structures real opportunities by aligning operators, buyers, capital partners, documentation, and corridor-specific execution conditions before a transaction is advanced.",
    },
  },
  {
    keywords: ["sector", "mining", "minerals", "trade", "infrastructure", "commodity", "commodities"],
    answers: {
      en: "HelioGate focuses on mining and minerals, strategic trade, and corridor-linked infrastructure. The work is selective and centered on opportunities where verification, capital alignment, logistics, and cross-border documentation all matter.",
      fr: "HelioGate intervient dans le minier et les mineraux, le commerce strategique et les infrastructures liees aux corridors. Le travail est selectif et centre sur les opportunites ou la verification, l'alignement du capital, la logistique et la documentation transfrontaliere sont essentiels.",
      zh: "HelioGate focuses on mining and minerals, strategic trade, and corridor-linked infrastructure. The work is selective and centered on opportunities where verification, capital alignment, logistics, and cross-border documentation all matter.",
      ar: "HelioGate focuses on mining and minerals, strategic trade, and corridor-linked infrastructure. The work is selective and centered on opportunities where verification, capital alignment, logistics, and cross-border documentation all matter.",
    },
  },
  {
    keywords: ["corridor", "corridors", "route", "jurisdiction", "cross-border", "cross border"],
    answers: {
      en: "Corridor intelligence means structured visibility into where supply, demand, regulation, logistics, and counterparties can align. HelioGate introduces corridor briefs only when there is a credible path to execution.",
      fr: "L'intelligence de corridor donne une visibilite structuree sur l'alignement possible entre offre, demande, reglementation, logistique et contreparties. HelioGate ne presente des notes de corridor que lorsqu'un chemin d'execution credible existe.",
      zh: "Corridor intelligence means structured visibility into where supply, demand, regulation, logistics, and counterparties can align. HelioGate introduces corridor briefs only when there is a credible path to execution.",
      ar: "Corridor intelligence means structured visibility into where supply, demand, regulation, logistics, and counterparties can align. HelioGate introduces corridor briefs only when there is a credible path to execution.",
    },
  },
  {
    keywords: ["process", "framework", "gate", "validation", "validate", "structure", "execution"],
    answers: {
      en: "The execution framework moves from signal to validation, structuring, alignment, and execution. Opportunities that do not pass validation or lack a clear execution path are not advanced.",
      fr: "Le cadre d'execution passe du signal a la validation, puis a la structuration, a l'alignement et a l'execution. Les opportunites qui ne passent pas la validation ou qui n'ont pas de chemin d'execution clair ne sont pas avancees.",
      zh: "The execution framework moves from signal to validation, structuring, alignment, and execution. Opportunities that do not pass validation or lack a clear execution path are not advanced.",
      ar: "The execution framework moves from signal to validation, structuring, alignment, and execution. Opportunities that do not pass validation or lack a clear execution path are not advanced.",
    },
  },
  {
    keywords: ["invest", "investor", "capital", "finance", "funding", "partner", "partnership"],
    answers: {
      en: "Capital participation is handled through qualified engagement only. HelioGate first tests execution relevance, counterparty readiness, documentation, and corridor fit before deeper information is shared.",
      fr: "La participation du capital se fait uniquement par engagement qualifie. HelioGate verifie d'abord la pertinence d'execution, la preparation des contreparties, la documentation et l'alignement du corridor avant de partager des informations plus detaillees.",
      zh: "Capital participation is handled through qualified engagement only. HelioGate first tests execution relevance, counterparty readiness, documentation, and corridor fit before deeper information is shared.",
      ar: "Capital participation is handled through qualified engagement only. HelioGate first tests execution relevance, counterparty readiness, documentation, and corridor fit before deeper information is shared.",
    },
  },
  {
    keywords: ["contact", "engage", "inquiry", "email", "brief", "access", "request"],
    answers: {
      en: "To engage, use the inquiry flow on the Engage page or contact inquiries@heliogate.com. Include your role, organization, corridor or sector interest, and the execution context you want reviewed.",
      fr: "Pour engager un echange, utilisez le formulaire de la page Engagement ou contactez inquiries@heliogate.com. Indiquez votre role, votre organisation, le corridor ou secteur concerne et le contexte d'execution a examiner.",
      zh: "To engage, use the inquiry flow on the Engage page or contact inquiries@heliogate.com. Include your role, organization, corridor or sector interest, and the execution context you want reviewed.",
      ar: "To engage, use the inquiry flow on the Engage page or contact inquiries@heliogate.com. Include your role, organization, corridor or sector interest, and the execution context you want reviewed.",
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
    "What does HelioGate do?",
    "Which sectors does HelioGate focus on?",
    "How does qualified engagement work?",
  ],
  ar: [
    "What does HelioGate do?",
    "Which sectors does HelioGate focus on?",
    "How does qualified engagement work?",
  ],
};

const fallbackAnswers: Record<Lang, string> = {
  en: "I can help with HelioGate's platform, sectors, corridors, execution framework, and engagement process. For transaction-specific details, qualified engagement is required.",
  fr: "Je peux aider sur la plateforme HelioGate, ses secteurs, ses corridors, son cadre d'execution et son processus d'engagement. Pour les details propres a une transaction, un engagement qualifie est requis.",
  zh: "I can help with HelioGate's platform, sectors, corridors, execution framework, and engagement process. For transaction-specific details, qualified engagement is required.",
  ar: "I can help with HelioGate's platform, sectors, corridors, execution framework, and engagement process. For transaction-specific details, qualified engagement is required.",
};

export const getSuggestions = (lang: Lang) => suggestions[fallbackLang(lang)];

export const generateAnswer = (question: string, lang: Lang) => {
  const activeLang = fallbackLang(lang);
  const normalized = question.toLowerCase();
  const topic = topics.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)));

  return topic ? topic.answers[activeLang] : fallbackAnswers[activeLang];
};
