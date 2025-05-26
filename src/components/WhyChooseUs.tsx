
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { useEffect } from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🔧",
      title: "Expert Technicians",
      description: "Our certified professionals have years of experience in automotive repair and maintenance.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency services to get you back on the road whenever you need us.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, upfront pricing for all our services.",
      gradient: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-red-600 gradient-text">Go Car</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best automotive services in Dubai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll hover-lift`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="relative z-10 p-8 text-center group-hover:text-white transition-colors duration-500">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {typeof feature.icon === 'string' ? (
                    <div className="text-5xl animate-bounce-gentle" style={{ animationDelay: `${index * 300}ms` }}>{feature.icon}</div>
                  ) : (
                    <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white/20 transition-colors duration-500 animate-pulse-gentle">
                      {feature.icon}
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white animate-on-scroll hover-lift">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 animate-glow">500+</div>
              <div className="text-red-200">Happy Customers</div>
            </div>
            <div className="group animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 animate-glow">24/7</div>
              <div className="text-red-200">Support Available</div>
            </div>
            <div className="group animate-on-scroll" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 animate-glow">5+</div>
              <div className="text-red-200">Years Experience</div>
            </div>
            <div className="group animate-on-scroll" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 animate-glow">100%</div>
              <div className="text-red-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
