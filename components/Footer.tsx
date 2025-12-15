import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div>
            {/* Removed -ml-4 to fix alignment issue */}
            <div className="mb-6">
               <Logo className="h-24 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              20 illik təcrübə və peşəkar komandamızla xəyallarınızdakı səyahəti reallaşdırırıq. 
              Sizin üçün hər detalı incəliklə planlaşdırırıq.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/eratravelofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sürətli Keçidlər</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Ana Səhifə</Link></li>
              <li><Link to="/turlar" className="hover:text-white transition-colors">Turlar</Link></li>
              <li><Link to="/haqqimizda" className="hover:text-white transition-colors">Haqqımızda</Link></li>
              <li><Link to="/elaqe" className="hover:text-white transition-colors">Əlaqə</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Əlaqə Məlumatları</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-amber-400" />
                <span>Bakı ş., Zərdabi küç. 55/81</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400" />
                <span>+994 50 444 22 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400" />
                <span>info@eratravel.az</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Yeniliklərdən Xəbərdar Olun</h4>
            <p className="text-gray-400 text-sm mb-4">Ən son tur paketləri və endirimlər haqqında məlumat almaq üçün abunə olun.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="E-poçt ünvanınız" 
                className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:border-white transition-colors text-sm"
              />
              <button className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-colors text-sm">
                Abunə Ol
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>&copy; 2025 Eratravel. Bütün hüquqlar qorunur.</p>
          
          {/* Creator Credit with Blinking Effect */}
          <a 
            href="https://wa.me/905015655320" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <span className="text-gray-400">Site Creator:</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
              Remote Visual Regb
            </span>
          </a>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Məxfilik Siyasəti</a>
            <a href="#" className="hover:text-white">İstifadə Şərtləri</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;