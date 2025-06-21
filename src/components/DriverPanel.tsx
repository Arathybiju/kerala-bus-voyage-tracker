
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DriverPanelProps {
  driverId: string;
  busId: string;
  onLogout: () => void;
}

const DriverPanel = ({ driverId, busId, onLogout }: DriverPanelProps) => {
  const [isTracking, setIsTracking] = useState(false);
  const [lastLocationUpdate, setLastLocationUpdate] = useState<string | null>(null);
  const [busStatus, setBusStatus] = useState<'on-time' | 'delayed' | 'breakdown' | 'cancelled'>('on-time');
  const [incidentMessage, setIncidentMessage] = useState('');

  // Simulate GPS tracking
  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        // Simulate sending location to server
        const now = new Date().toLocaleTimeString();
        setLastLocationUpdate(now);
        console.log(`Location sent for bus ${busId} at ${now}`);
      }, 10000); // Every 10 seconds

      return () => clearInterval(interval);
    }
  }, [isTracking, busId]);

  const handleStartTracking = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsTracking(true);
          setLastLocationUpdate(new Date().toLocaleTimeString());
          toast({
            title: "Tracking Started",
            description: "Your location is now being shared with passengers",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Please enable location services to start tracking",
            variant: "destructive"
          });
        }
      );
    } else {
      toast({
        title: "Not Supported",
        description: "Geolocation is not supported by this browser",
        variant: "destructive"
      });
    }
  };

  const handleStopTracking = () => {
    setIsTracking(false);
    setLastLocationUpdate(null);
    toast({
      title: "Tracking Stopped",
      description: "Location sharing has been disabled",
    });
  };

  const handleStatusUpdate = (status: typeof busStatus, message?: string) => {
    setBusStatus(status);
    if (message) setIncidentMessage(message);
    
    toast({
      title: "Status Updated",
      description: `Bus status changed to: ${status}`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'bg-green-100 text-green-800';
      case 'delayed': return 'bg-yellow-100 text-yellow-800';
      case 'breakdown': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Driver Panel</h1>
            <p className="text-gray-600">Welcome, {driverId}</p>
          </div>
          <Button variant="outline" onClick={onLogout}>
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bus Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Bus Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Bus Number</p>
                <p className="text-xl font-semibold">{busId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Driver ID</p>
                <p className="text-lg">{driverId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Status</p>
                <Badge className={getStatusColor(busStatus)}>
                  {busStatus.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* GPS Tracking Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>GPS Tracking</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tracking Status</span>
                {isTracking ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Active</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Inactive</span>
                  </div>
                )}
              </div>

              {lastLocationUpdate && (
                <div>
                  <p className="text-sm text-gray-600">Last Update</p>
                  <p className="font-medium">{lastLocationUpdate}</p>
                </div>
              )}

              <div className="flex space-x-2">
                {!isTracking ? (
                  <Button 
                    onClick={handleStartTracking}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Start Tracking
                  </Button>
                ) : (
                  <Button 
                    onClick={handleStopTracking}
                    variant="outline"
                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Stop Tracking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Status Update Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Update Bus Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Button
                  variant={busStatus === 'on-time' ? 'default' : 'outline'}
                  onClick={() => handleStatusUpdate('on-time')}
                  className="h-16 flex flex-col"
                >
                  <CheckCircle className="h-6 w-6 mb-1" />
                  On Time
                </Button>
                
                <Button
                  variant={busStatus === 'delayed' ? 'default' : 'outline'}
                  onClick={() => handleStatusUpdate('delayed', 'Running late due to traffic')}
                  className="h-16 flex flex-col"
                >
                  <Clock className="h-6 w-6 mb-1" />
                  Delayed
                </Button>
                
                <Button
                  variant={busStatus === 'breakdown' ? 'default' : 'outline'}
                  onClick={() => handleStatusUpdate('breakdown', 'Technical issue - please wait')}
                  className="h-16 flex flex-col"
                >
                  <AlertTriangle className="h-6 w-6 mb-1" />
                  Breakdown
                </Button>
                
                <Button
                  variant={busStatus === 'cancelled' ? 'default' : 'outline'}
                  onClick={() => handleStatusUpdate('cancelled', 'Service cancelled')}
                  className="h-16 flex flex-col"
                >
                  <XCircle className="h-6 w-6 mb-1" />
                  Cancelled
                </Button>
              </div>

              {incidentMessage && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Current Message:</strong> {incidentMessage}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverPanel;
