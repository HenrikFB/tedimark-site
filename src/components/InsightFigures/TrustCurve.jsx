import FigureFrame, { FIG } from "./FigureFrame";

export default function TrustCurve() {
  // plot: x 140-1100, y 190-560 (y inverted: 560 = 0%, 190 = 100%)
  const px = 150, pw = 950, py = 190, ph = 370;
  const yFor = (pct) => py + ph - (pct / 100) * ph;
  const pts = [
    [0, 15],
    [15, 22],
    [30, 38],
    [45, 55],
    [60, 68],
    [75, 78],
    [90, 84],
    [100, 87],
  ];
  const path = pts
    .map(([t, pct], i) => `${i === 0 ? "M" : "L"} ${px + (t / 100) * pw} ${yFor(pct)}`)
    .join(" ");

  return (
    <FigureFrame
      kicker="Over time"
      title="The trust curve"
      accent={FIG.yellow}
      caption="Share of AI output posted without human touch. You do not start at full automation — you earn it, with measured accuracy deciding every threshold increase."
    >
      {/* grid */}
      {[0, 25, 50, 75, 100].map((pct) => (
        <g key={pct}>
          <line x1={px} y1={yFor(pct)} x2={px + pw} y2={yFor(pct)} stroke={FIG.border} strokeWidth="1" />
          <text x={px - 16} y={yFor(pct) + 6} textAnchor="end" fill={FIG.muted} fontFamily={FIG.body} fontSize="16">
            {pct}%
          </text>
        </g>
      ))}
      <text x={px + pw / 2} y={py + ph + 46} textAnchor="middle" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="20" fontWeight="700" letterSpacing="2">
        WEEKS IN PRODUCTION →
      </text>

      {/* curve */}
      <path d={path} fill="none" stroke={FIG.yellow} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* annotations */}
      <circle cx={px} cy={yFor(15)} r="7" fill={FIG.yellow} />
      <text x={px + 14} y={yFor(15) + 34} fill={FIG.text} fontFamily={FIG.body} fontSize="18" fontWeight="600">
        Launch: review everything
      </text>

      <circle cx={px + 0.45 * pw} cy={yFor(55)} r="7" fill={FIG.yellow} />
      <text x={px + 0.45 * pw + 14} y={yFor(55) + 30} fill={FIG.text} fontFamily={FIG.body} fontSize="18" fontWeight="600">
        Evals prove accuracy → raise threshold
      </text>

      <circle cx={px + 0.9 * pw} cy={yFor(84)} r="7" fill={FIG.yellow} />
      <text x={px + 0.9 * pw - 14} y={yFor(84) - 18} textAnchor="end" fill={FIG.text} fontFamily={FIG.body} fontSize="18" fontWeight="600">
        Humans handle exceptions only
      </text>
    </FigureFrame>
  );
}
