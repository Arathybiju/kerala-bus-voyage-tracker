
import React, { useState } from 'react';
import Header from '../components/Header';
import EnhancedSearchForm from '../components/EnhancedSearchForm';
import BusResults from '../components/BusResults';
import RouteViewer from '../components/RouteViewer';
import EnhancedLiveTracker from '../components/EnhancedLiveTracker';
import FeatureSelector from '../components/FeatureSelector';
import { Bus } from '../types/bus';
import { sampleBuses } from '../data/busData';
import { busSchedules } from '../data/busSchedules';
import { findMatchingBuses } from '../utils/searchUtils';
import { sampleRoutes } from '../data/busData';

interface IndexProps {
  onLogout: () => void;
}

const Index = ({ onLogout }: IndexProps) => {
  const [searchParams, setSearchParams] = useState<{
    fromStopId: string;
    toStopId: string;
    fromName: string;
    toName: string;
  } | null>(null);
  
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showRouteViewer, setShowRouteViewer] = useState(false);
  const [showLiveTracker, setShowLiveTracker] = useState(false);
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['live-gps', 'accurate-eta', 'delay-alerts']);

  const handleSearch = (fromStopId: string, toStopId: string, fromName: string, toName: string) => {
    setSearchParams({ fromStopId, toStopId, fromName, toName });
    
    // Find matching buses using the enhanced search logic
    const matchingBuses = findMatchingBuses(
      fromStopId,
      toStopId,
      sampleBuses,
      sampleRoutes,
      busSchedules
    );
    
    setFilteredBuses(matchingBuses);
  };

  const handleViewRoute = (bus: Bus) => {
    setSelectedBus(bus);
    setShowRouteViewer(true);
  };

  const handleTrackLive = (bus: Bus) => {
    setSelectedBus(bus);
    setShowLiveTracker(true);
  };

  const handleFeaturesChange = (features: string[]) => {
    setSelectedFeatures(features);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header onLogout={onLogout} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-Time Bus Tracking Across{' '}
            <span className="text-emerald-600">God's Own Country</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Know when your bus arrives, track live location, get delay alerts, and plan your journey across Kerala
          </p>
        </div>

        {/* Feature Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <FeatureSelector onFeaturesChange={handleFeaturesChange} />
        </div>

        {/* Enhanced Search Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <EnhancedSearchForm onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        {searchParams && (
          <div className="max-w-4xl mx-auto">
            <BusResults
              searchFrom={searchParams.fromName}
              searchTo={searchParams.toName}
              buses={filteredBuses}
              onViewRoute={handleViewRoute}
              onTrackLive={handleTrackLive}
            />
          </div>
        )}

        {/* Enhanced Quick Stats */}
        {!searchParams && (
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Live Tracked Buses</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">14</div>
                <div className="text-gray-600">Districts Covered</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2000+</div>
                <div className="text-gray-600">Bus Stops Mapped</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-600">On-Time Accuracy</div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛰️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Live GPS Tracking</h3>
                <p className="text-gray-600">Real-time bus locations updated every few seconds</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate ETAs</h3>
                <p className="text-gray-600">Know exactly when your bus will arrive at your stop</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Delay Alerts</h3>
                <p className="text-gray-600">Get notified about delays, breakdowns, and cancellations</p>
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

      <EnhancedLiveTracker
        bus={selectedBus}
        isOpen={showLiveTracker}
        onClose={() => setShowLiveTracker(false)}
        selectedFeatures={selectedFeatures}
      />
    </div>
  );
};

export default Index;
