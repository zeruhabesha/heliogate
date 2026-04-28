import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Factory,
  Globe2,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Leaf,
  Network,
  RadioTower,
  ShieldCheck,
  Ship,
  Sprout,
  Wrench,
} from "lucide-react";
import constractionImage from "@/assets/constraction.jpg";
import crossBorderTransactionImage from "@/assets/Cross-Border Transaction Structuring.jpg";

const serviceTransaction = constractionImage;
const serviceConstruction = crossBorderTransactionImage;
const serviceIct = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
const serviceEducation = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80";
const serviceFacilities = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";
const serviceFinancial = "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80";

export type Signal = "Active" | "Emerging" | "Future";

export type Sector = {
  slug: string;
  title: string;
  signal: Signal;
  icon: LucideIcon;
  summary: string;
  offerings: string[];
  opportunity: string;
};

export type ServiceGroup = {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  items: string[];
  overview: string;
  scope: { title: string; body: string }[];
  process: string[];
  governance: string[];
  outputs: string[];
};

export const sectors: Sector[] = [
  {
    slug: "mining-minerals",
    title: "Mining & Minerals",
    signal: "Active",
    icon: Factory,
    summary: "Operator-anchored mineral opportunities, equipment deployment, offtake preparation, and compliant corridor structuring.",
    offerings: ["Exploration and production validation", "Equipment and technology coordination", "Offtake and buyer alignment", "Environmental, legal, and documentation support"],
    opportunity: "Active signal around validated production, external investor participation, and corridor-based trade alignment.",
  },
  {
    slug: "construction-electromechanical",
    title: "Construction & Electromechanical Turnkeys",
    signal: "Emerging",
    icon: HardHat,
    summary: "Turnkey project coordination from design, procurement, installation, commissioning, and vendor alignment.",
    offerings: ["Design and procurement sequencing", "MEP and electromechanical packages", "Installation and commissioning coordination", "EPC, operator, and supplier alignment"],
    opportunity: "Emerging demand for bankable infrastructure, industrial facilities, and corridor-linked project delivery.",
  },
  {
    slug: "ict-telecom-fintech",
    title: "ICT, Telecom & Fintech",
    signal: "Emerging",
    icon: RadioTower,
    summary: "Digital infrastructure, telecom systems, IoT, fintech rails, and e-government solution structuring.",
    offerings: ["ICT consultancy and systems integration", "Telecom and IoT deployment pathways", "Digital payment and fintech solutions", "E-government and enterprise software coordination"],
    opportunity: "Emerging corridor need for secure digital rails, payments, compliance reporting, and connected operations.",
  },
  {
    slug: "education-software",
    title: "Education Software",
    signal: "Future",
    icon: GraduationCap,
    summary: "Custom learning platforms, school management systems, data tools, and education-sector workflow software.",
    offerings: ["Learning management platforms", "Student, finance, and operations systems", "Digital content and assessment tooling", "Implementation and training support"],
    opportunity: "Future growth area tied to education access, workforce readiness, and institutional digital transformation.",
  },
  {
    slug: "facilities-security",
    title: "Facilities & Security Management",
    signal: "Emerging",
    icon: ShieldCheck,
    summary: "Facilities operations, premium security coordination, compliance procedures, and service-level management.",
    offerings: ["Facilities operations planning", "Security service coordination", "SOPs, reporting, and compliance controls", "Vendor and workforce management"],
    opportunity: "Emerging need for reliable operating infrastructure around sites, assets, offices, hospitality, and logistics nodes.",
  },
  {
    slug: "management-consulting",
    title: "Management Consulting",
    signal: "Active",
    icon: BriefcaseBusiness,
    summary: "Research, strategy, feasibility, stakeholder alignment, operating models, and execution governance.",
    offerings: ["Market and corridor research", "Feasibility and operating model design", "Stakeholder and government alignment", "Execution governance and PMO support"],
    opportunity: "Active demand for disciplined advisory that connects strategy to deployable commercial pathways.",
  },
  {
    slug: "fund-management",
    title: "Financial & Fund Management",
    signal: "Future",
    icon: Landmark,
    summary: "Investment advisory, fund structuring, payment services, capital alignment, and participation frameworks.",
    offerings: ["Investment advisory and fund structuring", "Capital mobilization support", "Payment and settlement pathway coordination", "Investor reporting and risk controls"],
    opportunity: "Future layer for structured participation in validated opportunities and corridor-aligned capital flows.",
  },
  {
    slug: "import-export",
    title: "Import / Export Services",
    signal: "Active",
    icon: Ship,
    summary: "Trade documentation, logistics alignment, supplier and buyer validation, and cross-border import/export execution.",
    offerings: ["Supplier and buyer validation", "Import/export documentation sequencing", "Logistics and customs alignment", "Trade finance and payment pathway support"],
    opportunity: "Active need for documented, compliant, and counterparty-ready trade movement across strategic corridors.",
  },
  {
    slug: "agriculture-agribusiness",
    title: "Agriculture & Agribusiness",
    signal: "Future",
    icon: Sprout,
    summary: "Agricultural supply chains, processing, buyer mandates, and food-sector trade corridors.",
    offerings: ["Producer and supply validation", "Processing and storage alignment", "Buyer mandate coordination", "Cold-chain and logistics planning"],
    opportunity: "Future corridor area linked to food security, rural value chains, and export readiness.",
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    signal: "Future",
    icon: Wrench,
    summary: "Utility-linked infrastructure, power access, service reliability, and industrial enablement.",
    offerings: ["Utility project structuring", "Power and service access analysis", "Vendor and EPC coordination", "Regulatory and concession support"],
    opportunity: "Future area for enabling industrial zones, mining operations, ICT nodes, and logistics corridors.",
  },
  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    signal: "Future",
    icon: Building2,
    summary: "Hospitality assets, destination-linked services, operating partners, and investment readiness.",
    offerings: ["Asset and operator review", "Service partner coordination", "Destination and corridor analysis", "Investment readiness packaging"],
    opportunity: "Future area for corridor-linked destination development and service infrastructure.",
  },
  {
    slug: "health-logistics",
    title: "Health & Logistics",
    signal: "Emerging",
    icon: HeartPulse,
    summary: "Healthcare logistics, controlled distribution, facilities support, and compliant supply movement.",
    offerings: ["Critical supply logistics", "Facility support services", "Compliance and documentation controls", "Distribution partner alignment"],
    opportunity: "Emerging need for resilient medical, facility, and logistics pathways across jurisdictions.",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "cross-border-transaction-structuring",
    title: "Cross-Border Transaction Structuring",
    icon: Globe2,
    image: serviceTransaction,
    summary: "End-to-end transaction architecture for cross-border opportunities where counterparties, documentation, capital, route logic, and regulatory conditions must align before execution.",
    items: ["Opportunity intake and qualification", "Counterparty validation", "Deal architecture and documentation sequence", "Execution governance and stakeholder alignment"],
    overview:
      "HelioGate structures cross-border transactions from early signal through validation, sequencing, alignment, and execution readiness. The work is designed for situations where a simple introduction is not enough: suppliers must be validated, buyers must be credible, documentation must be controlled, and corridor-specific regulation must be understood before capital or delivery commitments are made.",
    scope: [
      { title: "Mandate definition", body: "Clarify the opportunity, commercial objective, participating roles, geography, asset or supply basis, buyer profile, and execution constraints." },
      { title: "Counterparty validation", body: "Review supplier capacity, buyer mandate, capital readiness, beneficial role, operating credibility, and documentation availability." },
      { title: "Transaction architecture", body: "Design the step-by-step structure for introductions, documentation flow, payment pathway, logistics, compliance checks, and milestone ownership." },
      { title: "Execution coordination", body: "Coordinate operators, buyers, capital partners, advisors, service providers, and jurisdictional stakeholders around a controlled path to execution." },
    ],
    process: ["Intake", "Evidence review", "Risk map", "Structure design", "Counterparty alignment", "Execution governance"],
    governance: ["No open deal circulation", "Controlled disclosure sequence", "Documented validation gates", "Corridor-specific regulatory review"],
    outputs: ["Mandate brief", "Counterparty validation summary", "Transaction sequence map", "Execution readiness pack"],
  },
  {
    slug: "construction-electromechanical-turnkeys",
    title: "Construction & Electromechanical Turnkeys",
    icon: HardHat,
    image: serviceConstruction,
    summary: "Structured coordination for turnkey construction, MEP, electromechanical, industrial, and infrastructure-linked packages from design through commissioning.",
    items: ["Design and procurement coordination", "Installation and commissioning pathways", "Vendor, EPC, and operator alignment", "Project controls and handover readiness"],
    overview:
      "HelioGate supports turnkey project delivery where design, procurement, civil works, electromechanical systems, installation, testing, and commissioning need to be coordinated across operators, suppliers, EPC partners, financiers, and local authorities.",
    scope: [
      { title: "Project definition", body: "Frame project objectives, site conditions, delivery model, technical requirements, cost drivers, approval needs, and stakeholder responsibilities." },
      { title: "Design and procurement sequencing", body: "Coordinate drawings, technical specifications, procurement packages, vendor qualification, lead times, and import requirements." },
      { title: "Installation and commissioning", body: "Structure installation milestones, testing protocols, handover documentation, commissioning readiness, and operator training pathways." },
      { title: "Commercial and risk controls", body: "Map EPC/vendor obligations, payment milestones, performance guarantees, insurance, safety requirements, and defect-liability controls." },
    ],
    process: ["Technical intake", "Site and requirement review", "Vendor alignment", "Procurement sequence", "Installation controls", "Commissioning handover"],
    governance: ["Safety and site controls", "Permit and approval tracking", "Vendor qualification", "Milestone-based reporting"],
    outputs: ["Turnkey delivery roadmap", "Vendor and procurement matrix", "Commissioning checklist", "Project risk register"],
  },
  {
    slug: "ict-consultancy-digital-solutions",
    title: "ICT Consultancy & Digital Solutions",
    icon: Network,
    image: serviceIct,
    summary: "Digital infrastructure, telecom systems, IoT, software platforms, fintech/payment rails, and e-government solution design for corridor operations.",
    items: ["Telecom and IoT systems", "Software development and enterprise platforms", "Fintech and digital payment solutions", "E-government and reporting systems"],
    overview:
      "HelioGate structures digital solution mandates where operational requirements, telecom infrastructure, software systems, payments, security, data governance, and user adoption must work together. The focus is not only technology selection, but deployable digital infrastructure.",
    scope: [
      { title: "Digital needs assessment", body: "Identify business workflows, user groups, data flows, infrastructure constraints, integration needs, and governance requirements." },
      { title: "Telecom and IoT systems", body: "Coordinate connectivity planning, device layers, monitoring tools, network dependencies, and site-level deployment conditions." },
      { title: "Software and platforms", body: "Structure custom software, dashboards, ERP-adjacent tools, mobile workflows, reporting systems, and education or enterprise platforms." },
      { title: "Fintech and payments", body: "Align payment use cases, settlement flows, compliance requirements, user onboarding, reporting, and partner integration." },
    ],
    process: ["Needs assessment", "Architecture", "Partner selection", "Prototype plan", "Deployment governance", "Adoption support"],
    governance: ["Data protection review", "Cybersecurity controls", "Integration documentation", "Service-level reporting"],
    outputs: ["Digital solution blueprint", "Integration map", "Deployment roadmap", "Governance and support model"],
  },
  {
    slug: "education-sector-software",
    title: "Education-Sector Software",
    icon: BookOpen,
    image: serviceEducation,
    summary: "Learning platforms, school operations systems, digital content workflows, reporting tools, and implementation support for education institutions.",
    items: ["Learning management systems", "School operations platforms", "Assessment and content workflows", "Implementation and training support"],
    overview:
      "HelioGate supports education-sector software mandates that require more than a generic platform. The work connects institutional objectives, learner access, administration, reporting, payments, assessment, implementation, and training into a practical delivery model.",
    scope: [
      { title: "Institution workflow mapping", body: "Review student lifecycle, admissions, learning delivery, assessment, finance, communication, and reporting requirements." },
      { title: "Platform specification", body: "Define learning management, school management, content, assessment, analytics, and integration needs." },
      { title: "Implementation planning", body: "Sequence rollout, data migration, training, support, user adoption, and institutional governance." },
      { title: "Reporting and outcomes", body: "Structure dashboards, student progress indicators, attendance, performance reporting, and management visibility." },
    ],
    process: ["Institution review", "Workflow mapping", "System specification", "Build or source", "Training", "Support governance"],
    governance: ["Data privacy controls", "Role-based access", "Training documentation", "Adoption reporting"],
    outputs: ["Education software specification", "Implementation roadmap", "Training plan", "Support and reporting framework"],
  },
  {
    slug: "facilities-security-management",
    title: "Facilities & Security Management",
    icon: ShieldCheck,
    image: serviceFacilities,
    summary: "Facilities operations, premium security coordination, SOPs, workforce controls, compliance reporting, and service-level management for strategic assets.",
    items: ["Facilities operations frameworks", "Security coordination and SOPs", "Service-level reporting", "Vendor and workforce management"],
    overview:
      "HelioGate structures facilities and security management mandates for sites, offices, industrial facilities, hospitality assets, logistics nodes, and strategic infrastructure where reliability, safety, workforce discipline, and reporting are essential.",
    scope: [
      { title: "Facilities operating model", body: "Define maintenance, cleaning, access, utilities, vendor coordination, asset registers, reporting, and escalation protocols." },
      { title: "Security coordination", body: "Structure guarding, patrols, access control, incident reporting, surveillance coordination, and risk procedures." },
      { title: "SOP and compliance framework", body: "Build standard operating procedures, site rules, reporting templates, training requirements, and compliance routines." },
      { title: "Service-level management", body: "Monitor KPIs, vendor performance, staffing coverage, incident response, client reporting, and continuous improvement." },
    ],
    process: ["Site review", "Risk assessment", "Operating model", "SOP design", "Vendor alignment", "Performance reporting"],
    governance: ["Incident reporting", "Access control protocols", "Staff vetting standards", "Service-level scorecards"],
    outputs: ["Facilities operations manual", "Security SOP pack", "Vendor management matrix", "Monthly reporting framework"],
  },
  {
    slug: "financial-fund-management",
    title: "Financial & Fund Management",
    icon: Banknote,
    image: serviceFinancial,
    summary: "Investment advisory, fund structuring, capital mobilization, payment coordination, reporting, and risk controls tied to validated opportunities.",
    items: ["Investment advisory", "Fund and participation structuring", "Capital mobilization support", "Payment and settlement coordination"],
    overview:
      "HelioGate supports financial and fund-management mandates after opportunity validation has clarified the asset, counterparty, corridor, documentation, and execution basis. The emphasis is structured participation, governance, reporting, and risk-managed capital alignment.",
    scope: [
      { title: "Investment thesis and eligibility", body: "Frame the opportunity thesis, validation status, capital need, risk profile, governance requirements, and participation criteria." },
      { title: "Fund and vehicle structuring support", body: "Coordinate advisors around vehicle logic, participation rights, reporting obligations, compliance requirements, and operating controls." },
      { title: "Capital mobilization", body: "Prepare investor-facing materials, qualification logic, diligence workflow, and controlled disclosure sequence." },
      { title: "Payment and settlement coordination", body: "Map payment pathways, settlement controls, reporting, reconciliation, and compliance checkpoints." },
    ],
    process: ["Opportunity validation", "Capital need definition", "Structure review", "Investor alignment", "Reporting model", "Controls setup"],
    governance: ["Qualified investor engagement", "Disclosure controls", "Risk and compliance review", "Performance reporting"],
    outputs: ["Investment brief", "Participation structure note", "Investor diligence pack", "Reporting and controls framework"],
  },
];

