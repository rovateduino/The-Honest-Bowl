import React from 'react';
import { Sparkles, Thermometer, MapPin, Award } from 'lucide-react';
import { CANADIAN_PET_CARE_FACTS } from '../data/productData';

export const TrustBadges: React.FC = () => {
  return (
    <section className="bg-emerald-900 text-emerald-50 py-10 border-y border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/50">
            🇨🇦 Built for Canadian Dog Parents
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Why Canadian Pet Parents Are Switching to Natural Whole Foods
          </h2>
          <p className="text-sm sm:text-base text-emerald-200 mt-2">
            Formulated specifically to address winter energy needs, dry indoor air coat issues, and accessible Canadian grocery store proteins.
          </p>
        </div>

        {/* Grid of 4 Canadian Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANADIAN_PET_CARE_FACTS.map((fact, index) => (
            <div
              key={index}
              className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-700/40 hover:border-amber-400/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-300 flex items-center justify-center mb-3">
                {index === 0 && <Thermometer className="w-5 h-5 text-amber-300" />}
                {index === 1 && <Sparkles className="w-5 h-5 text-amber-300" />}
                {index === 2 && <MapPin className="w-5 h-5 text-amber-300" />}
                {index === 3 && <Award className="w-5 h-5 text-amber-300" />}
              </div>
              <h3 className="font-bold text-white text-base mb-1.5">{fact.title}</h3>
              <p className="text-xs text-emerald-200/90 leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
