import Footer from "@/components/Footer/Footer";
import {
  projects,
  researchProjects,
  educationCourses,
} from "@/lib/content";
import BlockReveal from "@/components/TextAnimations/BlockReveal";
import CharReveal from "@/components/TextAnimations/CharReveal";

export default function ProjectsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="projects-hero">
        <div className="section-label" style={{ color: "var(--blue)" }}>
          Work
        </div>
        <BlockReveal blockColor="var(--blue)" animateOnScroll={false}>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.95,
            }}
          >
            Selected Projects
          </h1>
        </BlockReveal>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            marginTop: "1.5rem",
            lineHeight: 1.7,
            textTransform: "none",
            fontWeight: 400,
          }}
        >
          A cross-section of client work, research, and personal projects across
          industries and technologies.
        </p>
      </section>

      {/* ── Selected Projects ── */}
      <section className="selected-projects" style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "2rem",
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
                  background: project.color,
                }}
              />
              <div
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                {project.category}
              </div>
              <CharReveal animateOnScroll stagger={0.03} duration={0.5}>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
              </CharReveal>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Research & Exploration ── */}
      <section className="research-section">
        <div className="research-header">
          <div>
            <div className="section-label" style={{ color: "var(--green)" }}>
              Academic &amp; Personal
            </div>
            <CharReveal animateOnScroll stagger={0.04}>
              <h2 className="research-title">Research &amp; Exploration</h2>
            </CharReveal>
          </div>
          <span className="section-count-badge">11 projects</span>
        </div>

        <div className="research-list">
          {researchProjects.map((item) => (
            <div key={item.number} className="research-item">
              <div className="research-item-num">{item.number}</div>
              <div className="research-item-content">
                <h4 className="research-item-title">{item.title}</h4>
                <p className="research-item-desc">{item.description}</p>
                <div className="research-item-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="research-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="education-section">
        <div className="education-header">
          <div>
            <div className="section-label" style={{ color: "var(--yellow)" }}>
              Academic Background
            </div>
            <CharReveal animateOnScroll stagger={0.04}>
              <h2 className="education-title">
                Education — MSc &amp; BSc IT Product Development
              </h2>
            </CharReveal>
          </div>
          <span className="section-count-badge">30+ courses</span>
        </div>

        <div className="education-grid">
          {educationCourses.map((course) => (
            <div key={course} className="education-item">
              {course}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
