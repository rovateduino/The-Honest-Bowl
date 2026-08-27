import 'dotenv/config';
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from 'resend';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initializeApp, cert, type AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import brevo from '@getbrevo/brevo';

let db: ReturnType<typeof getFirestore> | null = null;

function initFirebaseAdmin() {
  if (db) return db;

  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
  if (!projectId) {
    console.warn('⚠️  VITE_FIREBASE_PROJECT_ID not set. Firestore lead capture disabled.');
    return null;
  }

  const appOptions: AppOptions = {
    credential: cert({
      projectId,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  };

  const app = initializeApp(appOptions);
  db = getFirestore(app);
  return db;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '64kb' }));

  if (process.env.NODE_ENV === 'production') {
    app.use(helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", "data:", "https:", "blob:"],
          'script-src': ["'self'", "'unsafe-inline'"],
          'style-src': ["'self'", "'unsafe-inline'", "https:"],
          'connect-src': ["'self'", "https:"]
        }
      },
      crossOriginEmbedderPolicy: false
    }));
  }

  const emailLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: 'Too many requests from this IP. Please try again after 1 minute.'
    }
  });

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ── Brevo email helper ──────────────────────────────────────────
  const sendBrevoEmail = async (toEmail: string): Promise<{ success: boolean; messageId?: string; error?: string }> => {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    if (!apiKey || !senderEmail) {
      return { success: false, error: 'Brevo not configured.' };
    }

    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { email: senderEmail, name: 'The Honest Bowl' };
    sendSmtpEmail.to = [{ email: toEmail }];
    sendSmtpEmail.subject = 'Your Natural Dog Nutrition Guide — The Honest Bowl';
    sendSmtpEmail.htmlContent = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b;background:#f8fafc;border-radius:12px;">
        <div style="background:#064e3b;padding:24px;border-radius:8px;text-align:center;">
          <h1 style="color:#fde68a;margin:0;font-size:24px;">&#x1F43E; The Honest Bowl</h1>
          <p style="color:#a7f3d0;margin:8px 0 0;font-size:14px;">Canine Natural Nutrition &amp; Wellness</p>
        </div>
        <div style="background:#fff;padding:24px;border-radius:8px;margin-top:16px;border:1px solid #e2e8f0;">
          <h2 style="color:#0f172a;margin-top:0;">Welcome to our community!</h2>
          <p style="line-height:1.6;">Thank you for subscribing to <strong>The Honest Bowl</strong> Canine Natural Nutrition newsletter.</p>
          <h3 style="color:#065f46;margin-top:20px;">Top 3 Nutrition Principles for Dogs:</h3>
          <ul style="line-height:1.8;">
            <li><strong>Fresh, Whole Proteins:</strong> Muscle meat, organ meat, and healthy animal fats.</li>
            <li><strong>Essential Calcium Balance:</strong> Proper calcium-to-phosphorus ratios are vital.</li>
            <li><strong>Gentle Fiber &amp; Antioxidants:</strong> Steamed dog-safe vegetables (pumpkin, carrots, spinach).</li>
          </ul>
          <div style="background:#ecfdf5;border-left:4px solid #059669;padding:12px 16px;margin:20px 0;border-radius:4px;">
            <p style="margin:0;font-size:14px;color:#065f46;">
              <strong>Note:</strong> The full 30-Recipe Canine Nutrition Suite + Excel Portion Calculator is available on this page via the Instant Digital Access checkout flow.
            </p>
          </div>
          <p style="margin-top:24px;font-size:13px;color:#64748b;">Best regards,<br/><strong>The Honest Bowl Team</strong></p>
        </div>
      </div>`;

    const ebookBase64 = process.env.EBOOK_PDF_BASE64;
    if (ebookBase64) {
      sendSmtpEmail.attachment = [{ content: ebookBase64, name: 'The-Honest-Bowl-Ebook.pdf' }];
    }

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true, messageId: response.body?.messageId || undefined };
  };

  // ── Resend email helper (fallback) ──────────────────────────────
  const sendResendEmail = async (toEmail: string): Promise<{ success: boolean; id?: string; error?: string }> => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { success: false, error: 'Resend not configured.' };

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: 'Natural Dog Nutrition Tips & Guide - The Honest Bowl',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b;background:#f8fafc;border-radius:12px;">
          <div style="background:#064e3b;padding:24px;border-radius:8px;text-align:center;">
            <h1 style="color:#fde68a;margin:0;font-size:24px;">&#x1F43E; The Honest Bowl</h1>
            <p style="color:#a7f3d0;margin:8px 0 0;font-size:14px;">Canine Natural Nutrition &amp; Wellness</p>
          </div>
          <div style="background:#fff;padding:24px;border-radius:8px;margin-top:16px;border:1px solid #e2e8f0;">
            <h2 style="color:#0f172a;margin-top:0;">Welcome to our community!</h2>
            <p style="line-height:1.6;">Thank you for subscribing to <strong>The Honest Bowl</strong> newsletter.</p>
            <h3 style="color:#065f46;margin-top:20px;">Top 3 Nutrition Principles for Dogs:</h3>
            <ul style="line-height:1.8;">
              <li><strong>Fresh, Whole Proteins:</strong> Muscle meat, organ meat, and healthy animal fats.</li>
              <li><strong>Essential Calcium Balance:</strong> Proper calcium-to-phosphorus ratios are vital.</li>
              <li><strong>Gentle Fiber &amp; Antioxidants:</strong> Steamed dog-safe vegetables (pumpkin, carrots, spinach).</li>
            </ul>
            <p style="margin-top:24px;font-size:13px;color:#64748b;">Best regards,<br/><strong>The Honest Bowl Team</strong></p>
          </div>
        </div>`,
    });

    if (response.error) {
      return { success: false, error: response.error.message || 'Resend API error.' };
    }
    return { success: true, id: response.data?.id || undefined };
  };

  // ── POST /api/send-email ────────────────────────────────────────
  // Primary: Brevo | Fallback: Resend
  app.post("/api/send-email", emailLimiter, async (req, res) => {
    const { email } = req.body || {};
    const trimmed = typeof email === 'string' ? email.trim() : '';

    if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
      return res.status(400).json({ success: false, error: 'A valid email address is required (e.g. name@example.com).' });
    }

    try {
      // Try Brevo first
      const brevoResult = await sendBrevoEmail(trimmed);
      if (brevoResult.success) {
        return res.json({ success: true, provider: 'brevo', messageId: brevoResult.messageId });
      }

      // Fallback to Resend
      console.warn('Brevo failed, falling back to Resend:', brevoResult.error);
      const resendResult = await sendResendEmail(trimmed);
      if (resendResult.success) {
        return res.json({ success: true, provider: 'resend', id: resendResult.id });
      }

      // Both failed
      console.error('Both Brevo and Resend failed:', brevoResult.error, resendResult.error);
      return res.status(500).json({ success: false, error: 'Unable to send email at this time. Please try again later.' });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Internal server error while sending email';
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, error: message });
    }
  });

  // POST /api/checkout — Save lead to Firestore and return Stripe checkout URL
  app.post("/api/checkout", emailLimiter, async (req, res) => {
    const { email, fullName, province } = req.body || {};
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
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
    const firestoreDb = initFirebaseAdmin();
    if (firestoreDb) {
      try {
        await firestoreDb.collection('leads').add({
          fullName: trimmedName,
          email: trimmedEmail,
          province: trimmedProvince || 'N/A',
          createdAt: new Date(),
          status: 'checkout_started',
        });
      } catch (err) {
        console.error('Error saving lead to Firestore:', err);
        // Non-blocking: proceed to redirect even if Firestore write fails
      }
    }

    res.json({ success: true, checkoutUrl: stripeUrl });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ The Honest Bowl server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
