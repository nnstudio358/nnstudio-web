import Link from "next/link";
import type { ReactNode } from "react";

// The caption system: a museum wall label. Name, what the piece is, one sentence.
// With `href`, the name is the piece's link and (inside a `.piece`) covers the whole piece.
export default function WallLabel({
  name,
  medium,
  children,
  href,
  as: Heading = "h3",
  id,
  className = "",
}: {
  name: string;
  medium: string;
  children?: ReactNode;
  href?: string;
  as?: "h2" | "h3";
  id?: string;
  className?: string;
}) {
  return (
    <div className={`font-grotesk max-w-[24rem] ${className}`}>
      <Heading id={id} className="text-[18px] font-semibold leading-snug">
        {href ? (
          <Link href={href} className="piece-link">
            {name}
          </Link>
        ) : (
          name
        )}
      </Heading>
      <p className="mt-0.5 text-[15px] leading-snug opacity-80">{medium}</p>
      {children && <p className="mt-3 text-[16px] leading-[1.55]">{children}</p>}
    </div>
  );
}
