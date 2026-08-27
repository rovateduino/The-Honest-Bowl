import React from 'react';
import { BookOpen, FileSpreadsheet, Stethoscope, AlertTriangle, CheckCircle2, ArrowRight, Zap, BookMarked } from 'lucide-react';

interface ProductSuiteProps {
  onOpenCheckout: () => void;
  onDownloadXlsx: () => void;
}

export const ProductSuite: React.FC<ProductSuiteProps> = ({ onOpenCheckout, onDownloadXlsx: _onDownloadXlsx }) => {
  return (
    <section id="bundle" className="py-16 sm:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              Complete Digital Product Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Here Is Everything Included In Your $27 CAD Bundle Today
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              No recurring subscriptions, no hidden shipping fees. Instant digital download access to all 5 eBooks, guides, and Excel calculator workbooks immediately upon checkout.
            </p>
          </div>

        {/* 4 Digital Bundle Item Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Item 1: Main eBook */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-emerald-800/30 shadow-md relative hover:border-emerald-700 transition-colors">
            <div className="absolute top-6 right-6 bg-emerald-800 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              MAIN EBOOK
            </div>

            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold mb-5">
              <BookOpen className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Primary Digital Guide ($47 CAD Value)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
              Canine Natural Nutrition: 30 Quick, Healthy & Affordable Recipes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              The definitive 5-chapter beginner's master guide. Learn the science of canine nutrition, debunk myths, understand proteins, fats, calcium, and get 30 batch-cook recipes made with fresh grocery staples.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Chapter 1:</strong> Myths, Facts & First Steps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Chapter 2:</strong> Nutrients, Calcium Ratios & Life Stage Portions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Chapter 3:</strong> The 14-Day Safe Transition Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Chapter 4:</strong> 30 Complete Balanced Daily Recipes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Chapter 5:</strong> Safe Meal Prep, Freezing & Health Metrics</span>
              </li>
            </ul>
          </div>

          {/* Item 2: Bonus 1 Therapeutic Recipes */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-emerald-800/30 shadow-md relative hover:border-emerald-700 transition-colors">
            <div className="absolute top-6 right-6 bg-emerald-800 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              INCLUDED ADD-ON
            </div>

            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold mb-5">
              <Stethoscope className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Therapeutic Add-On Guide ($29 CAD Value)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
              Therapeutic Diets Guide: Allergies, Weight Control & Sensitive Stomachs
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              10 specialized therapeutic recipes designed for dogs with severe skin itching, chronic diarrhea, IBS, or winter weight gain. Includes smart ingredient substitution lists!
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>3 Hypoallergenic Recipes:</strong> Whitefish, Turkey & Hydrolyzed Protein</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>3 Sensitive Stomach Meals:</strong> Gentle Chicken, Sweet Potato & Pumpkin</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>4 Weight Management Dishes:</strong> High fiber, low calorie density bowls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Smart Substitution Matrix:</strong> Swapping proteins safely</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-200 mt-4">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>Included in Bundle — Unlock Access</span>
              </button>
            </div>
          </div>

          {/* Item 3: Bonus 2 Excel Portion Calculator Workbook */}
          <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-xl relative">
            <div className="absolute top-6 right-6 bg-amber-400 text-emerald-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              ★ FREE BONUS
            </div>

            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold mb-5">
              <FileSpreadsheet className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              Interactive Excel Workbook ($27 CAD Value)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Downloadable Portion Calculator Workbook (.XLSX)
            </h3>
            <p className="text-sm text-emerald-100 leading-relaxed mb-4">
              Pre-formatted Excel & Google Sheets workbook with exact automated formulas for puppies (4-5%), adults (2-2.5%), and seniors (1.5-2%). Enter your dog's weight and get instant gram calculations.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-emerald-800">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md border border-amber-400/40"
              >
                <BookMarked className="w-4 h-4 text-amber-300" />
                <span>Included in Bundle — Unlock Access</span>
              </button>
            </div>
          </div>

          {/* Item 4: Bonus 3 Dangerous Foods Fridge Poster */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-emerald-800/30 shadow-md relative hover:border-emerald-700 transition-colors">
            <div className="absolute top-6 right-6 bg-emerald-800 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              INCLUDED SAFETY GUIDE
            </div>

            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold mb-5">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">
              Printable Safety Poster ($15 CAD Value)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
              Dangerous Foods Fridge Chart & Grocery Shopping Checklist
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A high-resolution printable PDF chart to tape to your refrigerator. Highlights toxic ingredients (grapes, xylitol, onions, cooked bones) plus an organized supermarket shopping checklist.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Life-Saving Toxic Foods List:</strong> Quick visual reference for family members</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>Grocery Store Guide:</strong> Finding affordable lean proteins</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Pricing Summary Box */}
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-3xl p-8 text-white text-center sm:text-left border border-emerald-700 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="bg-amber-400 text-emerald-950 font-black text-xs px-2.5 py-0.5 rounded uppercase">
                81% OFF LIMITED TIME LAUNCH
              </span>
              <span className="text-xs text-emerald-300 font-bold">100% Digital Download</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Total Bundle Value: <span className="line-through text-slate-400">$145 CAD</span>
            </h3>
            <p className="text-emerald-200 text-sm max-w-xl">
              Get the complete 30-recipe eBook guide, dedicated 14-Day transition protocol, therapeutic diets add-on (2 PDFs), downloadable Excel calculator workbook, and the Fridge Chart safety poster for just <strong>$27 CAD</strong>.
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-lg flex items-center justify-center gap-3 cursor-pointer shadow-xl transition-all transform hover:-translate-y-0.5 shrink-0"
          >
            <Zap className="w-5 h-5" />
            <span>CLAIM ENTIRE SUITE — $27 CAD</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
