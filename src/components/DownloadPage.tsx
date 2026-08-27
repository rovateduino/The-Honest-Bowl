import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Download, BookOpen, Sparkles, CheckCircle2, ArrowLeft, CalendarDays, AlertTriangle } from 'lucide-react';
import { downloadCalculadoraExcel } from '../utils/excelGenerator';
import { DOWNLOAD_LINKS } from '../data/downloadLinks';

interface DownloadPageProps {
  onBack: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onBack }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadXls = () => {
    try {
      downloadCalculadoraExcel();
    } catch (err) {
      console.error('Failed to trigger Excel download:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 flex items-center justify-center p-4">
      <div className={`bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-6 sm:p-8 text-center relative">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-700 inline-block mb-2">
            Payment Confirmed — Instant Access
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Thank You For Your Purchase!
          </h1>
          <p className="text-emerald-200 text-sm mt-2">
            Your complete instant digital download bundle — all 5 included items are ready below.
          </p>
        </div>

        {/* Downloads */}
        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
            Your Complete Digital Downloads (All 5 Items):
          </h3>

          {/* Link 1: Main eBook */}
          <div className="bg-white p-4 rounded-xl border-2 border-emerald-800/40 flex items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <strong className="text-sm block text-slate-900">1. Main eBook — 30 Quick Recipes + Complete Guide</strong>
                <span className="text-[11px] text-slate-500">Natural-Feeding-for-Dogs-Ebook-EN.pdf — 5-Chapter Master Guide</span>
                <span className="text-[10px] text-emerald-700 block font-bold mt-0.5">MAIN EBOOK — $47 CAD Value</span>
              </div>
            </div>
            <a
              href={DOWNLOAD_LINKS.ebookMain}
              download
              className="px-3 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Download</span>
            </a>
          </div>

          {/* Link 2: 14-Day Transition Schedule Protocol */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-sm block text-slate-900">2. 14-Day Transition Schedule Protocol (Standalone Guide)</strong>
                <span className="text-[11px] text-slate-500">Day-by-day ratios, bowel checks & vet tips (see eBook Chapter 3 + interactive site)</span>
                <span className="text-[10px] text-emerald-700 block font-bold mt-0.5">STANDALONE PROTOCOL — $27 CAD Value</span>
              </div>
            </div>
            <a
              href={DOWNLOAD_LINKS.ebookMain}
              download
              className="px-3 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF (Chapter 3)</span>
            </a>
          </div>

          {/* Link 3: Therapeutic Diets + Companion Guide */}
          <div className="bg-white p-4 rounded-xl border-2 border-amber-400/60 flex items-center justify-between gap-3 bg-amber-50/40">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <strong className="text-sm block text-slate-900">3. Therapeutic Diets Add-On Bundle (2 PDFs)</strong>
                <span className="text-[11px] text-slate-500">Allergies, Skin Itching, Sensitive Stomach & Weight Management — 10 Recipes + Companion Guide</span>
                <span className="text-[10px] text-amber-600 block font-bold mt-0.5">INCLUDED ADD-ON — $29 CAD Value (2 PDFs Included)</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href={DOWNLOAD_LINKS.therapeuticGuide}
                download
                className="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[11px] flex items-center gap-1 transition-colors"
              >
                <Download className="w-3 h-3" />
                <span>10 Recipes PDF</span>
              </a>
              <a
                href={DOWNLOAD_LINKS.companionGuide}
                download
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-[11px] flex items-center gap-1 transition-colors"
              >
                <Download className="w-3 h-3" />
                <span>Companion Guide</span>
              </a>
            </div>
          </div>

          {/* Link 4: Fridge Chart & Grocery Shopping Guide */}
          <div className="bg-white p-4 rounded-xl border-2 border-rose-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
              <div>
                <strong className="text-sm block text-slate-900">4. Dangerous Foods Fridge Chart + Grocery Shopping Checklist</strong>
                <span className="text-[11px] text-slate-500">Printable PDF — toxic foods reference + categorized supermarket buying list</span>
                <span className="text-[10px] text-rose-600 block font-bold mt-0.5">INCLUDED SAFETY GUIDE — $15 CAD Value</span>
              </div>
            </div>
            <a
              href={DOWNLOAD_LINKS.safetyPoster}
              download
              className="px-3 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Download</span>
            </a>
          </div>

          {/* Link 5: Excel Workbook (THE ONLY FREE BONUS) */}
          <div className="bg-emerald-900 text-white p-4 rounded-xl flex items-center justify-between gap-3 shadow-md border-2 border-amber-400">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-6 h-6 text-amber-300 shrink-0" />
              <div>
                <strong className="text-sm block">5. Portion Calculator Workbook (.XLSX)</strong>
                    <span className="text-[11px] text-emerald-200">the-honest-bowl-exact-portion-calculator-workbook.xlsx</span>
                    <span className="text-[10px] text-amber-300 block font-black uppercase mt-0.5 tracking-wider">★ Only Free Bonus — $27 CAD Value</span>
              </div>
            </div>
            <button
              onClick={handleDownloadXls}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs cursor-pointer flex items-center gap-1 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .XLSX</span>
            </button>
          </div>

          {/* Bundle Value Summary */}
          <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-300 text-center">
            <p className="text-xs text-emerald-800 font-semibold">
              <span className="line-through text-emerald-600/70 mr-2">Total Bundle Value: $145 CAD (81% OFF)</span>
              <span className="text-emerald-950 font-black text-base ml-1">You Paid Only: $27 CAD</span>
            </p>
            <p className="text-[10px] text-emerald-700 mt-1 font-medium">
              ($47 eBook + $27 Transition Protocol + $29 Therapeutic + $15 Fridge Chart + $27 Excel ★ Free Bonus)
            </p>
          </div>

          {/* Back button */}
          <button
            onClick={onBack}
            className="w-full mt-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
