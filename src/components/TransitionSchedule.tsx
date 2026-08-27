import React, { useState } from 'react';
import { TRANSITION_SCHEDULE } from '../data/productData';
import { ChevronLeft, ChevronRight, Stethoscope, Check, Info, ArrowRight } from 'lucide-react';

interface TransitionScheduleProps {
  onOpenCheckout: () => void;
}

export const TransitionSchedule: React.FC<TransitionScheduleProps> = ({ onOpenCheckout }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const current = TRANSITION_SCHEDULE[selectedDayIndex];

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-900 px-3.5 py-1 rounded-full border border-emerald-700">
            Interactive Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            The 14-Day Safe Transition Schedule
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base mt-2">
            Why rush and risk stomach upset? Our gentle 14-day progressive schedule conditions your dog's gut microbiome step-by-step for a 100% diarrhea-free transition.
          </p>
        </div>

        {/* Day Selector Buttons / Timeline Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-2">
            <span>Day 1 (10% Natural)</span>
            <span>Day 7 (40% Natural)</span>
            <span>Day 14 (100% Natural Whole Food)</span>
          </div>

          {/* Interactive Days Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-700">
            {TRANSITION_SCHEDULE.map((item, idx) => {
              const isActive = idx === selectedDayIndex;
              return (
                <button
                  key={item.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`flex-1 min-w-[56px] py-2.5 px-2 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-amber-400 text-emerald-950 border-amber-300 shadow-lg shadow-amber-400/20 scale-105'
                      : 'bg-emerald-900/60 text-emerald-200 border-emerald-800 hover:bg-emerald-800 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-tighter opacity-80">Day</span>
                  <span className="text-base font-black">{item.day}</span>
                  <span className={`text-[10px] px-1 rounded ${isActive ? 'bg-emerald-950 text-amber-300' : 'bg-emerald-950/60 text-emerald-300'}`}>
                    {item.naturalPct}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Card */}
        <div className="bg-slate-900 rounded-3xl border border-emerald-800/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Day Breakdown & Bar Visualization */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                    Phase {Math.ceil(current.day / 3.5)} of 4
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Day {current.day}: {current.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-amber-400">{current.naturalPct}%</span>
                  <span className="text-xs text-slate-400 block">Natural Food</span>
                </div>
              </div>

              {/* Progress bar ratio */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span className="text-amber-300 flex items-center gap-1">
                    🥩 Cooked Natural ({current.naturalPct}%)
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    🥣 Commercial Kibble ({current.kibblePct}%)
                  </span>
                </div>
                
                <div className="h-6 w-full rounded-full bg-slate-800 p-1 flex overflow-hidden border border-emerald-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-l-full transition-all duration-500 flex items-center justify-center text-[10px] font-black text-emerald-950"
                    style={{ width: `${current.naturalPct}%` }}
                  >
                    {current.naturalPct > 15 && `${current.naturalPct}%`}
                  </div>
                  <div
                    className="h-full bg-slate-700/80 rounded-r-full transition-all duration-500 flex items-center justify-center text-[10px] font-black text-slate-300"
                    style={{ width: `${current.kibblePct}%` }}
                  >
                    {current.kibblePct > 15 && `${current.kibblePct}%`}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedDayIndex === 0}
                  onClick={() => setSelectedDayIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Day
                </button>

                <span className="text-xs text-slate-400">
                  {selectedDayIndex + 1} of 14 Days
                </span>

                <button
                  disabled={selectedDayIndex === TRANSITION_SCHEDULE.length - 1}
                  onClick={() => setSelectedDayIndex((prev) => Math.min(TRANSITION_SCHEDULE.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Next Day
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Detailed Instructions & Vet Observation */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Daily Meal Instructions Box */}
              <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Info className="w-4 h-4 text-amber-400" />
                  <span>Meal Preparation & Feeding Routine</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {current.instructions}
                </p>
              </div>

              {/* Bowel Check Box */}
              <div className="bg-emerald-950/80 rounded-2xl p-5 border border-emerald-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Expected Stool & Bowel Movement</span>
                </div>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  {current.bowelCheck}
                </p>
              </div>

              {/* Vet Tip Box */}
              <div className="bg-amber-950/40 rounded-2xl p-5 border border-amber-800/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4 text-amber-400" />
                  <span>Veterinary Nutritionist Tip</span>
                </div>
                <p className="text-sm text-amber-100 leading-relaxed">
                  {current.vetTip}
                </p>
              </div>

            </div>

          </div>

          {/* Bottom CTA bar inside section */}
          <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-emerald-200/90 text-center sm:text-left">
              💡 <em>Our eBook includes printable PDF fridge checklists for all 14 days to tick off every morning!</em>
            </p>
            <button
              onClick={onOpenCheckout}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
            >
              <span>Get Full 14-Day Guide in eBook Suite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
