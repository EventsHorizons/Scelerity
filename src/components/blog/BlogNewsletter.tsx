"use client";

import { useState, type FormEvent } from "react";

type Props = {
  title: string;
  body: string;
  placeholder: string;
  submit: string;
  success: string;
};

export function BlogNewsletter({
  title,
  body,
  placeholder,
  submit,
  success,
}: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="mt-[var(--space-fluid-xl)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] px-[var(--space-6)] py-[var(--space-fluid-lg)] sm:px-[var(--space-10)]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-h2 font-semibold text-balance">
          {title}
        </h2>
        <p className="mt-[var(--space-4)] text-body text-pretty text-[var(--fg-muted)]">
          {body}
        </p>

        {done ? (
          <p className="mt-[var(--space-8)] text-lead text-[var(--fg)]">
            {success}
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-[var(--space-8)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <label className="sr-only" htmlFor="blog-newsletter-email">
              {placeholder}
            </label>
            <input
              id="blog-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="field !min-h-12 !rounded-full !border !border-[var(--border)] !bg-[var(--bg)] !px-5 sm:min-w-[18rem]"
            />
            <button
              type="submit"
              className="btn-gradient inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.875rem] text-[var(--accent-fg)]"
            >
              {submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
