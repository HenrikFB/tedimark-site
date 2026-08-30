import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function PipelineArchitecture() {
  return (
    <FigureFrame
      kicker="Architecture"
      title="A production extraction pipeline"
      accent={FIG.green}
      height={700}
      caption="The full picture: sources feed a parsing stage, an LLM extracts against a strict schema, validation splits the flow by confidence, and everything is logged and measured."
    >
      {/* Sources */}
      <Box x={70} y={200} w={180} h={64} label="Email inbox" fontSize={21} />
      <Box x={70} y={286} w={180} h={64} label="PDF / upload" fontSize={21} />
      <Box x={70} y={372} w={180} h={64} label="Scans" fontSize={21} />

      <Arrow x1={258} y1={232} x2={318} y2={295} color={FIG.secondary} />
      <Arrow x1={258} y1={318} x2={318} y2={318} color={FIG.secondary} />
      <Arrow x1={258} y1={404} x2={318} y2={341} color={FIG.secondary} />

      {/* Parse */}
      <Box x={326} y={276} w={180} h={84} label="Parse & OCR" sub="layout-aware" fontSize={22} />
      <Arrow x1={514} y1={318} x2={566} y2={318} color={FIG.secondary} />

      {/* Extract */}
      <Box x={574} y={276} w={190} h={84} label="LLM extract" sub="JSON schema" stroke={FIG.green} fontSize={22} />
      <Arrow x1={772} y1={318} x2={824} y2={318} color={FIG.secondary} />

      {/* Validate */}
      <Box x={832} y={276} w={190} h={84} label="Validate" sub="rules + confidence" fontSize={22} />

      {/* branch up: auto */}
      <Arrow x1={927} y1={272} x2={927} y2={216} color={FIG.green} />
      <Box x={832} y={148} w={190} h={64} label="Auto-approve" sub="high confidence" stroke={FIG.green} fontSize={20} />

      {/* branch down: human */}
      <Arrow x1={927} y1={364} x2={927} y2={420} color={FIG.yellow} />
      <Box x={832} y={424} w={190} h={64} label="Human review" sub="low confidence" stroke={FIG.yellow} fontSize={20} />

      {/* deliver */}
      <Arrow x1={1026} y1={180} x2={1078} y2={296} color={FIG.secondary} />
      <Arrow x1={1026} y1={456} x2={1078} y2={340} color={FIG.secondary} />
      <Box x={1058} y={286} w={80} h={64} label="ERP" fontSize={20} />

      {/* corrections feedback */}
      <path d="M 832 470 C 640 540 640 540 660 368" fill="none" stroke={FIG.yellow} strokeWidth="1.5" strokeDasharray="6 6" />
      <text x={600} y={528} fill={FIG.yellow} fontFamily={FIG.body} fontSize="16">
        corrections become eval cases
      </text>

      {/* bottom bar */}
      <rect x={70} y={584} width={1068} height={54} rx="10" fill={FIG.panel} stroke={FIG.border} strokeWidth="1.5" />
      <text x={604} y={618} textAnchor="middle" fill={FIG.secondary} fontFamily={FIG.sans} fontSize="20" fontWeight="700" letterSpacing="2">
        AUDIT LOG · MONITORING · ACCURACY DASHBOARD · ALERTING
      </text>
    </FigureFrame>
  );
}
