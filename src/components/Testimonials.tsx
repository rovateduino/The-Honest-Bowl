import React from 'react';
import { TESTIMONIALS } from '../data/productData';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900 px-3.5 py-1 rounded-full border border-emerald-700">
            Real Canadian Pet Parents
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Trusted by Over 4,800 Pet Parents Coast to Coast 🇨🇦
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base mt-2">
            Read real stories from dog parents in British Columbia, Alberta, Ontario, and Quebec who transformed their dogs' health.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-800/80 shadow-2xl flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Rating & Result Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-300">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
                    Verified Buyer 🇨🇦
                  </span>
                </div>

                {/* Outcome Banner */}
                <div className="bg-emerald-950 p-2.5 rounded-xl border border-emerald-800/80 text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{review.result}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Dog Info */}
              <div className="pt-6 border-t border-emerald-900/60 mt-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-amber-300 font-semibold">{review.location}</p>
                  <p className="text-[11px] text-slate-400">Dog: {review.dogName} ({review.dogBreed})</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Review Footer */}
        <div className="mt-12 text-center text-xs text-emerald-300 font-medium flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>4.9 / 5.0 Average Satisfaction Rating across 4,820 Canadian Downloads</span>
        </div>

      </div>
    </section>
  );
};
