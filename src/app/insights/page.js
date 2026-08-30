import Footer from "@/components/Footer/Footer";
import BlockReveal from "@/components/TextAnimations/BlockReveal";
import InsightsGrid from "@/components/InsightsGrid/InsightsGrid";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Insights — TeDiMark",
  description:
    "Field notes on AI engineering, automation, and software that survives production. No hype — architecture, numbers, and what actually pays back.",
};

export default function InsightsPage() {
  const plainPosts = posts.map(({ Component, ...rest }) => rest);

  return (
    <main>
      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "4rem 2rem",
        }}
      >
        <div className="section-label" style={{ color: "var(--green)" }}>
          Field notes
        </div>
        <BlockReveal blockColor="var(--green)" animateOnScroll={false}>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.95 }}>
            Insights
          </h1>
        </BlockReveal>
        <p
          style={{
            marginTop: "1.5rem",
            maxWidth: "560px",
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          Notes from building AI and automation systems that survive production.
          Architecture, numbers, and the boring work that actually pays back.
        </p>
      </section>

      <InsightsGrid posts={plainPosts} />

      <Footer />
    </main>
  );
}
