"use client";
import { marqueeRow1, marqueeRow2 } from "@/lib/content";

const colors = ["var(--blue)", "var(--red)", "var(--green)", "var(--yellow)"];

function MarqueeTrack({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-track ${reverse ? "marquee-track--reverse" : ""}`}>
      {doubled.map((item, i) => (
        <span
          className="marquee-item"
          key={i}
          style={{ color: colors[i % colors.length] }}
        >
          {item}
          <span
            className="marquee-dot"
            style={{ background: colors[(i + 1) % colors.length] }}
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-section">
      <MarqueeTrack items={marqueeRow1} />
      <MarqueeTrack items={marqueeRow2} reverse />
    </div>
  );
}
