// Brand tokens mirrored from app/globals.css — email clients can't read CSS vars.
export const brand = {
  primary: "#054dab",
  accent: "#1a6fd4",
  accentBg: "#eaf2fd",
  gold: "#c49a6c",
  bgSecondary: "#f7f8fb",
  textPrimary: "#1a1a2e",
  textSecondary: "#5a6378",
  textLight: "#8892a5",
  onDark: "#e8ecf1",
  onDarkMuted: "#c3cfe0",
  border: "#e2e6ed",
  name: "National Behavioral & Psychiatric Health System",
  shortName: "NBPHS",
  linkedin:
    "https://www.linkedin.com/company/national-behavioral-psychiatric-health-system/",
};

// Header and footer share one color so the email frames consistently.
const FRAME_BG = brand.primary;
const FONT = "Arial, Helvetica, sans-serif";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escapes text and keeps line breaks — Outlook ignores `white-space: pre-wrap`. */
export function textToHtml(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

function siteUrl(): string {
  return (process.env.SITE_URL ?? "https://www.nbphs.com").replace(/\/$/, "");
}

/** Highlighted message panel. Table-based so Outlook keeps padding and border. */
export function renderPanel(html: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
  <tr>
    <td width="4" bgcolor="${brand.accent}" style="width:4px;background-color:${brand.accent};font-size:0;line-height:0;">&nbsp;</td>
    <td bgcolor="${brand.accentBg}" style="padding:20px;background-color:${brand.accentBg};font-family:${FONT};font-size:15px;line-height:24px;color:${brand.textPrimary};mso-line-height-rule:exactly;">${html}</td>
  </tr>
</table>`;
}

/** Bulletproof button: VML for Outlook desktop, styled link everywhere else. */
export function renderButton(href: string, label: string): string {
  const safeLabel = escapeHtml(label);
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
  <tr>
    <td align="left">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="12%" stroke="f" fillcolor="${brand.accent}">
        <w:anchorlock/>
        <center style="color:#ffffff;font-family:${FONT};font-size:15px;font-weight:bold;">${safeLabel}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${href}" style="display:inline-block;background-color:${brand.accent};border-radius:6px;padding:14px 28px;font-family:${FONT};font-size:15px;font-weight:bold;line-height:20px;color:#ffffff;text-decoration:none;">${safeLabel}</a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`;
}

type LayoutOptions = {
  preheader: string;
  heading: string;
  /** Trusted HTML — escape user input before passing it in. */
  body: string;
};

export function renderEmailLayout({
  preheader,
  heading,
  body,
}: LayoutOptions): string {
  const url = siteUrl();
  const year = new Date().getFullYear();
  const link = `color:${brand.onDark};text-decoration:underline;`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(heading)}</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<style>
table, td, h1, p, a, span { font-family: Arial, Helvetica, sans-serif !important; }
</style>
<![endif]-->
<style>
table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
a { text-decoration: none; }
@media only screen and (max-width: 620px) {
  .container { width: 100% !important; }
  .px { padding-left: 20px !important; padding-right: 20px !important; }
}
</style>
</head>
<body style="margin:0;padding:0;background-color:${brand.bgSecondary};word-spacing:normal;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${brand.bgSecondary}" style="background-color:${brand.bgSecondary};">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <!--[if mso]>
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td>
      <![endif]-->
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#ffffff" style="width:600px;max-width:600px;background-color:#ffffff;border:1px solid ${brand.border};">
        <tr>
          <td align="center" bgcolor="${FRAME_BG}" class="px" style="padding:20px 32px;background-color:${FRAME_BG};">
            <a href="${url}" target="_blank" style="text-decoration:none;">
              <img src="${url}/logo-white.png" width="160" height="160" alt="${brand.shortName}" style="display:block;width:160px;height:160px;border:0;font-family:${FONT};font-size:24px;font-weight:bold;line-height:160px;color:#ffffff;text-align:center;">
            </a>
          </td>
        </tr>
        <tr>
          <td height="4" bgcolor="${brand.gold}" style="height:4px;background-color:${brand.gold};font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>
        </tr>
        <tr>
          <td class="px" style="padding:40px 32px 36px;font-family:${FONT};">
            <h1 style="margin:0 0 20px;font-family:${FONT};font-size:24px;line-height:30px;font-weight:bold;color:${brand.primary};mso-line-height-rule:exactly;">${escapeHtml(heading)}</h1>
            ${body}
          </td>
        </tr>
        <tr>
          <td align="center" bgcolor="${FRAME_BG}" class="px" style="padding:28px 32px;background-color:${FRAME_BG};font-family:${FONT};font-size:13px;line-height:20px;color:${brand.onDarkMuted};mso-line-height-rule:exactly;">
            <p style="margin:0 0 8px;font-family:${FONT};font-size:14px;font-weight:bold;color:${brand.onDark};">${escapeHtml(brand.name)}</p>
            <p style="margin:0 0 12px;font-family:${FONT};">
              <a href="${url}" target="_blank" style="${link}">Website</a>
              <span style="color:${brand.onDarkMuted};">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <a href="${brand.linkedin}" target="_blank" style="${link}">LinkedIn</a>
            </p>
            <p style="margin:0;font-family:${FONT};font-size:12px;color:${brand.onDarkMuted};">&copy; ${year} ${escapeHtml(brand.name)}. All rights reserved.</p>
          </td>
        </tr>
      </table>
      <!--[if mso]>
      </td></tr></table>
      <![endif]-->
    </td>
  </tr>
</table>
</body>
</html>`;
}
