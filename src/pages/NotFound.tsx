
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=400" 
            alt="Sad pet" 
            className="w-48 h-48 object-cover mx-auto rounded-full border-4 border-pet-orange shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pet-brown">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pet-brown">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Oops! It seems the page you're looking for has gone missing. Maybe it's out chasing balls or hunting mice.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/" className="flex items-center">
            Return to Homepage
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
