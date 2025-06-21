
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin, Wifi, Zap, Snowflake } from 'lucide-react';
import { Bus } from '../types/bus';

interface BusCardProps {
  bus: Bus;
  onViewRoute: (bus: Bus) => void;
  onTrackLive: (bus: Bus) => void;
}

const BusCard = ({ bus, onViewRoute, onTrackLive }: BusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'bg-green-100 text-green-800';
      case 'delayed': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-3 w-3" />;
      case 'charging port': return <Zap className="h-3 w-3" />;
      case 'ac': return <Snowflake className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-emerald-500">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{bus.number}</h3>
              <Badge className={`${getStatusColor(bus.status)} font-medium`}>
                {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
              </Badge>
            </div>
            <p className="text-emerald-600 font-medium">{bus.routeName}</p>
            <p className="text-sm text-gray-600">{bus.operator} • {bus.busType}</p>
          </div>
          
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-600">₹{bus.price}</p>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{bus.rating}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">From</p>
              <p className="font-medium">{bus.from}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">To</p>
              <p className="font-medium">{bus.to}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-lg font-bold">{bus.departureTime}</p>
              <p className="text-xs text-gray-500">Departure</p>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="w-16 h-px bg-gray-300 relative">
                <div className="absolute -top-1 left-0 w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="absolute -top-1 right-0 w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-bold">{bus.arrivalTime}</p>
              <p className="text-xs text-gray-500">Arrival</p>
            </div>
          </div>
        </div>

        {bus.amenities && bus.amenities.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {bus.amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs"
                >
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            onClick={() => onViewRoute(bus)}
          >
            View Route
          </Button>
          <Button 
            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
            onClick={() => onTrackLive(bus)}
          >
            Track Live
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusCard;
