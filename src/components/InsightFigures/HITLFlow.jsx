import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function HITLFlow() {
  return (
    <FigureFrame
      kicker="Design pattern"
      title="The review gate"
      accent={FIG.yellow}
      height={640}
      caption="Confidence decides the path: high-confidence output posts automatically, the rest goes to a human. Every correction becomes an eval case — so the auto-approve share grows over time."
    >
      {/* AI output */}
      <Box x={80} y={300} w={200} h={90} label="AI output" sub="draft + confidence" fontSize={24} />
      <Arrow x1={288} y1={345} x2={368} y2={345} color={FIG.secondary} />

      {/* Gate diamond */}
      <polygon points="470,265 580,345 470,425 360,345" fill={FIG.panel} stroke={FIG.yellow} strokeWidth="2" />
      <text x="470" y="336" textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="21" fontWeight="700">
        CONFIDENCE
      </text>
      <text x="470" y="364" textAnchor="middle" fill={FIG.secondary} fontFamily={FIG.body} fontSize="17">
        ≥ threshold?
      </text>

      {/* High path */}
      <Arrow x1={520} y1={288} x2={640} y2={228} color={FIG.green} />
      <text x="560" y="238" fill={FIG.green} fontFamily={FIG.sans} fontSize="18" fontWeight="700">
        YES
      </text>
      <Box x={650} y={180} w={230} h={80} label="Auto-post" sub="no human touch" stroke={FIG.green} fontSize={22} />

      {/* Low path */}
      <Arrow x1={520} y1={402} x2={640} y2={462} color={FIG.yellow} />
      <text x="560" y="462" fill={FIG.yellow} fontFamily={FIG.sans} fontSize="18" fontWeight="700">
        NO
      </text>
      <Box x={650} y={430} w={230} h={80} label="Human review" sub="approve or correct" stroke={FIG.yellow} fontSize={22} />

      {/* Both to system */}
      <Arrow x1={888} y1={220} x2={968} y2={310} color={FIG.secondary} />
      <Arrow x1={888} y1={470} x2={968} y2={380} color={FIG.secondary} />
      <Box x={950} y={305} w={170} h={80} label="System of record" fontSize={19} />

      {/* Feedback loop */}
      <path d="M 765 514 C 500 590 260 560 180 398" fill="none" stroke={FIG.yellow} strokeWidth="1.5" strokeDasharray="7 7" />
      <text x="430" y="580" fill={FIG.yellow} fontFamily={FIG.body} fontSize="17">
        corrections feed the eval set → threshold rises safely
      </text>
    </FigureFrame>
  );
}
