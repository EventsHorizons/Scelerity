/** Strip HTML tags and normalize whitespace — client-side input hygiene. */
export function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/** Escape for safe text display (XSS prevention in DOM text nodes). */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Normalize user text before validation/submit. */
export function sanitizeText(input: string, maxLength = 5000): string {
  return stripHtml(input).slice(0, maxLength);
}

/** Phone — digits, spaces, + only */
export function sanitizePhone(input: string): string {
  return input.replace(/[^\d+\s()-]/g, "").slice(0, 24);
}
