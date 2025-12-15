import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import SubscribeModal from './SubscribeModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menyunu bağla
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Ana Səhifə', path: '/' },
    { name: 'Turlar', path: '/turlar' },
    { name: 'Haqqımızda', path: '/haqqimizda' },
    { name: 'Əlaqə', path: '/elaqe' },
  ];

  // Ana səhifədə şəffaf, digərlərində tünd fon
  const isHome = location.pathname === '/';
  const navClass = isHome 
    ? (isScrolled || isOpen ? 'bg-primary shadow-lg' : 'bg-transparent') 
    : 'bg-primary shadow-lg';

  return (
    <>
    <SubscribeModal isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    <nav className={`fixed w-full z-50 transition-all duration-300 text-white ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  location.pathname === link.path ? 'text-amber-400' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
                onClick={() => setIsSubscribeOpen(true)}
                className="bg-amber-400 text-primary px-5 py-2 rounded-full font-bold hover:bg-amber-300 transition shadow-lg hover:scale-105 transform duration-200"
            >
                Abunə Ol
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white hover:text-amber-400 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 absolute w-full left-0 top-20 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path ? 'bg-white/10 text-amber-400' : 'text-gray-100 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Subscribe Button */}
             <button 
                onClick={() => { setIsSubscribeOpen(true); setIsOpen(false); }}
                className="block w-full text-center bg-amber-400 text-primary px-3 py-3 rounded-md font-bold mt-4"
            >
                Abunə Ol
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;