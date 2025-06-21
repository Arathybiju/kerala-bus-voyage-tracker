
export interface Bus {
  id: string;
  number: string;
  routeName: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  operator: string;
  busType: string;
  status: 'on-time' | 'delayed' | 'cancelled';
  rating: number;
  price: number;
  amenities: string[];
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: string;
  };
}

export interface BusStop {
  id: string;
  name: string;
  district: string;
  arrivalTime: string;
  platform?: string;
}

export interface Route {
  id: string;
  busId: string;
  stops: BusStop[];
  totalDuration: string;
}

export interface Incident {
  id: string;
  busId: string;
  type: 'breakdown' | 'accident' | 'delay' | 'cancelled';
  message: string;
  timestamp: string;
  location: string;
}
