import { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy-loaded below-the-fold components
const TrustBadges = lazy(() => import('./components/TrustBadges').then(m => ({ default: m.TrustBadges })));
const CanadianContext = lazy(() => import('./components/CanadianContext').then(m => ({ default: m.CanadianContext })));
const TransitionSchedule = lazy(() => import('./components/TransitionSchedule').then(m => ({ default: m.TransitionSchedule })));
const PortionCalculator = lazy(() => import('./components/PortionCalculator').then(m => ({ default: m.PortionCalculator })));
const ProductSuite = lazy(() => import('./components/ProductSuite').then(m => ({ default: m.ProductSuite })));
const RecipePreview = lazy(() => import('./components/RecipePreview').then(m => ({ default: m.RecipePreview })));
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(m => ({ default: m.ComparisonTable })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(m => ({ default: m.CheckoutModal })));
const EmailDownloadModal = lazy(() => import('./components/EmailDownloadModal').then(m => ({ default: m.EmailDownloadModal })));
const StickyMobileBar = lazy(() => import('./components/StickyMobileBar').then(m => ({ default: m.StickyMobileBar })));
const DownloadPage = lazy(() => import('./components/DownloadPage').then(m => ({ default: m.DownloadPage })));

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'download'>('home');

  // Handle URL-based routing
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/download') {
        setCurrentPage('download');
      } else {
        setCurrentPage('home');
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  const openCheckoutAndCloseEmail = () => {
    setIsEmailModalOpen(false);
    setTimeout(() => setIsCheckoutOpen(true), 150);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-300 selection:text-emerald-950">
      
      {currentPage === 'download' ? (
        <Suspense>
          <DownloadPage onBack={navigateToHome} />
        </Suspense>
      ) : (
        <>
          {/* Header Navigation */}
          <Header
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onDownloadXlsx={() => setIsCheckoutOpen(true)}
          />

          <main>
            {/* 1. Hero Section */}
            <Hero
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onDownloadXlsx={() => setIsCheckoutOpen(true)}
            />

            {/* Below-the-fold lazy-loaded sections */}
            <Suspense>
              {/* 2. Canadian Trust Badges & Pet Facts */}
              <TrustBadges />

              {/* 3. The Science & Canadian Kibble vs Natural Context */}
              <CanadianContext />

              {/* 4. 14-Day Safe Transition Schedule Protocol */}
              <TransitionSchedule
                onOpenCheckout={() => setIsCheckoutOpen(true)}
              />

              {/* 5. Portion Formulas & Live Interactive Calculator + Example Table */}
              <PortionCalculator
                onDownloadXlsx={() => setIsCheckoutOpen(true)}
                onOpenCheckout={() => setIsCheckoutOpen(true)}
              />

              {/* 6. Digital Product Suite Bundle Breakdowns */}
              <ProductSuite
                onOpenCheckout={() => setIsCheckoutOpen(true)}
                onDownloadXlsx={() => setIsCheckoutOpen(true)}
              />

              {/* 7. Preview of 30 Quick Recipes */}
              <RecipePreview
                onOpenCheckout={() => setIsCheckoutOpen(true)}
              />

              {/* 8. Feature Comparison Matrix */}
              <ComparisonTable
                onOpenCheckout={() => setIsCheckoutOpen(true)}
              />

              {/* 9. Verified Canadian Customer Reviews */}
              <Testimonials />

              {/* 10. FAQs Section */}
              <FaqSection
                onDownloadXlsx={() => setIsCheckoutOpen(true)}
              />
            </Suspense>
          </main>

          {/* Footer */}
          <Suspense>
            <Footer
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onDownloadXlsx={() => setIsCheckoutOpen(true)}
            />

            {/* Sticky Mobile CTA Bar */}
            <StickyMobileBar
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onDownloadXlsx={() => setIsCheckoutOpen(true)}
            />

            {/* Email Capture Modal — NOW acts as a lead gate → opens Checkout (never gives free Excel) */}
            <EmailDownloadModal
              isOpen={isEmailModalOpen}
              onClose={() => setIsEmailModalOpen(false)}
              onConfirmDownload={openCheckoutAndCloseEmail}
            />

            {/* Checkout Modal */}
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </Suspense>
        </>
      )}
    </div>
  );
}
