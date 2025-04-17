
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Search, Filter, CheckCircle, Shield } from 'lucide-react';
import AdoptionCard from '@/components/AdoptionCard';
import LivestockCard from '@/components/LivestockCard';

const Adoption = () => {
  useGsapAnimations();
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-12">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">Adoption & Trading</h1>
          <p className="text-gray-600 max-w-2xl">
            Find your perfect pet companion or buy and sell healthy livestock with our verified listings.
            All listings undergo our verification process to ensure animal health and seller legitimacy.
          </p>
        </div>
        
        {/* Verification Badge Explanation */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 sm:w-1/2">
            <CheckCircle size={24} className="text-pet-green" />
            <div>
              <h3 className="font-medium">Verified Pet Listings</h3>
              <p className="text-sm text-gray-600">All pets have been checked for health issues and vaccinations</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:w-1/2">
            <Shield size={24} className="text-pet-brown" />
            <div>
              <h3 className="font-medium">Trusted Sellers</h3>
              <p className="text-sm text-gray-600">All sellers undergo our verification process</p>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search pets or livestock..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative md:col-span-1">
              <Input placeholder="Location" />
            </div>
            <Button className="bg-pet-green hover:bg-pet-green/90">
              <Search className="mr-2" size={16} />
              Search
            </Button>
          </div>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="pets" className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="pets">Pet Adoption</TabsTrigger>
            <TabsTrigger value="livestock">Livestock Trading</TabsTrigger>
          </TabsList>
          
          {/* Filter options */}
          <div className="flex justify-end mt-6 mb-4">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-1" /> 
              Filter
            </Button>
          </div>
          
          <TabsContent value="pets" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockPetListings.map((pet) => (
                <AdoptionCard 
                  key={pet.id}
                  name={pet.name}
                  type={pet.type}
                  age={pet.age}
                  location={pet.location}
                  image={pet.image}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="livestock" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockLivestockListings.map((livestock) => (
                <LivestockCard 
                  key={livestock.id}
                  livestock={livestock}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

// Mock data for pet adoption listings
const mockPetListings = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog - Labrador",
    age: "2 years",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat - Persian",
    age: "1 year",
    location: "Abuja",
    image: "https://images.unsplash.com/photo-1631499420583-9b30fcd3fe78?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 3,
    name: "Rex",
    type: "Dog - German Shepherd",
    age: "3 years",
    location: "Port Harcourt",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat - Mixed",
    age: "6 months",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 5,
    name: "Rocky",
    type: "Dog - Mixed",
    age: "4 years",
    location: "Ibadan",
    image: "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 6,
    name: "Coco",
    type: "Rabbit - Holland Lop",
    age: "1 year",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1695805311468-f8b9399297d4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 7,
    name: "Charlie",
    type: "Parrot - African Grey",
    age: "5 years",
    location: "Abuja",
    image: "https://images.unsplash.com/photo-1576001396458-10e496626bb0?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  },
  {
    id: 8,
    name: "Max",
    type: "Dog - Rottweiler",
    age: "2 years",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1491930722919-a5fc9ad49a75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true
  }
];

// Mock data for livestock listings
const mockLivestockListings = [
  {
    id: 1,
    name: "White Leghorn Chickens",
    type: "Poultry",
    breed: "White Leghorn",
    quantity: 25,
    age: "6 months",
    price: "₦3,500 each",
    location: "Lagos",
    image: "https://source.unsplash.com/featured/?chicken",
    seller: "John's Poultry Farm",
    verified: true,
    description: "Healthy egg-laying White Leghorn chickens. Vaccinated and dewormed regularly."
  },
  {
    id: 2,
    name: "Sahiwal Cow",
    type: "Cattle",
    breed: "Sahiwal",
    quantity: 1,
    age: "3 years",
    price: "₦350,000",
    location: "Kaduna",
    image: "https://source.unsplash.com/featured/?cow",
    seller: "Heritage Farms",
    verified: true,
    description: "Healthy milk-producing Sahiwal cow. Well-fed and disease-free."
  },
  {
    id: 3,
    name: "Boer Goats",
    type: "Goats",
    breed: "Boer",
    quantity: 4,
    age: "1-2 years",
    price: "₦75,000 each",
    location: "Ibadan",
    image: "https://source.unsplash.com/featured/?goat",
    seller: "Green Meadows",
    verified: true,
    description: "Healthy Boer goats for meat production. Good genetics and well-maintained."
  }
];

export default Adoption;
