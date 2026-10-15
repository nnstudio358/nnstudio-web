'use client'

import { useActionState } from 'react'

type FormState = {
  status: 'idle' | 'success' | 'error'
}

const initialState: FormState = { status: 'idle' }

async function submitToFormspree(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const res = await fetch('https://formspree.io/f/mjgjnqnw', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })
    return { status: res.ok ? 'success' : 'error' }
  } catch {
    return { status: 'error' }
  }
}

const labelClass =
  'block font-sans text-[12px] tracking-[0.14em] uppercase text-muted mb-2'
const fieldClass =
  'w-full bg-transparent border border-faint px-4 py-3 font-sans text-[15px] text-ink placeholder-muted focus:outline-none focus:border-muted transition-colors'

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitToFormspree, initialState)

  if (state.status === 'success') {
    return (
      <div role="status">
        <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
          Sent
        </div>
        <p className="font-serif text-[24px] md:text-[28px] font-normal leading-[1.2] text-ink tracking-[-0.01em] mb-4">
          Message received.
        </p>
        <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: '#6B6A63' }}>
          Thanks. I&rsquo;ll reply within one business day.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className={fieldClass}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Company <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Company or agency"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          About the work
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          className={`${fieldClass} resize-none`}
          placeholder="Tell me what the project is, when you need it and anything you already have, like a brief or a link."
        />
      </div>

      {state.status === 'error' && (
        <p role="alert" className="font-sans text-[13px]" style={{ color: '#C0392B' }}>
          Something went wrong. Please try again, or email me at{' '}
          <a href="mailto:nathan@nnstudio.com" className="underline underline-offset-2">
            nathan@nnstudio.com
          </a>
          .
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? 'Sending…' : 'Send it →'}
        </button>
        <p className="font-sans text-[14px] leading-[1.6] font-light mt-5" style={{ color: '#6B6A63' }}>
          I&rsquo;ll reply within one business day to let you know whether it&rsquo;s a fit and suggest a next step.
        </p>
      </div>
    </form>
  )
}
