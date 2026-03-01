import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";
import FoundersNote from "./components/FoundersNote";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingReturns from "./pages/ShippingReturns";

function HomePage() {
  return (
    <div className="bg-cream min-h-screen text-charcoal font-sans selection:bg-midnight selection:text-cream">
      <Navbar />
      <Hero />
      <div className="font-serif">
        <AboutUs />
        <Gallery />
        <Philosophy />
        <Membership />
        <FoundersNote />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
