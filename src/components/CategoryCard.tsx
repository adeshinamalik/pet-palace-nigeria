import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor?: string;
}

const CategoryCard = ({ title, description, image, link, bgColor = "bg-white" }: CategoryCardProps) => {
  return (
    <div className={`category-card rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${bgColor}`}>
      <Link to={link} className="block">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-pet-brown">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
