import React, { useState } from 'react';
import { X, Check, Mail } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleGoogleLogin = () => {
      setLoading(true);
       setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
      }, 1500);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 animate-fade-in-up overflow-hidden shadow-2xl">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        {isSubmitted ? (
            <div className="p-10 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Təşəkkürlər!</h3>
                <p className="text-gray-600 mb-6">Siz uğurla abunə oldunuz. Ən son yeniliklər və endirimlər birbaşa emailinizə gələcək.</p>
                <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-900 transition w-full">
                    Bağla
                </button>
            </div>
        ) : (
            <div className="p-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-amber-100 text-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Yeniliklərə Abunə Ol</h3>
                    <p className="text-gray-500 mt-2 text-sm">Eksklüziv tur paketləri və endirimlərdən ilk siz xəbərdar olun.</p>
                </div>

                <div className="space-y-4">
                    <button 
                        onClick={handleGoogleLogin}
                        className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                        Google ilə Davam Et
                    </button>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">və ya email ilə</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email ünvanınız"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-purple-900 transition-colors flex items-center justify-center"
                        >
                            {loading ? "Gözləyin..." : "Abunə Ol"}
                        </button>
                    </form>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        Spam göndərmirik. İstədiyiniz vaxt abunəliyi ləğv edə bilərsiniz.
                    </p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;