const PILLARS = [
  {
    number: "01",
    name: "On-Time.",
    body: "Enterprise launches don’t have flex dates. Neither do I. 100% on-time delivery record across enterprise launches and high-stakes agency workstreams.",
  },
  {
    number: "02",
    name: "On-Brand.",
    body: "I’ve worked inside the strict brand systems of regulated healthcare, enterprise fintech, and global tech platforms. Your guidelines aren’t a constraint — they’re where I start.",
  },
  {
    number: "03",
    name: "Un-Pretentious.",
    body: "Senior-level judgment means fewer revision cycles and faster time to market. No ego, no missed deadlines, no hand-holding required.",
  },
];

export default function ProblemAndPillars() {
  return (
    <section className="w-full border-t border-faint bg-bg">

      {/* Problem — centered */}
      <div className="max-w-[1440px] mx-auto px-16 py-32 flex flex-col items-center text-center">
        <h2 className="font-serif text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-10 whitespace-nowrap">
          Design shouldn&rsquo;t be a bottleneck.
        </h2>
        <div className="space-y-6 font-sans text-[19px] leading-[1.65] font-light max-w-[640px]" style={{ color: "#6B6A63" }}>
          <p>
            If you&rsquo;re running an in-house marketing or brand team, you&rsquo;ve felt it:
            senior designers who need constant direction, revision cycles that eat your
            timeline, and final files that create more work than they solve.
          </p>
          <p>
            You don&rsquo;t need more overhead. You need someone who takes the brief,
            asks the right questions once, and delivers.
          </p>
        </div>
      </div>

      {/* Pillars — three-column bordered card */}
      <div className="max-w-[1440px] mx-auto px-16 pb-32">
        <div className="border border-faint grid grid-cols-3 divide-x divide-faint">
          {PILLARS.map((pillar) => (
            <div key={pillar.name} className="px-12 py-12">
              <div className="font-sans text-[13px] tracking-[0.12em] text-amber mb-5">
                {pillar.number}
              </div>
              <h3 className="font-serif text-[40px] italic font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-6">
                {pillar.name}
              </h3>
              <p className="font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
