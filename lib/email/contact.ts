import {
  brand,
  escapeHtml,
  renderButton,
  renderEmailLayout,
  renderPanel,
  textToHtml,
} from "./layout";

const FONT = "Arial, Helvetica, sans-serif";
const P_STYLE = `font-family:${FONT};font-size:15px;line-height:24px;color:${brand.textSecondary};mso-line-height-rule:exactly;`;

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  purpose: string;
  message: string;
};

export const interestLabels: Record<string, string> = {
  development: "Facility Development",
  operations: "Facility Operations",
  senior: "Senior Behavioral Health",
  partnership: "Partnership Opportunities",
  other: "Other",
};

function row(label: string, value: string): string {
  const cell = `padding:10px 0;border-bottom:1px solid ${brand.border};vertical-align:top;font-family:${FONT};`;
  return `<tr>
  <td width="130" style="${cell}width:130px;font-size:12px;line-height:20px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${brand.textLight};">${label}</td>
  <td style="${cell}font-size:15px;line-height:20px;color:${brand.textPrimary};">${value}</td>
</tr>`;
}

function firstName(name: string): string {
  return name.split(/\s+/)[0] ?? name;
}

/** Internal notification sent to the NBPHS team. */
export function contactNotificationEmail(data: ContactSubmission) {
  const interest = interestLabels[data.interest] ?? "";
  const topic = data.purpose || interest || "General inquiry";
  const email = escapeHtml(data.email);

  const body = `
<p style="margin:0 0 24px;${P_STYLE}">A new inquiry was submitted through the website contact form.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  ${row("Name", escapeHtml(data.name))}
  ${row("Email", `<a href="mailto:${email}" style="color:${brand.accent};text-decoration:none;">${email}</a>`)}
  ${row("Phone", escapeHtml(data.phone || "—"))}
  ${interest ? row("Interest", escapeHtml(interest)) : ""}
  ${data.purpose ? row("Purpose", escapeHtml(data.purpose)) : ""}
</table>
${data.message ? renderPanel(textToHtml(data.message)) : ""}
${renderButton(`mailto:${email}`, `Reply to ${firstName(data.name)}`)}`;

  const text = [
    "New website inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    ...(interest ? [`Interest: ${interest}`] : []),
    ...(data.purpose ? [`Purpose: ${data.purpose}`] : []),
    ...(data.message ? ["", data.message] : []),
  ].join("\n");

  return {
    subject: `New inquiry from ${data.name} — ${topic}`,
    html: renderEmailLayout({
      preheader: `${data.name}: ${(data.message || topic).slice(0, 90)}`,
      heading: "New Contact Inquiry",
      body,
    }),
    text,
  };
}

/** Confirmation sent back to the person who submitted the form. */
export function contactConfirmationEmail(data: ContactSubmission) {
  const summary = data.message || data.purpose;

  const body = `
<p style="margin:0 0 16px;${P_STYLE}">Hi ${escapeHtml(firstName(data.name))},</p>
<p style="margin:0 0 16px;${P_STYLE}">Thank you for reaching out to ${escapeHtml(brand.name)}. We've received your message and a member of our team will respond within one business day.</p>
${
  summary
    ? `<p style="margin:0;font-family:${FONT};font-size:12px;line-height:18px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${brand.textLight};">Your message</p>
${renderPanel(textToHtml(summary))}`
    : ""
}
<p style="margin:28px 0 0;${P_STYLE}">Warm regards,<br><strong style="color:${brand.primary};">The ${brand.shortName} Team</strong></p>`;

  const text = [
    `Hi ${firstName(data.name)},`,
    "",
    `Thank you for reaching out to ${brand.name}. We've received your message and a member of our team will respond within one business day.`,
    ...(summary ? ["", "Your message:", summary] : []),
    "",
    `— The ${brand.shortName} Team`,
  ].join("\n");

  return {
    subject: `We received your message — ${brand.shortName}`,
    html: renderEmailLayout({
      preheader:
        "Thanks for contacting us. We'll be in touch within one business day.",
      heading: "Thank You for Contacting Us",
      body,
    }),
    text,
  };
}
