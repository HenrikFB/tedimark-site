import FigureFrame, { FIG } from "./FigureFrame";

export default function CanvasVsPlatform() {
  const canvasItems = [
    { n: "01", label: "Trigger", note: "Webhook, schedule, inbox" },
    { n: "02", label: "LLM node", note: "Prompt in, text out" },
    { n: "03", label: "HTTP / app", note: "Post to the next tool" },
    { n: "04", label: "Someone clicks Run", note: "Starts when a person is already at the screen" },
  ];

  const platformItems = [
    { n: "01", label: "Route into folders", note: "Files land in a hierarchy, not a linear history", color: FIG.blue },
    { n: "02", label: "Aggregator node", note: "Unstructured mess becomes typed records", color: FIG.green },
    { n: "03", label: "Reflection step", note: "A second pass that can refuse to ship", color: FIG.yellow },
    { n: "04", label: "Search + workspace UI", note: "Full-text, resizable panes, drag-and-drop tree", color: FIG.blue },
    { n: "05", label: "Config agent", note: "Tune prompts and skills without running the job", color: FIG.green },
  ];

  return (
    <FigureFrame
      kicker="The gap"
      title="A canvas is not a platform"
      accent={FIG.blue}
      height={780}
      caption="n8n, Langflow, LlamaIndex, and unstructured.io are excellent pieces. They still leave routing, structured aggregation, verification, and a real UI as homework."
    >
      {/* Left column */}
      <rect x="60" y="188" width="520" height="520" rx="14" fill={FIG.panel} stroke={FIG.border} strokeWidth="1.5" />
      <text
        x="320"
        y="232"
        textAnchor="middle"
        fill={FIG.muted}
        fontFamily={FIG.sans}
        fontSize="20"
        fontWeight="700"
        letterSpacing="3"
      >
        WORKFLOW CANVAS
      </text>
      <text
        x="320"
        y="258"
        textAnchor="middle"
        fill={FIG.secondary}
        fontFamily={FIG.body}
        fontSize="16"
      >
        n8n · Langflow · LlamaIndex
      </text>
      {canvasItems.map((item, i) => {
        const y = 292 + i * 92;
        return (
          <g key={item.n}>
            <text x="92" y={y + 8} fill={FIG.muted} fontFamily={FIG.sans} fontSize="22" fontWeight="800">
              {item.n}
            </text>
            <text x="148" y={y} fill={FIG.text} fontFamily={FIG.sans} fontSize="24" fontWeight="700">
              {item.label.toUpperCase()}
            </text>
            <text x="148" y={y + 28} fill={FIG.secondary} fontFamily={FIG.body} fontSize="16">
              {item.note}
            </text>
          </g>
        );
      })}

      {/* Right column */}
      <rect x="620" y="188" width="520" height="520" rx="14" fill={FIG.panel} stroke={FIG.blue} strokeWidth="1.5" />
      <text
        x="880"
        y="232"
        textAnchor="middle"
        fill={FIG.blue}
        fontFamily={FIG.sans}
        fontSize="20"
        fontWeight="700"
        letterSpacing="3"
      >
        PLATFORM LAYER
      </text>
      <text
        x="880"
        y="258"
        textAnchor="middle"
        fill={FIG.secondary}
        fontFamily={FIG.body}
        fontSize="16"
      >
        what you still have to build
      </text>
      {platformItems.map((item, i) => {
        const y = 292 + i * 78;
        return (
          <g key={item.n}>
            <text x="652" y={y + 8} fill={item.color} fontFamily={FIG.sans} fontSize="22" fontWeight="800">
              {item.n}
            </text>
            <text x="708" y={y} fill={FIG.text} fontFamily={FIG.sans} fontSize="22" fontWeight="700">
              {item.label.toUpperCase()}
            </text>
            <text x="708" y={y + 26} fill={FIG.secondary} fontFamily={FIG.body} fontSize="16">
              {item.note}
            </text>
          </g>
        );
      })}
    </FigureFrame>
  );
}
