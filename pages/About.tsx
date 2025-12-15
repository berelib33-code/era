import React from 'react';
import { Target, Users, Award, Briefcase, Clock, Globe, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20 font-sans">
       
       {/* 1. HERO SECTION */}
       <div className="relative h-[70vh] flex items-center justify-center bg-primary overflow-hidden">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop" alt="Modern Office" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl animate-fade-in-up">
                    <span className="text-amber-400 font-bold tracking-widest uppercase mb-4 block">Eratravel Haqqında</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Səyahətin <br/> <span className="text-amber-400">Yeni Erası</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-amber-400 pl-6">
                        Biz sadəcə bilet satmırıq, biz həyatınızın ən unudulmaz anlarını planlaşdırırıq. 
                        Peşəkarlıq, etibar və keyfiyyət bizim imzamızdır.
                    </p>
                </div>
            </div>
       </div>

       {/* 2. OUR STORY (Timeline style - Improved) */}
       <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Uğur Hekayəmiz</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Kiçik bir ofisdən qlobal turizm brendinə gedən yol.</p>
                </div>

                <div className="relative">
                    {/* Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                    
                    <div className="space-y-12">
                        {/* Item 1 */}
                        <div className="flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 text-right pr-8">
                                <h3 className="text-3xl font-bold text-primary">2005</h3>
                                <h4 className="text-xl font-bold mb-2">Yaranma Tarixi</h4>
                                <p className="text-gray-600">Şirkətimiz Bakıda kiçik bir komanda ilə fəaliyyətə başladı. İlk hədəfimiz daxili turizmi inkişaf etdirmək idi.</p>
                            </div>
                            <div className="w-8 h-8 bg-amber-400 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 group-hover:scale-125 transition-transform"></div>
                            <div className="md:w-5/12 pl-8 hidden md:block opacity-50">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" className="rounded-xl shadow-lg w-64 h-40 object-cover" alt="Startup" />
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 text-right pr-8 hidden md:block opacity-50">
                               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop" className="rounded-xl shadow-lg w-64 h-40 object-cover ml-auto" alt="Meeting" />
                            </div>
                            <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 group-hover:scale-125 transition-transform"></div>
                            <div className="md:w-5/12 pl-8">
                                <h3 className="text-3xl font-bold text-primary">2012</h3>
                                <h4 className="text-xl font-bold mb-2">Beynəlxalq Arenaya Çıxış</h4>
                                <p className="text-gray-600">Türkiyə və Gürcüstan ilə rəsmi tərəfdaşlıq müqavilələri imzalandı. Müştəri bazamız 5000-i keçdi.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 text-right pr-8">
                                <h3 className="text-3xl font-bold text-primary">2018</h3>
                                <h4 className="text-xl font-bold mb-2">MICE və Korporativ Sektor</h4>
                                <p className="text-gray-600">Böyük şirkətlərin tədbirlərinin təşkili üzrə liderliyə yüksəldik. Dubay və Avropa istiqamətləri əlavə olundu.</p>
                            </div>
                            <div className="w-8 h-8 bg-amber-400 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 group-hover:scale-125 transition-transform"></div>
                             <div className="md:w-5/12 pl-8 hidden md:block opacity-50">
                                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop" className="rounded-xl shadow-lg w-64 h-40 object-cover" alt="Conference" />
                            </div>
                        </div>

                         {/* Item 4 */}
                         <div className="flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 text-right pr-8 hidden md:block opacity-50">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop" className="rounded-xl shadow-lg w-64 h-40 object-cover ml-auto" alt="Digital" />
                            </div>
                            <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 group-hover:scale-125 transition-transform"></div>
                            <div className="md:w-5/12 pl-8">
                                <h3 className="text-3xl font-bold text-primary">2024</h3>
                                <h4 className="text-xl font-bold mb-2">Rəqəmsal İnkişaf</h4>
                                <p className="text-gray-600">Süni intellekt dəstəkli xidmətlər və onlayn bronlaşdırma sisteminin tətbiqi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>

       {/* 3. MISSION & VISION (Grid) */}
       <div className="bg-gray-50 py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                   <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-primary hover:shadow-2xl transition-shadow">
                       <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                           <Target size={32} className="text-primary" />
                       </div>
                       <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Missiyamız</h3>
                       <p className="text-gray-600 leading-relaxed text-lg">
                           İnsanların dünyagörüşünü genişləndirmək, onlara fərqli mədəniyyətləri tanıtmaq və səyahəti hər kəs üçün əlçatan, lakin lüks standartlara uyğun etmək. 
                           Biz hər bir turun arxasında dayanan hekayəni önəmsəyirik.
                       </p>
                   </div>
                   
                   <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-amber-400 hover:shadow-2xl transition-shadow">
                       <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                           <Globe size={32} className="text-amber-600" />
                       </div>
                       <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                       <p className="text-gray-600 leading-relaxed text-lg">
                           Azərbaycanın ən etibarlı qlobal turizm markası olmaq. Texnologiya və insan faktorunu birləşdirərək, sərhədsiz və maneəsiz səyahət təcrübəsi yaratmaq.
                       </p>
                   </div>
               </div>
           </div>
       </div>

       {/* 4. WHY CHOOSE US - EXTENDED */}
       <div className="py-24 bg-primary text-white relative overflow-hidden">
           {/* Decorative background circle */}
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Bizi Fərqləndirən Cəhətlər</h2>
                    <p className="text-purple-200">Standartlardan kənar xidmət anlayışı.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Clock />, title: "24/7 Dəstək", desc: "Səyahət zamanı yarana biləcək hər hansı sual üçün operativ komandamız xəttdədir." },
                        { icon: <Briefcase />, title: "MICE Ekspertləri", desc: "Korporativ tədbirlər, konfranslar və işgüzar səfərlər üçün peşəkar həllər." },
                        { icon: <Award />, title: "Eksklüziv Qiymətlər", desc: "Partnyor otellər və hava yolları ilə birbaşa müqavilələr sayəsində ən yaxşı təkliflər." },
                        { icon: <Heart />, title: "Fərdi Yanaşma", desc: "Hər müştəri bizim üçün VIP-dir. İstəklərinizə uyğun xüsusi tur proqramı hazırlanır." },
                        { icon: <Users />, title: "Təcrübəli Komanda", desc: "Komandamızın hər bir üzvü turizm sahəsində ən az 5 il təcrübəyə malikdir." },
                        { icon: <Globe />, title: "50+ Ölkə", desc: "Dünyanın dörd bir yanına viza dəstəyi və tur paketləri." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-4 text-amber-400 p-3 bg-white/10 rounded-lg w-fit">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
           </div>
       </div>

       {/* 5. WORKFLOW */}
       <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">İş Prosesimiz Necədir?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center relative">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-gray-400">01</div>
                        <h4 className="text-xl font-bold mb-2">Müraciət</h4>
                        <p className="text-gray-500 text-sm">İstəklərinizi bizə bildirin.</p>
                        <ArrowRight className="hidden md:block absolute top-8 -right-4 text-gray-300" />
                    </div>
                    <div className="text-center relative">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-gray-400">02</div>
                        <h4 className="text-xl font-bold mb-2">Planlama</h4>
                        <p className="text-gray-500 text-sm">Sizə uyğun ən yaxşı variantları hazırlayırıq.</p>
                        <ArrowRight className="hidden md:block absolute top-8 -right-4 text-gray-300" />
                    </div>
                    <div className="text-center relative">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-gray-400">03</div>
                        <h4 className="text-xl font-bold mb-2">Təsdiq & Ödəniş</h4>
                        <p className="text-gray-500 text-sm">Detalları dəqiqləşdirib sənədləşməni edirik.</p>
                        <ArrowRight className="hidden md:block absolute top-8 -right-4 text-gray-300" />
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">04</div>
                        <h4 className="text-xl font-bold mb-2">Səyahət</h4>
                        <p className="text-gray-500 text-sm">Xəyallarınızın dadını çıxarın!</p>
                    </div>
                </div>
            </div>
       </div>

       {/* 6. PARTNERS LOGO AREA */}
       <div className="py-20 bg-white border-t border-gray-100">
           <div className="max-w-7xl mx-auto px-4 text-center">
               <h2 className="text-2xl font-serif font-bold mb-10 text-gray-800">Rəsmi Tərəfdaşlarımız</h2>
               <div className="flex flex-wrap justify-center items-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                   {/* AZAL */}
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Azerbaijan_Airlines_logo.svg/2560px-Azerbaijan_Airlines_logo.svg.png" alt="AZAL" className="h-12 md:h-16 object-contain" />
                   {/* Turkish Airlines */}
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turkish_Airlines_logo_2019_compact.svg/2560px-Turkish_Airlines_logo_2019_compact.svg.png" alt="Turkish Airlines" className="h-12 md:h-16 object-contain" />
                   {/* Emirates */}
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png" alt="Emirates" className="h-10 md:h-14 object-contain" />
                   {/* Qatar Airways */}
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" alt="Qatar Airways" className="h-12 md:h-16 object-contain" />
               </div>
           </div>
       </div>

       {/* BACK TO HOME */}
       <div className="py-8 text-center bg-gray-50 border-t border-gray-200">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
             <ArrowLeft size={16} /> Ana Səhifəyə Qayıt
          </Link>
       </div>
    </div>
  );
};

export default About;