export const PRODUCT = {
  name: 'The Honest Bowl',
  tagline: '30 Natural Dog Food Recipes + Portion Calculator',
  price: 27,
  originalPrice: 145,
  currency: 'CAD',
  stripeUrl: '', // Loaded from env at runtime
} as const;

export const PORTION_FORMULAS = {
  puppy: { low: 4.0, moderate: 4.5, high: 5.0 },
  adult: { low: 2.0, moderate: 2.25, high: 2.5 },
  senior: { low: 1.5, moderate: 1.75, high: 2.0 },
} as const;

export const MACRO_DISTRIBUTION = {
  protein: 0.50,
  veggies: 0.25,
  carbs: 0.25,
} as const;

export const CALCIUM_MG_PER_GRAM = 10;
export const OMEGA3_ML_PER_5KG = 0.5;
