import CloseForm from "@/components/site/CloseForm";

// Dark close: the headline across the top, then the note and the form on the
// two shared columns (1 and 7).
export default function Close({
  id = "contact",
  headline,
  body,
  messageLabel,
  placeholder,
}: {
  id?: string;
  headline: React.ReactNode;
  body: string;
  messageLabel: string;
  placeholder?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="on-dark bg-carbon text-paper">
      <div className="frame pt-[clamp(5rem,9vw,8.5rem)] pb-[clamp(5rem,9vw,8rem)]">
        <h2 id={headingId} className="t-display">
          {headline}
        </h2>
        <div className="grid-12 gap-y-12 mt-[clamp(2.5rem,4.5vw,4rem)]">
          <p className="t-lead muted col-span-12 md:col-span-6 max-w-[26em]">{body}</p>
          <div className="col-span-12 md:col-start-7 md:col-span-6 lg:col-span-5">
            <CloseForm messageLabel={messageLabel} placeholder={placeholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
