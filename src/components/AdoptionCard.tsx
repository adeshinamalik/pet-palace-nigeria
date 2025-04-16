
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdoptionCardProps {
  name: string;
  type: string;
  age: string;
  location: string;
  image: string;
}

const AdoptionCard = ({ name, type, age, location, image }: AdoptionCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-48 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:text-pet-terracotta transition-colors">
          <Heart size={18} className="text-pet-terracotta" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-pet-brown">{name}</h3>
          <span className="bg-pet-beige text-pet-brown text-xs font-medium px-2 py-1 rounded">
            {type}
          </span>
        </div>
        <div className="flex items-center gap-x-4 mb-4">
          <span className="text-sm text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Age: {age}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {location}
          </span>
        </div>
        <Button className="w-full btn-primary">View Details</Button>
      </div>
    </div>
  );
};

export default AdoptionCard;
