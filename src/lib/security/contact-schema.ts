import { z } from "zod";
import { sanitizePhone, sanitizeText } from "./sanitize";

export const contactFormSchema = z.object({
  name: z
    .string()
    .transform((v) => sanitizeText(v, 120))
    .pipe(z.string().min(2, "name").max(120)),
  email: z
    .string()
    .transform((v) => sanitizeText(v, 254).toLowerCase())
    .pipe(z.string().email()),
  phone: z
    .string()
    .transform((v) => sanitizePhone(v))
    .optional()
    .default(""),
  source: z.string().min(1, "source"),
  message: z
    .string()
    .transform((v) => sanitizeText(v, 5000))
    .pipe(z.string().min(10, "message").max(5000)),
  captcha: z.literal(true),
  /** Honeypot — must stay empty */
  website: z.literal("").optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
