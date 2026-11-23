// Stand-in for a LiveSurface photo that hasn't been made yet: the planned
// shot's frame at 16:10 on paper-2, with its name set small. Nothing drawn,
// so nobody mistakes it for finished work.
export default function PlannedShot({
  shot,
  description,
  className = "",
}: {
  /** The planned shot's name, shown small. */
  shot: string;
  /** Spoken description for screen readers. */
  description: string;
  className?: string;
}) {
  return (
    <div role="img" aria-label={description} className={`relative aspect-[16/10] bg-paper-2 ${className}`}>
      <p
        aria-hidden="true"
        className="absolute left-5 right-5 bottom-4 md:left-6 md:bottom-5 text-[0.875rem] leading-snug text-graphite"
      >
        Planned shot
        <br />
        <span className="text-carbon">{shot}</span>
      </p>
    </div>
  );
}
