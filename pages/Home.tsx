import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Globe, MapPin, Calendar, CheckCircle, Instagram, Mail, Plane, MousePointer2, CreditCard, Users, Heart } from 'lucide-react';
import SnowEffect from '../components/SnowEffect';
import OfferModal from '../components/OfferModal';
import GoogleReviews from '../components/GoogleReviews';

const Home: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<any>(null);

  // Mövcud Turlar
  const offers = {
    swiss: {
        title: "İsveçrə Alpları",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
        description: "Qar, dağlar və şokolad qoxusu... İsveçrənin ən gözəl guşələrində unudulmaz qış nağılı.",
        date: "Yanvar - Mart",
        details: ["5 Ulduzlu Otel", "Səhər Yeməyi", "Viza Dəstəyi", "Dağ Xizəyi Təlimi", "Qatar Turu"]
    },
    uludag: {
        title: "Uludağ, Türkiyə",
        image: "https://images.unsplash.com/photo-1612456225451-bb8d10d0131d?q=80&w=800&auto=format&fit=crop",
        description: "Türkiyənin ən məşhur qış kurortu. Həm əyləncə, həm də xizək sürmək üçün ideal seçim.",
        date: "Dekabr - Mart",
        details: ["Tam Pansiyon", "Transfer", "Ski Pass", "Gecə Əyləncələri"]
    },
    lapland: {
        title: "Laplandiya",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
        description: "Şimal parıltısını (Aurora Borealis) öz gözlərinizlə görün. Santa Claus kəndi.",
        date: "Noyabr - Fevral",
        details: ["İqlo Oteldə Gecələmə", "Şimal İşıqları Turu", "Husky Turu", "İsti Geyimlər"]
    }
  };

  // Yeni Bölmə: Populyar Şəhərlər
  const destinations = [
    { name: "İstanbul", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "Dubay", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "Roma", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "Bakı", image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=400&h=400&auto=format&fit=crop" },
  ];

  // Yeni Bölmə: Müştəri Rəyləri
  const testimonials = [
    { name: "Aysel Məmmədova", comment: "Bal ayı turumuz üçün Eratravel-i seçdik və heç peşman olmadıq. Hər şey mükəmməl idi!", role: "Müştəri" },
    { name: "Rəşad Əliyev", comment: "Vizaların alınmasında göstərdikləri operativliyə görə təşəkkür edirəm. Peşəkar komanda.", role: "Biznesmen" },
    { name: "Nigar Quliyeva", comment: "Qrup turu çox əyləncəli keçdi. Bələdçimiz çox savadlı və maraqlı insan idi.", role: "Səyahətsevər" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#faf5ff]">
      <OfferModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)} data={selectedOffer} />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <SnowEffect />
        
        {/* Background - CAR IMAGE */}
        <div className="absolute inset-0 z-0 bg-primary">
           {/* Replaced img with div background to prevent broken image icon/text */}
           <div 
             className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 mix-blend-overlay"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1920&auto=format&fit=crop")' }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30"></div>
        </div>

        {/* --- LEFT SIDEBAR ICONS (SOCIAL & ACTIONS) --- */}
        <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6">
            {/* Instagram */}
            <a href="https://instagram.com/eratravelofficial" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 shadow-lg">
                    <Instagram size={24} />
                </div>
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 bg-black/50 px-2 py-1 rounded">Instagram</span>
            </a>

            {/* Biletlər (Plane) */}
            <Link to="/turlar" className="group flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:border-transparent transition-all duration-300 shadow-lg">
                    <Plane size={24} />
                </div>
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 bg-black/50 px-2 py-1 rounded">Biletlər</span>
            </Link>

            {/* Mail */}
            <a href="mailto:info@eratravel.az" className="group flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:border-transparent transition-all duration-300 shadow-lg">
                    <Mail size={24} />
                </div>
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 bg-black/50 px-2 py-1 rounded">Email</span>
            </a>
        </div>

        {/* Center Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-4 rounded-full bg-amber-400/90 text-black text-sm font-bold mb-6 animate-fade-in-up">
             Premium Transfer & Səyahət
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl">
            Yolculuğunuz <br/> <span className="text-amber-400">Bizimlə Başlayır</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Eratravel ilə dünyanın istənilən nöqtəsinə rahat və təhlükəsiz səyahət.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/turlar" className="px-10 py-4 bg-amber-400 text-primary font-bold rounded-full hover:bg-amber-300 transition-all hover:scale-105 shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2">
              Turları Kəşf Et <ArrowRight size={20} />
            </Link>
            <Link to="/elaqe" className="px-10 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
              Bizimlə Əlaqə
            </Link>
          </div>
        </div>

        {/* --- MOUSE SCROLL ANIMATION --- */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-80 animate-bounce">
            <span className="text-white text-xs tracking-widest uppercase">Aşağı Çəkin</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-white rounded-full animate-ping"></div>
            </div>
        </div>
      </section>

      {/* --- GOOGLE REVIEWS SECTION --- */}
      <GoogleReviews />

      {/* --- STATS SECTION --- */}
      <section className="bg-white/80 backdrop-blur-sm py-16 border-b border-purple-100 shadow-sm relative z-30 mx-4 md:mx-auto max-w-6xl rounded-3xl mt-10">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 transform hover:scale-105 transition-transform group">
                <h3 className="text-5xl md:text-7xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-2">20+</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">İl Təcrübə</p>
            </div>
            <div className="p-4 transform hover:scale-105 transition-transform group">
                <h3 className="text-5xl md:text-7xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-2">15k</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Müştəri</p>
            </div>
            <div className="p-4 transform hover:scale-105 transition-transform group">
                <h3 className="text-5xl md:text-7xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-2">50+</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Ölkə</p>
            </div>
            <div className="p-4 transform hover:scale-105 transition-transform group">
                <h3 className="text-5xl md:text-7xl font-bold text-gray-200 group-hover:text-primary transition-colors mb-2">24/7</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Dəstək</p>
            </div>
         </div>
      </section>

      {/* --- NEW SECTION: POPULAR DESTINATIONS --- */}
      <section className="py-24 bg-[#faf5ff]">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-serif font-bold text-primary mb-12">Populyar İstiqamətlər</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {destinations.map((dest, idx) => (
                      <Link to="/turlar" key={idx} className="group flex flex-col items-center gap-4 cursor-pointer">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-amber-400 transition-all duration-300 transform group-hover:scale-110">
                              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                          </div>
                          <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">{dest.name}</h3>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* --- OFFERS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Qaçırılmayacaq Fürsətlər</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">Mövsümün Özəl Turları</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {Object.values(offers).map((offer, idx) => (
                    <div key={idx} onClick={() => setSelectedOffer(offer)} className="group bg-gray-50 rounded-[2rem] overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-50">
                        <div className="h-72 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                            <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-4 left-4 z-20">
                                 <span className="bg-amber-400 text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Top Təklif</span>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary z-20 flex items-center gap-1 shadow-md">
                                <Calendar size={14} /> {offer.date}
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{offer.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{offer.description}</p>
                            <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                                <span className="text-gray-400 text-sm">{offer.details.length} xidmət daxildir</span>
                                <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight size={18}/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-16">
                <Link to="/turlar" className="inline-block px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors uppercase tracking-wide text-sm">
                    Bütün Turlara Bax
                </Link>
            </div>
        </div>
      </section>

      {/* --- NEW SECTION: SERVICES GRID --- */}
      <section className="py-24 bg-[#faf5ff]">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-serif font-bold text-primary mb-6">Bizim Xidmətlərimiz</h2>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          Səyahətinizin hər anını mükəmməl etmək üçün geniş çeşiddə xidmətlər təklif edirik. 
                          Vizadan tutmuş, otel rezervasiyasına qədər hər şeyi bizə həvalə edin.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all border border-purple-50">
                              <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Plane size={24} /></div>
                              <span className="font-bold text-gray-800">Aviabiletlər</span>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all border border-purple-50">
                              <div className="bg-green-100 p-3 rounded-lg text-green-600"><Shield size={24} /></div>
                              <span className="font-bold text-gray-800">Səyahət Sığortası</span>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all border border-purple-50">
                              <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><CreditCard size={24} /></div>
                              <span className="font-bold text-gray-800">Viza Dəstəyi</span>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all border border-purple-50">
                              <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><MapPin size={24} /></div>
                              <span className="font-bold text-gray-800">Otel Rezervasiyası</span>
                          </div>
                      </div>
                  </div>
                  <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400 to-purple-600 rounded-3xl opacity-20 blur-lg"></div>
                      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop" className="relative rounded-3xl shadow-2xl w-full" alt="Services" />
                  </div>
              </div>
          </div>
      </section>

      {/* --- NEW SECTION: TESTIMONIALS --- */}
      <section className="py-24 bg-primary relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
                 <h2 className="text-4xl font-serif font-bold text-white mb-4">Müştəri Rəyləri</h2>
                 <p className="text-purple-200">Bizi seçənlər nə deyir?</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {testimonials.map((t, i) => (
                     <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                         <div className="flex gap-1 text-amber-400 mb-4">
                             {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                         </div>
                         <p className="text-gray-200 italic mb-6">"{t.comment}"</p>
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                                 {t.name[0]}
                             </div>
                             <div>
                                 <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                 <span className="text-gray-400 text-xs">{t.role}</span>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- WHY US (Existing but styled better) --- */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">Niyə Eratravel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                        <Star size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Standartlar</h3>
                    <p className="text-gray-600">Siz sadəcə istirahət edin, detalları biz düşünək. Ən yüksək səviyyədə xidmət zəmanəti.</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-16 h-16 mx-auto bg-purple-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                        <Shield size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Tam Təhlükəsizlik</h3>
                    <p className="text-gray-600">Rəsmi müqavilə və tam sığorta ilə səyahətiniz güvən altındadır.</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Globe size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Dünya Qapıları</h3>
                    <p className="text-gray-600">50-dən çox ölkəyə viza dəstəyi və tur paketləri ilə sərhədləri aşın.</p>
                </div>
            </div>
         </div>
      </section>

      {/* --- NEWSLETTER / CTA --- */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
              <Heart size={48} className="mx-auto mb-6 text-pink-400 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Səyahətə Hazırsınız?</h2>
              <p className="text-xl text-purple-200 mb-8">Elə indi bizimlə əlaqə saxlayın və xəyallarınızdakı tətili planlaşdıraq.</p>
              <Link to="/elaqe" className="inline-block bg-white text-primary font-bold px-12 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Müraciət Et
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;