// src/data/downloadLinks.ts
export const DOWNLOAD_LINKS = {
  ebookMain: 'https://github.com/rovateduino/The-Honest-Bowl/releases/download/v1.0/Natural-Feeding-for-Dogs-Ebook-EN.pdf',
  therapeuticGuide: 'https://github.com/rovateduino/The-Honest-Bowl/releases/download/v1.0/Therapeutic-Diets-for-Dogs-10-Recipe.pdf',
  companionGuide: 'https://github.com/rovateduino/The-Honest-Bowl/releases/download/v1.0/Beyond-the-Recipes-Therapeutic-Companion-Guide.pdf',
  safetyPoster: 'https://github.com/rovateduino/The-Honest-Bowl/releases/download/v1.0/Dog_Safety_Fridge_Chart_and_Grocery_Guide_EN.pdf',
  portionCalculator: 'https://github.com/rovateduino/The-Honest-Bowl/releases/download/v1.0/the-honest-bowl-exact-portion-calculator-workbook.xlsx'
} as const;

export type DownloadLinkKey = keyof typeof DOWNLOAD_LINKS;
