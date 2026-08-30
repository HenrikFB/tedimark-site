import WhereAICreatesBusinessValue from "@/content/posts/WhereAICreatesBusinessValue";
import WhyAIPilotsDie from "@/content/posts/WhyAIPilotsDie";
import DocumentsToStructuredData from "@/content/posts/DocumentsToStructuredData";
import HumanInTheLoopIsAFeature from "@/content/posts/HumanInTheLoopIsAFeature";
import ConnectingAIWithoutAPIs from "@/content/posts/ConnectingAIWithoutAPIs";

export const posts = [
  {
    slug: "where-ai-actually-creates-business-value",
    title: "Where AI Actually Creates Business Value",
    excerpt:
      "Chatbots get the headlines. Invoices, inboxes, and reconciliation get the ROI. What the data says about the AI work that actually pays back.",
    date: "2026-08-30",
    dateLabel: "Aug 2026",
    readTime: "7 min read",
    tags: ["Document AI", "Automation", "ROI"],
    services: ["ai-engineering", "automation"],
    featured: true,
    color: "#2563EB",
    Component: WhereAICreatesBusinessValue,
  },
  {
    slug: "why-ai-pilots-die-between-demo-and-production",
    title: "Why AI Pilots Die Between Demo and Production",
    excerpt:
      "95% of enterprise GenAI pilots show no P&L impact. The model is almost never the problem — the five things around it are.",
    date: "2026-08-30",
    dateLabel: "Aug 2026",
    readTime: "8 min read",
    tags: ["AI Strategy", "Production", "Reliability"],
    services: ["ai-engineering", "compliance"],
    featured: true,
    color: "#EF4444",
    Component: WhyAIPilotsDie,
  },
  {
    slug: "from-documents-to-structured-data",
    title: "From Documents to Structured Data: Anatomy of a Production Pipeline",
    excerpt:
      "A technical walkthrough of a document extraction pipeline that survives production — intake, extraction, validation, delivery, and monitoring.",
    date: "2026-08-30",
    dateLabel: "Aug 2026",
    readTime: "9 min read",
    tags: ["Document AI", "Architecture", "Production"],
    services: ["ai-engineering", "automation"],
    featured: true,
    color: "#22C55E",
    Component: DocumentsToStructuredData,
  },
  {
    slug: "human-in-the-loop-is-a-feature",
    title: "Human-in-the-Loop Is a Feature, Not a Weakness",
    excerpt:
      "An AI system that is wrong 5% of the time isn't 95% useful — without a review step it is 100% untrusted. Where to put the approval gate, and why.",
    date: "2026-08-30",
    dateLabel: "Aug 2026",
    readTime: "7 min read",
    tags: ["Reliability", "Evals", "Design"],
    services: ["ai-engineering", "automation"],
    featured: false,
    color: "#FACC15",
    Component: HumanInTheLoopIsAFeature,
  },
  {
    slug: "connecting-ai-to-systems-without-apis",
    title: "Connecting AI to Systems That Have No API",
    excerpt:
      "Business data is trapped in legacy ERPs, portals, and spreadsheets. The integration ladder that gets it out — and why this is where most AI projects stall.",
    date: "2026-08-30",
    dateLabel: "Aug 2026",
    readTime: "7 min read",
    tags: ["Integration", "Automation", "Legacy Systems"],
    services: ["third-party-tech", "automation"],
    featured: false,
    color: "#EF4444",
    Component: ConnectingAIWithoutAPIs,
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3) {
  return posts.filter((p) => p.featured).slice(0, limit);
}

export function getPostsByService(serviceSlug) {
  return posts.filter((p) => p.services.includes(serviceSlug));
}

export const allTags = [...new Set(posts.flatMap((p) => p.tags))];
