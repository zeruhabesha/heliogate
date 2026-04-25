import architecture from "@/assets/platform-architecture.jpg";
import corridor from "@/assets/corridor.jpg";
import mineral from "@/assets/detail-mineral.jpg";
import topo from "@/assets/intel-topo.jpg";
import room from "@/assets/engage-room.jpg";

export type Differentiator = {
  slug: string;
  index: string;
  title: string;
  short: string;
  image: string;
  proof: string[];
  process: string[];
  metrics: { value: string; label: string }[];
  outcome: string;
};

export const differentiators: Differentiator[] = [
  {
    slug: "execution-focused",
    index: "01",
    title: "Execution-focused, not speculative",
    short:
      "HelioGate advances opportunities around executable conditions, not market noise or abstract deal appetite.",
    image: architecture,
    proof: [
      "Each mandate is tested against counterparty readiness, asset reality, documentation path, and corridor constraints.",
      "Capital is introduced after execution logic is clear enough to support a serious transaction sequence.",
      "The platform prioritizes fewer qualified opportunities over broad circulation or speculative pipeline volume.",
    ],
    process: ["Define the mandate", "Validate operating facts", "Map execution dependencies", "Advance only qualified paths"],
    metrics: [
      { value: "Signal", label: "Starts with real opportunity" },
      { value: "Gate 05", label: "Ends with execution readiness" },
      { value: "1:1", label: "Selective counterparty work" },
    ],
    outcome:
      "The result is a tighter execution environment where stakeholders understand what must be true before time, capital, and reputation are committed.",
  },
  {
    slug: "no-open-deal-circulation",
    index: "02",
    title: "No open deal circulation",
    short:
      "Opportunities are not broadcast into loose networks. Access is controlled by role, relevance, and execution fit.",
    image: room,
    proof: [
      "Counterparties are approached selectively after qualification, not added to a general distribution list.",
      "Sensitive opportunity details remain sequenced until role, intent, and mandate alignment are established.",
      "The model reduces leakage, duplicated conversations, and unproductive introductions.",
    ],
    process: ["Qualify the role", "Confirm mandate relevance", "Sequence disclosure", "Coordinate direct engagement"],
    metrics: [
      { value: "Closed", label: "No public deal broadcast" },
      { value: "Qualified", label: "Access by relevance" },
      { value: "Direct", label: "Counterparty pathway" },
    ],
    outcome:
      "This keeps the transaction environment disciplined and protects serious counterparties from unnecessary exposure.",
  },
  {
    slug: "structured-validation",
    index: "03",
    title: "Structured validation before capital involvement",
    short:
      "Validation happens before capital is placed into the conversation, so investors and operators are not solving basic uncertainty late.",
    image: mineral,
    proof: [
      "Supply integrity, buyer readiness, regulatory conditions, logistics, and documentation are checked before deeper capital work.",
      "Validation is treated as a sequence of gates rather than a single claim or presentation deck.",
      "Issues are surfaced early, while there is still time to restructure or stop the process.",
    ],
    process: ["Verify supply", "Test buyer readiness", "Review corridor constraints", "Prepare capital-facing materials"],
    metrics: [
      { value: "Pre-capital", label: "Validation position" },
      { value: "4 layers", label: "Supply, buyer, route, documents" },
      { value: "Stop/go", label: "Gate discipline" },
    ],
    outcome:
      "Capital partners receive a clearer view of what has been tested, what remains conditional, and what must be resolved next.",
  },
  {
    slug: "corridor-intelligence",
    index: "04",
    title: "Corridor-based intelligence approach",
    short:
      "HelioGate evaluates opportunities through the corridors that make execution possible: route, jurisdiction, buyer, logistics, and timing.",
    image: topo,
    proof: [
      "Corridor work connects asset-level facts with market demand, regulatory posture, and movement constraints.",
      "The platform watches where supply and demand can realistically meet, not only where commercial interest exists.",
      "Briefs are developed when corridor logic supports a credible transaction pathway.",
    ],
    process: ["Map corridor context", "Assess friction points", "Align counterparties", "Build the execution route"],
    metrics: [
      { value: "Route", label: "Logistics and jurisdiction" },
      { value: "Demand", label: "Buyer mandate alignment" },
      { value: "Timing", label: "Execution window" },
    ],
    outcome:
      "Corridor intelligence gives participants a practical view of how a transaction can move across borders without relying on assumptions.",
  },
  {
    slug: "selective-engagement",
    index: "05",
    title: "Selective engagement with qualified partners only",
    short:
      "HelioGate works with participants who bring relevant capacity, mandate authority, operational access, or capital alignment.",
    image: corridor,
    proof: [
      "Engagement starts with role, organization, corridor fit, and execution relevance.",
      "The platform favors direct operators, serious buyers, capital partners, and institution-grade participants.",
      "Introductions are structured around contribution to the execution path, not general networking.",
    ],
    process: ["Submit inquiry", "Review fit", "Confirm relevance", "Open a structured workstream"],
    metrics: [
      { value: "5 days", label: "Initial review target" },
      { value: "Role-fit", label: "Qualification basis" },
      { value: "Workstream", label: "Engagement format" },
    ],
    outcome:
      "Qualified engagement keeps the platform focused on the stakeholders most capable of moving a real opportunity forward.",
  },
];

export const getDifferentiator = (slug: string | undefined) =>
  differentiators.find((item) => item.slug === slug);
