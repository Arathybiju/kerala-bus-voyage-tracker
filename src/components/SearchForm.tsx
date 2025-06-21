
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, MapPin } from 'lucide-react';
import { keralaDistricts, stationsByDistrict } from '../data/keralaDistricts';

interface SearchFormProps {
  onSearch: (from: string, to: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [fromDistrict, setFromDistrict] = useState('');
  const [toDistrict, setToDistrict] = useState('');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  const handleSearch = () => {
    if (!fromStation || !toStation) {
      return;
    }
    onSearch(fromStation, toStation);
  };

  const swapLocations = () => {
    const tempDistrict = fromDistrict;
    const tempStation = fromStation;
    setFromDistrict(toDistrict);
    setFromStation(toStation);
    setToDistrict(tempDistrict);
    setToStation(tempStation);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-emerald-100">
      <div className="grid md:grid-cols-2 gap-6">
        {/* From Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-emerald-600 font-semibold">
            <MapPin className="h-4 w-4" />
            <span>From</span>
          </div>
          
          <div className="space-y-3">
            <Select value={fromDistrict} onValueChange={(value) => {
              setFromDistrict(value);
              setFromStation('');
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
              value={fromStation} 
              onValueChange={setFromStation}
              disabled={!fromDistrict}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Bus Stop" />
              </SelectTrigger>
              <SelectContent>
                {fromDistrict && stationsByDistrict[fromDistrict]?.map((station) => (
                  <SelectItem key={station.id} value={station.name}>
                    <div className="flex flex-col">
                      <span>{station.name}</span>
                      <span className="text-xs text-gray-500 capitalize">{station.type}</span>
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
              setToStation('');
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
              value={toStation} 
              onValueChange={setToStation}
              disabled={!toDistrict}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Bus Stop" />
              </SelectTrigger>
              <SelectContent>
                {toDistrict && stationsByDistrict[toDistrict]?.map((station) => (
                  <SelectItem key={station.id} value={station.name}>
                    <div className="flex flex-col">
                      <span>{station.name}</span>
                      <span className="text-xs text-gray-500 capitalize">{station.type}</span>
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
          disabled={!fromStation || !toStation}
        >
          <span>Search Buses</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
