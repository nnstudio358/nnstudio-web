// Illustrative only. A generic component sheet with invented styling and
// labels; nothing here comes from the client's files, tokens or components.
const ink = "#23292D";
const soft = "#6A7378";
const line = "#C9CFD1";
const accent = "#3D5F86";

function Field({ y, state }: { y: number; state: "Default" | "Focus" | "Error" }) {
  const stroke = state === "Focus" ? accent : state === "Error" ? "#A5362E" : line;
  return (
    <g>
      <text x="436" y={y - 10} fontSize="13" fill={soft}>{state}</text>
      {state === "Focus" && (
        <rect x="432" y={y - 4} width="304" height="48" rx="8" fill="none" stroke={accent} strokeOpacity="0.25" strokeWidth="5" />
      )}
      <rect x="436" y={y} width="296" height="40" rx="5" fill="#FFFFFF" stroke={stroke} strokeWidth={state === "Default" ? 1.2 : 1.8} />
      <text x="452" y={y + 25} fontSize="14" fill={state === "Default" ? "#8B9397" : ink}>
        {state === "Default" ? "name@company.com" : "sam@company"}
      </text>
      {state === "Focus" && <rect x="540" y={y + 11} width="1.5" height="18" fill={ink} />}
      {state === "Error" && (
        <text x="436" y={y + 60} fontSize="13.5" fill="#A5362E">Enter a full email address</text>
      )}
    </g>
  );
}

export default function ComponentSheet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="img"
      aria-label="Illustrative component sheet: buttons, a text field in three states, and a content card"
      style={{ fontFamily: "var(--font-schibsted), system-ui, sans-serif" }}
    >
      <rect width="800" height="500" fill="#F6F7F6" />

      {/* Buttons */}
      <text x="64" y="78" fontSize="15" fontWeight="600" fill={ink}>Button</text>
      <line x1="64" y1="92" x2="368" y2="92" stroke={line} />
      <rect x="64" y="116" width="132" height="42" rx="5" fill={ink} />
      <text x="130" y="142" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Primary</text>
      <rect x="212" y="116" width="132" height="42" rx="5" fill="none" stroke={ink} strokeWidth="1.4" />
      <text x="278" y="142" fontSize="14" fontWeight="600" fill={ink} textAnchor="middle">Secondary</text>
      <rect x="64" y="174" width="132" height="42" rx="5" fill="#E3E7E8" />
      <text x="130" y="200" fontSize="14" fontWeight="600" fill="#9AA2A6" textAnchor="middle">Disabled</text>
      <rect x="212" y="174" width="132" height="42" rx="5" fill={accent} />
      <text x="278" y="200" fontSize="14" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Hover</text>

      {/* Card */}
      <text x="64" y="268" fontSize="15" fontWeight="600" fill={ink}>Card</text>
      <line x1="64" y1="282" x2="368" y2="282" stroke={line} />
      <rect x="64" y="304" width="304" height="150" rx="8" fill="#FFFFFF" stroke={line} />
      <rect x="64" y="304" width="112" height="150" rx="8" fill="#D5DEE2" />
      <rect x="168" y="304" width="8" height="150" fill="#D5DEE2" />
      <rect x="196" y="328" width="140" height="10" rx="3" fill={ink} />
      <rect x="196" y="350" width="120" height="10" rx="3" fill={ink} />
      <rect x="196" y="378" width="148" height="7" rx="3" fill="#B3BCC0" />
      <rect x="196" y="393" width="132" height="7" rx="3" fill="#B3BCC0" />
      <text x="196" y="432" fontSize="13" fontWeight="600" fill={accent}>Read more</text>

      {/* Text field */}
      <text x="436" y="78" fontSize="15" fontWeight="600" fill={ink}>Text field</text>
      <line x1="436" y1="92" x2="736" y2="92" stroke={line} />
      <Field y={136} state="Default" />
      <Field y={232} state="Focus" />
      <Field y={328} state="Error" />
    </svg>
  );
}
