// Recreated illustration for the anonymous enterprise website design system.
// Invented styling, labels and content only: nothing comes from the client's
// files, tokens or components (Strategy §8). Placeholder until the enterprise
// illustrations are art-directed (tracker O-13).

const field = (y: number, state: "default" | "focus" | "error") => {
  const stroke = state === "focus" ? "#3F5BD8" : state === "error" ? "#B8322A" : "#A9A7A0";
  return (
    <g key={state}>
      <text x="96" y={y} fontSize="15" fill="#3A3A36" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Work email
      </text>
      {state === "focus" && (
        <rect x="90" y={y + 10} width="372" height="58" rx="9" fill="none" stroke="#3F5BD8" strokeOpacity="0.28" strokeWidth="6" />
      )}
      <rect x="96" y={y + 16} width="360" height="46" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth={state === "default" ? 1.5 : 2} />
      <text
        x="114"
        y={y + 45}
        fontSize="15"
        fill={state === "default" ? "#8C8A83" : "#26261F"}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {state === "default" ? "name@company.com" : state === "focus" ? "alex@northwind" : "alex@northwind"}
      </text>
      {state === "focus" && <rect x="230" y={y + 29} width="1.6" height="20" fill="#26261F" />}
      {state === "error" && (
        <g>
          <circle cx="104" cy={y + 82} r="8" fill="#B8322A" />
          <rect x="103" y={y + 77} width="2" height="6" fill="#fff" />
          <rect x="103" y={y + 85} width="2" height="2" fill="#fff" />
          <text x="120" y={y + 87} fontSize="13.5" fill="#B8322A" fontFamily="ui-sans-serif, system-ui, sans-serif">
            Enter a full email address, like name@company.com
          </text>
        </g>
      )}
      <text x="480" y={y + 45} fontSize="11.5" letterSpacing="1.4" fill="#8C8A83" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {state.toUpperCase()}
      </text>
    </g>
  );
};

const callouts = [
  { n: 1, y: 199, text: ["Label stays above", "the field"] },
  { n: 2, y: 329, text: ["Focus ring holds", "on any background"] },
  { n: 3, y: 449, text: ["Error adds an icon", "and a plain fix"] },
];

export default function EnterpriseIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      role="img"
      aria-label="Illustrative example: a text input shown in default, focus and error states, with three review notes"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="600" fill="#F2F1EC" />
      {/* faint grid */}
      <g stroke="#E2E0D9" strokeWidth="1">
        {Array.from({ length: 20 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} />
        ))}
      </g>
      {/* spec card */}
      <rect x="64" y="64" width="520" height="472" rx="10" fill="#FBFAF7" stroke="#D8D5CC" />
      <text x="96" y="104" fontSize="12" letterSpacing="1.6" fill="#8C8A83" fontFamily="ui-sans-serif, system-ui, sans-serif">
        TEXT INPUT · STATES
      </text>
      <line x1="96" y1="120" x2="552" y2="120" stroke="#E4E1D9" />
      {field(160, "default")}
      {field(290, "focus")}
      {field(410, "error")}

      {/* review callouts */}
      {callouts.map(({ n, y, text }) => (
        <g key={n}>
          <line x1="560" y1={y} x2="610" y2={y} stroke="#C8923A" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="624" cy={y} r="13" fill="#C8923A" />
          <text x="624" y={y + 5} fontSize="13" textAnchor="middle" fill="#2C3236" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="600">
            {n}
          </text>
          {text.map((t, i) => (
            <text key={t} x="646" y={y - 4 + i * 18} fontSize="12.5" fill="#3A3A36" fontFamily="ui-sans-serif, system-ui, sans-serif">
              {t}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
