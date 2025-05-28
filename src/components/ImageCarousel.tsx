import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

import { CAR_WASH_IMAGE, TYRE_REPAIR_IMAGE, MOBILE_REPAIR_IMAGE, EMERGENCY_REPAIR_IMAGE } from '@/assets';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      //src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=400&fit=crop&crop=center",
      src: TYRE_REPAIR_IMAGE,
      alt: "Professional tyre repair service in Dubai - Go Car Auto Service",
      //title: "Expert Tyre Repair Services"
    },
    {
      //src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center",
      src: MOBILE_REPAIR_IMAGE,
      alt: "Mobile car service Dubai - On-site automotive repairs",
      //title: "Mobile Car Service"
    },
    {
      // src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&h=400&fit=crop&crop=center",
      src: CAR_WASH_IMAGE,
      alt: "Car wash and detailing services Dubai - Go Car",
      //title: "Professional Car Wash"
    },
    {
      //src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop&crop=center",
      src: EMERGENCY_REPAIR_IMAGE,
      alt: "Emergency roadside assistance Dubai - 24/7 service",
      //title: "24/7 Emergency Assistance"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span> in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From tyre repairing in Dubai to complete automotive solutions - see our professional team at work
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
          <CardContent className="p-0 relative">
            <div className="relative h-64 md:h-96 overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentImage 
                      ? 'translate-x-0 opacity-100' 
                      : index < currentImage 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-fill"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImageCarousel;
