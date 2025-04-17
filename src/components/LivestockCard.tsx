
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ShieldCheck, Info } from 'lucide-react';

interface Livestock {
  id: number;
  name: string;
  type: string;
  breed: string;
  quantity: number;
  age: string;
  price: string;
  location: string;
  image: string;
  seller: string;
  verified: boolean;
  description: string;
}

interface LivestockCardProps {
  livestock: Livestock;
}

const LivestockCard = ({ livestock }: LivestockCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-48 bg-gray-200">
            <img 
              src={livestock.image} 
              alt={livestock.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {livestock.verified && (
            <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
              <ShieldCheck size={14} className="mr-1" /> Verified
            </Badge>
          )}
          <Badge className="absolute top-3 left-3 bg-white text-pet-brown border border-pet-brown">
            {livestock.type}
          </Badge>
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <h3 className="font-bold text-lg">{livestock.name}</h3>
            <p className="text-sm text-gray-500">Breed: {livestock.breed}</p>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Age:</span>
              <span className="text-sm font-medium">{livestock.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Quantity:</span>
              <span className="text-sm font-medium">{livestock.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Price:</span>
              <span className="text-sm font-medium">{livestock.price}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2 mb-3">
            <MapPin size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600">{livestock.location}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <Info size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 line-clamp-2">{livestock.description}</p>
          </div>
          
          <div className="mt-4 pt-3 border-t">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Seller:</span> {livestock.seller}
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/livestock/${livestock.id}`}>View Details</Link>
        </Button>
        <Button className="bg-pet-brown hover:bg-pet-brown/90">Contact Seller</Button>
      </CardFooter>
    </Card>
  );
};

export default LivestockCard;
