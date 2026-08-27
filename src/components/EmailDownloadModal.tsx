import React, { useState, useEffect } from 'react';
import { X, FileSpreadsheet, CheckCircle2, Lock, Mail, ShoppingBag, Sparkles } from 'lucide-react';

interface EmailDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDownload: (email: string) => void;
}

export const EmailDownloadModal: React.FC<EmailDownloadModalProps> = ({
  isOpen,
  onClose,
  onConfirmDownload
}) => {
  const [email, setEmail] = useState('');
  const [petName, setPetName] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Escape key listener to close modal
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Strict validation
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    setIsLoading(true);

    try {
      // Await email sending — show error if it fails
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Failed to send email. Please try again.');
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      // Call parent callback -> OPENS CHECKOUT (never gives free Excel)
      onConfirmDownload(trimmedEmail);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again later.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      title="Click outside to close"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 cursor-default"
      >

        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 relative pr-20">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/60 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-sm"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold mb-3 shadow-md">
            <FileSpreadsheet className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest bg-emerald-900 px-2.5 py-0.5 rounded border border-emerald-800 inline-block mb-1">
            Unlock Bonus Workbook
          </span>
          <h2 id="email-modal-title" className="text-xl font-extrabold text-white">
            Claim Your Excel Workbook ★ Bonus
          </h2>
          <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
            The <strong>automated portion calculator spreadsheet</strong> is included as a free bonus inside the complete <strong>$27 CAD 5-item digital suite</strong>. Enter your email to continue to secure checkout and unlock it instantly.
          </p>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">

            {/* Email Field */}
            <div>
              <label htmlFor="modal-download-email" className="block text-xs font-bold text-slate-700 mb-1">
                Your Email Address <span className="text-rose-500">* (Required)</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="modal-download-email"
                  type="email"
                  required
                  placeholder="name@example.ca"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-hidden font-medium"
                />
              </div>
              {error && (
                <p className="text-xs text-rose-600 font-semibold mt-1">
                  {error}
                </p>
              )}
            </div>

            {/* Optional Pet Name */}
            <div>
              <label htmlFor="modal-download-pet" className="block text-xs font-bold text-slate-700 mb-1">
                Your Dog's Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="modal-download-pet"
                type="text"
                placeholder="e.g. Cooper or Maple"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-emerald-600 outline-hidden font-medium"
              />
            </div>

            <div className="space-y-2 mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 disabled:opacity-60 text-emerald-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95"
              >
                {isLoading ? (
                  <span>PREPARING CHECKOUT...</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>CONTINUE TO CHECKOUT — $27 CAD</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5 text-slate-500" />
                <span>Cancel & Return to Page</span>
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-1 mt-1">
              <p className="text-[11px] text-amber-900 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Excel Workbook (.XLSX) is included as the FREE BONUS
              </p>
              <p className="text-[10px] text-amber-800 leading-snug">
                Plus you receive the Main eBook ($47), 14-Day Transition Protocol ($27), Therapeutic 2-PDF Add-On ($29) and Fridge Chart Guide ($15) — all 5 items for only $27 CAD.
              </p>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Spam-Free. We strictly respect your privacy. Secure Stripe Checkout.</span>
            </div>

          </form>
        ) : (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 text-emerald-600" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
                REDIRECTING TO CHECKOUT...
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Thank you{petName ? `, ${petName}'s parent!` : '!'}
            </h3>
            <div className="text-sm text-slate-600 space-y-2">
              <p>
                Your checkout screen is loading. Complete the $27 CAD payment to instantly unlock the <strong>5-item digital suite</strong>, including the <strong>Excel Portion Calculator Workbook (.XLSX)</strong> as your free bonus.
              </p>
              <p className="text-xs bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900">
                📬 A welcome email with nutrition tips is also on its way to<br />
                <strong>{email}</strong> (check the spam folder if not seen).
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm cursor-pointer transition-colors"
            >
              Close — Checkout will open
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
