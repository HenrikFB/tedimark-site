import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import BlockReveal from "@/components/TextAnimations/BlockReveal";
import { posts, getPost } from "@/lib/posts";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — TeDiMark`,
    description: post.excerpt,
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Component } = post;
  const relatedServices = services.filter((s) => post.services.includes(s.slug));
  const relatedPosts = posts
    .filter(
      (p) =>
        p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 2);

  return (
    <main>
      <section className="insight-hero" style={{ backgroundColor: post.color }}>
        <div className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>
          Insights
        </div>
        <BlockReveal blockColor={post.color} animateOnScroll={false}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              lineHeight: 1,
              maxWidth: "1000px",
              color: post.color === "#FACC15" ? "#0a0a0f" : "#fff",
            }}
          >
            {post.title}
          </h1>
        </BlockReveal>
        <div
          className="insight-hero-meta"
          style={{
            color:
              post.color === "#FACC15"
                ? "rgba(10,10,15,0.7)"
                : "rgba(255,255,255,0.7)",
          }}
        >
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.tags.join(", ")}</span>
        </div>
      </section>

      <article className="insight-article">
        <Component accent={post.color} />

        {relatedServices.length > 0 && (
          <div className="insight-related">
            <h3 className="insight-related-heading">Related services</h3>
            <div className="insight-related-list">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="insight-related-link"
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.title}
                  </span>
                  <span style={{ color: s.color }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="insight-related">
            <h3 className="insight-related-heading">Keep reading</h3>
            <div className="insight-related-list">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="insight-related-link"
                >
                  <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                    {p.title}
                  </span>
                  <span style={{ color: p.color }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <a
            href="mailto:henrik@fogbunzel.dk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: post.color,
              color: post.color === "#FACC15" ? "#0a0a0f" : "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Discuss your project <span>→</span>
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
