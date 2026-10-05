import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function ResearcherWriterArch() {
  const nodes = [
    { label: "Intake", sub: "email · upload · scan", stroke: FIG.border },
    { label: "Route", sub: "folder hierarchy", stroke: FIG.blue },
    { label: "Aggregator", sub: "mess → records", stroke: FIG.green },
    { label: "Researcher", sub: "retrieve · reason", stroke: FIG.border },
    { label: "Writer", sub: "outcome format", stroke: FIG.border },
    { label: "Reflection", sub: "verify before send", stroke: FIG.yellow },
  ];

  const w = 158;
  const h = 92;
  const y = 214;
  const gap = 18;
  const x0 = 62;

  return (
    <FigureFrame
      kicker="Architecture"
      title="The three nodes a canvas skips"
      accent={FIG.blue}
      height={700}
      caption="The canvas gives you a researcher and a writer. Production still needs routing into folders, an aggregator that turns mess into records, and a reflection step that can refuse to ship."
    >
      {nodes.map((n, i) => {
        const x = x0 + i * (w + gap);
        return (
          <g key={n.label}>
            <text
              x={x + w / 2}
              y={y - 16}
              textAnchor="middle"
              fill={n.stroke === FIG.border ? FIG.muted : n.stroke}
              fontFamily={FIG.sans}
              fontSize="18"
              fontWeight="700"
              letterSpacing="2"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            <Box
              x={x}
              y={y}
              w={w}
              h={h}
              label={n.label}
              sub={n.sub}
              stroke={n.stroke}
              fontSize={20}
            />
            {i < nodes.length - 1 && (
              <Arrow
                x1={x + w + 4}
                y1={y + h / 2}
                x2={x + w + gap - 4}
                y2={y + h / 2}
                color={FIG.secondary}
              />
            )}
          </g>
        );
      })}

      {/* Highlight callouts under the three extra nodes */}
      {[
        { i: 1, text: "Where files live", color: FIG.blue },
        { i: 2, text: "Structure the mess", color: FIG.green },
      ].map((c) => {
        const x = x0 + c.i * (w + gap) + w / 2;
        return (
          <text
            key={c.text}
            x={x}
            y={y + h + 36}
            textAnchor="middle"
            fill={c.color}
            fontFamily={FIG.body}
            fontSize="15"
          >
            {c.text}
          </text>
        );
      })}

      <Arrow
        x1={x0 + 5 * (w + gap) + w / 2}
        y1={y + h + 12}
        x2={x0 + 5 * (w + gap) + w / 2}
        y2={y + h + 78}
        color={FIG.yellow}
      />
      <text
        x={x0 + 5 * (w + gap) + w / 2 - 14}
        y={y + h + 52}
        textAnchor="end"
        fill={FIG.yellow}
        fontFamily={FIG.body}
        fontSize="14"
      >
        Can refuse to ship
      </text>
      <Box
        x={x0 + 5 * (w + gap) + w / 2 - 100}
        y={y + h + 82}
        w={200}
        h={62}
        label="Output"
        sub="ERP · report · queue"
        stroke={FIG.yellow}
        fontSize={20}
      />

      <rect
        x={62}
        y={578}
        width={1076}
        height={58}
        rx="10"
        fill={FIG.panel}
        stroke={FIG.border}
        strokeWidth="1.5"
      />
      <text
        x={600}
        y={614}
        textAnchor="middle"
        fill={FIG.secondary}
        fontFamily={FIG.sans}
        fontSize="20"
        fontWeight="700"
        letterSpacing="2"
      >
        CONFIG · PROMPTS · SKILLS · PARSERS · SETTINGS
      </text>
    </FigureFrame>
  );
}
