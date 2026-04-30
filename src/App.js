import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ServicesPage from './pages/ServicesPage';
import GlobalResearchPage from './pages/GlobalResearchPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrimeProductsPage from './pages/PrimeProductsPage';
import GreenLinkPage from './pages/GreenLinkPage';
import ContainerCommercializationPage from './pages/ContainerCommercializationPage';
import AnjoSaltPage from './pages/AnjoSaltPage';
import BusinessSolutionPage from './pages/BusinessSolutionPage';
import AnimatedGalleryPage from './pages/AnimatedGalleryPage';

// Global scroll-reveal watcher
const ScrollRevealWatcher = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Small delay to let the DOM settle after route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
};

function AppContent() {
  const location = useLocation();
  // Don't show global footer on home page as it has its own compact footer in the same frame
  // Don't show global footer on home page or contact page
  const showFooter = !['/', '/contact', '/business-solution', '/automobiles', '/green-link', '/container-commercialization', '/anjo-salt'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/global-research" element={<GlobalResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/prime-products" element={<PrimeProductsPage />} />
          <Route path="/green-link" element={<GreenLinkPage />} />
          <Route path="/container-commercialization" element={<ContainerCommercializationPage />} />
          <Route path="/anjo-salt" element={<AnjoSaltPage />} />
          <Route path="/business-solution" element={<BusinessSolutionPage />} />
          <Route path="/automobiles" element={<AnimatedGalleryPage />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealWatcher />
      <AppContent />
    </Router>
  );
}

export default App;
