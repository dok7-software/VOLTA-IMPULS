import { z } from "zod";
import { locales } from "@/core/i18n/config";

export const inscriptionSchema = z.object({
  name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(30),
  location: z.string().trim().min(2).max(200),
  hasCompany: z.enum(["yes", "no"]),
  sector: z.string().trim().max(200).optional(),
  locale: z.enum(locales),
  consent: z.literal(true),
  website: z.string().optional(),
});

export type InscriptionInput = z.infer<typeof inscriptionSchema>;
