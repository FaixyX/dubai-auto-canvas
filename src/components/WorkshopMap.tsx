
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone } from 'lucide-react';

const WorkshopMap = () => {
  const location = {
    name: "Go Car Auto Service Workshop",
    address: "Jumeirah Village - Dubai, United Arab Emirates",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7234567890!2d55.1398!3d25.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzMzLjYiTiA1NcKwMDgnMjMuMyJF!5e0!3m2!1sen!2sae!4v1234567890"
  };

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const getDirections = () => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <div className="h-96 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-1 h-full">
        <div className="lg:col-span-2 relative">
          <iframe
            src={location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${location.name}`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkshopMap;
