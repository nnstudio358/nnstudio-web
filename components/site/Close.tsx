import CloseForm from "@/components/site/CloseForm";

// Dark close: the headline and a short note on the left, the form on the right.
export default function Close({
  id = "contact",
  headline,
  body,
  messageLabel,
  placeholder,
}: {
  id?: string;
  headline: string;
  body: string;
  messageLabel: string;
  placeholder?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="on-dark bg-carbon text-paper">
      <div className="frame grid-12 gap-y-14 pt-[clamp(5rem,10vw,9.5rem)] pb-[clamp(5rem,9vw,8.5rem)]">
        <div className="col-span-12 lg:col-span-6">
          <h2 id={headingId} className="t-display !text-[clamp(2.75rem,5.4vw+0.4rem,5.5rem)] max-w-[9.5em]">
            {headline}
          </h2>
          <p className="t-lead muted mt-8 max-w-[26em]">{body}</p>
        </div>
        <div className="col-span-12 lg:col-start-8 lg:col-span-5 lg:pt-3">
          <CloseForm messageLabel={messageLabel} placeholder={placeholder} />
        </div>
      </div>
    </section>
  );
}
