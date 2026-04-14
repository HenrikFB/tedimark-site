export const siteConfig = {
  name: "TeDiMark",
  tagline: "Technology. Digitalization. Marketing.",
  description:
    "We transform businesses through technology, digitalization, and strategic marketing. From AI engineering to go-to-market — you review milestones, we handle the rest.",
  email: "henrik@fogbunzel.dk",
  location: "Denmark · Available worldwide",
  linkedin: "https://www.linkedin.com/in/henrik-fog-bunzel-894828a5/",
  github: "https://github.com/HenrikFB",
};

export const services = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    shortDesc:
      "LLM integrations, RAG pipelines, fine-tuning, and AI-driven features that create real business value.",
    fullDesc:
      "We build production-grade AI systems — from conversational chatbots with semantic search to automated data extraction pipelines. Our AI engineering goes beyond prototypes: we deliver fine-tuned models, RAG architectures, and intelligent features that integrate seamlessly into your existing stack.",
    tags: ["GPT", "Claude", "LangChain", "Vector DBs", "RAG", "Fine-tuning"],
    color: "#2563EB",
    cardColors: ["#EF4444", "#FACC15", "#2563EB"],
    images: ["/images/ai-1.jpg", "/images/ai-2.jpg"],
  },
  {
    slug: "automation",
    title: "Automation",
    shortDesc:
      "Self-running workflows. From data pipelines to internal processes — save hours every week.",
    fullDesc:
      "We automate the repetitive. Data pipelines that run themselves, internal processes that never miss a step, and integrations that keep your tools in sync. Whether it's n8n workflows, custom scripts, or end-to-end process automation — we build systems that free your team to focus on what matters.",
    tags: ["n8n", "Zapier", "Custom Scripts", "Data Pipelines"],
    color: "#EF4444",
    cardColors: ["#22C55E", "#2563EB", "#EF4444"],
    images: ["/images/auto-1.jpg", "/images/auto-2.jpg"],
  },
  {
    slug: "software-development",
    title: "Software Dev",
    shortDesc:
      "Web and mobile applications built with modern stacks. Scalable, tested, and production-ready.",
    fullDesc:
      "Full-stack development with modern frameworks. We build responsive web applications, cross-platform mobile apps, and complex backend systems. Every project ships with tests, documentation, and a scalable architecture that grows with your business.",
    tags: ["React", "Next.js", "React Native", ".NET", "Node.js"],
    color: "#22C55E",
    cardColors: ["#FACC15", "#EF4444", "#22C55E"],
    images: ["/images/dev-1.jpg", "/images/dev-2.jpg"],
  },
  {
    slug: "third-party-tech",
    title: "Third-Party Tech",
    shortDesc:
      "Evaluation and integration of APIs, SDKs, and platforms. We find the right solution and build it in.",
    fullDesc:
      "Choosing the right third-party tools can make or break a project. We evaluate, compare, and integrate APIs, SDKs, and platforms so you don't have to. From payment processors to mapping services, we find the right fit and build it in properly.",
    tags: ["Stripe", "Supabase", "Twilio", "Mapbox", "APIs"],
    color: "#FACC15",
    cardColors: ["#2563EB", "#22C55E", "#FACC15"],
    images: ["/images/sdk-1.jpg", "/images/sdk-2.jpg"],
  },
  {
    slug: "mvps",
    title: "MVPs & Launch",
    shortDesc:
      "From idea to market in weeks, not months. Validation, landing pages, and launch strategy.",
    fullDesc:
      "Speed to market matters. We take your idea from concept to launched product in weeks — with validation research, rapid prototyping, landing pages, and a go-to-market strategy. Test assumptions fast, iterate on real feedback, and launch with confidence.",
    tags: ["Rapid Prototyping", "A/B Testing", "Analytics", "Landing Pages"],
    color: "#2563EB",
    cardColors: ["#22C55E", "#EF4444", "#2563EB"],
    images: ["/images/mvp-1.jpg", "/images/mvp-2.jpg"],
  },
  {
    slug: "hardware-iot",
    title: "Hardware & IoT",
    shortDesc:
      "Physical products meet software. Sensors, microcontrollers, and cloud connections.",
    fullDesc:
      "When your product lives in the physical world, we bridge the gap between hardware and software. Sensor integrations, microcontroller programming, cloud connectivity, and real-time data pipelines — we make your physical products smart.",
    tags: ["Arduino", "Raspberry Pi", "MQTT", "BLE", "Sensors"],
    color: "#EF4444",
    cardColors: ["#FACC15", "#2563EB", "#EF4444"],
    images: ["/images/iot-1.jpg", "/images/iot-2.jpg"],
  },
  {
    slug: "compliance",
    title: "IT Compliance",
    shortDesc:
      "Regulatory compliance, security audits, and governance frameworks for enterprise.",
    fullDesc:
      "Enterprise-grade compliance isn't optional — it's foundational. We handle security audits, GDPR compliance, risk assessments, and governance frameworks so your technology meets the standards your industry demands.",
    tags: ["Azure", "GDPR", "Risk Assessment", "Governance", "Security"],
    color: "#22C55E",
    cardColors: ["#EF4444", "#FACC15", "#22C55E"],
    images: ["/images/compliance-1.jpg", "/images/compliance-2.jpg"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive into your problem, your users, and your market. You talk — we listen and investigate.",
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Tech choices, scope, and prioritization. You get a clear plan with milestones you approve.",
    color: "#EF4444",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid development with continuous demos. You see progress and give feedback along the way.",
    color: "#22C55E",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Polish, deploy, and handover. Everything is documented and ready to scale.",
    color: "#FACC15",
  },
];

