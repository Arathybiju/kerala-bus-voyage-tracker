
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DriverLoginProps {
  onBack: () => void;
  onLogin: (driverId: string, busId: string) => void;
}

const DriverLogin = ({ onBack, onLogin }: DriverLoginProps) => {
  const [loginData, setLoginData] = useState({
    driverId: '',
    password: '',
    busId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.driverId || !loginData.password || !loginData.busId) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate driver authentication
    // In real app, this would call an API
    if (loginData.driverId.startsWith('DRV') && loginData.password.length >= 4) {
      onLogin(loginData.driverId, loginData.busId);
      toast({
        title: "Success",
        description: "Driver login successful!",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid driver credentials",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to role selection
        </Button>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Bus className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Driver Login</CardTitle>
            <CardDescription>
              Enter your driver credentials to start sharing location
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="driverId">Driver ID</Label>
                <Input
                  id="driverId"
                  type="text"
                  placeholder="e.g., DRV-KL2001"
                  value={loginData.driverId}
                  onChange={(e) => setLoginData(prev => ({ ...prev, driverId: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="busId">Bus Number</Label>
                <Input
                  id="busId"
                  type="text"
                  placeholder="e.g., KL-01-2001"
                  value={loginData.busId}
                  onChange={(e) => setLoginData(prev => ({ ...prev, busId: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Start Tracking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DriverLogin;
