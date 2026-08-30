import FigureFrame, { FIG } from "./FigureFrame";

function Dot({ x, y, label, color, anchor = "start", dx = 14 }) {
  return (
    <g>
      <circle cx={x} cy={y} r="8" fill={color} />
      <text
        x={anchor === "start" ? x + dx : x - dx}
        y={y + 6}
        textAnchor={anchor}
        fill={FIG.text}
        fontFamily={FIG.body}
        fontSize="19"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
}

export default function HypeVsPayback() {
  // plot area
  const px = 150, py = 190, pw = 900, ph = 380;
  const midX = px + pw / 2;
  const midY = py + ph / 2;

  return (
    <FigureFrame
      kicker="Where payback sits"
      title="Attention vs. payback"
      accent={FIG.blue}
      caption="The AI use cases that dominate headlines are rarely the ones with documented payback. Quadrant based on MIT NANDA (2025) ROI findings and SMB automation benchmark data."
    >
      {/* plot frame */}
      <rect x={px} y={py} width={pw} height={ph} fill="none" stroke={FIG.border} strokeWidth="1.5" />
      <line x1={midX} y1={py} x2={midX} y2={py + ph} stroke={FIG.border} strokeWidth="1.5" strokeDasharray="6 6" />
      <line x1={px} y1={midY} x2={px + pw} y2={midY} stroke={FIG.border} strokeWidth="1.5" strokeDasharray="6 6" />

      {/* axis labels */}
      <text x={px + pw / 2} y={py + ph + 44} textAnchor="middle" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="22" fontWeight="700" letterSpacing="2">
        ATTENTION →
      </text>
      <text x={px - 44} y={py + ph / 2} textAnchor="middle" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="22" fontWeight="700" letterSpacing="2" transform={`rotate(-90 ${px - 44} ${py + ph / 2})`}>
        PAYBACK →
      </text>

      {/* quadrant hints */}
      <text x={px + 18} y={py + 32} fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        QUIET WINNERS
      </text>
      <text x={px + pw - 18} y={py + ph - 18} textAnchor="end" fill={FIG.muted} fontFamily={FIG.sans} fontSize="18" fontWeight="700" letterSpacing="2">
        LOUD DISAPPOINTMENTS
      </text>

      {/* winners: low attention, high payback */}
      <Dot x={px + 130} y={py + 60} label="Invoice & document processing" color={FIG.green} />
      <Dot x={px + 200} y={py + 115} label="Inbox triage & routing" color={FIG.green} />
      <Dot x={px + 110} y={py + 168} label="Reconciliation" color={FIG.green} />

      {/* mid */}
      <Dot x={px + 520} y={py + 130} label="Internal knowledge search" color={FIG.yellow} />

      {/* losers: high attention, low payback */}
      <Dot x={px + 700} y={py + 268} label="Generic chatbots" color={FIG.red} />
      <Dot x={px + 620} y={py + 322} label="Autonomous agent demos" color={FIG.red} anchor="start" />
    </FigureFrame>
  );
}
