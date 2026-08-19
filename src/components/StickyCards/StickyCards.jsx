"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { processSteps } from "@/lib/content";
import { Search, Compass, Hammer, Rocket } from "lucide-react";
import BlockReveal from "@/components/TextAnimations/BlockReveal";
import CharReveal from "@/components/TextAnimations/CharReveal";

const stepIcons = [Search, Compass, Hammer, Rocket];

export default function StickyCards() {
  const sectionRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spacer = spacerRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".sticky-card");
    const totalCards = cards.length;
    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    const resetCards = () => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * cardYOffset,
          rotationX: 0,
          scale: 1 - i * cardScaleStep,
        });
      });
    };

    const updateCards = (progress, keepLastCard) => {
      const peelCount = keepLastCard ? Math.max(totalCards - 1, 1) : totalCards;
      // På mobil bruges sidste del af pinnen til at Stats dækker Launch.
      const peelProgress = keepLastCard
        ? gsap.utils.clamp(0, 1, progress * ((peelCount + 1) / peelCount))
        : progress;
      const segmentSize = 1 / peelCount;
      const activeIndex = Math.min(
        Math.floor(peelProgress / segmentSize),
        totalCards - 1
      );
      const segProgress = gsap.utils.clamp(
        0,
        1,
        (peelProgress - activeIndex * segmentSize) / segmentSize
      );

      cards.forEach((card, i) => {
        if (i < activeIndex) {
          gsap.set(card, { yPercent: -250, rotationX: 35 });
        } else if (i === activeIndex) {
          const isLast = keepLastCard && i === totalCards - 1;
          gsap.set(card, {
            yPercent: isLast
              ? -50
              : gsap.utils.interpolate(-50, -200, segProgress),
            rotationX: isLast ? 0 : gsap.utils.interpolate(0, 35, segProgress),
            scale: 1,
          });
        } else {
          const behindIndex = i - activeIndex;
          gsap.set(card, {
            yPercent: -50 + (behindIndex - segProgress) * cardYOffset,
            rotationX: 0,
            scale: 1 - (behindIndex - segProgress) * cardScaleStep,
          });
        }
      });
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      resetCards();
      if (spacer) spacer.style.height = "0px";
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + window.innerHeight * 8,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateCards(self.progress, false),
      });
    });

    mm.add("(max-width: 768px)", () => {
      resetCards();
      const setSpacer = () => {
        if (spacer) spacer.style.height = `${window.innerHeight * 3}px`;
      };
      setSpacer();

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        // 3 skærme til bladre + 1 skærm så Stats kan dække Launch før unpin.
        end: () => "+=" + window.innerHeight * 4,
        pin: true,
        pinSpacing: false,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onRefresh: setSpacer,
        onUpdate: (self) => updateCards(self.progress, true),
      });

      return () => {
        if (spacer) spacer.style.height = "0px";
      };
    });

    return () => mm.revert();
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
        <BlockReveal blockColor="var(--red)" animateOnScroll>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#0a0a0f" }}>
            From chaos to clarity
          </h2>
        </BlockReveal>
        <CharReveal animateOnScroll stagger={0.02} duration={0.5}>
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
        </CharReveal>
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
      <div className="sticky-cards-exit-spacer" ref={spacerRef} aria-hidden="true" />
    </>
  );
}
