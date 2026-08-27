import React, { useState, useMemo } from 'react';
import { FileSpreadsheet, Calculator } from 'lucide-react';
import { calculatePortion } from '../utils/calculatePortion';

interface PortionCalculatorProps {
  onDownloadXlsx: () => void;
  onOpenCheckout: () => void;
}

export const PortionCalculator: React.FC<PortionCalculatorProps> = ({
  onOpenCheckout
}) => {
  // Calculator State
  const [weightInput, setWeightInput] = useState<number>(10);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [lifeStage, setLifeStage] = useState<'puppy' | 'adult' | 'senior'>('adult');
  const [activityLevel, setActivityLevel] = useState<'low' | 'moderate' | 'high'>('moderate');

  const result = useMemo(() =>
    calculatePortion({ weight: weightInput, unit, lifeStage, activityLevel }),
    [weightInput, unit, lifeStage, activityLevel]
  );

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Interactive Portion Formulas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">
            Daily Portion Formula Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            No guessing, no overfeeding. Use our exact weight percentage portion formulas tailored across all life stages.
          </p>
        </div>

        {/* Top 3 Formula Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className={`p-6 rounded-3xl border transition-all ${lifeStage === 'puppy' ? 'bg-emerald-900 border-amber-400 shadow-xl' : 'bg-slate-800/80 border-slate-700'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Puppies (0-12 Mos)</span>
              <span className="text-2xl font-extrabold text-amber-400">4.0% – 5.0%</span>
            </div>
            <h3 className="font-bold text-white text-lg">Rapid Muscle & Bone Growth</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Formula: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">Weight (kg) × 40g to 50g</code>. High calcium demand for growing skeletal frame.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border transition-all ${lifeStage === 'adult' ? 'bg-emerald-900 border-amber-400 shadow-xl' : 'bg-slate-800/80 border-slate-700'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Adult Dogs (1-7 Yrs)</span>
              <span className="text-2xl font-extrabold text-amber-400">2.0% – 2.5%</span>
            </div>
            <h3 className="font-bold text-white text-lg">Peak Stamina & Maintenance</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Formula: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">Weight (kg) × 20g to 25g</code>. Balances daily activity and lean muscle retention.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border transition-all ${lifeStage === 'senior' ? 'bg-emerald-900 border-amber-400 shadow-xl' : 'bg-slate-800/80 border-slate-700'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Seniors (7+ Yrs)</span>
              <span className="text-2xl font-extrabold text-amber-400">1.5% – 2.0%</span>
            </div>
            <h3 className="font-bold text-white text-lg">Gentle Metabolism & Joints</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Formula: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">Weight (kg) × 15g to 20g</code>. Prevents winter weight gain while easing digestion.
            </p>
          </div>

        </div>

        {/* Interactive Portion Calculator Widget */}
        <div className="bg-slate-950 rounded-3xl border border-emerald-700 p-6 sm:p-10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-extrabold text-white">Live Canadian Portion Calculator</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Enter your dog's exact details to calculate their meal portions in real-time.
              </p>
            </div>

            {/* Download Button Header — NOW opens Checkout (Excel is Bonus only for paying customers) */}
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-900" />
              <span>★ Get Full Excel Workbook (Included in $27 Bundle)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Weight Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-200">
                  <label htmlFor="dog-weight">Dog Weight</label>
                  <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
                    <button
                      onClick={() => setUnit('kg')}
                      className={`px-3 py-1 rounded font-bold transition-colors ${unit === 'kg' ? 'bg-amber-400 text-emerald-950' : 'text-slate-400 hover:text-white'}`}
                    >
                      Kg
                    </button>
                    <button
                      onClick={() => setUnit('lbs')}
                      className={`px-3 py-1 rounded font-bold transition-colors ${unit === 'lbs' ? 'bg-amber-400 text-emerald-950' : 'text-slate-400 hover:text-white'}`}
                    >
                      Lbs
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    id="dog-weight"
                    type="number"
                    min="1"
                    max="100"
                    value={weightInput}
                    onChange={(e) => setWeightInput(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-slate-900 border-2 border-emerald-800 focus:border-amber-400 rounded-xl py-3 px-4 text-2xl font-black text-amber-300 outline-hidden transition-colors"
                  />
                  <span className="absolute right-4 top-4 text-sm font-bold text-slate-500 uppercase">
                    {unit}
                  </span>
                </div>
              </div>

              {/* Life Stage Select */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 block">Life Stage</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setLifeStage('puppy')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      lifeStage === 'puppy'
                        ? 'bg-emerald-800 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Puppy (4-5%)
                  </button>
                  <button
                    onClick={() => setLifeStage('adult')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      lifeStage === 'adult'
                        ? 'bg-emerald-800 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Adult (2-2.5%)
                  </button>
                  <button
                    onClick={() => setLifeStage('senior')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      lifeStage === 'senior'
                        ? 'bg-emerald-800 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Senior (1.5-2%)
                  </button>
                </div>
              </div>

              {/* Activity Level Select */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 block">Activity & Climate Level</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setActivityLevel('low')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      activityLevel === 'low'
                        ? 'bg-amber-400 text-emerald-950 border-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Indoor / Low
                  </button>
                  <button
                    onClick={() => setActivityLevel('moderate')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      activityLevel === 'moderate'
                        ? 'bg-amber-400 text-emerald-950 border-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Standard Daily
                  </button>
                  <button
                    onClick={() => setActivityLevel('high')}
                    className={`py-2.5 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      activityLevel === 'high'
                        ? 'bg-amber-400 text-emerald-950 border-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Active / Winter
                  </button>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-6 bg-emerald-950/80 rounded-2xl border-2 border-amber-400/80 p-6 space-y-5">
              
              <div className="flex items-center justify-between border-b border-emerald-800 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    Exact Daily Formula Result
                  </span>
                  <div className="text-3xl font-black text-amber-300 mt-0.5">
                    {result.dailyTotalGrams} grams / day
                  </div>
                  <span className="text-xs text-slate-300">
                    (~{result.dailyTotalOz} oz) based on {result.chosenPercentage}% body weight ({result.weightKg.toFixed(1)} kg)
                  </span>
                </div>
                <div className="text-right">
                  <span className="bg-amber-400 text-emerald-950 text-xs font-black px-2.5 py-1 rounded">
                    {result.mealsPerDay} Meals / Day
                  </span>
                  <span className="text-xs text-emerald-200 block mt-1 font-semibold">
                    {result.gramsPerMeal}g per bowl
                  </span>
                </div>
              </div>

              {/* Macronutrient Plate Breakdown */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white block">
                  Plate Macronutrient Distribution (Daily)
                </span>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-emerald-900/90 p-3 rounded-xl border border-emerald-700">
                    <span className="text-slate-300 block font-semibold">50% Protein</span>
                    <span className="text-lg font-extrabold text-amber-300">{result.proteinGrams}g</span>
                    <span className="text-[10px] text-emerald-200 block">Turkey/Beef/Fish</span>
                  </div>

                  <div className="bg-emerald-900/90 p-3 rounded-xl border border-emerald-700">
                    <span className="text-slate-300 block font-semibold">25% Veggies</span>
                    <span className="text-lg font-extrabold text-amber-300">{result.veggieGrams}g</span>
                    <span className="text-[10px] text-emerald-200 block">Pumpkin/Carrot</span>
                  </div>

                  <div className="bg-emerald-900/90 p-3 rounded-xl border border-emerald-700">
                    <span className="text-slate-300 block font-semibold">25% Complex Carb</span>
                    <span className="text-lg font-extrabold text-amber-300">{result.carbGrams}g</span>
                    <span className="text-[10px] text-emerald-200 block">Rice/Sweet Potato</span>
                  </div>
                </div>
              </div>

              {/* Essential Supplements */}
              <div className="pt-2 border-t border-emerald-800 text-xs text-emerald-100 flex items-center justify-between">
                <span>
                  🦴 Calcium Powder: <strong>~{result.calciumMg} mg</strong>
                </span>
                <span>
                  🐟 Omega-3 Oil: <strong>~{result.omega3Ml} ml</strong>
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
