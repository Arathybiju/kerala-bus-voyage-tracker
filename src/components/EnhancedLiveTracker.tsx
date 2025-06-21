
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Bus } from '../types/bus';
import { MapPin, Navigation, Clock, AlertTriangle, Zap } from 'lucide-react';

interface EnhancedLiveTrackerProps {
  bus: Bus | null;
  isOpen: boolean;
  onClose: () => void;
  selectedFeatures: string[];
}

const EnhancedLiveTracker = ({ bus, isOpen, onClose, selectedFeatures }: EnhancedLiveTrackerProps) => {
  const [currentAlert, setCurrentAlert] = useState<string | null>(null);
  const [busPosition, setBusPosition] = useState({ lat: 9.9312, lng: 76.2673 });

  useEffect(() => {
    if (!bus || !isOpen) return;

    // Simulate bus movement
    const interval = setInterval(() => {
      setBusPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));

      // Simulate delay alerts
      if (selectedFeatures.includes('delay-alerts') && Math.random() < 0.1) {
        const alerts = [
          "Traffic congestion ahead - 5 minutes delay expected",
          "Construction work causing minor delays",
          "Weather conditions affecting travel time"
        ];
        setCurrentAlert(alerts[Math.floor(Math.random() * alerts.length)]);
        
        setTimeout(() => setCurrentAlert(null), 5000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [bus, isOpen, selectedFeatures]);

  if (!bus) return null;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Navigation className="h-5 w-5 text-emerald-600" />
            <span>Live Tracking - {bus.number}</span>
            <Badge className="bg-green-100 text-green-800 animate-pulse">
              <Zap className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Alert Section */}
          {currentAlert && selectedFeatures.includes('delay-alerts') && (
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                {currentAlert}
              </AlertDescription>
            </Alert>
          )}

          {/* Bus Status Card */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Current Status</p>
                <Badge className={
                  bus.status === 'on-time' ? 'bg-green-100 text-green-800' :
                  bus.status === 'delayed' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }>
                  {bus.status}
                </Badge>
              </div>
              <div>
                <p className="text-gray-600">Last Updated</p>
                <p className="font-semibold">
                  {formatTimestamp(new Date().toISOString())}
                </p>
              </div>
              {selectedFeatures.includes('accurate-eta') && (
                <div>
                  <p className="text-gray-600">ETA to Destination</p>
                  <p className="font-semibold text-emerald-600">
                    {bus.arrivalTime}
                  </p>
                </div>
              )}
              <div>
                <p className="text-gray-600">Speed</p>
                <p className="font-semibold">45 km/h</p>
              </div>
            </div>
          </div>

          {/* Enhanced Map Area with Bus Visualization */}
          {selectedFeatures.includes('live-gps') && (
            <div className="bg-gray-100 rounded-lg h-80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-blue-100 to-teal-100">
                {/* Route Path */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M 50 300 Q 200 200 350 150 Q 500 100 650 120"
                    stroke="#10b981"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,5"
                    className="animate-pulse"
                  />
                </svg>
                
                {/* Bus Icon */}
                <div 
                  className="absolute transition-all duration-2000 ease-linear"
                  style={{
                    left: `${30 + Math.sin(Date.now() / 5000) * 20}%`,
                    top: `${40 + Math.cos(Date.now() / 5000) * 10}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="bg-red-500 rounded-lg p-2 shadow-lg animate-bounce">
                    <span className="text-white font-bold text-xs">🚌</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium">
                    {bus.number}
                  </div>
                </div>

                {/* Bus Stops */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs">
                    Vytila Hub
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs">
                    Kaloor
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm">Bus Location</span>
                </div>
                <div className="text-xs text-gray-600">
                  <p>Lat: {busPosition.lat.toFixed(4)}</p>
                  <p>Lng: {busPosition.lng.toFixed(4)}</p>
                  <p className="mt-1 text-emerald-600 font-medium">
                    En route to destination
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Progress Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold">Journey Progress</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>From: {bus.from}</span>
                  <span className="text-emerald-600">Departed {bus.departureTime}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 relative">
                  <div className="bg-emerald-500 h-3 rounded-full w-3/5 relative">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-emerald-600 rounded-full border-2 border-white shadow"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>To: {bus.to}</span>
                  <span className="text-gray-600">ETA {bus.arrivalTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-semibold">Next Stop</span>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Kaloor Metro Station</p>
                <p className="text-sm text-gray-600">Expected: 2 minutes</p>
                <p className="text-sm text-emerald-600">Platform B1</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>🚏</span>
                  <span>Next: Fort Kochi (15 min)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1">
              Set Arrival Alert
            </Button>
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              Share Live Location
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedLiveTracker;
