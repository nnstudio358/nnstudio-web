"use client";

import { useActionState, useId } from "react";
import { initialState, submitToFormspree } from "@/components/ContactForm";

// Same Formspree submission as the contact page form, drawn as ruled fields.
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
      <div role="status">
        <p className="t-lead">Message received.</p>
        <p className="t-body quiet mt-2">Thanks. I&rsquo;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      <div className="field-row">
        <label htmlFor={`${id}-name`} className="field-label">
          Name
        </label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className="field" />
      </div>
      <div className="field-row">
        <label htmlFor={`${id}-email`} className="field-label">
          Email
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className="field" />
      </div>
      <div className="field-row">
        <label htmlFor={`${id}-message`} className="field-label">
          {messageLabel}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          required
          placeholder={placeholder}
          className="field"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="t-small mt-6">
          Something went wrong. Please try again, or email me at{" "}
          <a href="mailto:nathan@nnstudio.com" className="link">
            nathan@nnstudio.com
          </a>
          .
        </p>
      )}

      <div className="form__foot">
        <button type="submit" disabled={pending} className="btn">
          {pending ? "Sending…" : "Send it"}
        </button>
      </div>
    </form>
  );
}
