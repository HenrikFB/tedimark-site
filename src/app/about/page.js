import PinnedSections from "@/components/PinnedSections/PinnedSections";
import Footer from "@/components/Footer/Footer";

const aboutSections = [
  {
    label: "Background",
    title: "MSc + BSc in IT Product Development",
    description:
      "A unique blend of computer science, interaction design, and innovation methods. From algorithms and deep learning to physical computing and AR — trained to build products that work at the intersection of technology and human needs.",
    bg: "var(--blue)",
    labelColor: "rgba(255,255,255,0.5)",
    items: [
      "Deep Learning",
      "Software Architecture",
      "IoT & Cloud",
      "Interaction Design",
      "Augmented Reality",
      "Physical Computing",
      "Innovation Methods",
      "Digital Entrepreneurship",
    ],
  },
  {
    label: "Philosophy",
    title: "You review. We build.",
    description:
      "We believe in radical ownership. When you hand us a problem, we don't come back with questions about which framework to use. We come back with a working solution. Our process is transparent — continuous demos, clear milestones, and zero surprises.",
    bg: "var(--red)",
    labelColor: "rgba(255,255,255,0.5)",
  },
  {
    label: "Approach",
    title: "One team covers the full chain",
    description:
      "From the first user interview to the deployed product — we cover AI engineering, automation, software development, third-party integrations, hardware, and compliance. No juggling five different freelancers. No coordination overhead.",
    bg: "var(--green)",
    labelColor: "rgba(255,255,255,0.5)",
    items: [
      "AI Engineering",
      "Automation",
      "Software Dev",
      "Hardware & IoT",
      "Compliance",
      "MVPs & Launch",
    ],
  },
  {
    label: "Personal",
    title: "Based in Denmark. Available worldwide.",
    description:
      "Working at the intersection of technology, design, and business. Every project is an opportunity to build something that genuinely matters — something that makes technology work for people, not the other way around.",
    bg: "#0a0a0f",
    textColor: "var(--text-primary)",
    labelColor: "var(--yellow)",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PinnedSections sections={aboutSections} />
      <Footer />
    </main>
  );
}
