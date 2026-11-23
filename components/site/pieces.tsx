import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

// Building blocks for layered compositions of work: a canvas with its own
// aspect ratio, and layers placed on it in percent. Each layer can take a
// second placement for phones (s*), or be left out there.

type Place = { x: number; y: number; w: number };

export function Canvas({
  ar,
  sar,
  label,
  children,
  className = "",
}: {
  /** Canvas aspect (width / height) on tablets and desktops. */
  ar: number;
  /** Canvas aspect on phones. */
  sar: number;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`canvas ${className}`}
      style={{ "--ar": ar, "--sar": sar } as CSSProperties}
      role={label ? "group" : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}

export function Layer({
  at,
  small,
  z,
  children,
  className = "",
}: {
  at: Place;
  /** Placement on phones; omit to hide the layer there. */
  small?: Place;
  z?: number;
  children: ReactNode;
  className?: string;
}) {
  const s = small ?? at;
  return (
    <div
      className={`layer ${className}`}
      data-small={small ? undefined : "hide"}
      style={
        {
          "--x": at.x,
          "--y": at.y,
          "--w": at.w,
          "--sx": s.x,
          "--sy": s.y,
          "--sw": s.w,
          zIndex: z,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

/** A short label set beside a composition (in the flow on phones). */
export function Note({
  at,
  title,
  children,
  as: Heading = "h3",
}: {
  at: Place;
  title: string;
  children: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div className="note" style={{ "--x": at.x, "--y": at.y, "--w": at.w } as CSSProperties}>
      <Heading className="note__title">{title}</Heading>
      <p className="note__text">{children}</p>
    </div>
  );
}

/** A whole image at its own aspect ratio. */
export function Fit({
  src,
  alt,
  width,
  height,
  sizes,
  lift = false,
  eager = false,
  quality,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  lift?: boolean;
  eager?: boolean;
  quality?: number;
}) {
  return (
    <div className={`fit ${lift ? "lift" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

/**
 * A detail crop: shows one region of a larger flat image in a box of a fixed
 * aspect. `region` is the top-left corner and width of the shown area, as
 * fractions of the source image.
 */
export function Crop({
  src,
  alt,
  width,
  height,
  ar,
  region,
  sizes,
  lift = true,
  eager = false,
  quality = 85,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  ar: number;
  region: { x: number; y: number; w: number };
  sizes: string;
  lift?: boolean;
  eager?: boolean;
  quality?: number;
}) {
  const cw = 100 / region.w;
  const cl = -(region.x / region.w) * 100;
  const rh = (region.w * width) / (ar * height);
  const ct = -(region.y / rh) * 100;
  return (
    <div
      className={`crop ${lift ? "lift" : ""}`}
      style={{ "--ar": ar, "--cw": cw, "--cl": cl, "--ct": ct } as CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

/** A flat coloured panel, the way Nathan's mockup scenes set objects on one. */
export function Panel({ color, ar }: { color: string; ar: number }) {
  return <div className="panel" aria-hidden="true" style={{ background: color, "--ar": ar } as CSSProperties} />;
}
