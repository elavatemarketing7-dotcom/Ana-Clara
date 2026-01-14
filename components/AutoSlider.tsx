
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface AutoSliderProps {
  images: string[];
  animationClass?: string;
  itemWidth?: string;
  aspectRatio?: string;
  enableLightbox?: boolean;
  objectFit?: 'object-cover' | 'object-contain';
}

const AutoSlider: React.FC<AutoSliderProps> = ({ 
  images, 
  animationClass = "animate-marquee", 
  itemWidth = "w-64", 
  aspectRatio = "aspect-square",
  enableLightbox = true,
  objectFit = 'object-cover'
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  // Double the images array to create seamless infinite loop
  const displayImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className={animationClass}>
        {displayImages.map((img, i) => (
          <div 
            key={i} 
            className={`flex-shrink-0 ${itemWidth} ${aspectRatio} mx-2 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer border border-stone-200 bg-white`}
            onClick={() => enableLightbox && setSelected(img)}
          >
            <img 
              src={img} 
              alt={`Galeria ${i + 1}`} 
              className={`w-full h-full ${objectFit} transition-transform duration-500 group-hover:scale-105`} 
            />
            {enableLightbox && (
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white drop-shadow-md" size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setSelected(null)}>
          <button 
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[110]"
          >
            <X size={28} />
          </button>
          <img 
            src={selected} 
            alt="Ampliado" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};

export default AutoSlider;
