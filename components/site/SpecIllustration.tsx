// Illustrative spec for the anonymous enterprise design-system entry: one
// field and one button, set large with their measurements, in the site's own
// ink and paper. Invented content only: no client marks, names, tokens or
// structure.

const INK = "#1C1C1A";
const GRAPHITE = "#5F5C57";

function Dim({ x1, y1, x2, y2, label, side = "after" }: { x1: number; y1: number; x2: number; y2: number; label: string; side?: "before" | "after" }) {
  const vertical = x1 === x2;
  const t = 9;
  const ticks = vertical
    ? `M${x1 - t} ${y1} H${x1 + t} M${x2 - t} ${y2} H${x2 + t}`
    : `M${x1} ${y1 - t} V${y1 + t} M${x2} ${y2 - t} V${y2 + t}`;
  const lx = vertical ? (side === "after" ? x1 + 18 : x1 - 18) : (x1 + x2) / 2;
  const ly = vertical ? (y1 + y2) / 2 + 8 : side === "after" ? y1 + 34 : y1 - 16;
  return (
    <g>
      <path d={`M${x1} ${y1} L${x2} ${y2} ${ticks}`} stroke={GRAPHITE} strokeWidth="1.5" fill="none" />
      <text
        x={lx}
        y={ly}
        fontSize="22"
        fontWeight="560"
        fill={GRAPHITE}
        textAnchor={vertical ? (side === "after" ? "start" : "end") : "middle"}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {label}
      </text>
    </g>
  );
}

export default function SpecIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="50 40 880 704"
      className={className}
      role="img"
      aria-label="Illustrative spec: an email field and a button set large, with their height, spacing, padding and width measured"
      style={{ fontFamily: "inherit" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="0" y="0" width="1000" height="800" fill="#EAE7E1" />

      {/* width of the set */}
      <Dim x1={170} y1={196} x2={790} y2={196} label="310" side="before" />

      {/* label */}
      <text x={170} y={258} fontSize="30" fontWeight="600" fill={INK}>
        Work email
      </text>
      <Dim x1={140} y1={266} x2={140} y2={282} label="8" side="before" />

      {/* field */}
      <rect x={170} y={282} width={620} height={96} rx={4} fill="#F4F2EE" stroke={INK} strokeWidth="2" />
      <text x={202} y={341} fontSize="30" fill={GRAPHITE}>
        name@company.com
      </text>
      <Dim x1={830} y1={282} x2={830} y2={378} label="48" />

      {/* gap */}
      <Dim x1={140} y1={378} x2={140} y2={442} label="32" side="before" />

      {/* button */}
      <rect x={170} y={442} width={340} height={96} rx={4} fill={INK} />
      <text x={340} y={500} fontSize="30" fontWeight="600" fill="#F4F2EE" textAnchor="middle">
        Request a demo
      </text>
      <Dim x1={550} y1={442} x2={550} y2={538} label="48" />
      <Dim x1={170} y1={580} x2={218} y2={580} label="24" />
      <path d="M218 538 V592" stroke={GRAPHITE} strokeWidth="1" strokeDasharray="3 5" />
    </svg>
  );
}
