import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function DocumentPipeline() {
  const y = 280;
  const h = 130;
  const w = 220;
  const gap = 66;
  const x0 = 80;

  const steps = [
    { label: "Intake", sub: "email · upload · scan" },
    { label: "Extract", sub: "LLM + JSON schema" },
    { label: "Validate", sub: "rules + confidence" },
    { label: "Deliver", sub: "ERP · API · sheet" },
  ];

  return (
    <FigureFrame
      kicker="The pattern"
      title="The document pipeline"
      accent={FIG.blue}
      height={620}
      caption="The same four stages apply to invoices, contracts, order confirmations and forms. The value is not in the model — it is in the pipeline around it."
    >
      {steps.map((s, i) => {
        const x = x0 + i * (w + gap);
        return (
          <g key={s.label}>
            <Box
              x={x}
              y={y}
              w={w}
              h={h}
              label={s.label}
              sub={s.sub}
              stroke={i === 2 ? FIG.blue : FIG.border}
              fontSize={28}
            />
            {i < steps.length - 1 && (
              <Arrow x1={x + w + 8} y1={y + h / 2} x2={x + w + gap - 8} y2={y + h / 2} color={FIG.secondary} />
            )}
          </g>
        );
      })}

      {/* human review badge on validate */}
      <g>
        <rect x={x0 + 2 * (w + gap) + 20} y={y - 62} width={180} height={40} rx="20" fill="none" stroke={FIG.blue} strokeWidth="1.5" />
        <text x={x0 + 2 * (w + gap) + 110} y={y - 36} textAnchor="middle" fill={FIG.blue} fontFamily={FIG.sans} fontSize="19" fontWeight="700" letterSpacing="1">
          HUMAN REVIEW GATE
        </text>
        <Arrow x1={x0 + 2 * (w + gap) + 110} y1={y - 20} x2={x0 + 2 * (w + gap) + 110} y2={y - 6} color={FIG.blue} />
      </g>

      {/* bottom annotation */}
      <text x="600" y={y + h + 84} textAnchor="middle" fill={FIG.muted} fontFamily={FIG.body} fontSize="18">
        Every stage logs its output — accuracy is measured, not assumed
      </text>
    </FigureFrame>
  );
}
