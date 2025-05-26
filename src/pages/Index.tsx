
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImageCarousel from '@/components/ImageCarousel';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  useEffect(() => {
    // SEO optimization
    document.title = "Go Car Auto Service Dubai - Tyre Repairing, Mobile Car Service & Emergency Roadside Assistance";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional tyre repairing in Dubai, mobile car service, emergency roadside assistance. One call away car service across Dubai Marina, JBR, Downtown. 24/7 automotive solutions.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'tyre repairing in dubai, tyre reparing, one call away car service, mobile car service dubai, emergency roadside assistance, car repair dubai, automotive service dubai, car wash dubai, 24/7 car service, go car auto service');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImageCarousel />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Index;
