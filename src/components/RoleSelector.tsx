
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Truck } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'passenger' | 'driver') => void;
}

const RoleSelector = ({ onSelectRole }: RoleSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kerala Bus Tracker
          </h1>
          <p className="text-xl text-gray-600">
            Sign in to track buses across God's Own Country
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelectRole('passenger')}>
            <CardHeader className="text-center">
              <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Passenger Sign In</CardTitle>
              <CardDescription>
                Track buses, get live updates, and plan your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Sign In as Passenger
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelectRole('driver')}>
            <CardHeader className="text-center">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Driver Sign In</CardTitle>
              <CardDescription>
                Share your bus location and update passenger information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In as Driver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
