
import { BusStop, LiveLocation, ETACalculation } from '../types/location';

// Calculate distance between two points using Haversine formula
export const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Calculate ETA based on current bus location and destination stop
export const calculateETA = (
  busLocation: LiveLocation,
  destinationStop: BusStop,
  averageSpeed: number = 30 // km/h default
): ETACalculation => {
  const distance = calculateDistance(
    busLocation.lat,
    busLocation.lng,
    destinationStop.lat,
    destinationStop.lng
  );

  const timeInHours = distance / averageSpeed;
  const timeInMinutes = Math.round(timeInHours * 60);
  
  const now = new Date();
  const estimatedArrival = new Date(now.getTime() + timeInMinutes * 60000);

  // Confidence based on distance and last update time
  const lastUpdateAge = Date.now() - new Date(busLocation.timestamp).getTime();
  let confidence: 'high' | 'medium' | 'low' = 'high';
  
  if (lastUpdateAge > 300000) confidence = 'low'; // 5 minutes old
  else if (lastUpdateAge > 120000) confidence = 'medium'; // 2 minutes old
  
  if (distance > 50) confidence = 'low'; // Very far away

  return {
    distanceKm: Math.round(distance * 10) / 10,
    estimatedMinutes: timeInMinutes,
    estimatedArrival: estimatedArrival.toISOString(),
    confidence
  };
};

// Get user's current location
export const getCurrentLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    });
  });
};

// Find nearest bus stop to a location
export const findNearestStop = (
  lat: number,
  lng: number,
  stops: BusStop[]
): BusStop | null => {
  if (stops.length === 0) return null;

  let nearestStop = stops[0];
  let minDistance = calculateDistance(lat, lng, stops[0].lat, stops[0].lng);

  for (let i = 1; i < stops.length; i++) {
    const distance = calculateDistance(lat, lng, stops[i].lat, stops[i].lng);
    if (distance < minDistance) {
      minDistance = distance;
      nearestStop = stops[i];
    }
  }

  return nearestStop;
};
