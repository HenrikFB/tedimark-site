"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { stats } from "@/lib/content";

const colors = ["var(--blue)", "var(--red)", "var(--green)", "var(--yellow)"];

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const statEls = section.querySelectorAll(".stat-value");
    const triggers = [];

    statEls.forEach((el) => {
      const raw = el.dataset.value;
      const isNumber = /^\d+$/.test(raw);

      if (isNumber) {
        const target = parseInt(raw);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.v);
          },
        });
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onStart: () => {
              el.textContent = raw;
            },
          }
        );
      }
    });

    return () => triggers.forEach((st) => st.kill());
  }, []);

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div
              className="stat-value"
              data-value={stat.value}
              style={{ color: colors[i % colors.length] }}
            >
              0
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
