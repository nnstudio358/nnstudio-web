// Illustrative only: an invented documentation page for a button component.
// Styling, labels and values are made up; nothing comes from the client's
// files, tokens or components. Text is drawn large so it stays legible on a phone.
const paper = "#F8F8F6";
const ink = "#23292D";
const soft = "#5F686D";
const line = "#D5DADB";
const hover = "#3D5F86";
const redline = "#C8326A";

function Btn({ cx, y, w, h, state }: { cx: number; y: number; w: number; h: number; state: "Default" | "Hover" | "Disabled" }) {
  const fill = state === "Default" ? ink : state === "Hover" ? hover : "#E2E6E7";
  const text = state === "Disabled" ? "#7D868A" : "#FFFFFF";
  return (
    <g>
      <rect x={cx - w / 2} y={y} width={w} height={h} rx="5" fill={fill} />
      <text x={cx} y={y + h / 2 + 7} fontSize="20" fontWeight="600" fill={text} textAnchor="middle">
        Label
      </text>
    </g>
  );
}

export default function DocPage({ className }: { className?: string }) {
  const cols = [
    { x: 214, s: "Default" as const },
    { x: 344, s: "Hover" as const },
    { x: 474, s: "Disabled" as const },
  ];
  const rows = [
    { k: "S", y: 424, w: 104, h: 36 },
    { k: "M", y: 482, w: 112, h: 44 },
    { k: "L", y: 548, w: 120, h: 52 },
  ];
  return (
    <svg
      viewBox="0 0 560 780"
      className={className}
      role="img"
      aria-label="Illustrative documentation page for a button: anatomy with spacing measurements, sizes by state, and usage notes"
      style={{ fontFamily: "var(--font-schibsted), system-ui, sans-serif" }}
    >
      <rect width="560" height="780" fill={paper} />

      <text x="40" y="62" fontSize="22" fill={soft}>Components</text>
      <text x="40" y="108" fontSize="42" fontWeight="600" fill={ink}>Button</text>
      <line x1="40" y1="134" x2="520" y2="134" stroke={line} strokeWidth="1.5" />

      {/* Anatomy with redlines */}
      <text x="40" y="180" fontSize="24" fontWeight="600" fill={ink}>Anatomy</text>
      <rect x="170" y="210" width="220" height="64" rx="6" fill={ink} />
      <text x="280" y="251" fontSize="26" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Label</text>
      {/* height */}
      <line x1="414" y1="210" x2="414" y2="274" stroke={redline} strokeWidth="2" />
      <line x1="406" y1="210" x2="422" y2="210" stroke={redline} strokeWidth="2" />
      <line x1="406" y1="274" x2="422" y2="274" stroke={redline} strokeWidth="2" />
      <text x="432" y="250" fontSize="22" fontWeight="600" fill={redline}>48</text>
      {/* side padding */}
      <line x1="170" y1="298" x2="244" y2="298" stroke={redline} strokeWidth="2" />
      <line x1="170" y1="290" x2="170" y2="306" stroke={redline} strokeWidth="2" />
      <line x1="244" y1="290" x2="244" y2="306" stroke={redline} strokeWidth="2" />
      <text x="207" y="332" fontSize="22" fontWeight="600" fill={redline} textAnchor="middle">24</text>
      <line x1="244" y1="230" x2="244" y2="290" stroke={redline} strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Sizes by state */}
      <text x="40" y="386" fontSize="24" fontWeight="600" fill={ink}>Sizes and states</text>
      {cols.map((c) => (
        <text key={c.s} x={c.x} y="414" fontSize="20" fill={soft} textAnchor="middle" dy="-2">
          {c.s}
        </text>
      ))}
      {rows.map((r) => (
        <g key={r.k}>
          <text x="40" y={r.y + r.h / 2 + 8} fontSize="22" fontWeight="600" fill={ink}>
            {r.k}
          </text>
          {cols.map((c) => (
            <Btn key={c.s} cx={c.x} y={r.y} w={r.w} h={r.h} state={c.s} />
          ))}
        </g>
      ))}

      {/* Usage */}
      <line x1="40" y1="636" x2="520" y2="636" stroke={line} strokeWidth="1.5" />
      <text x="40" y="680" fontSize="24" fontWeight="600" fill={ink}>Usage</text>
      <text x="40" y="720" fontSize="22" fill={ink}>One primary button per view.</text>
      <text x="40" y="754" fontSize="22" fill={ink}>Labels start with a verb.</text>
    </svg>
  );
}
