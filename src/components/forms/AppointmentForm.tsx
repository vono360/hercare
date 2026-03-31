"use client";

import { useState, FormEvent } from "react";
import { services } from "@/lib/services";

export default function AppointmentForm() {
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowToast(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setShowToast(false), 5000);
  }

  return (
    <>
      <div className="bg-warm-white border border-border p-[52px] px-12 max-sm:p-8 max-sm:px-6">
        <h3 className="font-heading text-[30px] font-normal text-charcoal mb-2">
          Request an Appointment
        </h3>
        <p className="text-[14px] text-text-muted mb-10">
          Fill out the form below and we&rsquo;ll reach out to confirm your
          visit.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 mb-5 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fname"
                className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
              >
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Jane"
                required
                className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lname"
                className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Smith"
                required
                className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@email.com"
                required
                className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 000-0000"
                className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label
              htmlFor="service"
              className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
            >
              Area of Concern
            </label>
            <select
              id="service"
              name="service"
              className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option>General / Annual Exam</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label
              htmlFor="message"
              className="text-[11px] tracking-[0.12em] uppercase text-text-muted"
            >
              Anything you&rsquo;d like us to know?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Optional: describe your concerns or any relevant history..."
              className="py-3.5 px-4 border border-border bg-cream font-body text-[14px] text-charcoal font-light outline-none transition-colors duration-300 w-full appearance-none focus:border-sage min-h-[100px] resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full py-[18px] bg-sage-dark text-warm-white border-none font-body text-[12px] tracking-[0.18em] uppercase font-medium cursor-pointer transition-all duration-300 mt-2 hover:bg-charcoal hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(42,42,42,0.15)]"
          >
            Send Appointment Request &rarr;
          </button>
          <p className="text-[12px] text-text-muted text-center mt-4 leading-[1.6]">
            We typically respond within 1&ndash;2 business days. Your
            information is kept strictly confidential.
          </p>
        </form>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-10 right-10 bg-sage-dark text-warm-white py-5 px-8 text-[14px] z-[999] pointer-events-none transition-all duration-300 ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Thank you &mdash; we&rsquo;ll be in touch within 1&ndash;2 business
        days.
      </div>
    </>
  );
}
