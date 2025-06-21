
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [loginData, setLoginData] = useState({
    email: '',
    phone: '',
    password: '',
    name: ''
  });

  const handleSubmit = (type: 'login' | 'register') => {
    if (type === 'login') {
      if (!loginData.email && !loginData.phone) {
        toast({
          title: "Error",
          description: "Please enter email or phone number",
          variant: "destructive"
        });
        return;
      }
      if (!loginData.password) {
        toast({
          title: "Error",
          description: "Please enter password",
          variant: "destructive"
        });
        return;
      }
      
      // Simulate login
      onLogin(loginData.email || `User-${loginData.phone.slice(-4)}`);
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
    } else {
      if (!loginData.name || !loginData.email || !loginData.phone || !loginData.password) {
        toast({
          title: "Error",
          description: "Please fill all fields",
          variant: "destructive"
        });
        return;
      }
      
      // Simulate registration
      onLogin(loginData.name);
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-emerald-600">
            Welcome to Kerala Bus Tracker
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email or Phone</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter email or phone number"
                  value={loginData.email || loginData.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d+$/.test(value) || value === '') {
                      setLoginData(prev => ({ ...prev, phone: value, email: '' }));
                    } else {
                      setLoginData(prev => ({ ...prev, email: value, phone: '' }));
                    }
                  }}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => handleSubmit('login')}
              >
                Login
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={loginData.name}
                  onChange={(e) => setLoginData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="reg-email">Email</Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="Enter email address"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="reg-phone">Phone Number</Label>
                <Input
                  id="reg-phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={loginData.phone}
                  onChange={(e) => setLoginData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="reg-password">Password</Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Create password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => handleSubmit('register')}
              >
                Create Account
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
