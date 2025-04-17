import React from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Scissors, Bath, Stethoscope, GraduationCap, 
  MapPin, Truck, PawPrint, ShoppingBag 
} from 'lucide-react';

const Services = () => {
  useGsapAnimations();

  const petServices = [
    {
      title: "Grooming",
      description: "Professional grooming services for all types of pets",
      icon: <Scissors className="h-6 w-6" />,
      link: "/services/grooming"
    },
    {
      title: "Pet Spa",
      description: "Relaxing spa treatments designed for your furry friends",
      icon: <Bath className="h-6 w-6" />,
      link: "/services/pet-spa"
    },
    {
      title: "Veterinary Care",
      description: "Expert health services from licensed veterinarians",
      icon: <Stethoscope className="h-6 w-6" />,
      link: "/services/veterinary"
    },
    {
      title: "Training",
      description: "Behavioral training and obedience classes for pets",
      icon: <GraduationCap className="h-6 w-6" />,
      link: "/services/training"
    }
  ];

  const additionalServices = [
    {
      title: "Pet Delivery",
      description: "Safe and comfortable delivery of pets to your doorstep",
      icon: <Truck className="h-6 w-6" />,
      link: "/services/delivery"
    },
    {
      title: "Pet Walking",
      description: "Regular exercise and outdoor activities for your pets",
      icon: <PawPrint className="h-6 w-6" />,
      link: "/services/walking"
    },
    {
      title: "Pet Shop",
      description: "Wide range of pet accessories, food, and more",
      icon: <ShoppingBag className="h-6 w-6" />,
      link: "/services/shop"
    },
    {
      title: "Pet-Friendly Locations",
      description: "Find pet-friendly parks, cafes, and hotels near you",
      icon: <MapPin className="h-6 w-6" />,
      link: "/services/locations"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pet-brown mb-4 service-heading">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto service-description">
            At Pet Palace Nigeria, we provide a wide range of professional services 
            for both pets and farm animals, ensuring they receive the best care possible.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-pet-brown mb-6 service-section-title">Pet Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {petServices.map((service, index) => (
              <div key={service.title} className="service-card">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-pet-brown mb-6 service-section-title">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={service.title} className="service-card">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-pet-beige bg-opacity-20 rounded-xl p-8 mb-12 service-highlight">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-semibold text-pet-brown mb-4">
                Customized Care Programs
              </h2>
              <p className="text-gray-600 mb-4">
                We understand that each pet and farm animal has unique needs. 
                That's why we offer customized care programs tailored specifically to your animals.
              </p>
              <p className="text-gray-600">
                Our team of experts will work with you to develop a comprehensive care plan 
                that addresses all your animal's needs, from nutrition to exercise and healthcare.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://source.unsplash.com/featured/?veterinarian" 
                alt="Customized care" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center service-cta">
          <h2 className="text-2xl font-semibold text-pet-brown mb-4">Ready to Book a Service?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule any of our professional services for your pets or farm animals.
          </p>
          <button className="bg-pet-orange hover:bg-pet-terracotta text-white font-medium py-3 px-6 rounded-full transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
