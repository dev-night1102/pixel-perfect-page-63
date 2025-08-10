import { Star, Clock, MapPin, Smile, Heart, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeachCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  hours: string;
  distance: string;
  amenities: number;
}

const BeachCard = ({ 
  name, 
  image, 
  rating, 
  reviews, 
  hours, 
  distance, 
  amenities 
}: BeachCardProps) => {
  return (
    <Card className="overflow-hidden shadow-beach-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-ocean-deep mb-3">{name}</h3>
          
          <div className="flex items-center mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium text-gray-700">{rating}</span>
            <span className="text-gray-500 ml-1">({reviews} reviews)</span>
          </div>
          
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-tropical-green" />
              <span>{hours}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-ocean-primary" />
              <span>{distance}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Smile className="w-4 h-4 text-blue-600" />
              </div>
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-pink-600" />
              </div>
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <Waves className="w-4 h-4 text-teal-600" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">+{amenities}</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full py-3"
          >
            See More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeachCard;