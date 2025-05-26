
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/4482cf2e-cf02-41d5-89ea-f4d89f3ad503.png" 
              alt="Go Car Auto Service" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Dubai's premier automotive service provider, offering 24/7 mobile and workshop services. 
              Trusted by thousands of satisfied customers across the UAE.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <span className="text-sm">📘</span>
              </button>
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <span className="text-sm">📸</span>
              </button>
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <span className="text-sm">📱</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-red-500">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +971 XX XXX XXXX</li>
              <li>📧 info@gocar.ae</li>
              <li>📍 Al Quoz Industrial Area, Dubai</li>
              <li>🕒 24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Go Car Auto Service. All rights reserved. | Proudly serving Dubai since 2019
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
