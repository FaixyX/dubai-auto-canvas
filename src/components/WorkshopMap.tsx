
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
      coordinates: { lat: 25.0760, lng: 55.1398 },
      description: "Premium beachfront location serving JBR and Marina area",
      services: ["Mobile Service", "Emergency Response", "Tyre Repair"]
    },
    {
      name: "JVC - Jumeirah Village Circle", 
      address: "Jumeirah Village Circle, Jumeirah Village - Dubai - United Arab Emirates",
      coordinates: { lat: 25.0543, lng: 55.2038 },
      description: "Central location serving JVC and surrounding communities",
      services: ["Workshop Service", "Car Wash", "Full Repairs"]
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
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Location Cards */}
        <div className="p-4 space-y-4 overflow-y-auto bg-white">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                selectedLocation === index 
                  ? 'border-red-500 bg-red-50 shadow-lg' 
                  : 'border-gray-200 hover:border-red-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedLocation(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${
                    selectedLocation === index ? 'bg-red-500' : 'bg-gray-400'
                  }`}>
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{location.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                    <p className="text-xs text-gray-500 mb-3">{location.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {location.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          openInGoogleMaps(location);
                        }}
                        className="text-xs"
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
                        className="text-xs bg-green-600 hover:bg-green-700"
                      >
                        <Navigation className="w-3 h-3 mr-1" />
                        Directions
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = 'tel:+971556563205';
                        }}
                        className="text-xs bg-red-600 hover:bg-red-700"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Preview */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 text-center text-white p-6">
            <div className="mb-6">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-white drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                {locations[selectedLocation].name}
              </h3>
              <p className="text-blue-100 text-sm mb-4 drop-shadow">
                {locations[selectedLocation].address}
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => openInGoogleMaps(locations[selectedLocation])}
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Open in Google Maps
              </Button>
              <Button
                onClick={() => getDirections(locations[selectedLocation])}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white opacity-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopMap;
