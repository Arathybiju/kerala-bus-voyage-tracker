
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Bus, Route } from '../types/bus';
import { sampleRoutes } from '../data/busData';
import { MapPin, Clock } from 'lucide-react';

interface RouteViewerProps {
  bus: Bus | null;
  isOpen: boolean;
  onClose: () => void;
}

const RouteViewer = ({ bus, isOpen, onClose }: RouteViewerProps) => {
  if (!bus) return null;

  const route = sampleRoutes.find(r => r.busId === bus.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <span>Route Details - {bus.number}</span>
            <Badge className="bg-emerald-100 text-emerald-800">
              {bus.routeName}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Operator</p>
                <p className="font-semibold">{bus.operator}</p>
              </div>
              <div>
                <p className="text-gray-600">Bus Type</p>
                <p className="font-semibold">{bus.busType}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Duration</p>
                <p className="font-semibold">{route?.totalDuration || '4h 30m'}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <Badge className={
                  bus.status === 'on-time' ? 'bg-green-100 text-green-800' :
                  bus.status === 'delayed' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }>
                  {bus.status}
                </Badge>
              </div>
            </div>
          </div>

          {route && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>Route Timeline</span>
              </h3>

              <div className="relative">
                {route.stops.map((stop, index) => (
                  <div key={stop.id} className="flex items-start space-x-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${
                        index === 0 || index === route.stops.length - 1
                          ? 'bg-emerald-500'
                          : 'bg-gray-300'
                      }`} />
                      {index < route.stops.length - 1 && (
                        <div className="w-px h-8 bg-gray-200 mt-2" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{stop.name}</h4>
                          <p className="text-sm text-gray-600 capitalize">
                            {stop.district} District
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-emerald-600">
                            <Clock className="h-4 w-4" />
                            <span className="font-semibold">{stop.arrivalTime}</span>
                          </div>
                          {stop.platform && (
                            <p className="text-xs text-gray-500">Platform {stop.platform}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bus.amenities && bus.amenities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {bus.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RouteViewer;
