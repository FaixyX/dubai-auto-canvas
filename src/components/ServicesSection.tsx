
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: "🔧",
      title: "Tyre Repair",
      description: "Professional tyre repair and replacement services available 24/7"
    },
    {
      icon: "🚿",
      title: "Car Wash",
      description: "Premium car cleaning services at your location or our workshop"
    },
    {
      icon: "🎨",
      title: "Denting/Painting",
      description: "Expert bodywork and painting services to restore your car's look"
    },
    {
      icon: "⚡",
      title: "Mechanical/Electrical",
      description: "Complete mechanical and electrical repair services by certified technicians"
    },
    {
      icon: "🚗",
      title: "Roadside Help",
      description: "Emergency roadside assistance anywhere in Dubai, anytime"
    },
    {
      icon: "🔋",
      title: "Battery Service",
      description: "Battery testing, charging, and replacement services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive services designed to keep you moving
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg hover:shadow-red-500/10"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Split Service Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white border-0 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Mobile Service</h3>
              </div>
              <p className="text-lg mb-4 text-red-100">
                We come to you! Professional automotive services at your location across Dubai.
              </p>
              <ul className="space-y-2 text-red-100">
                <li>• Emergency roadside assistance</li>
                <li>• On-site repairs and maintenance</li>
                <li>• Available 24/7</li>
              </ul>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800 to-black text-white border-0 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 text-2xl">🏭</div>
                <h3 className="text-2xl font-bold">Workshop Service</h3>
              </div>
              <p className="text-lg mb-4 text-gray-300">
                State-of-the-art facility with advanced equipment for comprehensive automotive care.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Advanced diagnostic equipment</li>
                <li>• Expert certified technicians</li>
                <li>• Quality guaranteed</li>
              </ul>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
