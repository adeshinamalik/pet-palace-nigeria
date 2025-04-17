
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import ServiceProviderCard from '@/components/ServiceProviderCard';
import ServiceMap from '@/components/ServiceMap';

const ServiceDirectory = () => {
  useGsapAnimations();
  const [view, setView] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Lagos, Nigeria');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-12">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">Service Directory</h1>
          <p className="text-gray-600 max-w-2xl">
            Find trusted veterinarians, groomers, trainers, and agricultural specialists near you.
            Book appointments and read verified reviews from other pet and farm animal owners.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search services..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Location" 
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button className="bg-pet-green hover:bg-pet-green/90">
              <Search className="mr-2" size={16} />
              Search
            </Button>
          </div>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="veterinarians" className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="veterinarians">Veterinarians</TabsTrigger>
            <TabsTrigger value="groomers">Pet Groomers</TabsTrigger>
            <TabsTrigger value="trainers">Pet Trainers</TabsTrigger>
            <TabsTrigger value="farm-specialists">Farm Animal Specialists</TabsTrigger>
            <TabsTrigger value="boarding">Pet Boarding</TabsTrigger>
          </TabsList>
          
          {/* View Toggle */}
          <div className="flex justify-between items-center mt-6 mb-4">
            <h2 className="text-xl font-semibold">Available Services</h2>
            <div className="flex gap-2">
              <Button 
                variant={view === 'list' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setView('list')}
                className={view === 'list' ? 'bg-pet-green hover:bg-pet-green/90' : ''}
              >
                List View
              </Button>
              <Button 
                variant={view === 'map' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setView('map')}
                className={view === 'map' ? 'bg-pet-green hover:bg-pet-green/90' : ''}
              >
                Map View
              </Button>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-1" /> 
                Filter
              </Button>
            </div>
          </div>
          
          <TabsContent value="veterinarians" className="mt-4">
            {view === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVeterinarians.map((provider) => (
                  <ServiceProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            ) : (
              <ServiceMap providers={mockVeterinarians} currentLocation={location} />
            )}
          </TabsContent>
          
          <TabsContent value="groomers" className="mt-4">
            {view === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockGroomers.map((provider) => (
                  <ServiceProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            ) : (
              <ServiceMap providers={mockGroomers} currentLocation={location} />
            )}
          </TabsContent>
          
          <TabsContent value="trainers" className="mt-4">
            <div className="text-center py-12">
              <p className="text-gray-500">Coming soon! We're adding pet trainers to our directory.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="farm-specialists" className="mt-4">
            {view === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFarmSpecialists.map((provider) => (
                  <ServiceProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            ) : (
              <ServiceMap providers={mockFarmSpecialists} currentLocation={location} />
            )}
          </TabsContent>
          
          <TabsContent value="boarding" className="mt-4">
            <div className="text-center py-12">
              <p className="text-gray-500">Coming soon! We're adding boarding services to our directory.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

// Mock data for service providers
const mockVeterinarians = [
  {
    id: 1,
    name: "Dr. Adesina Veterinary Clinic",
    profession: "Veterinarian",
    specialty: "Small Animals",
    image: "https://source.unsplash.com/featured/?veterinarian",
    rating: 4.8,
    reviewCount: 56,
    location: "Lagos, Nigeria",
    distance: "2.3 km",
    services: ["Checkups", "Surgery", "Vaccinations"],
    pricing: "₦5,000 - ₦20,000",
    available: true
  },
  {
    id: 2,
    name: "Paws & Claws Animal Hospital",
    profession: "Veterinarian",
    specialty: "General Practice",
    image: "https://source.unsplash.com/featured/?animal,hospital",
    rating: 4.6,
    reviewCount: 42,
    location: "Lagos, Nigeria",
    distance: "3.5 km",
    services: ["Emergency Care", "Dental", "Preventive Care"],
    pricing: "₦6,000 - ₦25,000",
    available: true
  },
  {
    id: 3,
    name: "Dr. Johnson's Pet Clinic",
    profession: "Veterinarian",
    specialty: "Exotic Pets",
    image: "https://source.unsplash.com/featured/?exotic,pets",
    rating: 4.7,
    reviewCount: 38,
    location: "Abuja, Nigeria",
    distance: "Online Consultations",
    services: ["Specialty Care", "Digital X-rays", "Lab Services"],
    pricing: "₦7,000 - ₦30,000",
    available: false
  }
];

const mockGroomers = [
  {
    id: 4,
    name: "Fluffy Friends Grooming Spa",
    profession: "Pet Groomer",
    specialty: "All Breeds",
    image: "https://source.unsplash.com/featured/?dog,grooming",
    rating: 4.9,
    reviewCount: 87,
    location: "Lagos, Nigeria",
    distance: "1.8 km",
    services: ["Full Grooming", "Bathing", "Nail Trimming"],
    pricing: "₦3,500 - ₦12,000",
    available: true
  },
  {
    id: 5,
    name: "Pampered Pets Mobile Grooming",
    profession: "Pet Groomer",
    specialty: "Mobile Services",
    image: "https://source.unsplash.com/featured/?mobile,pet,grooming",
    rating: 4.7,
    reviewCount: 63,
    location: "Lagos, Nigeria",
    distance: "Home Service",
    services: ["In-home Grooming", "Special Treatments", "Sensitive Skin Care"],
    pricing: "₦5,000 - ₦15,000",
    available: true
  }
];

const mockFarmSpecialists = [
  {
    id: 6,
    name: "Nigeria Agricultural Services",
    profession: "Farm Specialist",
    specialty: "Cattle & Poultry",
    image: "https://source.unsplash.com/featured/?farm,cattle",
    rating: 4.6,
    reviewCount: 29,
    location: "Lagos, Nigeria",
    distance: "15.2 km",
    services: ["Livestock Health", "Breeding Consultation", "Farm Visits"],
    pricing: "₦10,000 - ₦50,000",
    available: true
  },
  {
    id: 7,
    name: "Dr. Ngozi's Livestock Care",
    profession: "Farm Specialist",
    specialty: "Large Animals",
    image: "https://source.unsplash.com/featured/?livestock,farm",
    rating: 4.8,
    reviewCount: 41,
    location: "Abuja, Nigeria",
    distance: "Remote Consultations",
    services: ["Herd Management", "Medical Treatment", "Nutrition Planning"],
    pricing: "₦15,000 - ₦75,000",
    available: false
  }
];

export default ServiceDirectory;
