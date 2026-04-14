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

    statEls.forEach((el) => {
      const raw = el.dataset.value;
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
          el.textContent = Math.round(obj.v) + "+";
        },
      });
    });

    const blurb = section.querySelector(".stats-blurb");
    if (blurb) {
      gsap.fromTo(
        blurb,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blurb,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-layout">
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
        <div className="stats-blurb">
          <div className="stats-blurb-label">Background</div>
          <p className="stats-blurb-text">
            MSc + BSc in IT Product Development — from algorithms to product launch.
          </p>
          <p className="stats-blurb-sub">
            One person covers the full chain. You review, we build.
          </p>
        </div>
      </div>
    </div>
  );
}