export const getServiceGroup = (slug: string | undefined) =>
  serviceGroups.find((service) => service.slug === slug);

export const executionSteps = [
  { title: "Opportunity Intake", body: "Define the mandate, stakeholder roles, geography, commercial signal, and required documentation before any market introduction." },
  { title: "Research & Validation", body: "Validate suppliers, buyers, production capacity, route logic, legal constraints, community considerations, and operational credibility." },
  { title: "Structuring", body: "Design the transaction sequence, risk controls, documentation stack, payment pathway, and governance model." },
  { title: "Alignment", body: "Coordinate operators, buyers, capital partners, regulators, service providers, and local partners around a single execution pathway." },
  { title: "Execution", body: "Manage milestones, documentation integrity, counterparty actions, compliance checkpoints, and corridor-specific regulatory navigation." },
  { title: "Scaling", body: "Convert repeatable execution into corridor playbooks, partner networks, and sustainable expansion opportunities." },
];

export const values = [
  { title: "Integrity", body: "No open deal circulation, no speculative positioning, and no disclosure without relevance." },
  { title: "Sustainability", body: "Opportunities are evaluated for corridor durability, environmental posture, and community benefit." },
  { title: "Excellence", body: "Documentation, validation, and execution discipline are treated as core infrastructure." },
  { title: "Community Partnership", body: "Local operators, institutions, and development priorities are considered in each corridor." },
  { title: "Innovation", body: "Digital systems, intelligence workflows, and new capital models support better execution." },
  { title: "Safety", body: "Operational, security, compliance, and stakeholder risks are surfaced early and managed deliberately." },
];

export const impactMetrics = [
  { value: "12+", label: "Counterparty jurisdictions" },
  { value: "04", label: "Active corridors monitored" },
  { value: "8+", label: "Sector domains covered" },
  { value: "100%", label: "Validated before capital" },
];

export const partnerTypes = ["Government agencies", "Operators", "Investors", "Development partners", "NGOs", "Technical vendors"];

export const resources = [
  { cat: "Corridor Note", sector: "Mining", title: "Why corridor structure precedes capital", date: "Q1 - 2025" },
  { cat: "Sector Report", sector: "ICT", title: "Digital rails for cross-border execution", date: "Q1 - 2025" },
  { cat: "Method", sector: "Trade", title: "Documentation integrity as risk infrastructure", date: "Q4 - 2024" },
  { cat: "Brief", sector: "Construction", title: "Turnkey readiness across industrial corridors", date: "Q4 - 2024" },
  { cat: "White Paper", sector: "Capital", title: "Structured participation after validation", date: "Q3 - 2024" },
  { cat: "Field Note", sector: "Facilities", title: "Operating reliability around strategic assets", date: "Q3 - 2024" },
];
