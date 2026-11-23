import type { ReactNode } from "react";

// The caption system: a museum wall label. Name, what the piece is, one sentence.
export default function WallLabel({
  name,
  medium,
  children,
  as: Heading = "h3",
  id,
  className = "",
}: {
  name: string;
  medium: string;
  children: ReactNode;
  as?: "h2" | "h3";
  id?: string;
  className?: string;
}) {
  return (
    <div className={`font-grotesk max-w-[22rem] ${className}`}>
      <Heading id={id} className="text-[18px] font-semibold leading-snug">{name}</Heading>
      <p className="mt-0.5 text-[15px] leading-snug opacity-80">{medium}</p>
      <p className="mt-3 text-[16px] leading-[1.55]">{children}</p>
    </div>
  );
}
