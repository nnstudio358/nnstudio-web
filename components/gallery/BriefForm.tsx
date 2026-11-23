"use client";

import { useActionState } from "react";

type FormState = { status: "idle" | "success" | "error" };

// Same Formspree endpoint and fields as components/ContactForm.tsx.
async function submit(_prev: FormState, formData: FormData): Promise<FormState> {
  try {
    const res = await fetch("https://formspree.io/f/mjgjnqnw", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    return { status: res.ok ? "success" : "error" };
  } catch {
    return { status: "error" };
  }
}

const label = "font-grotesk mb-2 block text-[15px] font-medium text-paper";
const field =
  "font-grotesk w-full rounded-[3px] border border-paper/35 bg-paper/[0.06] px-4 py-3 text-[17px] text-paper placeholder:text-mist transition-colors hover:border-paper/60 focus:border-aqua focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua";

export default function BriefForm({
  id,
  messageLabel,
  messagePlaceholder,
}: {
  id: string;
  messageLabel: string;
  messagePlaceholder?: string;
}) {
  const [state, action, pending] = useActionState(submit, { status: "idle" } as FormState);

  if (state.status === "success") {
    return (
      <div role="status" className="font-grotesk">
        <p className="text-[24px] font-semibold leading-tight text-paper">Message received.</p>
        <p className="mt-3 text-[17px] leading-[1.6] text-mist">
          Thanks. I&rsquo;ll reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          Name
        </label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={label}>
          Email
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>
          {messageLabel}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          required
          placeholder={messagePlaceholder}
          className={`${field} resize-y leading-[1.55]`}
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="font-grotesk text-[15px] leading-[1.55] text-[#F4B4A8] md:col-span-2">
          Something went wrong. Please try again, or email me at{" "}
          <a href="mailto:nathan@nnstudio.com" className="text-link">
            nathan@nnstudio.com
          </a>
          .
        </p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="font-grotesk rounded-[3px] bg-aqua px-8 py-4 text-[16px] font-semibold text-on-aqua transition-[background-color,transform] duration-150 ease-out hover:bg-[#B7EEDF] active:translate-y-px disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send it"}
        </button>
      </div>
    </form>
  );
}
