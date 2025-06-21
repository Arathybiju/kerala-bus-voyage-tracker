
export interface User {
  uid: string;
  name: string;
  email?: string;
  phone?: string;
  role: 'passenger' | 'driver';
  createdAt: string;
}

export interface Driver extends User {
  role: 'driver';
  driverId: string;
  assignedBusId: string;
  licenseNumber?: string;
  isActive: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
