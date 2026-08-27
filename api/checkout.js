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

  const stripeUrl = process.env.STRIPE_CHECKOUT_URL || 'https://buy.stripe.com/aFa6oHfGM25w1P4a2RdAk01';

  try {
    const { initializeApp, cert, getApps } = await import('firebase-admin/app');
    const { getFirestore } = await import('firebase-admin/firestore');

    let db = null;
    const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (projectId && clientEmail && privateKey) {
      const apps = getApps();
      const app = apps.length ? apps[0] : initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
      db = getFirestore(app);

      await db.collection('leads').add({
        fullName: trimmedName,
        email: trimmedEmail,
        province: trimmedProvince || 'N/A',
        createdAt: new Date(),
        status: 'checkout_started',
      });
    }
  } catch (err) {
    console.error('Firestore error (non-blocking):', err.message);
  }

  return res.status(200).json({ success: true, checkoutUrl: stripeUrl });
}
