import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";

export default function LatestInsights() {
  const featured = getFeaturedPosts(3);

  return (
    <section className="home-insights">
      <div className="home-insights-header">
        <div>
          <div className="section-label" style={{ color: "var(--green)" }}>
            Field notes
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Latest insights
          </h2>
        </div>
        <Link
          href="/insights"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--text-secondary)",
            textDecoration: "none",
          }}
        >
          View all →
        </Link>
      </div>

      <div className="insights-grid">
        {featured.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="insight-card"
          >
            <div
              className="insight-card-accent"
              style={{ background: post.color }}
            />
            <div className="insight-card-meta">
              <span>{post.dateLabel}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="insight-card-title">{post.title}</h3>
            <p className="insight-card-excerpt">{post.excerpt}</p>
            <span className="insight-card-arrow" style={{ color: post.color }}>
              Read →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
