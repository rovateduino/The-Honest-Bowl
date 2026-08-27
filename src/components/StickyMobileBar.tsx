import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenCheckout: () => void;
  onDownloadXlsx?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenCheckout
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-emerald-800/60 p-3 shadow-2xl">
      <button
        onClick={onOpenCheckout}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-emerald-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95 transition-transform"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>GET INSTANT ACCESS — $27 CAD</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
