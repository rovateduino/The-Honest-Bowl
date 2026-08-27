import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
  onDownloadXlsx: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCheckout,
  onDownloadXlsx: _onDownloadXlsx
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-lg">
              🐾
            </div>
            <div>
              <span className="font-extrabold text-white text-base block">
                The Honest Bowl 🇨🇦
              </span>
              <span className="text-slate-400 text-xs">
                Natural Canine Portion Method & Recipe Digital Suite
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button onClick={onOpenCheckout} className="hover:text-amber-400 transition-colors cursor-pointer">
              View Complete $27 CAD Bundle (5 Items)
            </button>
            <span>•</span>
            <button onClick={onOpenCheckout} className="hover:text-amber-400 transition-colors cursor-pointer">
              Instant Checkout ($27 CAD)
            </button>
          </div>
        </div>

        {/* Disclaimer & Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400 leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-200 uppercase text-[11px] tracking-wider">
              Veterinary & Medical Disclaimer
            </h4>
            <p>
              The information in this digital eBook and calculator workbook is for educational purposes only and is not intended to replace personalized diagnosis or treatment by a licensed Veterinarian. Always consult your veterinarian before making significant dietary changes if your dog has existing medical conditions.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-200 uppercase text-[11px] tracking-wider">
              100% Risk-Free Money-Back Guarantee
            </h4>
            <p>
              We are 100% confident your dog will love our 30 recipes and thrive on our 14-day transition schedule. If for any reason you are not completely satisfied within 14 days of purchase, email us for a full, hassle-free refund processed in Canadian Dollars ($ CAD).
            </p>
          </div>
        </div>

        {/* Copyright & Canadian Emblem */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} The Honest Bowl. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for dog parents coast to coast 🇨🇦</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
