"use server";

import { Resend } from "resend";

export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactEmail(_prev: unknown, formData: FormData): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service not configured. Please email us directly." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Collaboration Global <noreply@collaborationglobal.org>",
      to: "team@collaborationglobal.org",
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Please email us directly at team@collaborationglobal.org" };
  }
}
