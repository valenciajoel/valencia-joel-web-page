import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  website: z.string().optional(), // Honeypot
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
