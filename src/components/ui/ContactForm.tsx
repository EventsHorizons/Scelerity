"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Check, Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  source: string;
  message: string;
  captcha: boolean;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  source: "",
  message: "",
  captcha: false,
};

export function ContactForm() {
  const { t } = useLocale();
  const f = t.cta.form;
  const uid = useId();
  const [values, setValues] = useState<FormState>(initial);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");

  const errors = {
    name: !values.name.trim(),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()),
    source: !values.source,
    message: !values.message.trim(),
    captcha: !values.captcha,
  };

  const show = (key: keyof typeof errors) => Boolean(touched[key] && errors[key]);
  const markTouched = (key: keyof typeof errors) =>
    setTouched((prev) => ({ ...prev, [key]: true }));

  const set =
    (key: keyof FormState) =>
    (value: string | boolean) => {
      setValues((prev) => ({ ...prev, [key]: value }));
      if (status === "success" || status === "error") setStatus("idle");
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      source: true,
      message: true,
      captcha: true,
    });

    if (Object.values(errors).some(Boolean)) return;

    setStatus("loading");
    try {
      // Ready for API / Formspree / Resend — simulated success for now.
      await new Promise((r) => setTimeout(r, 1100));
      setStatus("success");
      setValues(initial);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const fieldId = (key: string) => `${uid}-${key}`;
  const errorId = (key: string) => `${uid}-${key}-error`;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label={t.cta.form.submit}
      className="contact-form flex w-full flex-col gap-[var(--space-6)] rounded-[24px] border border-[var(--border)] bg-[var(--fg)]/[0.03] p-[var(--space-5)] sm:p-[var(--space-8)]"
    >
      <Field
        id={fieldId("name")}
        label={f.name}
        required
        error={show("name") ? f.required : undefined}
        errorId={errorId("name")}
      >
        <input
          id={fieldId("name")}
          className="field"
          type="text"
          name="name"
          autoComplete="name"
          enterKeyHint="next"
          aria-invalid={show("name")}
          aria-describedby={show("name") ? errorId("name") : undefined}
          value={values.name}
          onChange={(e) => set("name")(e.target.value)}
          onBlur={() => markTouched("name")}
          placeholder={f.name}
        />
      </Field>

      <Field
        id={fieldId("email")}
        label={f.email}
        required
        error={show("email") ? f.required : undefined}
        errorId={errorId("email")}
      >
        <input
          id={fieldId("email")}
          className="field"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          aria-invalid={show("email")}
          aria-describedby={show("email") ? errorId("email") : undefined}
          value={values.email}
          onChange={(e) => set("email")(e.target.value)}
          onBlur={() => markTouched("email")}
          placeholder={f.email}
        />
      </Field>

      <Field id={fieldId("phone")} label={f.phone}>
        <input
          id={fieldId("phone")}
          className="field"
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          enterKeyHint="next"
          value={values.phone}
          onChange={(e) => set("phone")(e.target.value)}
          placeholder={f.phone}
        />
      </Field>

      <Field
        id={fieldId("source")}
        label={f.source}
        required
        error={show("source") ? f.required : undefined}
        errorId={errorId("source")}
      >
        <div className="field-select">
          <select
            id={fieldId("source")}
            className="field field--select"
            name="source"
            aria-invalid={show("source")}
            aria-describedby={show("source") ? errorId("source") : undefined}
            value={values.source}
            onChange={(e) => set("source")(e.target.value)}
            onBlur={() => markTouched("source")}
          >
            <option value="" disabled>
              {f.sourcePlaceholder}
            </option>
            {f.sources.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </Field>

      <Field
        id={fieldId("message")}
        label={f.message}
        required
        error={show("message") ? f.required : undefined}
        errorId={errorId("message")}
      >
        <textarea
          id={fieldId("message")}
          className="field field--textarea"
          name="message"
          rows={5}
          enterKeyHint="enter"
          aria-invalid={show("message")}
          aria-describedby={show("message") ? errorId("message") : undefined}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          onBlur={() => markTouched("message")}
          placeholder={f.messagePlaceholder}
        />
      </Field>

      <div>
        <button
          type="button"
          data-cursor="link"
          onClick={() => {
            set("captcha")(!values.captcha);
            markTouched("captcha");
          }}
          className={cn(
            "recaptcha-box flex w-full min-h-14 items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--bg)]/40 px-4 py-3 text-left transition-colors duration-300 [touch-action:manipulation]",
            values.captcha && "border-[var(--border-strong)]",
            show("captcha") && "border-[var(--danger)]/60",
          )}
          role="checkbox"
          aria-checked={values.captcha}
          aria-invalid={show("captcha")}
          aria-describedby={show("captcha") ? errorId("captcha") : undefined}
        >
          <span
            className={cn(
              "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border border-[var(--border-strong)] transition-colors duration-300",
              values.captcha &&
                "border-transparent bg-[image:var(--gradient-primary)]",
            )}
            aria-hidden
          >
            {values.captcha ? (
              <Check size={12} className="text-[var(--accent-fg)]" strokeWidth={3} />
            ) : null}
          </span>
          <span className="min-w-0 flex-1 text-small text-[var(--fg-muted)]">
            {f.captcha}
          </span>
          <span
            className="hidden shrink-0 font-mono text-micro uppercase tracking-[0.14em] text-[var(--fg-subtle)] sm:inline"
            aria-hidden
          >
            reCAPTCHA
          </span>
        </button>
        {show("captcha") ? (
          <p id={errorId("captcha")} className="mt-2 text-xs text-[var(--danger)]">
            {f.required}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        data-cursor="cta"
        disabled={status === "loading"}
        className="group/btn btn-gradient relative inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-transparent px-6 text-[0.9375rem] font-medium tracking-tight transition-transform duration-300 [touch-action:manipulation] enabled:active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 md:enabled:hover:-translate-y-0.5"
      >
        <span className="btn-sweep" aria-hidden />
        <span className="relative z-10 inline-flex items-center gap-2">
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden />
              {f.submitting}
            </>
          ) : (
            f.submit
          )}
        </span>
      </button>

      <p aria-live="polite" className="sr-only">
        {status === "loading" ? f.submitting : ""}
      </p>

      {status === "success" ? (
        <p className="text-small text-[var(--fg-muted)]" role="status">
          {f.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-small text-[var(--danger)]" role="alert">
          {f.error}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  errorId,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]"
      >
        {label}
        {required ? (
          <span className="ml-0.5 text-[var(--fg-muted)]" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <span id={errorId} className="text-xs text-[var(--danger)]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
