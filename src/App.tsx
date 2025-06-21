
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoleSelector from "./components/RoleSelector";
import DriverLogin from "./components/DriverLogin";
import DriverPanel from "./components/DriverPanel";

const queryClient = new QueryClient();

const App = () => {
  const [userRole, setUserRole] = useState<'passenger' | 'driver' | null>(null);
  const [driverInfo, setDriverInfo] = useState<{driverId: string, busId: string} | null>(null);

  const handleRoleSelection = (role: 'passenger' | 'driver') => {
    setUserRole(role);
  };

  const handleDriverLogin = (driverId: string, busId: string) => {
    setDriverInfo({ driverId, busId });
  };

  const handleLogout = () => {
    setUserRole(null);
    setDriverInfo(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {!userRole ? (
            <RoleSelector onSelectRole={handleRoleSelection} />
          ) : userRole === 'driver' ? (
            !driverInfo ? (
              <DriverLogin 
                onBack={() => setUserRole(null)} 
                onLogin={handleDriverLogin}
              />
            ) : (
              <DriverPanel 
                driverId={driverInfo.driverId}
                busId={driverInfo.busId}
                onLogout={handleLogout}
              />
            )
          ) : (
            <Routes>
              <Route path="/" element={<Index onLogout={handleLogout} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
