import { Youtube, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    "Home",
    "About Us", 
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Cookies Setting"
  ];

  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-primary to-ocean-secondary rounded-full flex items-center justify-center">
                <div className="text-white text-lg">🏝️</div>
              </div>
            </div>
            <span className="text-2xl font-bold">Beachory</span>
          </div>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="hover:text-ocean-light transition-colors duration-200"
            >
              // {link}
            </a>
          ))}
        </nav>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-ocean-light transition-colors duration-200">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-ocean-light transition-colors duration-200">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-ocean-light transition-colors duration-200">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-300">
          © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;