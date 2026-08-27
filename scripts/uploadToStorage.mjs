import 'dotenv/config';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { readFileSync } from 'fs';
import { resolve, basename } from 'path';

const FILES = [
  { local: 'public/Natural-Feeding-for-Dogs-Ebook-EN.pdf', storage: 'products/Natural-Feeding-for-Dogs-Ebook-EN.pdf' },
  { local: 'public/Therapeutic-Diets-for-Dogs-10-Recipe.pdf', storage: 'products/Therapeutic-Diets-for-Dogs-10-Recipe.pdf' },
  { local: 'public/Beyond-the-Recipes-Therapeutic-Companion-Guide.pdf', storage: 'products/Beyond-the-Recipes-Therapeutic-Companion-Guide.pdf' },
  { local: 'public/Dog_Safety_Fridge_Chart_and_Grocery_Guide_EN.pdf', storage: 'products/Dog_Safety_Fridge_Chart_and_Grocery_Guide_EN.pdf' },
  { local: 'public/the-honest-bowl-exact-portion-calculator-workbook.xlsx', storage: 'products/the-honest-bowl-exact-portion-calculator-workbook.xlsx' },
];

function initFirebase() {
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    console.error('Missing Firebase credentials. Set VITE_FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in .env');
    process.exit(1);
  }

  const apps = getApps();
  if (apps.length) return apps[0];

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
    storageBucket: `${projectId}.appspot.com`,
  });
}

async function main() {
  const app = initFirebase();
  const bucket = getStorage(app).bucket();

  console.log(`Uploading ${FILES.length} files to gs://${bucket.name}/products/\n`);

  const results = [];

  for (const file of FILES) {
    const localPath = resolve(file.local);
    const buffer = readFileSync(localPath);
    const remote = bucket.file(file.storage);

    await remote.save(buffer, {
      contentType: file.local.endsWith('.xlsx')
        ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        : 'application/pdf',
      metadata: { cacheControl: 'public, max-age=31536000' },
    });

    await remote.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.storage}`;
    const name = basename(file.local);
    results.push({ name, url: publicUrl });

    const sizeMB = (buffer.length / (1024 * 1024)).toFixed(2);
    console.log(`  OK  ${name} (${sizeMB} MB)`);
  }

  console.log('\n--- Public URLs ---');
  for (const r of results) {
    console.log(`${r.name}: ${r.url}`);
  }

  const [ebook, therapeutic, companion, safety, portion] = results.map(r => r.url);
  console.log('\n--- Paste into src/data/downloadLinks.ts ---');
  console.log(`export const downloadLinks = {
  ebookMain: '${ebook}',
  therapeuticGuide: '${therapeutic}',
  companionGuide: '${companion}',
  safetyPoster: '${safety}',
  portionCalculator: '${portion}',
} as const;`);
  console.log('\nDone.');
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
