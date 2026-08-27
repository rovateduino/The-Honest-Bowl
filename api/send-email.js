const brevo = require('@getbrevo/brevo');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/send-email
 *
 * Serverless function (Vercel / Netlify) — sends a welcome email
 * with the ebook delivery instructions via Brevo transactional email.
 *
 * Body: { email: string }
 * Response: { success: boolean, messageId?: string, error?: string }
 */
export default async function handler(req, res) {
  // ── CORS preflight ──────────────────────────────────────────────
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // ── Method guard ────────────────────────────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  // ── Input validation ────────────────────────────────────────────
  const { email } = req.body || {};
  const trimmed = typeof email === 'string' ? email.trim().toLowerCase() : '';

  if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
    return res.status(400).json({
      success: false,
      error: 'A valid email address is required (e.g. name@example.com).',
    });
  }

  // ── Env check ───────────────────────────────────────────────────
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    console.error('BREVO_API_KEY or BREVO_SENDER_EMAIL is not configured.');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured. Please try again later.',
    });
  }

  // ── Send email via Brevo ────────────────────────────────────────
  try {
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      email: senderEmail,
      name: 'The Honest Bowl',
    };

    sendSmtpEmail.to = [{ email: trimmed }];

    sendSmtpEmail.subject = 'Your Natural Dog Nutrition Guide — The Honest Bowl';

    sendSmtpEmail.htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:20px;color:#1e293b;">

    <!-- Header -->
    <div style="background-color:#064e3b;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
      <h1 style="color:#fde68a;margin:0;font-size:24px;">&#x1F43E; The Honest Bowl</h1>
      <p style="color:#a7f3d0;margin:8px 0 0;font-size:14px;">Canine Natural Nutrition &amp; Wellness</p>
    </div>

    <!-- Body -->
    <div style="background-color:#ffffff;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;">

      <h2 style="color:#0f172a;margin-top:0;">Welcome to the pack! &#x1F3C6;</h2>
      <p style="line-height:1.6;">
        Thank you for subscribing to <strong>The Honest Bowl</strong> newsletter.
        Here are your <strong>Top 3 Nutrition Principles</strong> to get started:
      </p>

      <ol style="line-height:1.8;padding-left:20px;">
        <li><strong>Fresh, Whole Proteins</strong> — Muscle meat, organ meat, and healthy animal fats.</li>
        <li><strong>Essential Calcium Balance</strong> — Proper calcium-to-phosphorus ratios are vital.</li>
        <li><strong>Gentle Fiber &amp; Antioxidants</strong> — Steamed dog-safe vegetables (pumpkin, carrots, spinach).</li>
      </ol>

      <div style="background-color:#ecfdf5;border-left:4px solid #059669;padding:12px 16px;margin:20px 0;border-radius:4px;">
        <p style="margin:0;font-size:14px;color:#065f46;">
          <strong>&#x1F517; Your Complete Bundle:</strong>
          The full <strong>30-Recipe eBook + Excel Portion Calculator</strong>
          is available on the checkout page after purchase.
        </p>
      </div>

      <p style="text-align:center;margin:24px 0;">
        <a href="${process.env.SITE_URL || 'https://thehonestbowl.com'}"
           style="display:inline-block;padding:12px 32px;background:linear-gradient(to right,#f59e0b,#f97316);color:#064e3b;font-weight:800;border-radius:12px;text-decoration:none;font-size:14px;">
          &#x1F6D2; Get the Full $27 CAD Bundle
        </a>
      </p>

      <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;" />

      <p style="font-size:13px;color:#64748b;text-align:center;">
        Best regards,<br />
        <strong>The Honest Bowl Team</strong> &#x1F30D;
      </p>
    </div>

  </div>
</body>
</html>`;

    // Attach ebook PDF if provided as base64 via env or file
    const ebookBase64 = process.env.EBOOK_PDF_BASE64;
    if (ebookBase64) {
      sendSmtpEmail.attachment = [
        {
          content: ebookBase64,
          name: 'The-Honest-Bowl-Ebook.pdf',
        },
      ];
    }

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({
      success: true,
      messageId: response.body?.messageId || null,
    });
  } catch (error) {
    const message = error?.body?.message || error?.message || 'Failed to send email.';
    console.error('Brevo send-email error:', message);
    return res.status(500).json({
      success: false,
      error: 'Unable to send email at this time. Please try again later.',
    });
  }
}
