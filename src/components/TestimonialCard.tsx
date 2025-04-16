
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, position, testimonial, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md relative">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-pet-gold fill-pet-gold" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-bold text-pet-brown">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-pet-orange rounded-full flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;
