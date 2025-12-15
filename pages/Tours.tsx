import React, { useState } from 'react';
import { MapPin, Calendar, Star, CheckCircle, Camera, Info, Plane, Car, Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type TabKey = 'azerbaijan' | 'turkey' | 'georgia' | 'dubai' | 'tickets' | 'vip' | 'hotels';

const Tours: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('azerbaijan');

  // WhatsApp connection handler
  const handleBooking = (itemName: string) => {
    const phoneNumber = "994102146545"; // Lamiye ERA TRAVEL
    const message = `Salam Lamiye xanim, men "${itemName}" haqqinda melumat almaq isteyirem.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Data structure for content
  const content: Record<TabKey, any> = {
    azerbaijan: {
      title: "Azərbaycan",
      subtitle: "Odlar Yurdunun Şəhərlərini Kəşf Edin",
      description: "Qədim tarix, müasir memarlıq və füsunkar təbiət. Xəzərin sahilindən Qafqazın zirvələrinə qədər uzanan unudulmaz səyahət.",
      heroImage: "https://share.google/UofmjbaqY6pPDJ91V", // Odlar yurdu servisi
      icon: <MapPin />,
      places: [
        { name: "İçərişəhər (Bakı)", desc: "UNESCO irsi, Qız Qalası və Şirvanşahlar Sarayı." },
        { name: "Qəbələ & Tufandağ", desc: "Təbiət qoynunda istirahət və qış turizmi." },
        { name: "Şəki Xan Sarayı", desc: "Şərq memarlığının incisi və dadlı Şəki şirniyyatları." },
        { name: "Göygöl Milli Parkı", desc: "Möhtəşəm dağ gölü və təmiz hava." }
      ],
      packages: [
        {
          id: 1,
          title: "Bakı Gecələri Turu",
          days: "1 Gün",
          locationName: "Bakı",
          image: "https://share.google/b5KnjzJ4MKGyXzEPB", // Baki geceleri
          rating: 4.9
        },
        {
          id: 2,
          title: "Qəbələ Təbiət Qoynu",
          days: "2 Gün / 1 Gecə",
          locationName: "Qəbələ",
          image: "https://share.google/AyrYDBMBRd0fuCl39", // Qebele
          rating: 4.8
        },
        {
          id: 3,
          title: "Quba - Qusar - Şahdağ",
          days: "2 Gün / 1 Gecə",
          locationName: "Şahdağ",
          image: "https://images.unsplash.com/photo-1612456225451-bb8d10d0131d?q=80&w=800&auto=format&fit=crop", 
          rating: 4.9
        }
      ]
    },
    turkey: {
      title: "Türkiyə",
      subtitle: "İki Qitənin Birləşdiyi Nöqtə",
      description: "Tarixi abidələr, firuzəyi dənizlər və qonaqpərvərlik. İstanbulun boğazından Kapadokyanın səmasına qədər macəra.",
      heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1920&auto=format&fit=crop", 
      icon: <MapPin />,
      places: [
        { name: "İstanbul", desc: "Ayasofya, Sultanahmet və Boğaz turu." },
        { name: "Kapadokya", desc: "Pəri bacaları və hava şarları ilə sehrli səhər." },
        { name: "Antalya", desc: "Lüks otellər, dəniz, qum və günəş." },
        { name: "Pamukkale", desc: "Ağ travertinlər və qədim Hierapolis şəhəri." }
      ],
      packages: [
        {
          id: 1,
          title: "İstanbul Klassik",
          days: "4 Gün / 3 Gecə",
          locationName: "İstanbul",
          image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop", 
          rating: 5.0
        },
        {
          id: 2,
          title: "Sehrli Kapadokya",
          days: "3 Gün / 2 Gecə",
          locationName: "Kapadokya",
          image: "https://share.google/XOaeVgMhiN9yFn5Bx", 
          rating: 4.9
        },
        {
          id: 3,
          title: "Antalya Ultra Hərşey Daxil",
          days: "7 Gün / 6 Gecə",
          locationName: "Antalya",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
          rating: 4.8
        }
      ]
    },
    georgia: {
      title: "Gürcüstan",
      subtitle: "Qafqazın Qonaqpərvər İncisi",
      description: "Dadlı mətbəx, qədim kilsələr və Batumi bulvarı. Tbilisinin dar küçələrindən Kazbeginin zirvələrinə səyahət.",
      heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1920&auto=format&fit=crop",
      icon: <MapPin />,
      places: [
        { name: "Tbilisi", desc: "Köhnə şəhər, Narikala qalası və kükürd hamamları." },
        { name: "Batumi", desc: "Qara dəniz sahili, müasir memarlıq və botanika bağı." },
        { name: "Kazbegi", desc: "Gergeti kilsəsi və möhtəşəm dağ mənzərələri." },
        { name: "Siqnaxı", desc: "Sevgi şəhəri və Alazan vadisi." }
      ],
      packages: [
        {
          id: 1,
          title: "Tbilisi Qrup Turu",
          days: "3 Gün / 2 Gecə",
          locationName: "Tbilisi",
          image: "https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?q=80&w=800&auto=format&fit=crop",
          rating: 4.7
        },
        {
          id: 2,
          title: "Batumi Yay Tətili",
          days: "5 Gün / 4 Gecə",
          locationName: "Batumi",
          image: "https://share.google/UX8DRLrEIEXZPG12Z", 
          rating: 4.8
        },
        {
          id: 3,
          title: "Gürcüstan Kəşfi",
          days: "4 Gün / 3 Gecə",
          locationName: "Kazbegi",
          image: "https://share.google/f7wbfaH5DjM4IYk9W",
          rating: 4.9
        }
      ]
    },
    dubai: {
      title: "Dubay (BƏƏ)",
      subtitle: "Gələcəyin Şəhəri və Səhra Nağılı",
      description: "Dünyanın ən hündür binası, süni adalar və lüks həyat tərzi. Səhra safarisindən Dubay Mall alış-verişinə qədər hər şey.",
      heroImage: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1920&auto=format&fit=crop",
      icon: <MapPin />,
      places: [
        { name: "Burj Khalifa", desc: "Dünyanın ən hündür binasından möhtəşəm mənzərə." },
        { name: "Palm Jumeirah", desc: "Süni ada və lüks Atlantis oteli." },
        { name: "Səhra Safarisi", desc: "Cip turu, dəvə gəzintisi və bədəvi düşərgəsi." },
        { name: "Dubai Mall", desc: "Dünyanın ən böyük ticarət və əyləncə mərkəzi." }
      ],
      packages: [
        {
          id: 1,
          title: "Dubay Şəhər Turu",
          days: "5 Gün / 4 Gecə",
          locationName: "Dubay",
          image: "https://share.google/j6csB8GdUVklPn4oX",
          rating: 5.0
        },
        {
          id: 2,
          title: "Səhra Macərası & Safari",
          days: "1 Gün",
          locationName: "Səhra",
          image: "https://share.google/8TrXoa67HzoR8cII1",
          rating: 4.9
        },
        {
          id: 3,
          title: "Abu Dhabi & Ferrari World",
          days: "1 Gün",
          locationName: "Abu Dabi",
          image: "https://share.google/FwRbaBjgRWMeRlT6B",
          rating: 4.8
        }
      ]
    },
    tickets: {
      title: "Aviabiletlər",
      subtitle: "Dünyanın İstənilən Nöqtəsinə Uçuşlar",
      description: "Ən sərfəli qiymətlərlə aviabiletlərin bron edilməsi. AZAL, Turkish Airlines, Emirates və digər hava yolları ilə birbaşa əməkdaşlıq.",
      heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop",
      icon: <Plane />,
      places: [
        { name: "Sərfəli Qiymət", desc: "Erkən rezervasiya ilə ən yaxşı qiymətlər." },
        { name: "Viza Dəstəyi", desc: "Uçuşla birlikdə viza prosedurlarının həlli." },
        { name: "24/7 Dəstək", desc: "Uçuş zamanı yarana biləcək problemlərin həlli." },
        { name: "Qrup Biletləri", desc: "Korporativ və qrup səfərləri üçün xüsusi endirimlər." }
      ],
      packages: [
        {
          id: 1,
          title: "Bakı - İstanbul (Gediş-Dönüş)",
          days: "Hər Gün",
          locationName: "İstanbul",
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
          rating: 5.0
        },
        {
          id: 2,
          title: "Bakı - Dubay (Gediş-Dönüş)",
          days: "Həftədə 5 dəfə",
          locationName: "Dubay",
          image: "https://share.google/gmz9HRwc8l1fgXeyS",
          rating: 4.9
        },
        {
          id: 3,
          title: "Avropa Turları üçün Biletlər",
          days: "Çarter Reyslər",
          locationName: "Avropa",
          image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop",
          rating: 4.8
        }
      ]
    },
    vip: {
      title: "VIP Gəzinti",
      subtitle: "Lüks və Komfort Sevənlər Üçün",
      description: "Şəxsi sürücü, lüks avtomobillər, yaxta turları və helikopter gəzintiləri. Səyahətinizdə xüsusi olduğunuzu hiss edin.",
      heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1920&auto=format&fit=crop",
      icon: <Car />,
      places: [
        { name: "Premium Transfer", desc: "Hava limanından otelə lüks avtomobillə qarşılama." },
        { name: "Şəxsi Sürücü", desc: "Səfər boyu xidmətinizdə olan peşəkar sürücü." },
        { name: "Yaxta Turları", desc: "Xəzər dənizində və ya Bosforda özəl gəzinti." },
        { name: "Helikopter Turu", desc: "Şəhəri səmadan izləmək fürsəti." }
      ],
      packages: [
        {
          id: 1,
          title: "Mercedes S-Class Transfer",
          days: "Saatlıq / Günlük",
          locationName: "S-Class",
          image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
          rating: 5.0
        },
        {
          id: 2,
          title: "Özəl Yaxta Gəzintisi",
          days: "2-4 Saat",
          locationName: "Yaxta",
          image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop",
          rating: 5.0
        },
        {
          id: 3,
          title: "VIP Qonaqlama Paketi",
          days: "Tam Xidmət",
          locationName: "VIP",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
          rating: 4.9
        }
      ]
    },
    hotels: {
      title: "Otellər",
      subtitle: "Rahatlığınızın Təminatı",
      description: "Dünyanın ən nüfuzlu otel şəbəkələrində rezervasiya. İstər işgüzar səfər, istərsə də istirahət üçün ideal seçimlər.",
      heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop",
      icon: <Building />,
      places: [
        { name: "5 Ulduzlu Otellər", desc: "Dünya brendləri (Rixos, Fairmont, Hilton)." },
        { name: "Resort & Spa", desc: "Tam dincəlmək üçün sağlamlıq mərkəzləri." },
        { name: "Butik Otellər", desc: "Şəhər mərkəzində xüsusi dizaynlı otellər." },
        { name: "Villa Kirayəsi", desc: "Ailəvi istirahət üçün özəl villalar." }
      ],
      packages: [
        {
          id: 1,
          title: "Rixos Premium (Türkiyə)",
          days: "Ultra All Inclusive",
          locationName: "Türkiyə",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
          rating: 5.0
        },
        {
          id: 2,
          title: "Atlantis The Palm (Dubay)",
          days: "Yarım Pansion",
          locationName: "Dubay",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
          rating: 4.9
        },
        {
          id: 3,
          title: "Fairmont Baku (Azərbaycan)",
          days: "Səhər Yeməyi Daxil",
          locationName: "Bakı",
          image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop",
          rating: 4.8
        }
      ]
    }
  };

  const currentData = content[activeTab];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. HERO SECTION DYNAMIC */}
      {/* Increased height and top padding to avoid navbar overlap issues */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={currentData.heroImage} 
            alt={currentData.title} 
            className="w-full h-full object-cover transition-all duration-1000 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-gray-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in-up">
            {currentData.title}
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-light mb-8 drop-shadow-md">
            {currentData.subtitle}
          </p>
          <div className="flex justify-center gap-4">
             <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="bg-amber-400 text-primary px-8 py-3 rounded-full font-bold hover:bg-amber-300 transition shadow-lg">
                Təkliflərə Bax
             </button>
             <Link to="/" className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition flex items-center gap-2">
                <ArrowLeft size={18} /> Ana Səhifəyə Qayıt
             </Link>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION TABS */}
      {/* Moved slightly up with negative margin, but container is safe */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-3">
            <div className="flex flex-wrap justify-center gap-2">
                {(Object.keys(content) as TabKey[]).map((key) => (
                    <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-3 px-4 md:px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 mb-1 md:mb-0 ${
                        activeTab === key 
                        ? 'bg-primary text-white shadow-md transform scale-105' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    >
                    {key === 'azerbaijan' && '🇦🇿 Azərbaycan'}
                    {key === 'turkey' && '🇹🇷 Türkiyə'}
                    {key === 'georgia' && '🇬🇪 Gürcüstan'}
                    {key === 'dubai' && '🇦🇪 Dubay'}
                    {key === 'tickets' && <><Plane size={18} /> Bilet</>}
                    {key === 'vip' && <><Car size={18} /> VIP Gəzinti</>}
                    {key === 'hotels' && <><Building size={18} /> Otellər</>}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* 3. INTRO & DETAILS */}
      <div className="max-w-7xl mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
               <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-wider uppercase mb-4">
                  <Info size={20} />
                  <span>Xidmət Haqqında</span>
               </div>
               <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{currentData.subtitle}</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 {currentData.description} Eratravel olaraq keyfiyyət və müştəri məmnuniyyəti bizim əsas prioritetimizdir.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {currentData.places.map((place: any, idx: number) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                          {currentData.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900">{place.name}</h4>
                          <p className="text-sm text-gray-500">{place.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute -inset-4 bg-amber-400 rounded-3xl opacity-20 rotate-3"></div>
               <img 
                 src={currentData.heroImage} 
                 alt="Service" 
                 className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
               />
               <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 text-primary font-bold mb-1">
                     <Camera size={20} />
                     <span>Özəl Təkliflər</span>
                  </div>
                  <p className="text-sm text-gray-600">Sizin üçün seçdiyimiz ən yaxşı variantlar.</p>
               </div>
            </div>
         </div>

         {/* 4. PACKAGES / OFFERS GRID */}
         <div id="packages" className="mb-12 text-center pt-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Populyar Təkliflər</h2>
            <p className="text-gray-500">Maraqlandığınız xidməti seçin və WhatsApp vasitəsilə sifariş edin</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentData.packages.map((pkg: any) => (
               <div key={pkg.id} onClick={() => handleBooking(pkg.title)} className="cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col relative">
                  <div className="relative h-64 overflow-hidden">
                     <img 
                       src={pkg.image} 
                       alt={pkg.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary flex items-center gap-1 shadow-md z-10">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        {pkg.rating}
                     </div>
                     
                     {/* Location Overlay Text */}
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 z-10">
                        <span className="text-white text-3xl font-serif font-bold drop-shadow-lg tracking-wide">
                            {pkg.locationName || pkg.title.split(' ')[0]}
                        </span>
                     </div>

                     {/* Overlay on Hover */}
                     <div className="absolute inset-0 bg-green-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <div className="text-white flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {/* WhatsApp SVG Logo */}
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" className="text-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                           <span className="font-bold text-lg">WhatsApp ilə Yaz</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{pkg.title}</h3>
                     
                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                           <Calendar size={16} />
                           {pkg.days}
                        </div>
                        <div className="flex items-center gap-1">
                           <MapPin size={16} />
                           {currentData.title}
                        </div>
                     </div>
                     
                     <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                           <p className="text-xs text-gray-400">Qiymət barədə</p>
                           <p className="text-sm font-bold text-primary">Ətraflı məlumat al</p>
                        </div>
                        {/* Whatsapp Logo Button */}
                        <button className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-green-200">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* 5. FEATURES / SERVICES */}
      <div className="bg-primary text-white py-16">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
               <div className="p-4">
                  <CheckCircle size={40} className="mx-auto mb-4 text-amber-400" />
                  <h4 className="text-xl font-bold mb-2">Peşəkar Xidmət</h4>
                  <p className="text-purple-200 text-sm">Hər sahədə yüksək keyfiyyət standartları.</p>
               </div>
               <div className="p-4">
                  <CheckCircle size={40} className="mx-auto mb-4 text-amber-400" />
                  <h4 className="text-xl font-bold mb-2">Rahatlıq</h4>
                  <p className="text-purple-200 text-sm">Sizin rahatlığınız üçün hər şey düşünülüb.</p>
               </div>
               <div className="p-4">
                  <CheckCircle size={40} className="mx-auto mb-4 text-amber-400" />
                  <h4 className="text-xl font-bold mb-2">Etibarlılıq</h4>
                  <p className="text-purple-200 text-sm">Rəsmi zəmanət və tam sığorta.</p>
               </div>
               <div className="p-4">
                  <CheckCircle size={40} className="mx-auto mb-4 text-amber-400" />
                  <h4 className="text-xl font-bold mb-2">24/7 Dəstək</h4>
                  <p className="text-purple-200 text-sm">Hər an yanınızdayıq.</p>
               </div>
            </div>
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

export default Tours;