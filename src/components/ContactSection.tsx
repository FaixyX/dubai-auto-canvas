import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import WorkshopMap from '@/components/WorkshopMap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.location) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your phone number and location.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 15 minutes to confirm your service.",
    });
    setFormData({ name: '', phone: '', service: '', location: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for professional auto service? Contact us now for immediate assistance with tyre repairing in Dubai and other automotive needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Service</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    placeholder="+971 55 656 3205"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Needed</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tyre">Tyre Repair/Replacement</SelectItem>
                      <SelectItem value="wash">Car Wash</SelectItem>
                      <SelectItem value="denting">Denting/Painting</SelectItem>
                      <SelectItem value="mechanical">Mechanical Service</SelectItem>
                      <SelectItem value="electrical">Electrical Service</SelectItem>
                      <SelectItem value="roadside">Emergency Roadside</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">Your Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    placeholder="Dubai Marina, JBR, Downtown, etc."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    placeholder="Describe your issue or specific requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <p className="text-red-100">+971 55 656 3205</p>
                </CardContent>
              </Card>

              <Card className="bg-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.297"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">WhatsApp</h4>
                  <p className="text-green-100">Quick Response</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Available</h4>
                  <p className="text-blue-100">24/7 Service</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="text-gray-300">gocarautoservice@gmail.com</p>
                </CardContent>
              </Card>
            </div>

            {/* Workshop Locations Map */}
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-800 text-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-6 h-6 text-red-500" />
                    <h4 className="text-xl font-bold">Our Workshop Location</h4>
                  </div>
                </div>
                <WorkshopMap />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
