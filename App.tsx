import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';

// Səhifə dəyişəndə yuxarı sürüşdürmək üçün
const ScrollHandler = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      {/* Changed bg-white to bg-[#faf5ff] (purple-50) for global purple tint */}
      <div className="flex flex-col min-h-screen font-sans bg-[#faf5ff] text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turlar" element={<Tours />} />
            <Route path="/haqqimizda" element={<About />} />
            <Route path="/elaqe" element={<Contact />} />
          </Routes>
        </main>
        {/* AI Chatbot bütün səhifələrdə görünəcək */}
        <AIChatbot />
        {/* Yuxarı qaytarma düyməsi */}
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;