import React from 'react';
import { FileSpreadsheet, ArrowRight, ShieldCheck, Star, Check, Zap } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onDownloadXlsx?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-950 to-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-xs">
              <span className="text-amber-300 flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-300" />
                <Star className="w-4 h-4 fill-amber-300" />
                <Star className="w-4 h-4 fill-amber-300" />
                <Star className="w-4 h-4 fill-amber-300" />
                <Star className="w-4 h-4 fill-amber-300" />
              </span>
              <span>Loved by 4,800+ Pet Parents Coast to Coast 🇨🇦</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Is Your Dog Scratching, Stressed, or Picky with Commercial Kibble?
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-emerald-100 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your dog’s coat, gut digestion, and energy with <strong className="text-amber-300 underline underline-offset-4 decoration-amber-400">30 quick, healthy, and affordable natural recipes</strong> made with fresh, wholesome grocery store ingredients.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2 text-sm text-slate-200 bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-700/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>14-Day Transition Schedule:</strong> Step-by-step ratio protocol for zero stomach upset.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-700/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Puppy, Adult & Senior Formulas:</strong> 4-5% puppies, 2-2.5% adults, 1.5-2% seniors.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-700/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Free Automated Portion Calculator:</strong> Downloadable Excel & Google Sheets workbook included.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-700/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Fresh Whole Ingredients:</strong> Wild salmon, lean beef, turkey, pumpkin & blueberries.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-emerald-950 font-black text-lg shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>GET INSTANT ACCESS — $27 CAD</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Footer line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-emerald-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                14-Day 100% Money Back Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Instant Digital Delivery
              </span>
              <span className="flex items-center gap-1.5">
                🇨🇦 No Import Duty or Shipping
              </span>
            </div>
          </div>

          {/* Right Column: Visual Product Bundle Mockup Card */}
          <div className="lg:col-span-5 relative">
            {/* Background Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

            <div className="relative bg-slate-900/90 rounded-3xl border border-emerald-500/30 p-6 shadow-2xl backdrop-blur-md text-slate-100">
              
              {/* Top Badge */}
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-400 text-emerald-950 font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                    COMPLETE DIGITAL SUITE
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold">100% Canadian Edition</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through mr-1.5">$145 CAD</span>
                  <span className="text-xl font-extrabold text-amber-400">$27 CAD</span>
                </div>
              </div>

              {/* Generated Image or Styled Presentation */}
              <div className="relative rounded-2xl overflow-hidden bg-emerald-950/60 border border-emerald-800/40 mb-5 group">
                <img
                  src="/assets/images/ebook_bundle_mockup_1786395178146.jpg"
                  alt="Canine Natural Nutrition Digital eBook Bundle & Portion Calculator Workbook"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual if asset loading fails
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-3 right-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                  <span>Includes .XLSX Workbook</span>
                </div>
              </div>

              {/* What's Inside Quick Checklist */}
              <div className="space-y-2.5 text-xs text-slate-300 border-t border-emerald-800/50 pt-4">
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="text-amber-400 font-bold">1.</span> Main eBook (30 Quick Recipes + Guide)
                  </span>
                  <span className="text-amber-300 font-bold">$47 CAD</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="text-amber-400 font-bold">2.</span> 14-Day Transition Schedule Protocol
                  </span>
                  <span className="text-amber-300 font-bold">$27 CAD</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="text-amber-400 font-bold">3.</span> Therapeutic Diets Add-On (2 PDFs)
                  </span>
                  <span className="text-amber-300 font-bold">$29 CAD</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="text-amber-400 font-bold">4.</span> Fridge Chart + Grocery Checklist
                  </span>
                  <span className="text-amber-300 font-bold">$15 CAD</span>
                </div>
                <div className="flex items-center justify-between py-1 bg-emerald-900/50 rounded-lg px-2 -mx-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="text-amber-300">★</span>
                    <span className="text-amber-400 font-bold">5.</span> Excel Portion Calculator (.XLSX)
                  </span>
                  <span className="text-emerald-300 font-black uppercase tracking-wider">★ FREE BONUS</span>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="mt-5 p-3 rounded-xl bg-emerald-950/80 border border-emerald-600/30 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
                <p className="text-xs text-emerald-100 leading-snug">
                  <strong>Risk-Free Guarantee:</strong> Try the recipes and formulas for 14 days. If your dog doesn’t lick the bowl clean, receive a 100% hassle-free refund in $ CAD.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
