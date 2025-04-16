
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-pet-orange mr-1">Pet Palace</span> 
              <span className="text-pet-gold">Nigeria</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Your one-stop platform for pet and farm animal products, services, and resources in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-pet-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-pet-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-pet-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-pet-orange transition-colors">Home</Link></li>
              <li><Link to="/pet-products" className="hover:text-pet-orange transition-colors">Pet Products</Link></li>
              <li><Link to="/farm-animals" className="hover:text-pet-orange transition-colors">Farm Animals</Link></li>
              <li><Link to="/services" className="hover:text-pet-orange transition-colors">Services</Link></li>
              <li><Link to="/adoption" className="hover:text-pet-orange transition-colors">Adoption</Link></li>
              <li><Link to="/community" className="hover:text-pet-orange transition-colors">Community</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/faq" className="hover:text-pet-orange transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-pet-orange transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-pet-orange transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/terms" className="hover:text-pet-orange transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-pet-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-pet-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-pet-orange flex-shrink-0 mt-1" />
                <span>23 Akin Adesola Street, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-pet-orange flex-shrink-0" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-pet-orange flex-shrink-0" />
                <a href="mailto:info@petpalacenigeria.com" className="hover:text-pet-orange transition-colors">
                  info@petpalacenigeria.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">Paystack</span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">Flutterwave</span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">Visa</span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">Mastercard</span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">Bank Transfer</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8">
          <p>&copy; {new Date().getFullYear()} Pet Palace Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
