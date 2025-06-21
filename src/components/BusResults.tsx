
import React from 'react';
import { Bus } from '../types/bus';
import BusCard from './BusCard';
import { sampleBuses } from '../data/busData';

interface BusResultsProps {
  searchFrom: string;
  searchTo: string;
  onViewRoute: (bus: Bus) => void;
  onTrackLive: (bus: Bus) => void;
}

const BusResults = ({ searchFrom, searchTo, onViewRoute, onTrackLive }: BusResultsProps) => {
  // Filter buses based on search criteria
  const filteredBuses = sampleBuses.filter(bus => 
    bus.from.toLowerCase().includes(searchFrom.toLowerCase()) ||
    bus.to.toLowerCase().includes(searchTo.toLowerCase())
  );

  if (filteredBuses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚌</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No buses found</h3>
        <p className="text-gray-600">
          No buses available for the route from <strong>{searchFrom}</strong> to <strong>{searchTo}</strong>.
          <br />
          Try searching for a different route or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Available Buses ({filteredBuses.length})
        </h2>
        <div className="text-sm text-gray-600">
          From <span className="font-medium text-emerald-600">{searchFrom}</span> to{' '}
          <span className="font-medium text-emerald-600">{searchTo}</span>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredBuses.map((bus) => (
          <BusCard
            key={bus.id}
            bus={bus}
            onViewRoute={onViewRoute}
            onTrackLive={onTrackLive}
          />
        ))}
      </div>
    </div>
  );
};

export default BusResults;
