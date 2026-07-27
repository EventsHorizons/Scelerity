const STORAGE_KEY = "scelerity-form-last-submit";
const MIN_INTERVAL_MS = 60_000;

/** Client-side throttle — complements server rate limiting when API exists. */
export function canSubmitForm(): boolean {
  if (typeof sessionStorage === "undefined") return true;
  try {
    const last = sessionStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    return Date.now() - Number(last) >= MIN_INTERVAL_MS;
  } catch {
    return true;
  }
}

export function markFormSubmitted(): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* quota / privacy mode */
  }
}

export function secondsUntilNextSubmit(): number {
  if (typeof sessionStorage === "undefined") return 0;
  try {
    const last = sessionStorage.getItem(STORAGE_KEY);
    if (!last) return 0;
    const remaining = MIN_INTERVAL_MS - (Date.now() - Number(last));
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
  } catch {
    return 0;
  }
}
