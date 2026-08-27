import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Form State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [province, setProvince] = useState('BC');

  // Escape key handler to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalPriceCAD = 27;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setFormError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, fullName: name, province }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setFormError(data.error || 'Failed to start checkout. Please try again.');
        setIsProcessing(false);
        return;
      }

      // Redirect to Stripe payment link
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setFormError('Network error. Please check your connection and try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      title="Click outside to close"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 cursor-default"
      >
        
        {/* Prominent Header Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white hover:text-amber-300 border border-slate-700/60 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>

        <div>
            {/* SECURE PAYMENT BAR */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 text-center">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                🔒 SECURE 256-BIT SSL CHECKOUT
              </p>
              <p className="text-[11px] font-semibold opacity-90 mt-0.5">
                You will be redirected to Stripe to complete your payment securely.
              </p>
            </div>

            {/* Modal Header */}
            <div className="bg-emerald-900 text-white p-6 sm:p-8 relative pr-24">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded">
                  🇨🇦 Instant Digital Access
                </span>
                <span className="text-xs text-emerald-300 font-semibold">100% CAD Currency</span>
                <span className="text-[10px] font-bold uppercase bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded border border-emerald-600">
                  🔒 Secure Stripe Payment
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Complete Your Digital Order
              </h2>
              <p className="text-emerald-200 text-xs sm:text-sm mt-1">
                Zero shipping, zero import duties. Download the full 5-item eBook suite + Excel portion calculator immediately.
              </p>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
              
              {formError && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-700 font-semibold" role="alert">
                  {formError}
                </div>
              )}
              
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 id="checkout-modal-title" className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
                  1. Customer Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkout-name" className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input
                      id="checkout-name"
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 text-sm outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout-email" className="text-xs font-bold text-slate-700 block mb-1">Email (For Digital Delivery)</label>
                    <input
                      id="checkout-email"
                      required
                      type="email"
                      placeholder="sarah@example.ca"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 text-sm outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-province" className="text-xs font-bold text-slate-700 block mb-1">Province / Territory</label>
                  <select
                    id="checkout-province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 text-sm outline-hidden bg-white"
                  >
                    <option value="BC">British Columbia (BC)</option>
                    <option value="AB">Alberta (AB)</option>
                    <option value="ON">Ontario (ON)</option>
                    <option value="QC">Quebec (QC)</option>
                    <option value="NS">Nova Scotia (NS)</option>
                    <option value="MB">Manitoba (MB)</option>
                    <option value="SK">Saskatchewan (SK)</option>
                    <option value="NB">New Brunswick (NB)</option>
                    <option value="NL">Newfoundland & Labrador (NL)</option>
                  </select>
                </div>
              </div>

              {/* What's Included Summary (above order breakdown) — SAME ORDER as Order Summary below */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-2">
                <p className="text-xs font-black uppercase tracking-wider text-emerald-800">
                  🇨🇦 Complete $145 CAD Suite — All 5 Items Included Today:
                </p>
                <ul className="text-[11px] text-emerald-900 font-semibold space-y-1.5 pl-1">
                  <li>✅ <strong>1. Main eBook ($47):</strong> 30 Quick Recipes + 5-Chapter Complete Guide</li>
                  <li>✅ <strong>2. 14-Day Transition Protocol ($27):</strong> Safe Step-by-Step Ratios (Chapter 3)</li>
                  <li>✅ <strong>3. Therapeutic Diets Add-On ($29):</strong> 10 Recipes + Companion Guide (2 PDFs)</li>
                  <li>✅ <strong>4. Fridge Chart + Grocery Guide ($15):</strong> Toxic Foods Printable + Shopping List</li>
                  <li>✅ <strong>5. Excel Portion Calculator ($27):</strong> Automated .XLSX Workbook — <span className="text-emerald-800 uppercase">★ Only Free Bonus</span></li>
                </ul>
              </div>

              {/* Order Summary Breakdown — EXACT SAME ORDER and items as the green box above */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>1. Main Canine Natural Nutrition eBook (30 Recipes + Guide)</span>
                  <span className="font-bold text-slate-900">$47.00 CAD</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>2. 14-Day Transition Schedule Protocol (eBook Chapter 3)</span>
                  <span className="font-bold text-slate-900">$27.00 CAD</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>3. Therapeutic Diets Add-On Bundle (Allergies & Skin — 2 PDFs)</span>
                  <span className="font-bold text-slate-900">$29.00 CAD</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>4. Dangerous Foods Fridge Chart + Grocery Shopping Checklist</span>
                  <span className="font-bold text-slate-900">$15.00 CAD</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-bold bg-emerald-900/5 rounded-lg px-2 py-1.5 -mx-1">
                  <span>5. ★ Excel Portion Calculator Workbook (.XLSX)</span>
                  <span className="uppercase font-black tracking-wide">★ FREE BONUS</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-2 border-t border-dashed border-slate-300 mt-1">
                  <span className="line-through">Regular Total Bundle Value (before discount)</span>
                  <span className="line-through font-bold">$145.00 CAD</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold text-slate-900">
                  <span>🎁 LIMITED-TIME LAUNCH PRICE (81% OFF)</span>
                  <span className="text-emerald-700 text-lg">${totalPriceCAD}.00 CAD</span>
                </div>
              </div>

              {/* Submit CTA & Cancel Option */}
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-emerald-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer transition-all shadow-xl disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Redirecting to Payment...</span>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 text-emerald-900" />
                      <span>PAY ${totalPriceCAD}.00 CAD & ACCESS ALL DOWNLOADS</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                  <span>Cancel & Return to Site</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Protected by 256-Bit SSL Encryption. 14-Day 100% Satisfaction Guarantee.
                </p>
                <p>Accepted: Visa, Mastercard, AMEX, Interac Flash, Apple Pay</p>
              </div>

            </form>
          </div>

      </div>
    </div>
  );
};
