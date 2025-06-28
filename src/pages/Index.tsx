
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
import { useIsMobile } from '../hooks/use-mobile';

interface IndexProps {
  onLogout: () => void;
}

const Index = ({ onLogout }: IndexProps) => {
  const isMobile = useIsMobile();
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
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        {/* Enhanced Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-emerald-600">EdaVandi</span> - Smart Bus Tracking
          </h1>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            🚌 Real-time bus tracking across Kerala • Know exactly when your bus arrives
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm text-emerald-600">
            <span className="bg-emerald-100 px-3 py-1 rounded-full">Live GPS</span>
            <span className="bg-emerald-100 px-3 py-1 rounded-full">Accurate ETA</span>
            <span className="bg-emerald-100 px-3 py-1 rounded-full">Delay Alerts</span>
          </div>
        </div>

        {/* Feature Selector - Condensed for Mobile */}
        {!isMobile && (
          <div className="max-w-4xl mx-auto mb-8">
            <FeatureSelector onFeaturesChange={handleFeaturesChange} />
          </div>
        )}

        {/* Enhanced Search Form */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <EnhancedSearchForm onSearch={handleSearch} />
        </div>

        {/* Quick Access Buttons - Mobile Friendly */}
        {!searchParams && (
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button 
                onClick={() => handleSearch('tvm-central', 'ekm-vytila', 'Thiruvananthapuram Central', 'Vytila Hub')}
                className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200 hover:border-emerald-400 transition-colors text-left"
              >
                <div className="font-medium text-gray-900">TVM ➜ Kochi</div>
                <div className="text-sm text-gray-600">Popular long distance route</div>
              </button>
              <button 
                onClick={() => handleSearch('koz-central', 'tvm-central', 'Kozhikode KSRTC Stand', 'Thiruvananthapuram Central')}
                className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200 hover:border-emerald-400 transition-colors text-left"
              >
                <div className="font-medium text-gray-900">Kozhikode ➜ TVM</div>
                <div className="text-sm text-gray-600">Overnight journey</div>
              </button>
              <button 
                onClick={() => handleSearch('ekm-vytila', 'idk-munnar', 'Vytila Hub', 'Munnar')}
                className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200 hover:border-emerald-400 transition-colors text-left"
              >
                <div className="font-medium text-gray-900">Kochi ➜ Munnar</div>
                <div className="text-sm text-gray-600">Hill station special</div>
              </button>
              <button 
                onClick={() => handleSearch('tsr-central', 'tsr-guruvayur', 'Thrissur KSRTC Stand', 'Guruvayur')}
                className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200 hover:border-emerald-400 transition-colors text-left"
              >
                <div className="font-medium text-gray-900">Thrissur ➜ Guruvayur</div>
                <div className="text-sm text-gray-600">Temple town route</div>
              </button>
            </div>
          </div>
        )}

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

        {/* Enhanced Quick Stats - Mobile Responsive */}
        {!searchParams && (
          <div className="max-w-6xl mx-auto mt-12 md:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1 md:mb-2">750+</div>
                <div className="text-xs md:text-base text-gray-600">Live Buses</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1 md:mb-2">14</div>
                <div className="text-xs md:text-base text-gray-600">Districts</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1 md:mb-2">3000+</div>
                <div className="text-xs md:text-base text-gray-600">Bus Stops</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1 md:mb-2">97%</div>
                <div className="text-xs md:text-base text-gray-600">Accuracy</div>
              </div>
            </div>

            {/* Feature Highlights - Mobile Optimized */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🛰️</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Live GPS Tracking</h3>
                <p className="text-sm md:text-base text-gray-600">Real-time bus locations updated every few seconds</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">⏰</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Accurate ETAs</h3>
                <p className="text-sm md:text-base text-gray-600">Know exactly when your bus will arrive at your stop</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🚨</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Smart Alerts</h3>
                <p className="text-sm md:text-base text-gray-600">Get notified about delays, breakdowns, and cancellations</p>
              </div>
            </div>

            {/* App Download CTA */}
            <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Download EdaVandi App</h3>
              <p className="text-sm md:text-base mb-4 opacity-90">Get the full experience on your mobile device</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                  📱 Coming soon to Play Store
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                  🍎 Coming soon to App Store
                </div>
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
