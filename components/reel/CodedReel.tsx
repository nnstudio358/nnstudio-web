import Image from "next/image";
import type { CSSProperties } from "react";
import layout from "./reel-layout.json";

// A slow camera pan across a long table of Nathan's work, built from the real
// project images. Projects are interleaved (Pendulum, Turno, Maison Levande,
// SSC Intralinks, the enterprise design system) so any ten seconds shows at
// least three clients. Each project is a small stack: its main piece behind,
// and one fragment of the same project in front that drifts a little on its
// own, which gives the pan depth without ever leaving its project.
//
// Positions live in reel-layout.json, in stage units (1u = 1% of the stage
// height), with a separate placement for phones. The table is drawn twice and
// loops by moving exactly one copy's width, so the seam never shows.
//
// To swap in a rendered reel later, replace this component inside
// <ReelStage> with a <video> that reads useReelPlaying().

type Item = {
  project: string;
  src?: string;
  width: number;
  height: number;
  at: number[];
  small: number[];
  lift?: boolean;
  front?: boolean;
  z?: number;
  crop?: { ar: number; x: number; y: number; w: number };
  panel?: string;
  panelH?: number;
  panelHSmall?: number;
};

const ITEMS = layout.items as Item[];

function sizesFor(item: Item, zoom = 1) {
  // 1u is about 7–8px on phones and up to 11px on large screens.
  return `(max-width: 767px) ${Math.round(item.small[2] * 8 * zoom)}px, ${Math.round(item.at[2] * 11 * zoom)}px`;
}

function Piece({ item, eager, index }: { item: Item; eager: boolean; index: number }) {
  const [x, y, w] = item.at;
  const [sx, sy, sw] = item.small;
  const style = {
    "--x": x,
    "--y": y,
    "--w": w,
    "--sx": sx,
    "--sy": sy,
    "--sw": sw,
    // Fragments drift out of step with each other.
    "--drift-delay": `${-index * 3.7}s`,
    zIndex: item.z,
  } as CSSProperties;
  const cls = `reel__item ${item.front ? "reel__item--front" : ""}`;

  if (item.panel) {
    return (
      <div
        className={`${cls} reel__panel`}
        style={{ ...style, "--h": item.panelH, "--sh": item.panelHSmall, background: item.panel } as CSSProperties}
      />
    );
  }

  if (item.crop) {
    const { ar, x: cx, y: cy, w: cw0 } = item.crop;
    const cw = 100 / cw0;
    const rh = (cw0 * item.width) / (ar * item.height);
    return (
      <div className={cls} style={style}>
        <div
          className={`crop ${item.lift ? "lift" : ""}`}
          style={{ "--ar": ar, "--cw": cw, "--cl": -(cx / cw0) * 100, "--ct": -(cy / rh) * 100 } as CSSProperties}
        >
          <Image
            src={item.src!}
            alt=""
            width={item.width}
            height={item.height}
            sizes={sizesFor(item, cw / 100)}
            loading={eager ? "eager" : "lazy"}
            quality={85}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${cls} fit ${item.lift ? "lift" : ""}`} style={style}>
      <Image
        src={item.src!}
        alt=""
        width={item.width}
        height={item.height}
        sizes={sizesFor(item)}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager && x < 90 ? "high" : undefined}
      />
    </div>
  );
}

export default function CodedReel() {
  const style = {
    "--copy": layout.copy,
    "--copy-s": layout.copySmall,
    "--dur": `${Math.round(layout.copy / layout.speed)}s`,
    "--dur-s": `${Math.round(layout.copySmall / layout.speed)}s`,
  } as CSSProperties;
  return (
    <div className="reel__track" style={style}>
      {[0, 1].map((copy) => (
        <div className="reel__copy" key={copy}>
          {ITEMS.map((item, i) => (
            // Everything in the first copy loads up front so nothing pops in
            // mid-pan; the second copy reuses the same files.
            <Piece key={i} item={item} index={i} eager={copy === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}
