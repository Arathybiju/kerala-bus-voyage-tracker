
import { BusStop } from '../types/location';

export const keralaStops: BusStop[] = [
  // Thiruvananthapuram
  {
    id: 'tvm-central',
    name: 'Thiruvananthapuram Central',
    district: 'Thiruvananthapuram',
    town: 'Thiruvananthapuram',
    lat: 8.4875,
    lng: 76.9525,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM', 'Restrooms']
  },
  {
    id: 'tvm-palayam',
    name: 'Palayam',
    district: 'Thiruvananthapuram',
    town: 'Thiruvananthapuram',
    lat: 8.5195,
    lng: 76.9366,
    type: 'major',
    facilities: ['Waiting Room', 'Shops']
  },
  {
    id: 'tvm-attakulangara',
    name: 'Attakulangara',
    district: 'Thiruvananthapuram',
    town: 'Thiruvananthapuram',
    lat: 8.5041,
    lng: 76.9398,
    type: 'minor',
    facilities: []
  },
  
  // Ernakulam
  {
    id: 'ekm-vytila',
    name: 'Vytila Hub',
    district: 'Ernakulam',
    town: 'Kochi',
    lat: 9.9647,
    lng: 76.3269,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'Shopping', 'ATM']
  },
  {
    id: 'ekm-aluva',
    name: 'Aluva',
    district: 'Ernakulam',
    town: 'Aluva',
    lat: 10.1081,
    lng: 76.3516,
    type: 'major',
    facilities: ['Waiting Room', 'ATM', 'Metro Connection']
  },
  {
    id: 'ekm-kaloor',
    name: 'Kaloor',
    district: 'Ernakulam',
    town: 'Kochi',
    lat: 9.9816,
    lng: 76.2999,
    type: 'minor',
    facilities: ['Metro Connection']
  },

  // Kozhikode
  {
    id: 'koz-central',
    name: 'Kozhikode KSRTC Stand',
    district: 'Kozhikode',
    town: 'Kozhikode',
    lat: 11.2588,
    lng: 75.7804,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'Railway Connection']
  },
  {
    id: 'koz-mavoor',
    name: 'Mavoor Road',
    district: 'Kozhikode',
    town: 'Kozhikode',
    lat: 11.2639,
    lng: 75.7896,
    type: 'minor',
    facilities: ['Waiting Room']
  },

  // Add more stops for other districts...
];

export const getStopsByDistrict = (district: string): BusStop[] => {
  return keralaStops.filter(stop => stop.district === district);
};

export const getStopById = (id: string): BusStop | undefined => {
  return keralaStops.find(stop => stop.id === id);
};