export const projects = [
  {
    title: "AI-Powered Course Chatbot",
    category: "AI Engineering",
    description:
      "Conversational AI with semantic & hybrid search, dynamic course UI rendering, and voice capabilities.",
    tags: ["RAG", "OpenAI", "Supabase", "Voice AI", "Twilio"],
    color: "#2563EB",
  },
  {
    title: "Menu-to-JSON Data Pipeline",
    category: "AI + Data Extraction",
    description:
      "Extracts categories, product numbers, and price tiers from restaurant menus into structured JSON.",
    tags: ["LLama Parse", "GPT", "OCR", "Data Pipeline"],
    color: "#EF4444",
  },
  {
    title: "Accounting & Reconciliation Platform",
    category: "Full-Stack Platform",
    description:
      "Annual report generation, creditor/debtor reconciliation, automated receipt fetching.",
    tags: ["Full-Stack", "Automation", "AI", "Finance"],
    color: "#22C55E",
  },
  {
    title: "Enterprise Compliance Chatbot",
    category: "Compliance & AI",
    description:
      "Conversational AI built on Azure OpenAI, meeting regulatory requirements and enterprise governance.",
    tags: ["Azure OpenAI", "Compliance", "Enterprise"],
    color: "#FACC15",
  },
  {
    title: "GIS Platform Evaluation",
    category: "GIS & SDKs",
    description:
      "Validated GIS SDKs across Blazor and WinUI. ArcGIS, QGIS, Mapbox, and open-source alternatives.",
    tags: ["ArcGIS", "Mapbox", "Blazor", "WinUI"],
    color: "#2563EB",
  },
  {
    title: "Payment Integrations",
    category: "Payments",
    description:
      "Stripe, MobilePay, and digital wallet integrations. End-to-end payment flows.",
    tags: ["Stripe", "MobilePay", "Wallets"],
    color: "#EF4444",
  },
  {
    title: "Tax Authority Data Automation",
    category: "Automation",
    description:
      "Automated retrieval of tax data from government systems. Replaced manual compliance processes.",
    tags: ["Automation", "Scraping", "Compliance"],
    color: "#22C55E",
  },
  {
    title: "Office Add-in Development",
    category: "M365",
    description:
      "Microsoft 365 add-in built with React. Extending enterprise productivity tools.",
    tags: ["React", "M365", "Add-in"],
    color: "#FACC15",
  },
  {
    title: "Reconciliation Web App",
    category: "Finance",
    description:
      "Bookkeeping reconciliation tool with automatic receipt parsing for accounting professionals.",
    tags: ["Full-Stack", "Parsing", "Finance"],
    color: "#2563EB",
  },
];

