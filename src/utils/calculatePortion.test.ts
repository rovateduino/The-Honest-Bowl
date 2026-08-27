import { describe, it, expect } from 'vitest';
import { calculatePortion } from './calculatePortion';

describe('calculatePortion', () => {
  describe('adult dog (moderate activity)', () => {
    it('should calculate correct portions for 10kg adult dog', () => {
      const result = calculatePortion({
        weight: 10,
        unit: 'kg',
        lifeStage: 'adult',
        activityLevel: 'moderate',
      });

      expect(result.weightKg).toBe(10);
      expect(result.chosenPercentage).toBe(2.25);
      expect(result.dailyTotalGrams).toBe(225);
      expect(result.mealsPerDay).toBe(2);
      expect(result.gramsPerMeal).toBe(113);
    });

    it('should calculate correct macros (50% protein, 25% veggies, 25% carbs)', () => {
      const result = calculatePortion({
        weight: 10,
        unit: 'kg',
        lifeStage: 'adult',
        activityLevel: 'moderate',
      });

      // 225 * 0.50 = 112.5 → rounds to 113
      expect(result.proteinGrams).toBe(113);
      // 225 * 0.25 = 56.25 → rounds to 56
      expect(result.veggieGrams).toBe(56);
      expect(result.carbGrams).toBe(56);
    });
  });

  describe('puppy dog (high activity)', () => {
    it('should use 5.0% formula', () => {
      const result = calculatePortion({
        weight: 5,
        unit: 'kg',
        lifeStage: 'puppy',
        activityLevel: 'high',
      });

      expect(result.chosenPercentage).toBe(5.0);
      expect(result.dailyTotalGrams).toBe(250);
      expect(result.mealsPerDay).toBe(3);
      expect(result.gramsPerMeal).toBe(83);
    });
  });

  describe('senior dog (low activity)', () => {
    it('should use 1.5% formula', () => {
      const result = calculatePortion({
        weight: 20,
        unit: 'kg',
        lifeStage: 'senior',
        activityLevel: 'low',
      });

      expect(result.chosenPercentage).toBe(1.5);
      // 20 * 1.5 * 10 = 300
      expect(result.dailyTotalGrams).toBe(300);
      expect(result.mealsPerDay).toBe(2);
    });
  });

  describe('unit conversion', () => {
    it('should convert lbs to kg correctly', () => {
      const result = calculatePortion({
        weight: 22,
        unit: 'lbs',
        lifeStage: 'adult',
        activityLevel: 'moderate',
      });

      // 22 lbs * 0.453592 = ~9.98 kg
      expect(result.weightKg).toBeCloseTo(9.98, 1);
      expect(result.weightLbs).toBe(22);
    });

    it('should convert kg to lbs correctly', () => {
      const result = calculatePortion({
        weight: 10,
        unit: 'kg',
        lifeStage: 'adult',
        activityLevel: 'moderate',
      });

      expect(result.weightKg).toBe(10);
      expect(result.weightLbs).toBeCloseTo(22.05, 1);
    });
  });

  describe('supplements', () => {
    it('should calculate calcium and omega-3', () => {
      const result = calculatePortion({
        weight: 10,
        unit: 'kg',
        lifeStage: 'adult',
        activityLevel: 'moderate',
      });

      // 225 * 10 = 2250 mg
      expect(result.calciumMg).toBe(2250);
      // (10 / 5) * 0.5 = 1.0 ml
      expect(result.omega3Ml).toBe(1.0);
    });
  });

  describe('all life stages and activity levels', () => {
    it('should return valid results for all combinations', () => {
      const lifeStages: Array<'puppy' | 'adult' | 'senior'> = ['puppy', 'adult', 'senior'];
      const activityLevels: Array<'low' | 'moderate' | 'high'> = ['low', 'moderate', 'high'];

      for (const lifeStage of lifeStages) {
        for (const activityLevel of activityLevels) {
          const result = calculatePortion({
            weight: 15,
            unit: 'kg',
            lifeStage,
            activityLevel,
          });

          expect(result.dailyTotalGrams).toBeGreaterThan(0);
          expect(result.proteinGrams).toBeGreaterThan(0);
          expect(result.veggieGrams).toBeGreaterThan(0);
          expect(result.carbGrams).toBeGreaterThan(0);
          expect(result.calciumMg).toBeGreaterThan(0);
          expect(result.omega3Ml).toBeGreaterThan(0);
        }
      }
    });
  });
});
