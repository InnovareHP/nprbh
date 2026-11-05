import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Custom-named env vars avoid clashing with platform-reserved AWS_* keys.
// Falls back to the default AWS credential chain when they're unset.
const accessKeyId = process.env.AWS_ACCESS_KEY_ID_SYSTEM;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_SYSTEM;

const ses = new SESv2Client({
  region: process.env.AWS_REGION_SYSTEM ?? "us-east-1",
  credentials:
    accessKeyId && secretAccessKey
      ? { accessKeyId, secretAccessKey }
      : undefined,
});

type SendEmailInput = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string[];
};

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailInput) {
  const from = process.env.SES_FROM_EMAIL;
  if (!from) throw new Error("SES_FROM_EMAIL is not configured");

  await ses.send(
    new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: to },
      ReplyToAddresses: replyTo,
      ConfigurationSetName: process.env.SES_CONFIGURATION_SET || undefined,
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Html: { Data: html, Charset: "UTF-8" },
            Text: { Data: text, Charset: "UTF-8" },
          },
        },
      },
    }),
  );
}
