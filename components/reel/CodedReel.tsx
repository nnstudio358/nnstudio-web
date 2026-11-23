import Image from "next/image";
import type { CSSProperties } from "react";

// A slow camera pan across a long table of Nathan's work, built from the real
// project images. Two depth layers move at different speeds: the art-directed
// scenes and flat spreads behind, small fragments (ads, covers) in front.
// Positions are in stage units (1u = 1% of the stage height), so the whole
// table scales with the viewport. Each layer is drawn twice and loops by
// moving exactly one copy's width, which keeps the seam invisible.
//
// To swap in a rendered reel later, replace this component inside
// <ReelStage> with a <video> that reads useReelPlaying().

type Item = {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  w: number;
  /** Flat pieces get a soft shadow; scenes carry their own. */
  lift?: boolean;
  /** Show only part of the image, in a box of this aspect. */
  crop?: { ar: number; x: number; y: number; w: number };
  /** A coloured panel instead of an image (h in units). */
  panel?: { color: string; h: number };
  z?: number;
};

// The table runs between about 8u and 74u: the band above stays clear for the
// nav, and the band below is mostly ground for the message to sit on.
const BACK: { copy: number; speed: number; items: Item[] } = {
  copy: 600,
  speed: 3.2,
  items: [
    { src: "/work/scenes/pendulum-scene-1000.png", width: 1000, height: 676, x: 6, y: 9, w: 92, z: 2 },
    { src: "/work/pendulum/report-spread-so-what.jpg", width: 1800, height: 1165, x: 116, y: 13, w: 70, lift: true, z: 1 },
    { src: "", width: 0, height: 0, x: 216, y: 11, w: 58, panel: { color: "#b9d8d0", h: 50 }, z: 1 },
    { src: "/work-turno-tablet.png", width: 1920, height: 1440, x: 250, y: 16, w: 40, z: 2 },
    { src: "/work-turno-book.png", width: 1920, height: 1440, x: 196, y: 20, w: 76, z: 3 },
    { src: "/work/scenes/maison-levande-scene-880.png", width: 880, height: 595, x: 318, y: 9, w: 84, z: 2 },
    {
      src: "/home/maison-levande.jpg",
      width: 1600,
      height: 1200,
      x: 392,
      y: 38,
      w: 30,
      lift: true,
      crop: { ar: 1.1, x: 0.24, y: 0.47, w: 0.56 },
      z: 3,
    },
    { src: "/work/intralinks-poster.jpg", width: 1728, height: 850, x: 442, y: 14, w: 66, lift: true, z: 1 },
    { src: "/work/scenes/enterprise-monitor-scene-1000.png", width: 1000, height: 676, x: 500, y: 27, w: 84, z: 2 },
  ],
};

const FRONT: { copy: number; speed: number; items: Item[] } = {
  copy: 450,
  speed: 4.2,
  items: [
    { src: "/work/pendulum/promo-ad-report.jpg", width: 800, height: 800, x: 94, y: 46, w: 19, lift: true },
    { src: "/work/pendulum/report-cover.jpg", width: 1000, height: 1294, x: 196, y: 12, w: 15, lift: true },
    { src: "/work/pendulum/carousel-1.jpg", width: 800, height: 800, x: 306, y: 50, w: 16, lift: true },
    { src: "/work/pendulum/campaign-tofu-2.jpg", width: 800, height: 800, x: 412, y: 14, w: 15, lift: true },
  ],
};

function sizesFor(w: number, zoom = 1) {
  // 1u is about 5–6px on phones and up to 11px on large screens.
  return `(max-width: 767px) ${Math.round(w * 6 * zoom)}px, ${Math.round(w * 10.5 * zoom)}px`;
}

function Piece({ item, eager }: { item: Item; eager: boolean }) {
  const style = { "--x": item.x, "--y": item.y, "--w": item.w, zIndex: item.z } as CSSProperties;

  if (item.panel) {
    return (
      <div
        className="reel__item"
        style={{ ...style, height: `calc(${item.panel.h} * var(--u))`, background: item.panel.color }}
      />
    );
  }

  if (item.crop) {
    const { ar, x, y, w } = item.crop;
    const cw = 100 / w;
    const rh = (w * item.width) / (ar * item.height);
    return (
      <div className="reel__item" style={style}>
        <div
          className={`crop ${item.lift ? "lift" : ""}`}
          style={{ "--ar": ar, "--cw": cw, "--cl": -(x / w) * 100, "--ct": -(y / rh) * 100 } as CSSProperties}
        >
          <Image
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            sizes={sizesFor(item.w, cw / 100)}
            loading={eager ? "eager" : "lazy"}
            quality={85}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`reel__item fit ${item.lift ? "lift" : ""}`} style={style}>
      <Image
        src={item.src}
        alt=""
        width={item.width}
        height={item.height}
        sizes={sizesFor(item.w)}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager && item.x < 110 ? "high" : undefined}
      />
    </div>
  );
}

function Track({ layer, z }: { layer: typeof BACK; z: number }) {
  const style = {
    "--copy": layer.copy,
    "--dur": `${Math.round(layer.copy / layer.speed)}s`,
    zIndex: z,
  } as CSSProperties;
  return (
    <div className="reel__track" style={style}>
      {[0, 1].map((copy) => (
        <div className="reel__copy" key={copy}>
          {layer.items.map((item, i) => (
            // Everything in the first copy loads up front so nothing pops in
            // mid-pan; the second copy reuses the same files.
            <Piece key={i} item={item} eager={copy === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function CodedReel() {
  return (
    <>
      <Track layer={BACK} z={1} />
      <Track layer={FRONT} z={2} />
    </>
  );
}
