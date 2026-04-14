"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SvgScrollSwap() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const paths = section.querySelectorAll(".swap-path");
    const intro = section.querySelector(".svg-swap-intro");

    gsap.set(intro, { opacity: 0, y: 20 });

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        pin: true,
        scrub: 1,
      },
    });

    tl.to(intro, {
      opacity: 1,
      y: 0,
      duration: 0.15,
      ease: "power2.out",
    }, 0);

    paths.forEach((path, i) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        },
        0.1 + i * 0.2
      );
    });

    tl.to(section, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
    }, 0.85);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      className="svg-swap-section"
      ref={sectionRef}
      style={{ background: "var(--bg)" }}
    >
      <div className="svg-swap-intro">
        <div style={{ textAlign: "center", zIndex: 2 }}>
          <div className="section-label" style={{ color: "var(--blue)" }}>
            Process
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            How we work
          </h2>
        </div>
      </div>

      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          className="swap-path"
          d="M-100,400 C100,100 300,700 500,300 C700,-100 900,800 1100,400 C1300,0 1400,600 1400,400"
          stroke="var(--blue)"
          strokeWidth="180"
          strokeLinecap="round"
        />
        <path
          className="swap-path"
          d="M-100,500 C150,200 350,800 600,400 C850,0 950,700 1200,300 C1350,100 1400,500 1400,500"
          stroke="var(--red)"
          strokeWidth="160"
          strokeLinecap="round"
        />
        <path
          className="swap-path"
          d="M-100,300 C200,600 400,0 650,500 C900,900 1000,100 1300,500 C1400,700 1400,300 1400,300"
          stroke="var(--green)"
          strokeWidth="140"
          strokeLinecap="round"
        />
        <path
          className="swap-path"
          d="M-100,600 C100,300 350,700 550,200 C750,0 1000,600 1200,200 C1300,50 1400,400 1400,400"
          stroke="var(--yellow)"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
