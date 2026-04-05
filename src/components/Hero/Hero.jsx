"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef(null);

  const brandWords = [
    { text: "Technology", color: "var(--blue)" },
    { text: "Digitalization", color: "var(--red)" },
    { text: "Marketing", color: "var(--green)" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-badge", { scale: 0.92, filter: "blur(6px)" });
      gsap.set(".hero-line", {
        visibility: "visible",
        yPercent: 120,
        rotateX: -25,
      });
      gsap.set(".brand-word", {
        scale: 1.12,
        filter: "blur(10px)",
        y: 6,
      });

      const split1 = SplitText.create(".hero-line-1", {
        type: "chars",
        tag: "span",
      });
      const split2 = SplitText.create(".hero-line-2", {
        type: "chars",
        tag: "span",
      });

      gsap.set(split1.chars, { opacity: 0.15 });
      gsap.set(split2.chars, { opacity: 0.15 });

      const tl = gsap.timeline({ delay: 0.1 });

      // ── Act 1: Badge materializes ──
      tl.to(
        ".hero-badge",
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        },
        0
      );

      // ── Act 2: Masked line reveals with character micro-stagger ──

      tl.to(
        ".hero-line-1",
        { yPercent: 0, rotateX: 0, duration: 0.8, ease: "expo.out" },
        0.25
      );
      tl.to(
        split1.chars,
        { opacity: 1, duration: 0.4, stagger: 0.02, ease: "power1.out" },
        0.35
      );

      tl.to(
        ".hero-line-2",
        { yPercent: 0, rotateX: 0, duration: 0.8, ease: "expo.out" },
        0.45
      );
      tl.to(
        split2.chars,
        { opacity: 1, duration: 0.4, stagger: 0.02, ease: "power1.out" },
        0.55
      );

      // ── Act 3: "the rest." — scramble starts before slide so text is garbled on entry ──
      tl.to(
        ".hero-line-3",
        {
          duration: 1.2,
          scrambleText: {
            text: "the rest.",
            chars: "█▓▒░TEDIMARK",
            revealDelay: 0.2,
            speed: 0.4,
          },
          ease: "none",
          onComplete: () => {
            gsap.fromTo(
              containerRef.current?.querySelector(".hero-line-3"),
              {
                textShadow:
                  "0 0 25px var(--yellow), 0 0 50px rgba(255,200,0,0.3)",
              },
              {
                textShadow:
                  "0 0 0px transparent, 0 0 0px transparent",
                duration: 1,
                ease: "power2.out",
              }
            );
          },
        },
        0.55
      );

      tl.to(
        ".hero-line-3",
        { yPercent: 0, rotateX: 0, duration: 0.8, ease: "expo.out" },
        0.65
      );

      // ── Act 4: Brand words — blur decode ──
      tl.to(
        ".brand-word",
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        1.5
      );

      tl.to(
        ".brand-separator",
        { opacity: 1, duration: 0.3, stagger: 0.12 },
        1.6
      );

      // ── Act 5: Tagline typewriter ──
      tl.to(
        ".hero-tagline",
        {
          duration: 1.5,
          text: {
            value:
              "From idea to launch \u2014 you set the vision, we build it.",
          },
          ease: "none",
        },
        2.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
        <span className="hero-line-mask">
          <span className="hero-line hero-line-1">You review.</span>
        </span>
        <span className="hero-line-mask">
          <span className="hero-line hero-line-2">We handle</span>
        </span>
        <span className="hero-line-mask">
          <span
            className="hero-line hero-line-3"
            style={{ color: "var(--yellow)" }}
          >
            the rest.
          </span>
        </span>
      </h1>

      <p className="hero-subtitle" style={{ marginTop: "2.5rem" }}>
        {brandWords.map((w, i) => (
          <span key={i}>
            <span
              className="brand-word"
              style={{ color: w.color, fontWeight: 600 }}
            >
              {w.text}
            </span>
            {i < brandWords.length - 1 ? (
              <span className="brand-separator"> · </span>
            ) : (
              <span className="brand-separator">.</span>
            )}
          </span>
        ))}
        <br />
        <span
          className="hero-tagline"
          style={{ marginTop: "0.5rem", display: "inline-block" }}
        />
      </p>
    </section>
  );
}
