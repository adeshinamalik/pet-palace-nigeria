
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Calendar, Clock, Check } from 'lucide-react';

interface ServiceProvider {
  id: number;
  name: string;
  profession: string;
  specialty: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  services: string[];
  pricing: string;
  available: boolean;
}

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

const ServiceProviderCard = ({ provider }: ServiceProviderCardProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-40 bg-gray-200">
            <img 
              src={provider.image} 
              alt={provider.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {provider.available && (
            <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
              <Check size={14} className="mr-1" /> Available
            </Badge>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src={provider.image} alt={provider.name} />
                <AvatarFallback>{getInitials(provider.name)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">{provider.name}</h3>
                <p className="text-sm text-gray-500">{provider.profession} • {provider.specialty}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-amber-500 mr-2">
              <Star size={14} className="fill-amber-500" />
              <span className="ml-1 text-sm font-medium">{provider.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({provider.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-2 text-sm">
            <MapPin size={14} className="mr-1.5" />
            <span>{provider.location}</span>
            <span className="mx-2">•</span>
            <span>{provider.distance}</span>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1.5">Services:</h4>
            <div className="flex flex-wrap gap-1">
              {provider.services.map((service, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="font-medium">Price range:</span>
              <span className="ml-1 text-gray-600">{provider.pricing}</span>
            </div>
            {provider.available && (
              <div className="flex items-center text-green-600">
                <Clock size={14} className="mr-1" />
                <span>Available today</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/services/provider/${provider.id}`}>View Profile</Link>
        </Button>
        <Button className="bg-pet-green hover:bg-pet-green/90" asChild>
          <Link to={`/services/booking/${provider.id}`}>
            <Calendar size={16} className="mr-2" />
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceProviderCard;
