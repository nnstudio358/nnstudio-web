// A quiet stand-in, at the intended aspect ratio, for a photographed scene
// that hasn't been made yet. It names the planned shot in small text.
// On small screens its height is capped so an empty panel never fills the screen.
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
      ? "bg-bronze-deep text-paper-dim border-paper/20"
      : "bg-stone-deep text-graphite-dim border-graphite/15";
  return (
    <div
      role="img"
      aria-label={`Image to come: ${shot}`}
      className={`lift relative max-h-[160px] w-full border md:max-h-none ${panel} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <p aria-hidden="true" className="font-grotesk absolute bottom-4 left-4 right-4 text-[13px] leading-snug md:bottom-5 md:left-5">
        Planned shot: {shot}
      </p>
    </div>
  );
}
