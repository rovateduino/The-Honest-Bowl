import React from 'react';
import { ShoppingBag, FileSpreadsheet } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onDownloadXlsx: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCheckout,
  onDownloadXlsx: _onDownloadXlsx
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      {/* Top Banner */}
      <div className="bg-emerald-900 text-emerald-50 text-xs sm:text-sm py-2 px-4 font-medium text-center flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse">🇨🇦</span>
        <span>
          <strong>SPECIAL LAUNCH:</strong> 81% OFF Complete $145 CAD Suite — eBook + Transition + Therapeutic + Safety Guide + ★ Excel Bonus — <strong className="text-amber-300">All Only $27 CAD</strong>
        </span>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-emerald-900/20">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-emerald-950 text-lg sm:text-xl tracking-tight">
                The Honest Bowl
              </span>
              <span className="text-xs font-bold bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded border border-rose-200">
                🇨🇦 Canada
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              Natural Canine Nutrition & Portion Method
            </p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#schedule" className="hover:text-emerald-700 transition-colors">
            14-Day Transition
          </a>
          <a href="#calculator" className="hover:text-emerald-700 transition-colors">
            Portion Calculator
          </a>
          <a href="#bundle" className="hover:text-emerald-700 transition-colors">
            What's Included
          </a>
          <a href="#recipes" className="hover:text-emerald-700 transition-colors">
            Recipes
          </a>
          <a href="#reviews" className="hover:text-emerald-700 transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-emerald-700 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* See All 5 Items CTA (replaces old "Free Workbook" leaked download) */}
          <button
            onClick={onOpenCheckout}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
            <span>See Bundle & Items</span>
          </button>

          {/* Buy Button */}
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-900/20 transition-all transform active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Get Full Suite — $27 CAD</span>
          </button>
        </div>
      </div>
    </header>
  );
};
