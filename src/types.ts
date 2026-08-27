export interface Recipe {
  id: string;
  title: string;
  category: 'adult' | 'sensitive' | 'weight' | 'allergy' | 'treat';
  prepTime: string;
  canadianIngredients: string[];
  benefits: string;
  portionGuidance: string;
  image: string;
}

export interface TransitionDay {
  day: number;
  naturalPct: number;
  kibblePct: number;
  title: string;
  instructions: string;
  bowelCheck: string;
  vetTip: string;
}

export interface CalculationResult {
  weightKg: number;
  weightLbs: number;
  lifeStage: 'puppy' | 'adult' | 'senior';
  activityLevel: 'low' | 'moderate' | 'high';
  chosenPercentage: number;
  dailyTotalGrams: number;
  dailyTotalOz: number;
  mealsPerDay: number;
  gramsPerMeal: number;
  proteinGrams: number; // 50%
  veggieGrams: number; // 25-30%
  carbGrams: number; // 15-20%
  calciumMg: number;
  omega3Ml: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  dogName: string;
  dogBreed: string;
  rating: number;
  quote: string;
  result: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
