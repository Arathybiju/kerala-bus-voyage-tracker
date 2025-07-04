
import React from 'react';
import { Bus, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onLogout: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Bus className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Kerala Bus Tracker</h1>
            <p className="text-emerald-100 text-sm">Real-time bus tracking across God's Own Country</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">Passenger</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20"
            onClick={onLogout}
          >
            Switch Role
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
