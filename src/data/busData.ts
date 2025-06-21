
import { Bus, Route } from '../types/bus';

export const sampleBuses: Bus[] = [
  {
    id: 'bus-001',
    number: 'KL-01-2001',
    routeName: 'Thiruvananthapuram - Ernakulam Express',
    from: 'Thiruvananthapuram Central',
    to: 'Vytila Hub',
    departureTime: '06:00',
    arrivalTime: '10:30',
    operator: 'KSRTC',
    busType: 'AC Sleeper',
    status: 'on-time',
    rating: 4.2,
    price: 280,
    amenities: ['AC', 'WiFi', 'Charging Port', 'Reclining Seats'],
    currentLocation: {
      lat: 8.7642,
      lng: 76.7729,
      timestamp: '2025-06-21T08:30:00Z'
    }
  },
  {
    id: 'bus-002',
    number: 'KL-14-5012',
    routeName: 'Kozhikode - Thiruvananthapuram Super Fast',
    from: 'Kozhikode KSRTC Stand',
    to: 'Thiruvananthapuram Central',
    departureTime: '22:30',
    arrivalTime: '05:45',
    operator: 'Private',
    busType: 'Non-AC Seater',
    status: 'delayed',
    rating: 3.8,
    price: 220,
    amenities: ['Reclining Seats', 'Mobile Charging'],
    currentLocation: {
      lat: 11.2588,
      lng: 75.7804,
      timestamp: '2025-06-21T23:15:00Z'
    }
  },
  {
    id: 'bus-003',
    number: 'KL-07-8901',
    routeName: 'Ernakulam - Alappuzha Local',
    from: 'Vytila Hub',
    to: 'Alappuzha KSRTC Stand',
    departureTime: '14:15',
    arrivalTime: '16:00',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 4.0,
    price: 45,
    amenities: ['Basic Seating'],
    currentLocation: {
      lat: 9.4981,
      lng: 76.3388,
      timestamp: '2025-06-21T15:00:00Z'
    }
  }
];

export const sampleRoutes: Route[] = [
  {
    id: 'route-001',
    busId: 'bus-001',
    stops: [
      { id: 'stop-1', name: 'Thiruvananthapuram Central', district: 'tvm', arrivalTime: '06:00', platform: 'A1' },
      { id: 'stop-2', name: 'Kollam KSRTC Stand', district: 'kol', arrivalTime: '07:15' },
      { id: 'stop-3', name: 'Alappuzha KSRTC Stand', district: 'alp', arrivalTime: '08:45' },
      { id: 'stop-4', name: 'Kottayam KSRTC Stand', district: 'ktm', arrivalTime: '09:30' },
      { id: 'stop-5', name: 'Vytila Hub', district: 'ekm', arrivalTime: '10:30', platform: 'B3' }
    ],
    totalDuration: '4h 30m'
  }
];
