import React from 'react';
import { X, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    image: string;
    description: string;
    details: string[];
    date: string;
  } | null;
}

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="h-64 sm:h-80 w-full relative">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">{data.title}</h2>
                <div className="flex flex-wrap gap-4 text-white/90 text-sm">
                    <span className="flex items-center gap-1"><Calendar size={16} className="text-amber-400" /> {data.date}</span>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {data.description}
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">Paketə Daxildir:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {data.details.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <div className="flex gap-4">
                <button onClick={() => window.open('https://wa.me/994102146545', '_blank')} className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:bg-purple-900 transition-colors shadow-lg shadow-purple-200">
                    Sifariş Et
                </button>
                <button onClick={onClose} className="px-6 py-4 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                    Bağla
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;