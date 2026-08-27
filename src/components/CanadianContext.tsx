import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export const CanadianContext: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            The Science of Canine Natural Nutrition
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            The Unspoken Reality Behind Commercial Kibble Bags
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Ultra-high heat extrusion (400°F+) strips essential vitamins, forcing manufacturers to spray synthetic fat flavorings. Natural home cooking restores genuine vitality.
          </p>
        </div>

        {/* Comparison Grid: Kibble Dilemma vs The Honest Bowl Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Standard Commercial Kibble */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              Commercial Ultra-Processed
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Standard Ultra-Processed Kibble</h3>
                <p className="text-xs text-rose-600 font-semibold">High Heat + Starch Fillers</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span><strong>Heavy Carbohydrate Fillers (45-60%):</strong> Corn, wheat, and gluten meals that cause chronic yeast infections, red itchy paws, and ear inflammation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span><strong>High-Heat Extrusions:</strong> Denatures natural amino acids and destroys delicate Omega-3 oils, leaving fur dry and brittle during indoor winter heating.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span><strong>Massive Stool Waste & Odor:</strong> Fillers pass unabsorbed through your dog’s gut, resulting in frequent, smelly, loose bowel movements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span><strong>Skyrocketing Vet Expenses:</strong> Recurring prescription diets, anti-itch injections, and allergy meds cost $800–$1,500 CAD annually.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: The Honest Bowl Natural Solution */}
          <div className="bg-emerald-900 rounded-3xl p-6 sm:p-8 border border-emerald-700 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-emerald-950 text-xs font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              100% Whole Food Method
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Honest Bowl Natural Method</h3>
                <p className="text-xs text-emerald-300 font-semibold">Gently Cooked Whole Nutrition</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>50% High-Grade Bioavailable Meat:</strong> Real lean beef, turkey, salmon, and eggs nourish muscle mass and stamina.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Gentle Steaming & Poaching:</strong> Preserves 98%+ of natural vitamins, enzymes, and vital moisture to protect kidney and bladder health.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Compact, Low-Odor Stool:</strong> 90%+ digestible food means up to 60% less stool volume and effortless backyard cleanup.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Glowing Winter Coat & Zero Itch:</strong> Balanced Omega-3 fatty acids and natural calcium eliminate redness, licking, and paw chewing.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature Hero Banner Image */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-900">
          <img
            src="/assets/images/canadian_dog_food_hero_1786395167359.jpg"
            alt="Healthy Golden Retriever enjoying fresh natural dog food cooked at home"
            className="w-full h-64 sm:h-80 md:h-96 object-cover opacity-90"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full w-fit mb-2">
              Simple 15-Minute Weekly Batch Cooking
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              "Cooking natural food for my dog takes less time than making my morning coffee."
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-1 max-w-2xl">
              Cook 4 days of balanced meals in 15 minutes, freeze in silicone containers, and serve warm. Your dog will literally dance with joy at mealtime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
