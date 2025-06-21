
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import BusResults from '../components/BusResults';
import RouteViewer from '../components/RouteViewer';
import LiveTracker from '../components/LiveTracker';
import { Bus } from '../types/bus';

const Index = () => {
  const [searchParams, setSearchParams] = useState<{
    from: string;
    to: string;
  } | null>(null);
  
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showRouteViewer, setShowRouteViewer] = useState(false);
  const [showLiveTracker, setShowLiveTracker] = useState(false);

  const handleSearch = (from: string, to: string) => {
    setSearchParams({ from, to });
  };

  const handleViewRoute = (bus: Bus) => {
    setSelectedBus(bus);
    setShowRouteViewer(true);
  };

  const handleTrackLive = (bus: Bus) => {
    setSelectedBus(bus);
    setShowLiveTracker(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Your Journey Across{' '}
            <span className="text-emerald-600">God's Own Country</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time bus tracking, route planning, and live updates for all Kerala State Transport buses
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        {searchParams && (
          <div className="max-w-4xl mx-auto">
            <BusResults
              searchFrom={searchParams.from}
              searchTo={searchParams.to}
              onViewRoute={handleViewRoute}
              onTrackLive={handleTrackLive}
            />
          </div>
        )}

        {/* Quick Stats */}
        {!searchParams && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Active Buses</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">14</div>
                <div className="text-gray-600">Districts Covered</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                <div className="text-gray-600">Bus Stops</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <RouteViewer
        bus={selectedBus}
        isOpen={showRouteViewer}
        onClose={() => setShowRouteViewer(false)}
      />

      <LiveTracker
        bus={selectedBus}
        isOpen={showLiveTracker}
        onClose={() => setShowLiveTracker(false)}
      />
    </div>
  );
};

export default Index;
