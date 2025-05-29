
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallButton = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+971556563205';
  };

  return (
    <Button
      onClick={handleCallClick}
      className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 md:w-16 md:h-16 md:right-28"
      size="icon"
    >
      <Phone className="w-8 h-8 md:w-10 md:h-10" />
    </Button>
  );
};

export default CallButton;
