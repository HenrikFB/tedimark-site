import FigureFrame, { FIG, Arrow } from "./FigureFrame";

export default function BeforeAfterExtraction() {
  const rows = [
    ["Vendor", "Nordic Supplies ApS"],
    ["Invoice no.", "2026-04417"],
    ["Date", "2026-08-14"],
    ["Amount", "12,450.00 DKK"],
    ["VAT", "2,490.00 DKK"],
    ["Status", "Ready to post"],
  ];

  return (
    <FigureFrame
      kicker="Before / after"
      title="From messy PDF to posted entry"
      accent={FIG.green}
      height={640}
      caption="Left: what actually arrives — scanned, skewed, inconsistent layouts. Right: what the finance system needs. The pipeline's whole job is the arrow in the middle."
    >
      {/* BEFORE: messy doc */}
      <g transform="rotate(-3 300 400)">
        <rect x="120" y="200" width="340" height="360" rx="6" fill={FIG.panel} stroke={FIG.border} strokeWidth="1.5" />
        {/* messy lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect
            key={i}
            x={150 + (i % 3) * 8}
            y={240 + i * 32}
            width={i % 4 === 0 ? 250 : i % 3 === 0 ? 180 : 220}
            height="10"
            rx="5"
            fill={FIG.border}
          />
        ))}
        {/* stamp-ish blob */}
        <circle cx="400" cy="500" r="34" fill="none" stroke={FIG.red} strokeWidth="2" opacity="0.6" />
        <text x="400" y="506" textAnchor="middle" fill={FIG.red} fontFamily={FIG.sans} fontSize="15" fontWeight="700" opacity="0.7">
          COPY
        </text>
      </g>
      <text x="290" y="606" textAnchor="middle" fill={FIG.muted} fontFamily={FIG.sans} fontSize="19" fontWeight="700" letterSpacing="2">
        SCANNED · SKEWED · 40 LAYOUTS
      </text>

      {/* arrow */}
      <Arrow x1={510} y1={380} x2={640} y2={380} color={FIG.green} />
      <text x="575" y="356" textAnchor="middle" fill={FIG.green} fontFamily={FIG.sans} fontSize="19" fontWeight="700" letterSpacing="1">
        PIPELINE
      </text>

      {/* AFTER: clean table */}
      <rect x="680" y="200" width="420" height="360" rx="10" fill={FIG.panel} stroke={FIG.green} strokeWidth="1.5" />
      {rows.map((r, i) => {
        const y = 248 + i * 52;
        return (
          <g key={r[0]}>
            <text x="712" y={y} fill={FIG.secondary} fontFamily={FIG.body} fontSize="18">
              {r[0]}
            </text>
            <text x="880" y={y} fill={i === rows.length - 1 ? FIG.green : FIG.text} fontFamily={FIG.body} fontSize="18" fontWeight="600">
              {r[1]}
            </text>
            {i < rows.length - 1 && (
              <line x1="700" y1={y + 18} x2="1080" y2={y + 18} stroke={FIG.border} strokeWidth="1" />
            )}
          </g>
        );
      })}
      <text x="840" y="606" textAnchor="middle" fill={FIG.muted} fontFamily={FIG.sans} fontSize="19" fontWeight="700" letterSpacing="2">
        STRUCTURED · VALIDATED
      </text>
    </FigureFrame>
  );
}
