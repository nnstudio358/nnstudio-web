// Stand-in for a LiveSurface photo that hasn't been made yet. It holds the
// intended shot's aspect ratio, draws the planned devices as quiet line work
// and names the shot, so nobody mistakes it for finished work.

type Art = "laptop-phone" | "booklet-laptop";

function Drawing({ art }: { art: Art }) {
  const stroke = { fill: "none", stroke: "#A29D93", strokeWidth: 1.5, vectorEffect: "non-scaling-stroke" as const };
  const ground = "#E5E1DA";
  if (art === "laptop-phone") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-auto" aria-hidden="true">
        <rect x="52" y="28" width="250" height="168" rx="7" {...stroke} />
        <rect x="64" y="40" width="226" height="144" {...stroke} strokeOpacity="0.55" />
        <path d="M30 196 H324 L334 212 H20 Z" {...stroke} />
        <rect x="292" y="88" width="76" height="146" rx="11" fill={ground} />
        <rect x="292" y="88" width="76" height="146" rx="11" {...stroke} />
        <rect x="300" y="100" width="60" height="122" rx="3" {...stroke} strokeOpacity="0.55" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-hidden="true">
      <rect x="150" y="22" width="220" height="146" rx="7" {...stroke} />
      <rect x="161" y="33" width="198" height="124" {...stroke} strokeOpacity="0.55" />
      <path d="M130 168 H390 L398 182 H122 Z" {...stroke} />
      <path d="M18 96 L120 84 L222 96 L222 238 L120 226 L18 238 Z" fill={ground} />
      <path d="M18 96 L120 84 L222 96 L222 238 L120 226 L18 238 Z" {...stroke} />
      <path d="M120 84 V226" {...stroke} strokeOpacity="0.55" />
    </svg>
  );
}

export default function PlannedShot({
  shot,
  description,
  art,
  className = "",
}: {
  /** The planned shot's name, shown small. */
  shot: string;
  /** Spoken description for screen readers. */
  description: string;
  art: Art;
  className?: string;
}) {
  return (
    <div role="img" aria-label={description} className={`relative bg-[#E5E1DA] ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center p-[12%] pb-[16%]">
        <div className="w-full max-w-[34rem]">
          <Drawing art={art} />
        </div>
      </div>
      <p aria-hidden="true" className="absolute left-4 right-4 bottom-3.5 md:left-5 md:bottom-4 text-[0.8125rem] leading-snug text-graphite">
        Planned shot: {shot}
      </p>
    </div>
  );
}
