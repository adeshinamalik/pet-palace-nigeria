
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  isVirtual: boolean;
  link: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className={event.isVirtual ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}>
            {event.isVirtual ? (
              <><Globe size={14} className="mr-1" /> Virtual</>
            ) : (
              <><MapPin size={14} className="mr-1" /> In-Person</>
            )}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex items-center gap-1 text-gray-600 mb-1">
          <Calendar size={16} className="text-pet-orange" />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600 mb-3">
          <MapPin size={16} className="text-pet-green" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{event.description}</p>
        
        <Button asChild className="w-full" variant="outline">
          <Link to={event.link} className="flex items-center justify-center">
            View Event Details <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
