import Image from "next/image";

export default function TurnoFeature() {
  return (
    <section className="w-full bg-ink">
      <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-32">

        {/* Eyebrow */}
        <div className="font-sans text-[13px] tracking-[0.14em] uppercase mb-6 text-amber">
          Featured work
        </div>

        {/* Headline — spans above and wider than the left content column */}
        <h2 className="font-serif text-[52px] font-normal leading-[1.1] tracking-[-0.02em] mb-16 max-w-[820px]" style={{ color: "#F4F3EF" }}>
          A content system that converted 65% of visitors into new signups.
        </h2>

        {/* Two-column grid — more space to the image */}
        <div className="grid grid-cols-[5fr_7fr] gap-16 items-start">

          {/* Left — body copy, metrics, CTA */}
          <div>
            <p className="font-sans text-[17px] leading-[1.65] font-light mb-16" style={{ color: "#C8C2BA" }}>
              Turno needed one system that worked across three formats — a digital
              guide, a downloadable eBook, and a print coffee table book — all for
              the same audience, under the same brand.
            </p>

            {/* Metrics — single forced row */}
            <div className="grid grid-cols-3 gap-8 mb-14 border-t pt-10" style={{ borderColor: "#252523" }}>
              {[
                { value: "8,000+", label: "Unique views" },
                { value: "800+",   label: "eBook downloads" },
                { value: "65%",    label: "Conversion rate" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-[36px] font-normal tracking-[-0.02em]" style={{ color: "#C8923A" }}>
                    {value}
                  </div>
                  <div className="font-sans text-[15px] font-light mt-1" style={{ color: "#C8C2BA" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
          </div>

          {/* Right — image */}
          <div>
            <Image
              src="/turno-dualstack.png"
              alt="Turno — How to Start an Airbnb: coffee table book and digital guide"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 1440px) 58vw, 840px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
