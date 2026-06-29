"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/core/i18n/config";
import type { Dictionary } from "@/core/i18n/types";
import { ctaType } from "@/core/typography";
import { cn } from "@/lib/utils";

type InscriptionFormProps = {
  locale: Locale;
  form: Dictionary["cta"]["form"];
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function InscriptionForm({ locale, form }: InscriptionFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const inputClassName = cn(
    ctaType.formInput,
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-[#7e8893] outline-none transition-colors focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/40",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          location: formData.get("location"),
          hasCompany: formData.get("hasCompany"),
          sector: formData.get("sector"),
          locale,
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl text-left"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.name} *
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.email} *
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.phone} *
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.location} *
          </span>
          <input
            type="text"
            name="location"
            required
            autoComplete="address-level2"
            className={inputClassName}
          />
        </label>

        <fieldset className="block sm:col-span-1">
          <legend className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.hasCompany} *
          </legend>
          <div className="flex gap-4 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="hasCompany"
                value="yes"
                required
                className="accent-brand-green"
              />
              <span className={cn(ctaType.formInput, "text-white")}>{form.hasCompanyYes}</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="hasCompany"
                value="no"
                className="accent-brand-green"
              />
              <span className={cn(ctaType.formInput, "text-white")}>{form.hasCompanyNo}</span>
            </label>
          </div>
        </fieldset>

        <label className="block sm:col-span-1">
          <span className={cn(ctaType.formLabel, "mb-1.5 block text-[#c4ccd5]")}>
            {form.sector} *
          </span>
          <input
            type="text"
            name="sector"
            required
            className={inputClassName}
          />
        </label>
      </div>

      {/* Honeypot */}
      <label className="absolute -left-[9999px]" aria-hidden tabIndex={-1}>
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-brand-green"
        />
        <span className={cn(ctaType.formConsent, "text-[#aeb6c0]")}>{form.consent}</span>
      </label>

      <div className="mt-6 flex justify-center">
      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={cn(
          ctaType.formSubmit,
          "w-full rounded-full bg-brand-green px-10 py-4 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
        )}
      >
        {status === "submitting" ? form.submitting : form.submit}
      </button>
      </div>

      {status === "success" && (
        <p className={cn(ctaType.formMessage, "mt-4 text-brand-green")} role="status">
          {form.success}
        </p>
      )}

      {status === "error" && (
        <p className={cn(ctaType.formMessage, "mt-4 text-red-400")} role="alert">
          {form.error}
        </p>
      )}
    </form>
  );
}
