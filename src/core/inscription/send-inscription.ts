import type { InscriptionInput } from "@/core/inscription/schema";

const BREVO_API = "https://api.brevo.com/v3";

const SENDER_EMAIL = "info@circularimpuls.cat";
const SENDER_NAME = "Circular Impuls";
const NOTIFY_EMAILS = [
  "montse@phimistersbschool.com",
  "secretaria@fundaciopimec.org",
];

type BrevoConfig = {
  apiKey: string;
  listId?: number;
};

function getBrevoConfig(): BrevoConfig {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : undefined;

  return {
    apiKey,
    listId: listId && !Number.isNaN(listId) ? listId : undefined,
  };
}

async function brevoPost(apiKey: string, path: string, body: unknown) {
  const response = await fetch(`${BREVO_API}${path}`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Brevo ${path} failed (${response.status}): ${detail}`);
  }
}

function buildNotificationHtml(data: InscriptionInput) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Nom", value: data.name },
    { label: "Email", value: data.email },
    { label: "Telèfon", value: data.phone },
    { label: "Ubicació", value: data.location },
    { label: "Té empresa", value: data.hasCompany === "yes" ? "Sí" : "No" },
    { label: "Sector", value: data.sector ?? "—" },
    { label: "Idioma", value: data.locale.toUpperCase() },
  ];

  const rowsHtml = rows
    .map(
      ({ label, value }) => `
      <tr>
        <td style="padding:10px 16px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9aa3ae;white-space:nowrap;width:1%;vertical-align:top;border-bottom:1px solid #1e2530;">${label}</td>
        <td style="padding:10px 16px;font-size:15px;color:#e8ebef;vertical-align:top;border-bottom:1px solid #1e2530;">${value}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="ca">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#0b0f14;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b0f14;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:28px;text-align:center;">
              <div style="display:inline-block;padding:6px 16px;border:1px solid rgba(23,212,121,0.45);border-radius:999px;margin-bottom:20px;">
                <span style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#cfe9d9;">Nova inscripció</span>
              </div>
              <div style="font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
                Circular <span style="color:#17d479;">Impuls</span>
              </div>
              <div style="font-size:13px;color:#9aa3ae;margin-top:6px;">Programa 2026</div>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#0d1218;border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:16px 16px 0;border-bottom:1px solid #1e2530;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#17d479;">Dades del sol·licitant</p>
                  </td>
                </tr>
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <a href="mailto:${data.email}" style="display:inline-block;padding:12px 28px;background-color:#17d479;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:999px;letter-spacing:0.04em;">Respondre a ${data.name}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;text-align:center;font-size:11px;color:#4a5568;line-height:1.6;">
              Circular Impuls · circularimpuls.cat<br>
              Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya<br>
              i cofinançat pel Fons Social Europeu Plus
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendInscription(data: InscriptionInput) {
  const config = getBrevoConfig();

  const contactBody: Record<string, unknown> = {
    email: data.email,
    attributes: {
      FIRSTNAME: data.name,
      PHONE: data.phone,
      LOCATION: data.location,
      HAS_COMPANY: data.hasCompany,
      SECTOR: data.sector ?? "",
      LOCALE: data.locale,
    },
    updateEnabled: true,
  };

  if (config.listId) {
    contactBody.listIds = [config.listId];
  }

  await brevoPost(config.apiKey, "/contacts", contactBody);

  try {
    await brevoPost(config.apiKey, "/smtp/email", {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: NOTIFY_EMAILS.map((email) => ({ email })),
      replyTo: { email: data.email, name: data.name },
      subject: `[Circular Impuls] Nova inscripció de ${data.name}`,
      htmlContent: buildNotificationHtml(data),
    });
  } catch (err) {
    console.error("[inscription] email notification failed (contact was saved):", err);
  }
}
