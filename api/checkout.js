import brevo from '@getbrevo/brevo';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let firebaseAdminApp = null;

async function getFirestoreDb() {
  const { initializeApp, cert, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');

  if (firebaseAdminApp) return getFirestore(firebaseAdminApp);

  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    console.warn('Firebase Admin credentials not configured. Lead not saved.');
    return null;
  }

  const existingApps = getApps();
  firebaseAdminApp = existingApps.length
    ? existingApps[0]
    : initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });

  return getFirestore(firebaseAdminApp);
}

/**
 * POST /api/checkout
 *
 * Serverless function (Vercel) — saves lead to Firestore
 * and returns the Stripe checkout URL.
 *
 * Body: { fullName: string, email: string, province: string }
 * Response: { success: boolean, checkoutUrl?: string, error?: string }
 */
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const { fullName, email, province } = req.body || {};

  const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const trimmedName = typeof fullName === 'string' ? fullName.trim() : '';
  const trimmedProvince = typeof province === 'string' ? province.trim() : '';

  if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({ success: false, error: 'A valid email address is required.' });
  }
  if (!trimmedName || trimmedName.length < 2) {
    return res.status(400).json({ success: false, error: 'Full name is required.' });
  }

  const stripeUrl = process.env.STRIPE_CHECKOUT_URL;
  if (!stripeUrl) {
    console.error('STRIPE_CHECKOUT_URL environment variable is not configured.');
    return res.status(500).json({ success: false, error: 'Payment configuration error. Please try again later.' });
  }

  // Save lead to Firestore (server-side, with Admin SDK)
  try {
    const db = await getFirestoreDb();
    if (db) {
      await db.collection('leads').add({
        fullName: trimmedName,
        email: trimmedEmail,
        province: trimmedProvince || 'N/A',
        createdAt: new Date(),
        status: 'checkout_started',
      });
    }
  } catch (err) {
    console.error('Error saving lead to Firestore:', err);
  }

  // Send confirmation email (best-effort)
  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (brevoApiKey && senderEmail) {
    try {
      const apiInstance = new brevo.TransactionalEmailsApi();
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

      const sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.sender = { email: senderEmail, name: 'The Honest Bowl' };
      sendSmtpEmail.to = [{ email: trimmedEmail }];
      sendSmtpEmail.subject = 'Your Order Confirmation — The Honest Bowl';
      sendSmtpEmail.htmlContent = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b;background:#f8fafc;border-radius:12px;">
          <div style="background:#064e3b;padding:24px;border-radius:8px;text-align:center;">
            <h1 style="color:#fde68a;margin:0;font-size:24px;">&#x1F43E; The Honest Bowl</h1>
          </div>
          <div style="background:#fff;padding:24px;border-radius:8px;margin-top:16px;border:1px solid #e2e8f0;">
            <h2 style="color:#0f172a;margin-top:0;">Order Confirmed!</h2>
            <p style="line-height:1.6;">Hi <strong>${trimmedName}</strong>,</p>
            <p style="line-height:1.6;">Thank you for your purchase! You will be redirected to complete your secure payment via Stripe.</p>
            <p style="line-height:1.6;">After payment, you'll receive access to your <strong>5-item digital bundle</strong>.</p>
            <p style="margin-top:24px;font-size:13px;color:#64748b;">Best regards,<br/><strong>The Honest Bowl Team</strong></p>
          </div>
        </div>`;

      await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (err) {
      console.error('Brevo confirmation email failed:', err);
    }
  }

  return res.status(200).json({ success: true, checkoutUrl: stripeUrl });
}
