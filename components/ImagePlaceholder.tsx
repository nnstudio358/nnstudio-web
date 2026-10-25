// Holds the image slot for a project whose visual isn't ready yet (the
// enterprise entry, until its illustrations are art-directed, O-13).
// Nathan, Oct 25: same card as the others, image to come in the homepage
// revision. Replace before Release 1 goes live.

export default function ImagePlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "#E4E2DC",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(58,74,82,0.05) 0 1px, transparent 1px 14px)",
      }}
    >
      <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted">Image to come</span>
    </div>
  );
}
