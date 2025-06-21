
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import { keralaDistricts } from '../data/keralaDistricts';
import { keralaStops, getStopsByDistrict } from '../data/busStops';
import { getCurrentLocation, findNearestStop } from '../utils/locationUtils';
import { toast } from '@/hooks/use-toast';

interface EnhancedSearchFormProps {
  onSearch: (fromStopId: string, toStopId: string, fromName: string, toName: string) => void;
}

const EnhancedSearchForm = ({ onSearch }: EnhancedSearchFormProps) => {
  const [fromDistrict, setFromDistrict] = useState('');
  const [toDistrict, setToDistrict] = useState('');
  const [fromStop, setFromStop] = useState('');
  const [toStop, setToStop] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const handleSearch = () => {
    if (!fromStop || !toStop) {
      toast({
        title: "Missing Information",
        description: "Please select both source and destination stops",
        variant: "destructive"
      });
      return;
    }

    if (fromStop === toStop) {
      toast({
        title: "Invalid Route",
        description: "Source and destination cannot be the same",
        variant: "destructive"
      });
      return;
    }

    const fromStopData = keralaStops.find(stop => stop.id === fromStop);
    const toStopData = keralaStops.find(stop => stop.id === toStop);

    if (fromStopData && toStopData) {
      onSearch(fromStop, toStop, fromStopData.name, toStopData.name);
    }
  };

  const handleUseCurrentLocation = async () => {
    setIsGettingLocation(true);
    try {
      const position = await getCurrentLocation();
      const nearestStop = findNearestStop(
        position.coords.latitude,
        position.coords.longitude,
        keralaStops
      );

      if (nearestStop) {
        const district = keralaDistricts.find(d => d.name === nearestStop.district);
        if (district) {
          setFromDistrict(district.id);
          setFromStop(nearestStop.id);
          toast({
            title: "Location Found",
            description: `Nearest stop: ${nearestStop.name}`,
          });
        }
      } else {
        toast({
          title: "No Nearby Stops",
          description: "Could not find any bus stops near your location",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Location Error",
        description: "Could not get your current location. Please select manually.",
        variant: "destructive"
      });
    } finally {
      setIsGettingLocation(false);
    }
  };

  const swapLocations = () => {
    const tempDistrict = fromDistrict;
    const tempStop = fromStop;
    setFromDistrict(toDistrict);
    setFromStop(toStop);
    setToDistrict(tempDistrict);
    setToStop(tempStop);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-emerald-100">
      <div className="grid md:grid-cols-2 gap-6">
        {/* From Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-emerald-600 font-semibold">
              <MapPin className="h-4 w-4" />
              <span>From</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleUseCurrentLocation}
              disabled={isGettingLocation}
              className="text-xs text-emerald-600 hover:text-emerald-700"
            >
              <Navigation className="h-3 w-3 mr-1" />
              {isGettingLocation ? 'Getting...' : 'Use Current'}
            </Button>
          </div>
          
          <div className="space-y-3">
            <Select value={fromDistrict} onValueChange={(value) => {
              setFromDistrict(value);
              setFromStop('');
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {keralaDistricts.map((district) => (
                  <SelectItem key={district.id} value={district.id}>
                    <div className="flex flex-col">
                      <span>{district.name}</span>
                      <span className="text-xs text-gray-500">{district.malayalamName}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={fromStop} 
              onValueChange={setFromStop}
              disabled={!fromDistrict}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Bus Stop" />
              </SelectTrigger>
              <SelectContent>
                {fromDistrict && getStopsByDistrict(keralaDistricts.find(d => d.id === fromDistrict)?.name || '').map((stop) => (
                  <SelectItem key={stop.id} value={stop.id}>
                    <div className="flex flex-col">
                      <span>{stop.name}</span>
                      <span className="text-xs text-gray-500">{stop.town} • {stop.type}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* To Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-emerald-600 font-semibold">
            <MapPin className="h-4 w-4" />
            <span>To</span>
          </div>
          
          <div className="space-y-3">
            <Select value={toDistrict} onValueChange={(value) => {
              setToDistrict(value);
              setToStop('');
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {keralaDistricts.map((district) => (
                  <SelectItem key={district.id} value={district.id}>
                    <div className="flex flex-col">
                      <span>{district.name}</span>
                      <span className="text-xs text-gray-500">{district.malayalamName}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={toStop} 
              onValueChange={setToStop}
              disabled={!toDistrict}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Bus Stop" />
              </SelectTrigger>
              <SelectContent>
                {toDistrict && getStopsByDistrict(keralaDistricts.find(d => d.id === toDistrict)?.name || '').map((stop) => (
                  <SelectItem key={stop.id} value={stop.id}>
                    <div className="flex flex-col">
                      <span>{stop.name}</span>
                      <span className="text-xs text-gray-500">{stop.town} • {stop.type}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={swapLocations}
          className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
        >
          ⇄ Swap
        </Button>
        
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 px-8 py-2 flex items-center space-x-2"
          onClick={handleSearch}
          disabled={!fromStop || !toStop}
        >
          <span>Find Buses</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EnhancedSearchForm;
