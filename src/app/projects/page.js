import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import {
  featuredProject,
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
      <section className="selected-projects">
        <article className="featured-project">
          <div
            className="featured-project-accent"
            style={{ background: featuredProject.color }}
          />
          <div>
            <span className="featured-project-badge">
              {featuredProject.badge}
            </span>
            <div className="featured-project-category">
              {featuredProject.category}
            </div>
            <CharReveal stagger={0.03} duration={0.5}>
              <h3 className="featured-project-title">{featuredProject.title}</h3>
            </CharReveal>
            <p className="featured-project-desc">{featuredProject.description}</p>
            <div className="featured-project-tags">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="featured-project-panel">
            <ul className="featured-project-list">
              {featuredProject.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="featured-project-ctas">
              <Link
                href={featuredProject.insightHref}
                className="featured-project-cta featured-project-cta-primary"
              >
                Read the architecture <span>→</span>
              </Link>
              <Link
                href={featuredProject.contactHref}
                className="featured-project-cta featured-project-cta-secondary"
              >
                Discuss a custom build
              </Link>
            </div>
          </div>
        </article>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div
                className="project-card-accent"
                style={{ background: project.color }}
              />
              <div className="project-card-category">{project.category}</div>
              <CharReveal stagger={0.03} duration={0.5}>
                <h3 className="project-card-title">{project.title}</h3>
              </CharReveal>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
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
