
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai Marina",
      rating: 5,
      text: "Fixed my car in 30 minutes – absolute lifesaver! Professional service and very reasonable pricing.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      location: "JBR",
      rating: 5,
      text: "Excellent mobile service! They came to my office and fixed my tire while I was in a meeting. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mohammed Hassan",
      location: "Downtown Dubai",
      rating: 5,
      text: "Best auto service in Dubai! Professional team, fair prices, and they always deliver on time.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      location: "Business Bay",
      rating: 5,
      text: "Saved my day when my car broke down. Quick response and excellent customer service. Will definitely use again!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, isAnimating]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isAnimating && index !== currentTestimonial) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-red-500">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Dubai
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[400px] flex items-center">
            <Card className={`w-full bg-white/10 backdrop-blur-sm border-0 shadow-2xl transition-all duration-300 ${
              isAnimating ? 'opacity-70 scale-98' : 'opacity-100 scale-100'
            }`}>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-red-500 shadow-lg"
                  />
                </div>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-100 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="text-lg">
                  <div className="font-bold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-red-400">{testimonials[currentTestimonial].location}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full p-3 hover:scale-110 transition-all duration-300 disabled:opacity-50 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full p-3 hover:scale-110 transition-all duration-300 disabled:opacity-50 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentTestimonial 
                  ? 'bg-red-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Background Testimonials (Floating) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 opacity-50">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-3 italic">"{testimonial.text.slice(0, 80)}..."</p>
                <div className="text-xs">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-red-400">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
