import React from 'react';
import { Phone, Mail, MapPin, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header */}
      <div className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">Bizimlə Əlaqə</h1>
              <p className="text-gray-300">Sualınız var? Bizə yazın və ya zəng edin.</p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info (Dark Side) */}
            <div className="bg-black text-white p-10 md:w-1/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-8">Əlaqə Məlumatları</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-blue-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Ünvan</h3>
                                <p className="text-gray-400">Bakı şəhəri, Zərdabi küç. 55/81</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-blue-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Telefon</h3>
                                <p className="text-gray-400">+994 50 444 22 00</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-blue-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">E-poçt</h3>
                                <p className="text-gray-400">info@eratravel.az</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-gray-500 text-sm">Sosial mediada bizi izləyin:</p>
                    <div className="flex gap-4 mt-4">
                         {/* Social icons placeholders */}
                         <a href="https://instagram.com/eratravelofficial" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-sm font-bold">IG</a>
                         <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-sm font-bold">FB</div>
                         <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-sm font-bold">LN</div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Göndər</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Adınız</label>
                            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Ad Soyad" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Əlaqə Nömrəsi</label>
                            <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+994..." />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">E-poçt</label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="nümunə@mail.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Bizə nə barədə yazmaq istəyirsiniz?"></textarea>
                    </div>
                    <button type="button" className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Göndər <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>

       {/* Google Map */}
       <div className="h-96 w-full bg-gray-200 relative flex-grow">
            <iframe 
                title="Eratravel Location"
                src="https://maps.google.com/maps?q=Hasan+bey+Zardabi+55+Baku&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay Card */}
            <div className="absolute top-4 right-4 md:right-10 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-gray-200 z-10 hidden md:block">
                <p className="font-bold text-gray-800 flex items-center gap-2">
                    <MapPin className="text-red-500" /> Bakı, Zərdabi küç. 55/81
                </p>
                <p className="text-xs text-gray-500 mt-1 pl-6">Həsən bəy Zərdabi prospekti</p>
            </div>
       </div>

       {/* BACK TO HOME */}
       <div className="py-8 text-center bg-gray-100">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
             <ArrowLeft size={16} /> Ana Səhifəyə Qayıt
          </Link>
       </div>
    </div>
  );
};

export default Contact;