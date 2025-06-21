
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Bus } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'passenger' | 'driver') => void;
}

const RoleSelector = ({ onSelectRole }: RoleSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Kerala Bus Tracker
          </h1>
          <p className="text-xl text-gray-600">
            Choose your role to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-emerald-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl">Passenger</CardTitle>
              <CardDescription className="text-base">
                Track buses, plan your journey, and stay updated with real-time information
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Track live bus locations</li>
                <li>• Get arrival time estimates</li>
                <li>• Plan your routes</li>
                <li>• Receive notifications</li>
                <li>• Rate and review buses</li>
              </ul>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => onSelectRole('passenger')}
              >
                Continue as Passenger
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Bus className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Driver</CardTitle>
              <CardDescription className="text-base">
                Share your bus location and keep passengers informed about delays
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Share live GPS location</li>
                <li>• Report delays and incidents</li>
                <li>• Update bus status</li>
                <li>• Communicate with control room</li>
                <li>• Simple, driver-friendly interface</li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => onSelectRole('driver')}
              >
                Continue as Driver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
