
import React from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Building, Tractor, Cat, Dog, UserCircle, ShieldCheck, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

const AccessGroups = () => {
  useGsapAnimations();

  const accessGroups = [
    {
      id: 'pet-owners',
      title: "Pet Owners",
      description: "Urban residents with dogs, cats, birds, and other pets looking for supplies and services.",
      icon: <Dog className="text-pet-green" />,
      members: "45% of users",
      features: ["Product purchases", "Service bookings", "Pet community forums", "Adoption listings"],
      color: "bg-[#F2FCE2]"
    },
    {
      id: 'farmers',
      title: "Farm Animal Owners",
      description: "Smallholder and commercial farmers managing livestock across Nigeria.",
      icon: <Tractor className="text-pet-brown" />,
      members: "30% of users",
      features: ["Farm supplies", "Livestock specialists", "Animal trading", "Agricultural resources"],
      color: "bg-[#FDF7E7]"
    },
    {
      id: 'service-providers',
      title: "Service Providers",
      description: "Veterinarians, groomers, trainers, and livestock specialists offering professional services.",
      icon: <UserCircle className="text-pet-blue" />,
      members: "15% of users",
      features: ["Service listings", "Booking management", "Professional profiles", "Client communication"],
      color: "bg-[#E5F2FE]"
    },
    {
      id: 'vendors',
      title: "Vendors (Product Sellers)",
      description: "Businesses and entrepreneurs selling pet and farm animal products on the platform.",
      icon: <Building className="text-pet-orange" />,
      members: "10% of users",
      features: ["Product listings", "Inventory management", "Order fulfillment", "Seller analytics"],
      color: "bg-[#FEF2E6]"
    },
    {
      id: 'admin',
      title: "Administrators & Moderators",
      description: "Platform management team ensuring quality content and user experience.",
      icon: <ShieldCheck className="text-pet-terracotta" />,
      members: "< 1% of users",
      features: ["User management", "Content moderation", "Platform analytics", "System configuration"],
      color: "bg-[#F1F1FB]"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pet-brown mb-4">Access Groups</h1>
          <p className="text-gray-600 max-w-2xl">
            Pet Palace serves various user groups across Nigeria, each with specific needs and access levels. 
            Explore how different users interact with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessGroups.map((group) => (
            <Card key={group.id} className={`overflow-hidden border-none ${group.color}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-full">
                    {group.icon}
                  </div>
                  <h2 className="text-xl font-bold">{group.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-4">{group.description}</p>
                
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Users size={16} className="mr-2" />
                  {group.members}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {group.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ChevronRight size={16} className="mr-2 text-pet-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/access-groups/${group.id}`} className="flex items-center justify-center">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-pet-brown mb-6">Geographic Reach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-pet-green" />
                  <div>
                    <p className="font-medium">Urban Centers</p>
                    <p className="text-xs text-gray-500">Lagos, Abuja, Port Harcourt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-pet-blue" />
                  <div>
                    <p className="font-medium">Peri-Urban</p>
                    <p className="text-xs text-gray-500">Suburban areas around major cities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-pet-brown" />
                  <div>
                    <p className="font-medium">Rural Areas</p>
                    <p className="text-xs text-gray-500">Agricultural regions nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-pet-orange" />
                  <div>
                    <p className="font-medium">Trading Hubs</p>
                    <p className="text-xs text-gray-500">Markets and commercial centers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessGroups;
