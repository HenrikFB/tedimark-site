const BG = "#0a0a0f";
const TEXT = "#f0f0f5";
const MUTED = "#4a4a5a";

export default function FigureFrame({
  title,
  kicker,
  accent = "#2563EB",
  caption,
  height = 675,
  children,
}) {
  return (
    <figure className="insight-figure">
      <svg
        viewBox={`0 0 1200 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
      >
        <rect width="1200" height={height} fill={BG} />
        <rect x="60" y="52" width="34" height="5" fill={accent} />
        {kicker && (
          <text
            x="60"
            y="92"
            fill={accent}
            fontFamily="'Barlow Condensed', sans-serif"
            fontSize="21"
            fontWeight="700"
            letterSpacing="4"
          >
            {kicker.toUpperCase()}
          </text>
        )}
        <text
          x="60"
          y={kicker ? 138 : 110}
          fill={TEXT}
          fontFamily="'Barlow Condensed', sans-serif"
          fontSize="46"
          fontWeight="800"
        >
          {title.toUpperCase()}
        </text>
        {children}
        <text
          x="1140"
          y={height - 32}
          textAnchor="end"
          fill={MUTED}
          fontFamily="'Barlow Condensed', sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="2"
        >
          TEDIMARK
        </text>
      </svg>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export const FIG = {
  bg: BG,
  panel: "#111118",
  border: "#1e1e28",
  text: TEXT,
  secondary: "#8a8a9a",
  muted: MUTED,
  blue: "#2563EB",
  red: "#EF4444",
  green: "#22C55E",
  yellow: "#FACC15",
  sans: "'Barlow Condensed', sans-serif",
  body: "Arial, Helvetica, sans-serif",
};

export function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  stroke = FIG.border,
  fill = FIG.panel,
  labelFill = FIG.text,
  fontSize = 24,
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 8}
        textAnchor="middle"
        fill={labelFill}
        fontFamily={FIG.sans}
        fontSize={fontSize}
        fontWeight="700"
      >
        {label.toUpperCase()}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 24}
          textAnchor="middle"
          fill={FIG.secondary}
          fontFamily={FIG.body}
          fontSize="16"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export function Arrow({ x1, y1, x2, y2, color = FIG.muted }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 9;
  const ax = x2 - size * Math.cos(angle - 0.42);
  const ay = y2 - size * Math.sin(angle - 0.42);
  const bx = x2 - size * Math.cos(angle + 0.42);
  const by = y2 - size * Math.sin(angle + 0.42);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" />
      <polygon points={`${x2},${y2} ${ax},${ay} ${bx},${by}`} fill={color} />
    </g>
  );
}
