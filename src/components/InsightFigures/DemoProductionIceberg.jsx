import FigureFrame, { FIG } from "./FigureFrame";

export default function DemoProductionIceberg() {
  const cx = 430;
  const waterY = 250;

  const hidden = [
    "Integration with ERP / CRM / inbox",
    "Identity, access & permissions",
    "Error handling & edge cases",
    "Monitoring, evals & regression tests",
    "Security, GDPR & audit trail",
    "Ownership & maintenance after launch",
  ];

  return (
    <FigureFrame
      kicker="The gap"
      title="The demo is the tip"
      accent={FIG.red}
      caption="What a stakeholder sees in the demo vs. what production actually requires. Most pilots budget for the tip and drown on the rest."
    >
      {/* water line */}
      <line x1="60" y1={waterY} x2="1140" y2={waterY} stroke={FIG.border} strokeWidth="2" strokeDasharray="8 8" />
      <text x="1130" y={waterY - 12} textAnchor="end" fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        WHAT THE BUYER SEES
      </text>
      <text x="1130" y={waterY + 30} textAnchor="end" fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        WHAT PRODUCTION REQUIRES
      </text>

      {/* iceberg tip */}
      <polygon
        points={`${cx},172 ${cx - 90},${waterY} ${cx + 90},${waterY}`}
        fill={FIG.panel}
        stroke={FIG.red}
        strokeWidth="2"
      />
      <text x={cx} y={waterY - 28} textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="26" fontWeight="800">
        THE DEMO
      </text>

      {/* iceberg body */}
      <polygon
        points={`${cx - 90},${waterY} ${cx + 90},${waterY} ${cx + 190},560 ${cx - 210},590 ${cx - 250},420`}
        fill={FIG.panel}
        stroke={FIG.border}
        strokeWidth="2"
        opacity="0.85"
      />

      {/* hidden items list */}
      {hidden.map((item, i) => {
        const y = 322 + i * 50;
        return (
          <g key={item}>
            <circle cx="700" cy={y - 7} r="5" fill={FIG.red} />
            <text x="722" y={y} fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
              {item}
            </text>
          </g>
        );
      })}
    </FigureFrame>
  );
}
