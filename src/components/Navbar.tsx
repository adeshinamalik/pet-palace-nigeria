
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Menu, 
  X as Close, 
  ShoppingCart, 
  ChevronDown, 
  User,
  Package,
  LogOut,
  Heart 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "@/components/ui/sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleSignOut = () => {
    signOut();
    toast.success("Signed out successfully");
    setIsDropdownOpen(false);
  };
  
  const handleNavToAccount = (tab = "profile") => {
    navigate('/account', { state: { activeTab: tab } });
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-pet-green">Pet Palace</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-pet-green transition ${isActive('/') ? 'text-pet-green font-medium' : ''}`}>Home</Link>
            <Link to="/products" className={`hover:text-pet-green transition ${isActive('/products') || location.pathname.startsWith('/products/') ? 'text-pet-green font-medium' : ''}`}>Products</Link>
            <Link to="/services" className={`hover:text-pet-green transition ${isActive('/services') ? 'text-pet-green font-medium' : ''}`}>Services</Link>
            <Link to="/adoption" className={`hover:text-pet-green transition ${isActive('/adoption') ? 'text-pet-green font-medium' : ''}`}>Adoption</Link>
            <Link to="/community" className={`hover:text-pet-green transition ${isActive('/community') ? 'text-pet-green font-medium' : ''}`}>Community</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-pet-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {user ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-gray-100"
                  onClick={toggleDropdown}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.name}`} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium hidden lg:inline">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={16} />
                </Button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleNavToAccount("profile")}
                      >
                        <User size={16} className="mr-2" />
                        My Account
                      </button>
                      <button
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleNavToAccount("orders")}
                      >
                        <Package size={16} className="mr-2" />
                        Orders
                      </button>
                      <button
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleNavToAccount("favorites")}
                      >
                        <Heart size={16} className="mr-2" />
                        Favorites
                      </button>
                      <button
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        role="menuitem"
                        onClick={handleSignOut}
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="outline" size="icon" className="rounded-full relative mr-2">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-pet-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <Close size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`hover:text-pet-green transition ${isActive('/') ? 'text-pet-green font-medium' : ''}`} onClick={closeMenu}>Home</Link>
              <Link to="/products" className={`hover:text-pet-green transition ${isActive('/products') ? 'text-pet-green font-medium' : ''}`} onClick={closeMenu}>Products</Link>
              <Link to="/services" className={`hover:text-pet-green transition ${isActive('/services') ? 'text-pet-green font-medium' : ''}`} onClick={closeMenu}>Services</Link>
              <Link to="/adoption" className={`hover:text-pet-green transition ${isActive('/adoption') ? 'text-pet-green font-medium' : ''}`} onClick={closeMenu}>Adoption</Link>
              <Link to="/community" className={`hover:text-pet-green transition ${isActive('/community') ? 'text-pet-green font-medium' : ''}`} onClick={closeMenu}>Community</Link>
              
              {user ? (
                <>
                  <button
                    className="flex items-center hover:text-pet-green transition text-left"
                    onClick={() => {
                      handleNavToAccount("profile");
                      closeMenu();
                    }}
                  >
                    <User size={18} className="mr-2" />
                    My Account
                  </button>
                  <button 
                    className="flex items-center text-left text-red-600 hover:text-red-700" 
                    onClick={() => {
                      handleSignOut();
                      closeMenu();
                    }}
                  >
                    <LogOut size={18} className="mr-2" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/auth" className="bg-pet-green text-white py-2 px-4 rounded text-center hover:bg-pet-green/90 transition" onClick={closeMenu}>
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
