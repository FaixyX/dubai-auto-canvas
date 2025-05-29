
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone } from 'lucide-react';

const WorkshopMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: "JBR - Jumeirah Beach Residence",
      address: "Jumeirah Beach Residence, Dubai - United Arab Emirates",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7234567890!2d55.1398!3d25.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzMzLjYiTiA1NcKwMDgnMjMuMyJF!5e0!3m2!1sen!2sae!4v1234567890"
    },
    {
      name: "JVC - Jumeirah Village Circle", 
      address: "Jumeirah Village Circle, Jumeirah Village - Dubai - United Arab Emirates",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1234567890!2d55.2038!3d25.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzE1LjUiTiA1NcKwMTInMTMuNyJF!5e0!3m2!1sen!2sae!4v1234567890"
    }
  ];

  const openInGoogleMaps = (location: typeof locations[0]) => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const getDirections = (location: typeof locations[0]) => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <div className="h-96 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
        {/* Location Selector */}
        <div className="lg:col-span-1 p-4 bg-white border-r border-gray-200">
          <h4 className="font-bold text-gray-900 mb-4">Select Workshop Location</h4>
          <div className="space-y-3">
            {locations.map((location, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedLocation === index 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-200 hover:border-red-300'
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1 rounded-full ${
                      selectedLocation === index ? 'bg-red-500' : 'bg-gray-400'
                    }`}>
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                    <h5 className="font-semibold text-sm">{location.name}</h5>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{location.address}</p>
                  
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInGoogleMaps(location);
                      }}
                      className="text-xs px-2 py-1 h-7"
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        getDirections(location);
                      }}
                      className="text-xs px-2 py-1 h-7 bg-green-600 hover:bg-green-700"
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Go
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
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
            src={locations[selectedLocation].embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${locations[selectedLocation].name}`}
            className="w-full h-full"
          />
          
          {/* Location Info Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-red-500" />
              <h5 className="font-semibold text-sm">{locations[selectedLocation].name}</h5>
            </div>
            <p className="text-xs text-gray-600">{locations[selectedLocation].address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopMap;
