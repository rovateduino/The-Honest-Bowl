import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

interface ComparisonTableProps {
  onOpenCheckout: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenCheckout: _onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Why Guidance Matters
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Feature Comparison: Choose The Safest Path
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Why guessing home-cooked food can lead to calcium deficiency, and why The Honest Bowl gives you total peace of mind.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                <th className="p-4 sm:p-5 font-bold w-1/3">Nutritional Feature</th>
                <th className="p-4 sm:p-5 font-bold text-center text-rose-300 w-1/5 bg-slate-950/60">
                  Standard Kibble
                </th>
                <th className="p-4 sm:p-5 font-bold text-center text-amber-300 w-1/5 bg-slate-950/80">
                  DIY Unformatted Cooking
                </th>
                <th className="p-4 sm:p-5 font-bold text-center text-emerald-300 w-1/4 bg-emerald-900">
                  The Honest Bowl Method 🇨🇦
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium text-slate-700">
              
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">100% Bioavailable Fresh Ingredients</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                </td>
                <td className="p-4 text-center bg-slate-50/80">
                  <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">Balanced Calcium to Phosphorus Ratio</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <Check className="w-5 h-5 text-slate-400 mx-auto" />
                </td>
                <td className="p-4 text-center bg-rose-50 text-rose-700 font-bold">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                  <span className="text-[10px] block">High Risk of Bone Weakness</span>
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                  <span className="text-[10px] block">Exact Eggshell Calcium Formulas</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">14-Day Gentle Transition Protocol</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                </td>
                <td className="p-4 text-center bg-slate-50/80">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                  <span className="text-[10px] block">Zero Stomach Upset Protocol</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">Age Specific Formulas (Puppy/Adult/Senior)</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <span className="text-xs text-slate-500">Generic</span>
                </td>
                <td className="p-4 text-center bg-slate-50/80 text-amber-700">
                  <AlertCircle className="w-4 h-4 text-amber-500 mx-auto" />
                  <span className="text-[10px] block">Guesswork</span>
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                  <span className="text-[10px] block">Puppy 4-5% | Adult 2-2.5% | Senior 1.5-2%</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">Excel Portion Calculator Workbook (.XLSX) — ★ Included Bonus</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                </td>
                <td className="p-4 text-center bg-slate-50/80">
                  <X className="w-5 h-5 text-rose-500 mx-auto" />
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                  <span className="text-[10px] block">Delivered After $27 Checkout</span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">Fresh Grocery Store Ingredients</td>
                <td className="p-4 text-center bg-slate-50/50">
                  <span className="text-xs text-slate-500">Ultra-Processed Extrusions</span>
                </td>
                <td className="p-4 text-center bg-slate-50/80">
                  <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                </td>
                <td className="p-4 text-center bg-emerald-50/60 font-extrabold text-emerald-900">
                  <Check className="w-5 h-5 text-emerald-700 mx-auto" />
                  <span className="text-[10px] block">Everyday Supermarket Items</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