export const researchProjects = [
  {
    number: "01",
    title: "Actuasy — Shape-Changing Controller",
    description:
      "Adaptive game controller for people with physical impairments. Shape-changing interfaces to reduce specialized input devices.",
    tags: ["Accessibility", "Hardware", "UX Research"],
  },
  {
    number: "02",
    title: "Social Distance Detection",
    description:
      "Vision-based system using object detection in PyTorch to monitor pedestrian distances in public spaces.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
  },
  {
    number: "03",
    title: "ADHD & Game Design",
    description:
      "Game-based concept supporting children with ADHD. Focus on mitigating worsened symptoms during COVID-19.",
    tags: ["Game Design", "Health", "UX"],
  },
  {
    number: "04",
    title: "FlatSwap — Startup MVP",
    description:
      "Platform for exchange students to swap apartments. MVP and business model built during entrepreneurship course.",
    tags: ["Startup", "MVP", "Entrepreneurship"],
  },
  {
    number: "05",
    title: "IoT Table Occupancy Detection",
    description:
      "Scalable sensor system for real-time table usage visualization with local compute and cloud sync.",
    tags: ["IoT", "Cloud", "Sensors"],
  },
  {
    number: "06",
    title: "Volkswagen Innovation Project",
    description:
      "Confidential innovation project. User requirements, innovation process, and product design.",
    tags: ["NDA", "Innovation", "Product Design"],
  },
  {
    number: "07",
    title: "EksSys — Welfare Tech for Dialysis",
    description:
      "Digital solution for dialysis workflows. Domain research, agile development, user-centric design.",
    tags: ["Health Tech", "Agile", "UX"],
  },
  {
    number: "08",
    title: "Badminton Training System",
    description:
      "Training prototype using Arduino and 3D printing. Hardware prototyping with agile methods.",
    tags: ["Arduino", "3D Printing", "Sports Tech"],
  },
  {
    number: "09",
    title: "Gesture-Controlled Drone",
    description:
      "Hand-gesture controlled drone with custom PCB, Arduino, and sensors.",
    tags: ["PCB", "Arduino", "Embedded"],
  },
  {
    number: "10",
    title: "NorthSide Festival — Physical Computing",
    description:
      "Interactive installations for a music festival. Social interaction and rapid prototyping.",
    tags: ["Physical Computing", "Installation"],
  },
  {
    number: "11",
    title: "SAINT — Blockchain Exhibition",
    description:
      "Interactive installation explaining blockchain to the public. Internet Week Denmark 2018.",
    tags: ["Blockchain", "Exhibition"],
  },
];

export const educationCourses = [
  "Algorithms & Data Structures",
  "Deep Learning",
  "Augmented Reality (Unity)",
  "IoT & Cloud Computing",
  "Computer Architecture",
  "Software Architecture",
  "Interaction Design",
  "Physical Computing",
  "Mobile Apps (Android)",
  "WPF & ASP.NET Core",
  "Innovation Methods",
  "Web Technology",
  "Multimodal Interaction",
  "Experience Design",
  "Digital Entrepreneurship",
  "Pervasive Computing",
  "Databases",
  "Visualization",
  "Business Models",
  "Calculus",
];

export const stats = [
  { value: "20", label: "Projects delivered" },
  { value: "7", label: "Disciplines covered" },
  { value: "30", label: "Courses completed" },
];

export const marqueeRow1 = [
  "Menu-to-JSON Data Pipeline",
  "AI Enterprise Compliance Chatbot",
  "Tax Authority Data Automation",
  "Volkswagen Innovation Project",
  "Accounting & Reconciliation Platform",
];

export const marqueeRow2 = [
  "Gesture-Controlled Drone",
  "Shape-Changing Controller",
  "IoT Table Occupancy Detection",
  "Social Distance Detection",
  "Blockchain Exhibition",
];
