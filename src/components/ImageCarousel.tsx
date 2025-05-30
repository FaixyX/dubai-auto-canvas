
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { CAR_WASH_IMAGE, TYRE_REPAIR_IMAGE, MOBILE_REPAIR_IMAGE, EMERGENCY_REPAIR_IMAGE } from '@/assets';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: TYRE_REPAIR_IMAGE,
      alt: "Professional tyre repair service in Dubai - Go Car Auto Service",
    },
    {
      src: MOBILE_REPAIR_IMAGE,
      alt: "Mobile car service Dubai - On-site automotive repairs",
    },
    {
      src: CAR_WASH_IMAGE,
      alt: "Car wash and detailing services Dubai - Go Car",
    },
    {
      src: EMERGENCY_REPAIR_IMAGE,
      alt: "Emergency roadside assistance Dubai - 24/7 service",
    }
  ];

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  };

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
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImage 
                      ? 'opacity-100 z-10' 
                      : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white border-gray-300 shadow-lg"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {/* Right Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white border-gray-300 shadow-lg"
              aria-label="Next image"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>

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
