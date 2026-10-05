import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function DataIslands() {
  const islands = [
    {
      folder: "AP invoices",
      agent: "Extraction workflow",
      stroke: FIG.green,
      y: 198,
    },
    {
      folder: "Deal room",
      agent: "Researcher / writer",
      stroke: FIG.blue,
      y: 348,
    },
    {
      folder: "Client pack",
      agent: "PII-safe digest",
      stroke: FIG.yellow,
      y: 498,
    },
  ];

  return (
    <FigureFrame
      kicker="Data model"
      title="One corpus, several islands"
      accent={FIG.blue}
      height={700}
      caption="Keep a single overview of all files — then attach a folder (or a hierarchy) to a specific agent. Isolation without a second app for every use case."
    >
      <Box
        x={70}
        y={248}
        w={250}
        h={280}
        label="Shared corpus"
        sub="all files · one tree"
        stroke={FIG.blue}
        fontSize={24}
      />

      {islands.map((isle) => (
        <g key={isle.folder}>
          <Arrow x1={328} y1={388} x2={418} y2={isle.y + 48} color={FIG.secondary} />
          <rect
            x={430}
            y={isle.y}
            width={700}
            height={96}
            rx="12"
            fill={FIG.panel}
            stroke={isle.stroke}
            strokeWidth="1.5"
          />
          <text
            x={462}
            y={isle.y + 42}
            fill={FIG.muted}
            fontFamily={FIG.sans}
            fontSize="16"
            fontWeight="700"
            letterSpacing="2"
          >
            FOLDER
          </text>
          <text
            x={462}
            y={isle.y + 72}
            fill={FIG.text}
            fontFamily={FIG.sans}
            fontSize="26"
            fontWeight="700"
          >
            {isle.folder.toUpperCase()}
          </text>
          <text
            x={1088}
            y={isle.y + 42}
            textAnchor="end"
            fill={isle.stroke}
            fontFamily={FIG.sans}
            fontSize="16"
            fontWeight="700"
            letterSpacing="2"
          >
            ATTACHED AGENT
          </text>
          <text
            x={1088}
            y={isle.y + 72}
            textAnchor="end"
            fill={FIG.text}
            fontFamily={FIG.sans}
            fontSize="22"
            fontWeight="700"
          >
            {isle.agent.toUpperCase()}
          </text>
        </g>
      ))}
    </FigureFrame>
  );
}
