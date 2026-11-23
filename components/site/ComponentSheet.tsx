// Illustrative component sheet for the anonymous enterprise design-system
// entry. Invented styling, labels and content only: no client marks, names,
// tokens or structure. Shown as "illustrative visuals" in the caption.

const BLUE = "#2D4BD0";
const BLUE_DARK = "#1E36A6";
const NAVY = "#131C33";
const LINE = "#CBD2DB";
const TEXT = "#1B2230";
const SOFT = "#5B6475";

function Panel({ x, y, w, h, title, children }: { x: number; y: number; w: number; h: number; title: string; children: React.ReactNode }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill="#FFFFFF" stroke={LINE} />
      <text x={x + 24} y={y + 34} fontSize="14" fontWeight="600" fill={SOFT}>
        {title}
      </text>
      {children}
    </g>
  );
}

function Button({ x, y, w, label, kind }: { x: number; y: number; w: number; label: string; kind: "primary" | "hover" | "secondary" | "disabled" }) {
  const fill = kind === "primary" ? BLUE : kind === "hover" ? BLUE_DARK : kind === "disabled" ? "#E7EAEF" : "#FFFFFF";
  const color = kind === "primary" || kind === "hover" ? "#FFFFFF" : kind === "disabled" ? "#9AA2B1" : BLUE;
  return (
    <g>
      <rect x={x} y={y} width={w} height="46" rx="6" fill={fill} stroke={kind === "secondary" ? BLUE : "none"} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 29} fontSize="16" fontWeight="600" fill={color} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function Field({ x, y, state }: { x: number; y: number; state: "default" | "focus" | "error" }) {
  const stroke = state === "focus" ? BLUE : state === "error" ? "#C0352B" : "#AEB6C2";
  return (
    <g>
      <text x={x} y={y} fontSize="14" fontWeight="600" fill={TEXT}>
        Work email
      </text>
      {state === "focus" && <rect x={x - 4} y={y + 8} width="310" height="52" rx="9" fill="none" stroke={BLUE} strokeOpacity="0.25" strokeWidth="5" />}
      <rect x={x} y={y + 12} width="302" height="44" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth={state === "default" ? 1.2 : 1.8} />
      <text x={x + 14} y={y + 39} fontSize="15" fill={state === "default" ? "#8C94A3" : TEXT}>
        {state === "default" ? "name@company.com" : "jordan@company"}
      </text>
      {state === "error" && (
        <text x={x} y={y + 78} fontSize="13" fill="#C0352B">
          Enter a full email address
        </text>
      )}
    </g>
  );
}

const SWATCHES = [
  { c: NAVY, n: "Navy 900" },
  { c: BLUE_DARK, n: "Blue 700" },
  { c: BLUE, n: "Blue 600" },
  { c: "#7F95F0", n: "Blue 300" },
  { c: "#E4E9FB", n: "Blue 50" },
  { c: "#1F8A5B", n: "Green 600" },
  { c: "#178A9A", n: "Teal 500" },
  { c: "#C0352B", n: "Red 600" },
];

export default function ComponentSheet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 1000"
      className={className}
      role="img"
      aria-label="Illustrative component sheet: buttons, form fields in three states, a content card, a site header and colour swatches"
      preserveAspectRatio="xMidYMid slice"
      style={{ fontFamily: "inherit" }}
    >
      <rect width="800" height="1000" fill="#DCE1E8" />

      <Panel x={40} y={40} w={720} h={240} title="Buttons">
        <Button x={64} y={92} w={156} label="Book a demo" kind="primary" />
        <Button x={236} y={92} w={156} label="Book a demo" kind="hover" />
        <Button x={408} y={92} w={160} label="Contact sales" kind="secondary" />
        <Button x={584} y={92} w={152} label="Book a demo" kind="disabled" />
        <text x={64} y={166} fontSize="13" fill={SOFT}>Default</text>
        <text x={236} y={166} fontSize="13" fill={SOFT}>Hover</text>
        <text x={408} y={166} fontSize="13" fill={SOFT}>Secondary</text>
        <text x={584} y={166} fontSize="13" fill={SOFT}>Disabled</text>
        <text x={64} y={220} fontSize="16" fontWeight="600" fill={BLUE} textDecoration="underline">Read the guide</text>
      </Panel>

      <Panel x={40} y={300} w={360} h={360} title="Fields">
        <Field x={64} y={372} state="default" />
        <Field x={64} y={462} state="focus" />
        <Field x={64} y={552} state="error" />
      </Panel>

      <Panel x={420} y={300} w={340} h={360} title="Card">
        <rect x={444} y={352} width="292" height="140" rx="6" fill={BLUE} />
        <circle cx={668} cy={404} r="54" fill="#7F95F0" />
        <rect x={470} y={424} width="120" height="68" fill={NAVY} />
        <circle cx={590} cy={424} r="21" fill="#E4E9FB" />
        <rect x={444} y={508} width="62" height="26" rx="13" fill="#E4E9FB" />
        <text x={475} y={526} fontSize="13" fontWeight="600" fill={BLUE_DARK} textAnchor="middle">Guide</text>
        <text x={444} y={566} fontSize="20" fontWeight="650" fill={TEXT}>Planning a platform</text>
        <text x={444} y={592} fontSize="20" fontWeight="650" fill={TEXT}>migration</text>
        <text x={444} y={628} fontSize="14" fill={SOFT}>6 min read</text>
      </Panel>

      <Panel x={40} y={680} w={720} h={130} title="Header">
        <rect x={64} y={732} width="672" height="60" rx="6" fill={NAVY} />
        <circle cx={96} cy={762} r="10" fill="#7F95F0" />
        <circle cx={109} cy={762} r="10" fill={BLUE} fillOpacity="0.9" />
        <text x={150} y={767} fontSize="15" fill="#DCE1F5">Platform</text>
        <text x={236} y={767} fontSize="15" fill="#DCE1F5">Solutions</text>
        <text x={328} y={767} fontSize="15" fill="#DCE1F5">Pricing</text>
        <text x={402} y={767} fontSize="15" fill="#DCE1F5">Resources</text>
        <rect x={610} y={743} width="112" height="38" rx="6" fill={BLUE} />
        <text x={666} y={767} fontSize="15" fontWeight="600" fill="#FFFFFF" textAnchor="middle">Get started</text>
      </Panel>

      <Panel x={40} y={830} w={720} h={140} title="Colour">
        {SWATCHES.map((s, i) => (
          <g key={s.n}>
            <rect x={64 + i * 84} y={882} width="72" height="52" rx="6" fill={s.c} stroke={i === 4 ? LINE : "none"} />
            <text x={64 + i * 84} y={954} fontSize="12" fill={SOFT}>
              {s.n}
            </text>
          </g>
        ))}
      </Panel>
    </svg>
  );
}
