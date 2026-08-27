import React from 'react';
import { SAMPLE_RECIPES } from '../data/productData';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface RecipePreviewProps {
  onOpenCheckout: () => void;
}

export const RecipePreview: React.FC<RecipePreviewProps> = ({ onOpenCheckout }) => {
  return (
    <section id="recipes" className="py-16 sm:py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            Preview The 30 Recipes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Delicious, Affordable & Easy 15-Minute Meals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every recipe uses everyday fresh ingredients readily available at standard grocers. No fancy exotic meats required!
          </p>
        </div>

        {/* 3 Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SAMPLE_RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Prep Tag */}
                <div className="relative h-48 bg-slate-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md text-amber-300 font-bold text-xs px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{recipe.prepTime} Prep</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <strong>Health Benefit:</strong> {recipe.benefits}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Fresh Wholesome Ingredients:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {recipe.canadianIngredients.map((ing, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Guidance */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg block text-center">
                  {recipe.portionGuidance}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Want All 30 Quick Recipes + The Therapeutic Add-On Guide?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Unlock breakfast scrambles, turkey stews, beef bowls, fish warmers, and healthy training treats in one easy digital PDF download.
          </p>
          <button
            onClick={onOpenCheckout}
            className="px-8 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm inline-flex items-center gap-2 cursor-pointer transition-colors shadow-md"
          >
            <span>Unlock All 30 Recipes — $27 CAD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
