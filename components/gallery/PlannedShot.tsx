// A quiet stand-in, at the intended aspect ratio, for a photographed scene
// that hasn't been made yet. It names the planned shot in small text.
export default function PlannedShot({
  shot,
  ratio,
  tone = "bronze",
  className = "",
}: {
  shot: string;
  ratio: string;
  tone?: "bronze" | "stone";
  className?: string;
}) {
  const panel =
    tone === "bronze"
      ? "bg-bronze-deep text-paper-dim border-paper/15"
      : "bg-stone-deep text-graphite-dim border-graphite/15";
  return (
    <div
      role="img"
      aria-label={`Image to come: ${shot}`}
      className={`relative w-full border ${panel} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-[7%] border border-current opacity-25" aria-hidden="true" />
      <p aria-hidden="true" className="font-grotesk absolute bottom-[calc(7%+14px)] left-[calc(7%+16px)] right-[calc(7%+16px)] text-[13px] leading-snug">
        Planned shot: {shot}
      </p>
    </div>
  );
}
