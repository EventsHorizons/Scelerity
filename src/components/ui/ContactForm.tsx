"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Check, Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import {
  canSubmitForm,
  contactFormSchema,
  markFormSubmitted,
  secondsUntilNextSubmit,
} from "@/lib/security";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  source: string;
  message: string;
  captcha: boolean;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  source: "",
  message: "",
  captcha: false,
  website: "",
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

    if (!canSubmitForm()) {
      setStatus("error");
      return;
    }

    setTouched({
      name: true,
      email: true,
      source: true,
      message: true,
      captcha: true,
    });

    const parsed = contactFormSchema.safeParse({
      ...values,
      captcha: values.captcha,
    });

    if (!parsed.success) {
      if (values.website) return;
      return;
    }

    if (Object.values(errors).some(Boolean)) return;

    setStatus("loading");
    try {
      // Ready for API / Formspree / Resend — validated payload in parsed.data
      await new Promise((r) => setTimeout(r, 1100));
      markFormSubmitted();
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
      className="contact-form relative flex w-full flex-col gap-10 rounded-[16px] bg-[var(--fill)] p-8 sm:p-10 md:gap-12 md:p-14"
    >
      {/* Honeypot — hidden from users, bots fill this */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={fieldId("website")}>Website</label>
        <input
          id={fieldId("website")}
          tabIndex={-1}
          autoComplete="off"
          name="website"
          type="text"
          value={values.website}
          onChange={(e) => set("website")(e.target.value)}
        />
      </div>

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
            "flex min-h-11 w-full items-center gap-2 rounded-[12px] bg-[var(--elevated)] px-4 text-left transition-[background-color,opacity] duration-[140ms] [touch-action:manipulation]",
            values.captcha && "bg-[var(--fill-selected)]",
            show("captcha") && "outline outline-2 outline-offset-2 outline-[var(--danger)]",
          )}
          role="checkbox"
          aria-checked={values.captcha}
          aria-invalid={show("captcha")}
          aria-describedby={show("captcha") ? errorId("captcha") : undefined}
        >
          <span
            className={cn(
              "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] bg-[var(--fill)]",
              values.captcha && "bg-[var(--text)] text-[var(--on-primary)]",
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
            className="hidden shrink-0 text-[12px] leading-[1.4] tracking-[-0.01em] text-[var(--text-3)] sm:inline"
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
        className="btn btn-lg h-12 w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="inline-flex items-center gap-2">
          {status === "loading" ? (
            <>
              <Loader2 size={20} className="[animation:spin_900ms_linear_infinite]" aria-hidden />
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
          {!canSubmitForm()
            ? `Espera ${secondsUntilNextSubmit()}s antes de enviar de nuevo.`
            : f.error}
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
    <div className="flex flex-col gap-4">
      <label
        htmlFor={id}
        className="font-sans text-[13px] font-medium leading-[1.35] tracking-[0.01em] text-[var(--text-2)]"
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
