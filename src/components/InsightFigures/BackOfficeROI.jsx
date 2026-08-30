import FigureFrame, { FIG } from "./FigureFrame";

export default function BackOfficeROI() {
  return (
    <FigureFrame
      kicker="MIT NANDA · 2025"
      title="Budgets vs. actual ROI"
      accent={FIG.blue}
      height={620}
      caption="MIT's NANDA initiative found that more than half of GenAI budgets flow to sales and marketing tools — while the clearest measured ROI sits in back-office automation."
    >
      {/* Left panel: budget */}
      <g>
        <rect x="80" y="190" width="490" height="330" rx="14" fill={FIG.panel} stroke={FIG.border} strokeWidth="1.5" />
        <text x="110" y="245" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="22" fontWeight="700" letterSpacing="3">
          WHERE BUDGETS GO
        </text>
        <text x="110" y="330" fill={FIG.red} fontFamily={FIG.sans} fontSize="84" fontWeight="800">
          &gt;50%
        </text>
        <text x="110" y="372" fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
          of GenAI spend goes to
        </text>
        <text x="110" y="400" fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
          sales &amp; marketing tools
        </text>
        <text x="110" y="466" fill={FIG.muted} fontFamily={FIG.body} fontSize="17">
          Visible, easy to demo — hard to tie to P&amp;L
        </text>
      </g>

      {/* Right panel: ROI */}
      <g>
        <rect x="630" y="190" width="490" height="330" rx="14" fill={FIG.panel} stroke={FIG.blue} strokeWidth="2" />
        <text x="660" y="245" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="22" fontWeight="700" letterSpacing="3">
          WHERE THE ROI IS
        </text>
        <text x="660" y="330" fill={FIG.green} fontFamily={FIG.sans} fontSize="66" fontWeight="800">
          BACK OFFICE
        </text>
        <text x="660" y="372" fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
          document processing, finance ops,
        </text>
        <text x="660" y="400" fill={FIG.text} fontFamily={FIG.body} fontSize="21" fontWeight="600">
          replacing outsourced busywork
        </text>
        <text x="660" y="466" fill={FIG.muted} fontFamily={FIG.body} fontSize="17">
          Boring, repetitive — and measurable in saved hours
        </text>
      </g>
    </FigureFrame>
  );
}
