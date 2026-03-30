"use server";

import "server-only";
import { headers } from "next/headers";
import { Resend } from "resend";
import { ContactSchema } from "../types";
import { checkRateLimit } from "../lib/rate-limit";

const resend = new Resend(process.env.API_KEY_RESEND);

export async function sendContactEmail(data: unknown) {
  // Get IP
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

  // Rate limit
  if (!checkRateLimit(ip)) {
    return { error: "Has superado el límite de envíos. Intenta más tarde." };
  }

  const result = ContactSchema.safeParse(data);
  if (!result.success) {
    return { error: "Datos de formulario inválidos." };
  }

  const values = result.data;

  // Honeypot
  if (values.website) {
    return { success: true };
  }

  const targetEmail = process.env.CONTACT_EMAIL;
  if (!targetEmail) {
    return { error: "Error de configuración de servidor." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: [targetEmail],
      subject: `Nuevo mensaje de ${values.name} - Portfolio`,
      text: `Nombre: ${values.name}\nEmail: ${values.email}\nEmpresa: ${values.company || 'N/A'}\n\nMensaje:\n${values.message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Error al enviar el correo." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return { error: "Error interno del servidor." };
  }
}
