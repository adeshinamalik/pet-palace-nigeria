import React from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import CategoryCard from '@/components/CategoryCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dog, Cat, Bird, Fish, Tractor, Utensils, Heart, Users } from 'lucide-react';

const Products = () => {
  useGsapAnimations();

  const petCategories = [
    {
      title: "Dogs",
      description: "Find everything for your canine companion",
      image: "https://images.unsplash.com/photo-1710270139070-a9da91782831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/dogs",
      icon: <Dog className="text-pet-orange" />,
      bgColor: "bg-[#FEF7CD]"
    },
    {
      title: "Cats",
      description: "Purr-fect products for your feline friends",
      image: "https://images.unsplash.com/photo-1631499420583-9b30fcd3fe78?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/cats",
      icon: <Cat className="text-pet-brown" />,
      bgColor: "bg-[#FDE1D3]"
    },
    {
      title: "Birds",
      description: "Everything for your feathered friends",
      image: "https://images.unsplash.com/photo-1567113859810-1a93e49fb68a?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/birds",
      icon: <Bird className="text-pet-green" />,
      bgColor: "bg-[#F2FCE2]"
    },
    {
      title: "Fish",
      description: "Aquatic essentials and accessories",
      image: "https://images.unsplash.com/photo-1708368662902-fbe7fef8d4b9?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/fish",
      icon: <Fish className="text-pet-blue" />,
      bgColor: "bg-[#D3E4FD]"
    }
  ];

  const farmCategories = [
    {
      title: "Cattle",
      description: "Products for cattle care and management",
      image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/cattle",
      icon: <Tractor className="text-pet-brown" />,
      bgColor: "bg-[#F1F0FB]"
    },
    {
      title: "Poultry",
      description: "Everything for your poultry farm",
      image: "https://images.unsplash.com/photo-1595344073133-7549ea4c7981?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/poultry",
      icon: <Bird className="text-pet-orange" />,
      bgColor: "bg-[#FFDEE2]"
    },
    {
      title: "Farm Supplies",
      description: "Essential supplies for farm animals",
      image: "https://images.unsplash.com/photo-1717224240119-42f94d383104?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/farm-supplies",
      icon: <Utensils className="text-pet-green" />,
      bgColor: "bg-[#E5DEFF]"
    },
    {
      title: "Animal Care",
      description: "Health and wellness products",
      image: "https://images.unsplash.com/photo-1590839823121-c253bf8d1e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/animal-care",
      icon: <Heart className="text-pet-terracotta" />,
      bgColor: "bg-[#FEC6A1]"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-12">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">Our Categories</h1>
          <p className="text-gray-600 max-w-2xl">Discover our wide range of products for both pets and farm animals. From food to accessories, we've got everything you need.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pet-brown mb-6 flex items-center gap-2">
            <Users className="text-pet-orange" />
            Pet Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {petCategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                link={category.link}
                bgColor={category.bgColor}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pet-brown mb-6 flex items-center gap-2">
            <Tractor className="text-pet-brown" />
            Farm Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmCategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                link={category.link}
                bgColor={category.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
