import { services } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import BlockReveal from "@/components/TextAnimations/BlockReveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <section className="service-hero" style={{ backgroundColor: service.color }}>
        <div className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>
          Services
        </div>
        <BlockReveal blockColor={service.color} animateOnScroll={false}>
          <h1>{service.title}</h1>
        </BlockReveal>
      </section>

      <div className="service-content">
        <p style={{ fontSize: "1.3rem", color: "var(--text-primary)", lineHeight: 1.8 }}>
          {service.fullDesc}
        </p>

        <div className="service-tags">
          {service.tags.map((tag) => (
            <span key={tag} className="service-tag" style={{ borderColor: service.color, color: service.color }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Other Services
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.5rem",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  transition: "all 0.3s ease",
                }}
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

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <a
            href="mailto:henrik@fogbunzel.dk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: service.color,
              color: service.color === "#FACC15" ? "#0a0a0f" : "#fff",
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
            Discuss this service <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
