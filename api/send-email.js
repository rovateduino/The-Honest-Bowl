const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const { email } = req.body || {};
  const trimmed = typeof email === 'string' ? email.trim().toLowerCase() : '';

  if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
    return res.status(400).json({ success: false, error: 'A valid email address is required.' });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!brevoApiKey || !senderEmail) {
    return res.status(200).json({ success: true, messageId: 'mock-email-skipped-no-config' });
  }

  try {
    const brevo = await import('@getbrevo/brevo');
    const apiInstance = new brevo.default.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.default.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

    const sendSmtpEmail = new brevo.default.SendSmtpEmail();
    sendSmtpEmail.sender = { email: senderEmail, name: 'The Honest Bowl' };
    sendSmtpEmail.to = [{ email: trimmed }];
    sendSmtpEmail.subject = 'Your Natural Dog Nutrition Guide — The Honest Bowl';
    sendSmtpEmail.htmlContent = `<p>Thank you for subscribing to <strong>The Honest Bowl</strong> newsletter!</p>`;

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return res.status(200).json({ success: true, messageId: response.body?.messageId || null });
  } catch (error) {
    console.error('Brevo error:', error.message);
    return res.status(500).json({ success: false, error: 'Unable to send email.' });
  }
}
