
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ShoppingCart, User, Search,
  Dog, Cow, Stethoscope, Users, Heart
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
            <button className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center">
              <Dog size={18} className="mr-1" /> Pet Products
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 min-w-[200px] z-10">
              <Link to="/products/dogs" className="block py-2 hover:text-pet-orange">Dogs</Link>
              <Link to="/products/cats" className="block py-2 hover:text-pet-orange">Cats</Link>
              <Link to="/products/birds" className="block py-2 hover:text-pet-orange">Birds</Link>
              <Link to="/products/fish" className="block py-2 hover:text-pet-orange">Fish</Link>
            </div>
          </div>
          
          <div className="group relative">
            <button className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center">
              <Cow size={18} className="mr-1" /> Farm Animals
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 min-w-[200px] z-10">
              <Link to="/products/cattle" className="block py-2 hover:text-pet-orange">Cattle</Link>
              <Link to="/products/poultry" className="block py-2 hover:text-pet-orange">Poultry</Link>
              <Link to="/products/goats" className="block py-2 hover:text-pet-orange">Goats & Sheep</Link>
              <Link to="/products/fish-farm" className="block py-2 hover:text-pet-orange">Fish Farming</Link>
            </div>
          </div>
          
          <Link to="/services" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center">
            <Stethoscope size={18} className="mr-1" /> Services
          </Link>
          
          <Link to="/community" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center">
            <Users size={18} className="mr-1" /> Community
          </Link>
          
          <Link to="/adoption" className="text-gray-700 hover:text-pet-orange transition-colors font-medium flex items-center">
            <Heart size={18} className="mr-1" /> Adoption
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-pet-orange transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="text-gray-600 hover:text-pet-orange transition-colors">
            <ShoppingCart size={20} />
          </Link>
          <Button className="btn-primary flex items-center space-x-2">
            <User size={16} />
            <span>Sign In</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 py-2 border-b border-gray-200">Home</Link>
            <Link to="/products/dogs" className="text-gray-700 py-2 border-b border-gray-200 flex items-center">
              <Dog size={18} className="mr-2" /> Pet Products
            </Link>
            <Link to="/products/cattle" className="text-gray-700 py-2 border-b border-gray-200 flex items-center">
              <Cow size={18} className="mr-2" /> Farm Animals
            </Link>
            <Link to="/services" className="text-gray-700 py-2 border-b border-gray-200 flex items-center">
              <Stethoscope size={18} className="mr-2" /> Services
            </Link>
            <Link to="/community" className="text-gray-700 py-2 border-b border-gray-200 flex items-center">
              <Users size={18} className="mr-2" /> Community
            </Link>
            <Link to="/adoption" className="text-gray-700 py-2 border-b border-gray-200 flex items-center">
              <Heart size={18} className="mr-2" /> Adoption
            </Link>
            <div className="flex items-center justify-between pt-2">
              <button className="text-gray-600">
                <Search size={20} />
              </button>
              <Link to="/cart" className="text-gray-600">
                <ShoppingCart size={20} />
              </Link>
              <Button className="btn-primary flex items-center space-x-2">
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
