import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfitCards from "./components/ProfitCards";
import Benefits from "./components/Benefits";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f8fff6] to-[#fff8e7] text-black overflow-hidden">

      {/* Floating Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

        <div className="absolute top-20 left-20 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"></div>

        <div className="absolute top-20 left-10 text-8xl text-green-500/20 animate-pulse">₹</div>
        <div className="absolute top-40 right-24 text-8xl text-yellow-500/20 animate-bounce">$</div>
        <div className="absolute top-96 left-24 text-8xl text-green-500/20 animate-pulse">₿</div>
        <div className="absolute bottom-40 right-20 text-8xl text-yellow-500/20 animate-bounce">₮</div>
        <div className="absolute bottom-20 left-20 text-8xl text-green-500/20 animate-pulse">📈</div>
        <div className="absolute top-1/2 right-1/3 text-8xl text-yellow-500/20 animate-bounce">💰</div>

      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProfitCards />
        <Benefits />
        <Comparison />
        <Testimonials />
        <CTA />
        <FloatingButtons />
        <Footer />
      </div>
    </div>
  );
}

export default App;