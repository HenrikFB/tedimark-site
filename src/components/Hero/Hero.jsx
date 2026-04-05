"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = containerRef.current.querySelectorAll(".char");
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      });

      gsap.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = [
    { text: "You review.", color: "var(--text-primary)" },
    { text: "We handle", color: "var(--text-primary)" },
    { text: "the rest.", color: "var(--yellow)" },
  ];

  const brandWords = [
    { text: "Technology", color: "var(--blue)" },
    { text: "Digitalization", color: "var(--red)" },
    { text: "Marketing", color: "var(--green)" },
  ];

  return (
    <section className="hero-section" ref={containerRef}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 65%)",
        }}
      />

      <div
        className="hero-badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1.25rem",
          border: "1px solid var(--border)",
          borderRadius: "100px",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
          marginBottom: "2.5rem",
          background: "var(--bg-elevated)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--green)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        Available for new projects
      </div>

      <h1 className="hero-title" style={{ perspective: "600px" }}>
        {headline.map((segment, wi) => (
          <span key={wi}>
            {segment.text.split("").map((char, ci) => (
              <span
                key={`${wi}-${ci}`}
                className="char"
                style={{ color: segment.color }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {wi < headline.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p className="hero-subtitle" style={{ marginTop: "2.5rem" }}>
        {brandWords.map((w, i) => (
          <span key={i}>
            <span style={{ color: w.color, fontWeight: 600 }}>{w.text}</span>
            {i < brandWords.length - 1 ? " · " : "."}
          </span>
        ))}
        <br />
        <span style={{ marginTop: "0.5rem", display: "inline-block" }}>
          From idea to launch — you set the vision, we build it.
        </span>
      </p>

    </section>
  );
}
