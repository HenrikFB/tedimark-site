"use client";
import { marqueeItems } from "@/lib/content";

const colors = ["var(--blue)", "var(--red)", "var(--green)", "var(--yellow)"];

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i} style={{ color: colors[i % colors.length] }}>
            {item}
            <span
              className="marquee-dot"
              style={{ background: colors[(i + 1) % colors.length] }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
