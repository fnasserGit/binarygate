"use client";

import { useState } from "react";
import Image from "next/image";

type LetsTalkProps = {
  serviceName?: string;
};

export function LetsTalk({ serviceName }: LetsTalkProps) {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    email: "",
    message: "",
    nda: "no",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormState("sending");

    const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!formData.firstName || !formData.lastName || !formData.message || !hasEmail) {
      setFormState("error");
      return;
    }

    setFormState("sent");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      company: "",
      email: "",
      message: "",
      nda: "no",
    });
  };

  return (
    <section id="lets-talk" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Let&apos;s talk
            </h2>
            <span className="mt-3 block h-1.5 w-12 rounded-full bg-[var(--spark)]" />
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {serviceName
                ? `Need more details about our ${serviceName} services? Leave your contact details and we’ll get back to you with answers.`
                : "Need more details about our services? Leave your contact details and we’ll get back to you with answers."}
            </p>

            <div className="mt-8 overflow-hidden rounded-none border border-slate-200 bg-neutral-50">
              <div className="relative h-[220px] w-full sm:h-[260px]">
                <Image
                  src="/about-bg.png"
                  alt="BinaryGate infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500">
              Required fields are marked with an asterisk (*)
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-neutral-700">
                    Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-neutral-700">
                    Surname*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-neutral-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-neutral-700">
                    Company name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-neutral-700">
                  Company e-mail address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-neutral-700">
                  Describe your idea*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-none border border-slate-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-[var(--spark)] focus:ring-2 focus:ring-[var(--spark)]/20"
                />
              </div>

              <fieldset className="space-y-2">
                <legend className="text-xs font-medium text-neutral-700">
                  Do you need NDA first?
                </legend>
                <div className="flex items-center gap-6 text-sm text-neutral-700">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="nda"
                      value="yes"
                      checked={formData.nda === "yes"}
                      onChange={handleChange}
                      className="h-4 w-4 border-slate-300 text-[var(--spark)] focus:ring-[var(--spark)]"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="nda"
                      value="no"
                      checked={formData.nda === "no"}
                      onChange={handleChange}
                      className="h-4 w-4 border-slate-300 text-[var(--spark)] focus:ring-[var(--spark)]"
                    />
                    No
                  </label>
                </div>
              </fieldset>

              <p className="text-xs text-neutral-500">
                By submitting this form, you agree to the processing of your data in accordance
                with our privacy policy.
              </p>

              {formState === "error" ? (
                <p className="text-sm text-red-500">
                  Please complete all required fields with a valid email address.
                </p>
              ) : null}

              {formState === "sent" ? (
                <p className="text-sm text-emerald-600">
                  Thanks — we&apos;ll get back to you shortly.
                </p>
              ) : null}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="rounded-full bg-[var(--spark)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formState === "sending" ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
