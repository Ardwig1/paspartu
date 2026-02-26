import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";
import FoundersNote from "./components/FoundersNote";
import Footer from "./components/Footer";

function App() {
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

export default App;
