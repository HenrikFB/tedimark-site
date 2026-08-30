import FigureFrame, { FIG, Box, Arrow } from "./FigureFrame";

export default function IntegrationBridge() {
  const legacy = [
    { label: "Legacy ERP", sub: "no API" },
    { label: "Industry portal", sub: "login only" },
    { label: "Shared inbox", sub: "PDFs, replies" },
    { label: "Spreadsheets", sub: "tribal knowledge" },
  ];

  return (
    <FigureFrame
      kicker="Architecture"
      title="The integration bridge"
      accent={FIG.red}
      height={660}
      caption="AI never talks to the legacy mess directly. An integration layer — API where possible, browser automation where not — feeds one clean data layer that every AI workflow builds on."
    >
      {/* legacy systems */}
      {legacy.map((l, i) => (
        <Box key={l.label} x={70} y={190 + i * 100} w={230} h={78} label={l.label} sub={l.sub} fontSize={21} />
      ))}
      {legacy.map((_, i) => (
        <Arrow key={i} x1={308} y1={229 + i * 100} x2={388} y2={330 + (i - 1.5) * 24} color={FIG.secondary} />
      ))}

      {/* bridge */}
      <rect x="396" y="228" width="280" height="220" rx="14" fill={FIG.panel} stroke={FIG.red} strokeWidth="2" />
      <text x="536" y="272" textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="26" fontWeight="800">
        INTEGRATION LAYER
      </text>
      {["API where it exists", "File export / SFTP", "Browser automation"].map((m, i) => (
        <g key={m}>
          <circle cx="430" cy={306 + i * 42} r="5" fill={FIG.red} />
          <text x="450" y={313 + i * 42} fill={FIG.secondary} fontFamily={FIG.body} fontSize="18">
            {m}
          </text>
        </g>
      ))}

      <Arrow x1={684} y1={338} x2={756} y2={338} color={FIG.secondary} />

      {/* data layer */}
      <Box x={758} y={280} w={202} h={116} label="Clean data layer" sub="one source of truth" stroke={FIG.red} fontSize={19} />

      <Arrow x1={962} y1={338} x2={1024} y2={338} color={FIG.secondary} />

      {/* AI workflows */}
      <rect x="1032" y="240" width="110" height="196" rx="12" fill={FIG.panel} stroke={FIG.border} strokeWidth="1.5" />
      <text x="1087" y="290" textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="21" fontWeight="700">
        AI
      </text>
      <text x="1087" y="318" textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="21" fontWeight="700">
        WORK-
      </text>
      <text x="1087" y="346" textAnchor="middle" fill={FIG.text} fontFamily={FIG.sans} fontSize="21" fontWeight="700">
        FLOWS
      </text>
      <text x="1087" y="396" textAnchor="middle" fill={FIG.muted} fontFamily={FIG.body} fontSize="15">
        search · extract
      </text>
      <text x="1087" y="416" textAnchor="middle" fill={FIG.muted} fontFamily={FIG.body} fontSize="15">
        reconcile · report
      </text>

      <text x="600" y="590" textAnchor="middle" fill={FIG.muted} fontFamily={FIG.body} fontSize="18">
        Swap a legacy system later? Only the bridge changes — the AI layer never notices.
      </text>
    </FigureFrame>
  );
}
