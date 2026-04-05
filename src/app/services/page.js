import Link from "next/link";
import { services } from "@/lib/content";
import Footer from "@/components/Footer/Footer";

export default function ServicesPage() {
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
        <div className="section-label" style={{ color: "var(--red)" }}>
          What we do
        </div>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.95 }}>
          Our Services
        </h1>
      </section>

      <section style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: service.color,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.shortDesc}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginTop: "1.5rem",
                  }}
                >
                  {service.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
