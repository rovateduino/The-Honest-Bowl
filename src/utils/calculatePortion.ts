import type { CalculationResult } from '../types';
import { PORTION_FORMULAS, MACRO_DISTRIBUTION, CALCIUM_MG_PER_GRAM, OMEGA3_ML_PER_5KG } from '../lib/constants';

interface CalculatePortionParams {
  weight: number;
  unit: 'kg' | 'lbs';
  lifeStage: 'puppy' | 'adult' | 'senior';
  activityLevel: 'low' | 'moderate' | 'high';
}

export function calculatePortion({
  weight,
  unit,
  lifeStage,
  activityLevel,
}: CalculatePortionParams): CalculationResult {
  const weightKg = unit === 'kg' ? weight : weight * 0.453592;
  const weightLbs = unit === 'lbs' ? weight : weight * 2.20462;

  const percentage = PORTION_FORMULAS[lifeStage][activityLevel];

  const dailyTotalGrams = Math.round(weightKg * percentage * 10);
  const dailyTotalOz = Math.round((dailyTotalGrams / 28.3495) * 10) / 10;
  const mealsPerDay = lifeStage === 'puppy' ? 3 : 2;
  const gramsPerMeal = Math.round(dailyTotalGrams / mealsPerDay);

  const proteinGrams = Math.round(dailyTotalGrams * MACRO_DISTRIBUTION.protein);
  const veggieGrams = Math.round(dailyTotalGrams * MACRO_DISTRIBUTION.veggies);
  const carbGrams = Math.round(dailyTotalGrams * MACRO_DISTRIBUTION.carbs);

  const calciumMg = Math.round(dailyTotalGrams * CALCIUM_MG_PER_GRAM);
  const omega3Ml = Math.round((weightKg / 5) * OMEGA3_ML_PER_5KG * 10) / 10 || 1.0;

  return {
    weightKg,
    weightLbs,
    lifeStage,
    activityLevel,
    chosenPercentage: percentage,
    dailyTotalGrams,
    dailyTotalOz,
    mealsPerDay,
    gramsPerMeal,
    proteinGrams,
    veggieGrams,
    carbGrams,
    calciumMg,
    omega3Ml,
  };
}
