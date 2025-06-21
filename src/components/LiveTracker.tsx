
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bus } from '../types/bus';
import { MapPin, Navigation, Clock, AlertTriangle } from 'lucide-react';

interface LiveTrackerProps {
  bus: Bus | null;
  isOpen: boolean;
  onClose: () => void;
}

const LiveTracker = ({ bus, isOpen, onClose }: LiveTrackerProps) => {
  if (!bus) return null;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Navigation className="h-5 w-5 text-emerald-600" />
            <span>Live Tracking - {bus.number}</span>
            <Badge className="bg-green-100 text-green-800 animate-pulse">
              Live
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Current Status</p>
                <div className="flex items-center space-x-2">
                  <Badge className={
                    bus.status === 'on-time' ? 'bg-green-100 text-green-800' :
                    bus.status === 'delayed' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {bus.status}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Last Updated</p>
                <p className="font-semibold">
                  {bus.currentLocation ? formatTimestamp(bus.currentLocation.timestamp) : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Simulated Map Area */}
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 opacity-50"></div>
            <div className="relative z-10 text-center">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Bus Location</span>
                </div>
                {bus.currentLocation && (
                  <div className="text-sm text-gray-600">
                    <p>Lat: {bus.currentLocation.lat.toFixed(4)}</p>
                    <p>Lng: {bus.currentLocation.lng.toFixed(4)}</p>
                    <p className="mt-2 text-emerald-600 font-medium">
                      Currently between stops
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Decorative map elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold">Journey Progress</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>From: {bus.from}</span>
                  <span className="text-emerald-600">Departed {bus.departureTime}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-3/5"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>To: {bus.to}</span>
                  <span className="text-gray-600">ETA {bus.arrivalTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-semibold">Next Stop</span>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Alappuzha KSRTC Stand</p>
                <p className="text-sm text-gray-600">Expected: 08:45 AM</p>
                <p className="text-sm text-emerald-600">Platform B2</p>
              </div>
            </div>
          </div>

          {bus.status === 'delayed' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Delay Notice</span>
              </div>
              <p className="text-sm text-yellow-700">
                This bus is running approximately 15 minutes behind schedule due to traffic conditions near Kollam.
              </p>
            </div>
          )}

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1">
              Set Alert
            </Button>
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              Share Location
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveTracker;
