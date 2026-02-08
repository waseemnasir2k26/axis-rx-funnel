import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPageV1 from '@/pages/LandingPageV1';
import LandingPageV2 from '@/pages/LandingPageV2';
import LandingPageV3 from '@/pages/LandingPageV3';
import CheckoutPage from '@/pages/CheckoutPage';
import ThankYouPage from '@/pages/ThankYouPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to V1 */}
        <Route path="/" element={<Navigate to="/v1" replace />} />

        {/* Landing Page Variations */}
        <Route path="/v1" element={<LandingPageV1 />} />
        <Route path="/v2" element={<LandingPageV2 />} />
        <Route path="/v3" element={<LandingPageV3 />} />

        {/* Checkout Flow */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
