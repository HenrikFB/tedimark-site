"use client";
import { useState } from "react";
import Link from "next/link";

export default function InsightsGrid({ posts }) {
  const [activeTag, setActiveTag] = useState(null);
  const tags = [...new Set(posts.flatMap((p) => p.tags))];
  const visible = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <section style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="insights-filter">
        <button
          className={`insights-filter-btn ${activeTag === null ? "active" : ""}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`insights-filter-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="insights-grid">
        {visible.map((post) => (
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
              <span>{post.readTime}</span>
            </div>
            <h3 className="insight-card-title">{post.title}</h3>
            <p className="insight-card-excerpt">{post.excerpt}</p>
            <div className="insight-card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="insight-card-arrow" style={{ color: post.color }}>
              Read →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
