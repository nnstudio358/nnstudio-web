"use client";

import { useActionState, useId } from "react";
import { initialState, submitToFormspree } from "@/components/ContactForm";

// Same Formspree submission as the contact page form, drawn as ruled fields
// for the dark close.
export default function CloseForm({
  messageLabel,
  placeholder,
}: {
  messageLabel: string;
  placeholder?: string;
}) {
  const [state, formAction, pending] = useActionState(submitToFormspree, initialState);
  const id = useId();

  if (state.status === "success") {
    return (
      <div role="status" className="pt-3">
        <p className="t-sub">Message received.</p>
        <p className="t-lead muted mt-3">Thanks. I&rsquo;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-9">
      <div>
        <label htmlFor={`${id}-name`} className="block t-small font-[520] text-ash">
          Name
        </label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className="field" />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="block t-small font-[520] text-ash">
          Email
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className="field" />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="block t-small font-[520] text-ash">
          {messageLabel}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          required
          placeholder={placeholder}
          className="field resize-none"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="t-small text-paper">
          Something went wrong. Please try again, or email me at{" "}
          <a href="mailto:nathan@nnstudio.com" className="link">
            nathan@nnstudio.com
          </a>
          .
        </p>
      )}

      <div>
        <button type="submit" disabled={pending} className="btn">
          {pending ? "Sending…" : "Send it"}
        </button>
      </div>
    </form>
  );
}
