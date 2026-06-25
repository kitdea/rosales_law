"use client";

import { useState, type FormEvent } from "react";

const AREAS = [
  "Corporate & Business",
  "Litigation & Disputes",
  "Family & Estate",
  "Labor & Immigration",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // No backend wired up yet — simulate a submission so the UI is complete.
      // Swap this for a POST to your form handler / email service.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line p-10 text-center">
        <div className="font-serif text-3xl text-brass">Thank you.</div>
        <p className="mt-4 text-grey2 max-w-[40ch] mx-auto">
          Your message is on its way. We&apos;ll respond within one business
          day. For anything urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-8"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 border border-line p-8 sm:p-10">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone" name="phone" type="tel" />
        <div className="grid gap-2">
          <label htmlFor="area" className="label">
            How can we help?
          </label>
          <select id="area" name="area" className="input" defaultValue="">
            <option value="" disabled>
              Select a practice area
            </option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="label">
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input resize-none"
          placeholder="A few sentences is plenty — we'll follow up with questions."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brassHover">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <span className="arrow">→</span>}
      </button>
      <p className="text-xs text-grey2">
        Submitting this form does not create an attorney-client relationship.
      </p>

      {/* Local styles keep the form fields consistent without touching globals. */}
      <style jsx>{`
        .label {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9a968e;
        }
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 2px;
          padding: 13px 14px;
          color: #f7f6f3;
          font-size: 15px;
          transition: border-color 0.2s ease;
        }
        .input::placeholder {
          color: #6b6b6b;
        }
        .input:focus {
          outline: none;
          border-color: #b08d57;
        }
        select.input option {
          background: #161616;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className="input" />
    </div>
  );
}
