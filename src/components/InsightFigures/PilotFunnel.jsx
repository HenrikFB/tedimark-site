import FigureFrame, { FIG } from "./FigureFrame";

export default function PilotFunnel() {
  const rows = [
    { pct: 60, label: "evaluated enterprise-grade AI tools", w: 900, color: FIG.secondary },
    { pct: 20, label: "reached a pilot", w: 400, color: FIG.yellow },
    { pct: 5, label: "reached production", w: 160, color: FIG.red },
  ];

  return (
    <FigureFrame
      kicker="MIT NANDA · 2025"
      title="The enterprise AI funnel"
      accent={FIG.red}
      height={620}
      caption="MIT's State of AI in Business 2025: of organizations that evaluated enterprise-grade AI systems, only a fraction ever reached production — and 95% of pilots showed no measurable P&L impact."
    >
      {rows.map((r, i) => {
        const y = 220 + i * 110;
        return (
          <g key={r.pct}>
            <rect x="80" y={y} width={r.w} height="66" rx="10" fill={FIG.panel} stroke={r.color} strokeWidth="2" />
            <text x="104" y={y + 44} fill={r.color} fontFamily={FIG.sans} fontSize="40" fontWeight="800">
              {r.pct}%
            </text>
            <text x={r.pct === 60 ? 210 : r.pct === 20 ? 190 : 175} y={y + 42} fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
              {r.label}
            </text>
          </g>
        );
      })}
      <text x="80" y="590" fill={FIG.muted} fontFamily={FIG.body} fontSize="17">
        Custom / vendor-sold systems. Generic chat tools spread fast — but boost individuals, not P&amp;L.
      </text>
    </FigureFrame>
  );
}
