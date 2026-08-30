import FigureFrame, { FIG } from "./FigureFrame";

export default function IntegrationLadder() {
  const steps = [
    {
      n: "01",
      label: "Official API",
      note: "Stable, documented, supported. Always first choice.",
      color: FIG.green,
    },
    {
      n: "02",
      label: "File export / SFTP",
      note: "Scheduled CSV or XML dumps. Unsexy and very reliable.",
      color: FIG.green,
    },
    {
      n: "03",
      label: "Direct database read",
      note: "Read-only access to the underlying DB. Needs vendor OK.",
      color: FIG.yellow,
    },
    {
      n: "04",
      label: "Browser automation",
      note: "Playwright logs in and clicks like a human. Last resort — but it works.",
      color: FIG.red,
    },
  ];

  return (
    <FigureFrame
      kicker="Decision ladder"
      title="How to integrate anything"
      accent={FIG.red}
      height={660}
      caption="Work down the ladder, never up: take the most stable option the system offers, and only drop a level when the one above genuinely doesn't exist."
    >
      {steps.map((s, i) => {
        const x = 80 + i * 60;
        const y = 190 + i * 105;
        return (
          <g key={s.n}>
            <rect x={x} y={y} width={730} height={84} rx="12" fill={FIG.panel} stroke={s.color} strokeWidth="1.5" />
            <text x={x + 28} y={y + 54} fill={s.color} fontFamily={FIG.sans} fontSize="36" fontWeight="800">
              {s.n}
            </text>
            <text x={x + 108} y={y + 38} fill={FIG.text} fontFamily={FIG.sans} fontSize="26" fontWeight="700">
              {s.label.toUpperCase()}
            </text>
            <text x={x + 108} y={y + 64} fill={FIG.secondary} fontFamily={FIG.body} fontSize="17">
              {s.note}
            </text>
          </g>
        );
      })}
      <text x="1130" y="230" textAnchor="end" fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        MOST STABLE
      </text>
      <text x="1130" y="580" textAnchor="end" fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        LAST RESORT
      </text>
    </FigureFrame>
  );
}
