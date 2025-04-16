
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg p-6 shadow-md card-hover border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-pet-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
            <div className="text-pet-green">{icon}</div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-pet-brown">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <span className="text-pet-green font-medium inline-flex items-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
