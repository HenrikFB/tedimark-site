"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function PinnedSections({ sections }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const sectionEls = wrapper.querySelectorAll(".pinned-section");
    const triggers = [];

    sectionEls.forEach((section, index) => {
      const container = section.querySelector(".pinned-container");

      gsap.to(container, {
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });

      if (index < sectionEls.length - 1) {
        const st = ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {sections.map((section, i) => (
        <section
          key={i}
          className="pinned-section"
          style={{ backgroundColor: section.bg }}
        >
          <div className="pinned-container" style={{ color: section.textColor || "#fff" }}>
            <div
              style={{
                maxWidth: "800px",
                width: "100%",
              }}
            >
              <div className="section-label" style={{ color: section.labelColor || "rgba(255,255,255,0.5)" }}>
                {section.label}
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
                {section.title}
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  textTransform: "none",
                  fontWeight: 400,
                  opacity: 0.85,
                  maxWidth: "600px",
                }}
              >
                {section.description}
              </p>
              {section.items && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "2rem",
                  }}
                >
                  {section.items.map((item, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.4rem 1rem",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "100px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
