
export interface BusStop {
  id: string;
  name: string;
  district: string;
  town: string;
  lat: number;
  lng: number;
  type: 'major' | 'minor' | 'depot';
  facilities: string[];
}

export interface LiveLocation {
  busId: string;
  lat: number;
  lng: number;
  timestamp: string;
  speed?: number;
  heading?: number;
  accuracy?: number;
}

export interface ETACalculation {
  distanceKm: number;
  estimatedMinutes: number;
  estimatedArrival: string;
  confidence: 'high' | 'medium' | 'low';
}
