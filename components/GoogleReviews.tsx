import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { 
    name: "Leyla Məmmədova", 
    text: "Mükəmməl xidmət! Vizalarımızı çox tez həll etdilər.", 
    rating: 5, 
    date: "2 gün əvvəl",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  { 
    name: "Orxan Əliyev", 
    text: "Bal ayı üçün seçdiyimiz Antalya turu möhtəşəm idi. Təşəkkürlər Eratravel!", 
    rating: 5, 
    date: "1 həftə əvvəl",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  { 
    name: "John Smith", 
    text: "Very professional team. High recommended for tourists in Baku.", 
    rating: 5, 
    date: "3 həftə əvvəl",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  { 
    name: "Nigar Qasımova", 
    text: "Qrup turları çox əyləncəli keçir. Bələdçilər savadlıdır.", 
    rating: 4, 
    date: "1 ay əvvəl",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  { 
    name: "Murad Vəliyev", 
    text: "Qiymətlər digər şirkətlərə görə daha sərfəlidir. Razı qaldım.", 
    rating: 5, 
    date: "1 ay əvvəl",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  { 
    name: "Aysel Kərimova", 
    text: "Transfer xidməti dəqiq vaxtında gəldi. Sürücü çox mədəni idi.", 
    rating: 5, 
    date: "2 ay əvvəl",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
  }
];

const GoogleReviews: React.FC = () => {
  return (
    <div className="bg-[#faf5ff] py-10 overflow-hidden border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center gap-2">
         {/* Google logo removed here as requested */}
         <div>
            <h3 className="font-bold text-gray-800 text-lg leading-none">Google Rəyləri</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <span className="font-bold text-gray-900">4.9</span>
                <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <span>(150+ Rəy)</span>
            </div>
         </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll hover:pause w-[200%]">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-80 mx-4 p-6 bg-white rounded-xl shadow-md border border-purple-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
               <div>
                   <div className="flex items-center gap-3 mb-3">
                       <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-10 h-10 rounded-full object-cover border border-gray-100"
                       />
                       <div>
                           <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                           <span className="text-xs text-gray-400">{review.date}</span>
                       </div>
                       {/* Only showing Google logo here inside the card, if needed. User only asked to remove the one to the left of the title/logo */}
                       <div className="ml-auto opacity-50 font-bold text-lg text-blue-500">G</div>
                   </div>
                   <div className="flex text-amber-400 mb-2">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-600 text-sm line-clamp-3 italic">"{review.text}"</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;