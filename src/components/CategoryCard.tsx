
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor?: string;
}

const CategoryCard = ({ title, description, image, link, bgColor = 'bg-white' }: CategoryCardProps) => {
  return (
    <Link to={link} className="block">
      <div className={`rounded-2xl overflow-hidden shadow-md card-hover ${bgColor}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-pet-brown">{title}</h3>
          <p className="text-gray-600 mb-3 text-sm">{description}</p>
          <div className="flex justify-end">
            <span className="text-pet-orange font-medium flex items-center">
              Browse Products
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
