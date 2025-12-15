import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 p-3 bg-amber-400 text-primary rounded-full shadow-lg hover:bg-amber-300 transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Yuxarı qayıt"
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;