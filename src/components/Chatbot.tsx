
import { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '' });
  const [hasUserInfo, setHasUserInfo] = useState(false);
  const [messageId, setMessageId] = useState(1);

  const predefinedQAs = [
    {
      keywords: ['services', 'what do you do', 'help', 'service'],
      answer: 'We offer tyre repair/replacement, car wash, denting/painting, mechanical services, electrical services, and emergency roadside assistance in Dubai. We provide both mobile and workshop services 24/7.'
    },
    {
      keywords: ['price', 'cost', 'how much', 'pricing'],
      answer: 'Our pricing varies by service. Tyre repair starts from AED 50, car wash from AED 30, and mechanical services from AED 100. Contact us for a detailed quote based on your specific needs.'
    },
    {
      keywords: ['location', 'where', 'area', 'dubai'],
      answer: 'We serve all areas in Dubai including Dubai Marina, JBR, Downtown, Business Bay, Al Quoz, and more. Our mobile service comes to your location, or you can visit our workshop in Al Quoz Industrial Area.'
    },
    {
      keywords: ['emergency', 'urgent', 'roadside', 'breakdown'],
      answer: 'We provide 24/7 emergency roadside assistance! Call us immediately at +971 XX XXX XXXX or use our WhatsApp button for urgent help. Our mobile team can reach you within 30 minutes in most Dubai areas.'
    },
    {
      keywords: ['booking', 'appointment', 'schedule', 'time'],
      answer: 'You can book our services by filling out the contact form on our website, calling us, or using WhatsApp. We offer same-day service and can schedule appointments based on your convenience.'
    },
    {
      keywords: ['mobile service', 'come to me', 'on-site'],
      answer: 'Yes! Our mobile service team comes directly to your location with all necessary equipment. Whether you\'re at home, office, or stuck on the road, we bring our services to you.'
    }
  ];

  const findAnswer = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    for (const qa of predefinedQAs) {
      if (qa.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return qa.answer;
      }
    }
    
    return "Thank you for your question! For specific inquiries, please call us at +971 XX XXX XXXX or use our contact form. Our team will be happy to assist you with detailed information about our tyre repairing services in Dubai and other automotive solutions.";
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setHasUserInfo(true);
      const welcomeMessage: Message = {
        id: messageId,
        text: `Hello ${userInfo.name}! Welcome to Go Car Auto Service Dubai. I'm here to help you with information about our tyre repairing services, car wash, mechanical repairs, and emergency roadside assistance. How can I assist you today?`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setMessageId(prev => prev + 1);
      toast({
        title: "Welcome!",
        description: "You're now connected to our service chatbot.",
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messageId,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessageId(prev => prev + 1);

    setTimeout(() => {
      const botResponse: Message = {
        id: messageId + 1,
        text: findAnswer(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setMessageId(prev => prev + 2);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 md:w-16 md:h-16 md:right-28"
        size="icon"
      >
        <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
      </Button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4">
          <Card className="w-full max-w-md h-[600px] flex flex-col animate-slide-in-right">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Go Car Assistant</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {!hasUserInfo ? (
                <form onSubmit={handleUserInfoSubmit} className="p-4 space-y-4">
                  <p className="text-sm text-gray-600">Please provide your details to start chatting:</p>
                  
                  <div>
                    <Label htmlFor="chat-name">Name *</Label>
                    <Input
                      id="chat-name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="chat-email">Email *</Label>
                    <Input
                      id="chat-email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="chat-phone">Phone *</Label>
                    <Input
                      id="chat-phone"
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Chat
                  </Button>
                </form>
              ) : (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-xs px-3 py-2 rounded-lg ${
                            message.isBot
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          <div className="flex items-center gap-1 mb-1">
                            {message.isBot ? (
                              <Bot className="w-3 h-3" />
                            ) : (
                              <User className="w-3 h-3" />
                            )}
                            <span className="text-xs opacity-75">
                              {message.isBot ? 'Assistant' : 'You'}
                            </span>
                          </div>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask about our services..."
                      className="flex-1"
                    />
                    <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
