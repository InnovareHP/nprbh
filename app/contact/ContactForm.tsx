"use client";

import { type FormEvent, useState } from "react";

interface ContactFormProps {
  variant?: "default" | "homeMinimal";
}

export default function ContactForm({
  variant = "default",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isHomeMinimal = variant === "homeMinimal";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center gap-4 text-center ${
          isHomeMinimal ? "py-8" : "py-12"
        }`}
      >
        <span
          className={`flex items-center justify-center font-bold ${
            isHomeMinimal
              ? "h-14 w-14 rounded-full bg-accent-bg text-xl text-primary"
              : "h-16 w-16 rounded-full bg-accent-bg text-2xl text-accent"
          }`}
        >
          ✓
        </span>
        <h3
          className={`${
            isHomeMinimal
              ? "text-xl font-semibold uppercase tracking-[0.08em] text-primary"
              : "text-2xl font-bold text-primary"
          }`}
        >
          Message Sent
        </h3>
        <p
          className={`max-w-sm leading-relaxed ${
            isHomeMinimal
              ? "text-[0.95rem] text-text-secondary"
              : "text-base text-text-secondary"
          }`}
        >
          Thank you for reaching out. A member of our team will respond to your
          inquiry within one business day.
        </p>
        <button
          type="button"
          className={`mt-2 inline-flex items-center justify-center px-8 py-3 text-[0.9375rem] transition-all ${
            isHomeMinimal
              ? "border border-primary bg-primary font-medium uppercase tracking-[0.18em] text-white hover:bg-primary-hover"
              : "rounded-md border-2 border-border bg-transparent font-semibold text-primary hover:border-primary hover:bg-bg-secondary"
          }`}
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  if (isHomeMinimal) {
    const inputClassName =
      "w-full border-0 border-b border-border bg-transparent px-1 py-3.5 text-[0.98rem] text-text-primary transition-colors placeholder:text-text-secondary focus:border-primary focus:border-b-[1.5px] focus:outline-none";

    return (
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[760px] flex-col gap-7"
      >
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClassName}
          placeholder="Name"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputClassName}
          placeholder="Phone"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClassName}
          placeholder="Email"
        />
        <input
          type="text"
          id="purpose"
          name="purpose"
          className={inputClassName}
          placeholder="Purpose"
        />
        <button
          type="submit"
          className="mt-3 w-full cursor-pointer rounded-sm bg-primary px-8 py-3.5 text-[0.85rem] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-hover"
        >
          Submit
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="mb-1 text-xl font-bold text-primary">Send Us a Message</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-[0.8125rem] font-semibold text-text-primary"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-md border-[1.5px] border-border bg-white px-4 py-3 text-[0.9375rem] text-text-primary transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-[0.8125rem] font-semibold text-text-primary"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-md border-[1.5px] border-border bg-white px-4 py-3 text-[0.9375rem] text-text-primary transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-[0.8125rem] font-semibold text-text-primary"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border-[1.5px] border-border bg-white px-4 py-3 text-[0.9375rem] text-text-primary transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="phone"
          className="text-[0.8125rem] font-semibold text-text-primary"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-md border-[1.5px] border-border bg-white px-4 py-3 text-[0.9375rem] text-text-primary transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="interest"
          className="text-[0.8125rem] font-semibold text-text-primary"
        >
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full appearance-none rounded-md border-[1.5px] border-border bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%235A6378%22%20d%3D%22M6%208L1%203h10z%22/%3E%3C/svg%3E')] bg-position-[right_16px_center] bg-no-repeat px-4 py-3 pr-10 text-[0.9375rem] text-text-primary transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
        >
          <option value="">Select an option</option>
          <option value="development">Facility Development</option>
          <option value="operations">Facility Operations</option>
          <option value="senior">Senior Behavioral Health</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[0.8125rem] font-semibold text-text-primary"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-[120px] w-full resize-y rounded-md border-[1.5px] border-border bg-white px-4 py-3 text-[0.9375rem] text-text-primary transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-md border-2 border-accent bg-accent px-10 py-[18px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover hover:shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
