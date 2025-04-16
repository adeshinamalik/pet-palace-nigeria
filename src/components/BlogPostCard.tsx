
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

const BlogPostCard = ({ title, excerpt, image, date, category, link }: BlogPostCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-pet-beige text-pet-brown text-xs font-medium px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Calendar size={14} className="mr-1" />
              {date}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-pet-brown">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
