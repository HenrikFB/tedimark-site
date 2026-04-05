"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { processSteps } from "@/lib/content";
import { Search, Compass, Hammer, Rocket } from "lucide-react";

const stepIcons = [Search, Compass, Hammer, Rocket];

export default function StickyCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".sticky-card");
    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;
    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * cardYOffset,
        scale: 1 - i * cardScaleStep,
      });
    });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        );
        const segProgress =
          (progress - activeIndex * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (i < activeIndex) {
            gsap.set(card, { yPercent: -250, rotationX: 35 });
          } else if (i === activeIndex) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -200, segProgress),
              rotationX: gsap.utils.interpolate(0, 35, segProgress),
              scale: 1,
            });
          } else {
            const behindIndex = i - activeIndex;
            const currentYOffset = (behindIndex - segProgress) * cardYOffset;
            const currentScale =
              1 - (behindIndex - segProgress) * cardScaleStep;
            gsap.set(card, {
              yPercent: -50 + currentYOffset,
              rotationX: 0,
              scale: currentScale,
            });
          }
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <>
      <section
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#e3e3db",
          color: "#0a0a0f",
          padding: "2rem",
        }}
      >
        <div className="section-label" style={{ color: "var(--red)" }}>
          Process
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#0a0a0f" }}>
          From chaos to clarity
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "#4a4a5a",
            maxWidth: "500px",
            marginTop: "1rem",
            lineHeight: 1.7,
            textTransform: "none",
            fontWeight: 400,
          }}
        >
          Four phases. Continuous milestones. You never have to think about the
          technology — only whether it meets your vision.
        </p>
      </section>
      <section className="sticky-cards-section" ref={sectionRef}>
        {processSteps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <div
              key={step.number}
              className="sticky-card"
              style={{
                backgroundColor: step.color,
                zIndex: processSteps.length - i,
              }}
            >
              <div className="card-col">
                <span className="card-number">Step {step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p style={{ marginTop: "1rem" }}>{step.description}</p>
                </div>
              </div>
              <div className="card-col">
                <Icon
                  size="100%"
                  strokeWidth={1}
                  color="rgba(255,255,255,0.35)"
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
