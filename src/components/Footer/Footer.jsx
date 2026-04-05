"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link
            href="/"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            TeDi<span style={{ color: "var(--green)" }}>Mark</span>
          </Link>
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
            }}
          >
            {siteConfig.location}
          </span>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            {
              href: siteConfig.linkedin,
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              ),
            },
            {
              href: siteConfig.github,
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3" />
                </svg>
              ),
            },
            {
              href: `mailto:${siteConfig.email}`,
              label: "Email",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                background: "var(--bg-elevated)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          &copy; 2026 TeDiMark
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Services", "Projects", "About", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
