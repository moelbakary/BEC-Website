"use client";

import { useState } from "react";
import { FORMSPREE_ID, CONTACTS } from "@/lib/site";

export default function ContactForm({ dict, lang }) {
  const f = dict.contact.fields;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();

    // If no Formspree ID is configured, fall back to opening the user's email app.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\n\n${form.message}`
      );
      window.location.href = `mailto:${CONTACTS[0].email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-steel-400 focus:border-flame focus:ring-2 focus:ring-flame/20";

  if (status === "success") {
    return (
      <div className="rounded-md border border-flame/30 bg-flame/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-flame text-white">
          ✓
        </div>
        <p className="text-ink-900">{f.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
            {f.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            dir="ltr"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-700">
            {f.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={update}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            dir="ltr"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          className={inputClass}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-flame-600">{f.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-4 text-base disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
