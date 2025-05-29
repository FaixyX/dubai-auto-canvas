
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone } from 'lucide-react';

const WorkshopMap = () => {
  const location = {
    name: "Go Car Auto Service Workshop",
    address: "Dubai, United Arab Emirates",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
        {/* Location Info */}
        <div className="lg:col-span-1 p-6 bg-white border-r border-gray-200 flex flex-col justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-red-500">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Our Workshop Location</h4>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 text-sm">{location.address}</p>
            </div>
            
            <div className="flex gap-2 justify-center mb-4">
              <Button
                size="sm"
                variant="outline"
                onClick={openInGoogleMaps}
                className="text-sm px-3 py-2"
              >
                <MapPin className="w-4 h-4 mr-1" />
                View on Map
              </Button>
              <Button
                size="sm"
                onClick={getDirections}
                className="text-sm px-3 py-2 bg-green-600 hover:bg-green-700"
              >
                <Navigation className="w-4 h-4 mr-1" />
                Get Directions
              </Button>
            </div>
            
            <Button
              onClick={() => window.location.href = 'tel:+971556563205'}
              className="w-full bg-red-600 hover:bg-red-700 text-sm"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Google Maps Embed */}
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
