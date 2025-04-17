import React from 'react';
import { Card } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

interface ServiceProvider {
  id: number;
  name: string;
  profession: string;
  location: string;
  // Other provider properties
}

interface ServiceMapProps {
  providers: ServiceProvider[];
  currentLocation: string;
}

const ServiceMap = ({ providers, currentLocation }: ServiceMapProps) => {
  return (
    <Card className="overflow-hidden rounded-lg">
      <div className="h-[500px] bg-gray-100 p-4 flex flex-col items-center justify-center">
        <MapPin size={48} className="text-gray-400 mb-4" />
        <h3 className="text-xl font-medium mb-2">Map View</h3>
        <p className="text-gray-500 text-center max-w-md">
          Interactive map integration will be available soon. This will show {providers.length} service providers 
          near {currentLocation}.
        </p>
      </div>
    </Card>
  );
};

export default ServiceMap;
