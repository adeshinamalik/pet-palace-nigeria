
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ShoppingCart, User, Search,
  Dog, Utensils, Stethoscope, Users, Heart, BookOpen, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-pet-orange text-2xl font-bold">
            Pet Palace
          </span>
          <span className="text-pet-green font-semibold">Nigeria</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-pet-orange transition-colors font-medium">Home</Link>
          
          <div className="group relative">
            <button className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center group-hover:scale-105 transition-transform">
              <Dog size={18} className="mr-1 text-pet-orange" /> Pet Products
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-xl p-4 min-w-[200px] z-10 animate-fade-in border border-pet-beige">
              <Link to="/products/dogs" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Dogs</Link>
              <Link to="/products/cats" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Cats</Link>
              <Link to="/products/birds" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Birds</Link>
              <Link to="/products/fish" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Fish</Link>
            </div>
          </div>
          
          <div className="group relative">
            <button className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center group-hover:scale-105 transition-transform">
              <Utensils size={18} className="mr-1 text-pet-brown" /> Farm Animals
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-xl p-4 min-w-[200px] z-10 animate-fade-in border border-pet-beige">
              <Link to="/products/cattle" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Cattle</Link>
              <Link to="/products/poultry" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Poultry</Link>
              <Link to="/products/goats" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Goats & Sheep</Link>
              <Link to="/products/fish-farm" className="block py-2 hover:text-pet-orange hover:pl-2 transition-all">Fish Farming</Link>
            </div>
          </div>
          
          <Link to="/services" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center hover:scale-105 transition-transform">
            <Stethoscope size={18} className="mr-1 text-pet-green" /> Services
          </Link>
          
          <Link to="/community" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center hover:scale-105 transition-transform">
            <BookOpen size={18} className="mr-1 text-pet-gold" /> Community
          </Link>
          
          <Link to="/adoption" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center hover:scale-105 transition-transform">
            <Heart size={18} className="mr-1 text-pet-terracotta" /> Adoption
          </Link>
          
          <Link to="/access-groups" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center hover:scale-105 transition-transform">
            <Info size={18} className="mr-1 text-blue-500" /> Access Info
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-pet-orange transition-colors hover:scale-110 transition-transform">
            <Search size={20} />
          </button>
          <Link to="/cart" className="text-gray-600 hover:text-pet-orange transition-colors relative hover:scale-110 transition-transform">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-pet-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </Link>
          <Button className="bg-pet-green hover:bg-pet-green/90 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center space-x-2 hover:shadow-md">
            <User size={16} />
            <span>Sign In</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-pet-orange transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 py-2 border-b border-gray-200 hover:text-pet-orange transition-colors">Home</Link>
            <div className="py-2 border-b border-gray-200">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center text-gray-700">
                  <Dog size={18} className="mr-2 text-pet-orange" /> Pet Products
                </div>
              </div>
              <div className="pl-8 mt-2 space-y-1">
                <Link to="/products/dogs" className="block py-1 text-gray-600 hover:text-pet-orange">Dogs</Link>
                <Link to="/products/cats" className="block py-1 text-gray-600 hover:text-pet-orange">Cats</Link>
                <Link to="/products/birds" className="block py-1 text-gray-600 hover:text-pet-orange">Birds</Link>
                <Link to="/products/fish" className="block py-1 text-gray-600 hover:text-pet-orange">Fish</Link>
              </div>
            </div>
            <div className="py-2 border-b border-gray-200">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center text-gray-700">
                  <Utensils size={18} className="mr-2 text-pet-brown" /> Farm Animals
                </div>
              </div>
              <div className="pl-8 mt-2 space-y-1">
                <Link to="/products/cattle" className="block py-1 text-gray-600 hover:text-pet-orange">Cattle</Link>
                <Link to="/products/poultry" className="block py-1 text-gray-600 hover:text-pet-orange">Poultry</Link>
                <Link to="/products/goats" className="block py-1 text-gray-600 hover:text-pet-orange">Goats & Sheep</Link>
                <Link to="/products/fish-farm" className="block py-1 text-gray-600 hover:text-pet-orange">Fish Farming</Link>
              </div>
            </div>
            <Link to="/services" className="text-gray-700 py-2 border-b border-gray-200 flex items-center hover:text-pet-orange transition-colors">
              <Stethoscope size={18} className="mr-2 text-pet-green" /> Services
            </Link>
            <Link to="/community" className="text-gray-700 py-2 border-b border-gray-200 flex items-center hover:text-pet-orange transition-colors">
              <BookOpen size={18} className="mr-2 text-pet-gold" /> Community
            </Link>
            <Link to="/adoption" className="text-gray-700 py-2 border-b border-gray-200 flex items-center hover:text-pet-orange transition-colors">
              <Heart size={18} className="mr-2 text-pet-terracotta" /> Adoption
            </Link>
            <Link to="/access-groups" className="text-gray-700 py-2 border-b border-gray-200 flex items-center hover:text-pet-orange transition-colors">
              <Info size={18} className="mr-2 text-blue-500" /> Access Info
            </Link>
            <div className="flex items-center justify-between pt-2">
              <button className="text-gray-600 hover:text-pet-orange transition-colors">
                <Search size={20} />
              </button>
              <Link to="/cart" className="text-gray-600 hover:text-pet-orange transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-pet-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              </Link>
              <Button className="bg-pet-green hover:bg-pet-green/90 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center space-x-2">
                <User size={16} />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
