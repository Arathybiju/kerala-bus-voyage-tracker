
import { Bus, Route } from '../types/bus';

export const sampleBuses: Bus[] = [
  // TVM to EKM Route Buses
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
    number: 'KL-01-2002',
    routeName: 'Thiruvananthapuram - Ernakulam Fast',
    from: 'Thiruvananthapuram Central',
    to: 'Vytila Hub',
    departureTime: '08:00',
    arrivalTime: '12:30',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.0,
    price: 220,
    amenities: ['AC', 'Charging Port', 'Reclining Seats'],
    currentLocation: {
      lat: 8.9932,
      lng: 76.6141,
      timestamp: '2025-06-21T09:30:00Z'
    }
  },
  {
    id: 'bus-003',
    number: 'KL-01-2003',
    routeName: 'Thiruvananthapuram - Ernakulam Ordinary',
    from: 'Thiruvananthapuram Central',
    to: 'Vytila Hub',
    departureTime: '14:00',
    arrivalTime: '19:00',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'delayed',
    rating: 3.5,
    price: 150,
    amenities: ['Basic Seating'],
    currentLocation: {
      lat: 9.4981,
      lng: 76.3388,
      timestamp: '2025-06-21T17:00:00Z'
    }
  },

  // KOZ to TVM Route Buses
  {
    id: 'bus-004',
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
    id: 'bus-005',
    number: 'KL-14-5013',
    routeName: 'Kozhikode - Thiruvananthapuram AC',
    from: 'Kozhikode KSRTC Stand',
    to: 'Thiruvananthapuram Central',
    departureTime: '20:00',
    arrivalTime: '04:30',
    operator: 'Private',
    busType: 'AC Sleeper',
    status: 'on-time',
    rating: 4.3,
    price: 350,
    amenities: ['AC', 'WiFi', 'Charging Port', 'Sleeper Berths'],
    currentLocation: {
      lat: 10.7867,
      lng: 76.6548,
      timestamp: '2025-06-21T22:00:00Z'
    }
  },

  // EKM to ALP Local Route
  {
    id: 'bus-006',
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
  },
  {
    id: 'bus-007',
    number: 'KL-07-8902',
    routeName: 'Ernakulam - Alappuzha Fast',
    from: 'Vytila Hub',
    to: 'Alappuzha KSRTC Stand',
    departureTime: '16:30',
    arrivalTime: '17:45',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.2,
    price: 65,
    amenities: ['AC', 'Comfortable Seats'],
    currentLocation: {
      lat: 9.7500,
      lng: 76.3000,
      timestamp: '2025-06-21T17:00:00Z'
    }
  },

  // TSR to EKM Route
  {
    id: 'bus-008',
    number: 'KL-08-3501',
    routeName: 'Thrissur - Ernakulam Express',
    from: 'Thrissur KSRTC Stand',
    to: 'Vytila Hub',
    departureTime: '07:00',
    arrivalTime: '08:30',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.1,
    price: 85,
    amenities: ['AC', 'Reclining Seats', 'Charging Port'],
    currentLocation: {
      lat: 10.3000,
      lng: 76.2500,
      timestamp: '2025-06-21T07:45:00Z'
    }
  },
  {
    id: 'bus-009',
    number: 'KL-08-3502',
    routeName: 'Thrissur - Ernakulam Local',
    from: 'Thrissur KSRTC Stand',
    to: 'Vytila Hub',
    departureTime: '09:15',
    arrivalTime: '11:00',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 3.8,
    price: 55,
    amenities: ['Basic Seating'],
    currentLocation: {
      lat: 10.4000,
      lng: 76.2800,
      timestamp: '2025-06-21T10:00:00Z'
    }
  },

  // PLK to KOZ Route
  {
    id: 'bus-010',
    number: 'KL-10-4201',
    routeName: 'Palakkad - Kozhikode Express',
    from: 'Palakkad KSRTC Stand',
    to: 'Kozhikode KSRTC Stand',
    departureTime: '06:30',
    arrivalTime: '09:00',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.0,
    price: 120,
    amenities: ['AC', 'Comfortable Seats', 'Charging Port'],
    currentLocation: {
      lat: 10.9000,
      lng: 76.4000,
      timestamp: '2025-06-21T07:30:00Z'
    }
  },

  // EKM to IDK (Munnar) Tourist Route
  {
    id: 'bus-011',
    number: 'KL-04-5001',
    routeName: 'Ernakulam - Munnar Tourist Special',
    from: 'Vytila Hub',
    to: 'Munnar',
    departureTime: '06:00',
    arrivalTime: '12:00',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.4,
    price: 180,
    amenities: ['AC', 'Tourist Guide', 'Scenic Route'],
    currentLocation: {
      lat: 9.8000,
      lng: 76.6000,
      timestamp: '2025-06-21T09:00:00Z'
    }
  },
  {
    id: 'bus-012',
    number: 'KL-04-5002',
    routeName: 'Ernakulam - Thekkady',
    from: 'Vytila Hub',
    to: 'Thekkady',
    departureTime: '08:00',
    arrivalTime: '13:30',
    operator: 'Private',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.2,
    price: 200,
    amenities: ['AC', 'Tourist Info', 'Wildlife Sanctuary Access'],
    currentLocation: {
      lat: 9.7000,
      lng: 76.8000,
      timestamp: '2025-06-21T10:30:00Z'
    }
  },

  // KNR to KSD Route
  {
    id: 'bus-013',
    number: 'KL-12-6001',
    routeName: 'Kannur - Kasaragod Coastal',
    from: 'Kannur KSRTC Stand',
    to: 'Kasaragod KSRTC Stand',
    departureTime: '10:00',
    arrivalTime: '12:30',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 3.9,
    price: 75,
    amenities: ['Basic Seating', 'Coastal Views'],
    currentLocation: {
      lat: 12.1000,
      lng: 75.1000,
      timestamp: '2025-06-21T11:00:00Z'
    }
  },

  // WYD Internal Route
  {
    id: 'bus-014',
    number: 'KL-13-7001',
    routeName: 'Kalpetta - Sulthan Bathery',
    from: 'Kalpetta',
    to: 'Sulthan Bathery',
    departureTime: '07:30',
    arrivalTime: '08:30',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 3.7,
    price: 35,
    amenities: ['Hill Station Route'],
    currentLocation: {
      lat: 11.6500,
      lng: 76.1500,
      timestamp: '2025-06-21T08:00:00Z'
    }
  },

  // Additional Evening/Night Buses
  {
    id: 'bus-015',
    number: 'KL-01-2101',
    routeName: 'Thiruvananthapuram - Kozhikode Night',
    from: 'Thiruvananthapuram Central',
    to: 'Kozhikode KSRTC Stand',
    departureTime: '21:00',
    arrivalTime: '04:30',
    operator: 'Private',
    busType: 'AC Sleeper',
    status: 'on-time',
    rating: 4.1,
    price: 380,
    amenities: ['AC', 'Sleeper Berths', 'Night Travel', 'WiFi'],
    currentLocation: {
      lat: 8.6000,
      lng: 76.8000,
      timestamp: '2025-06-21T22:00:00Z'
    }
  },
  {
    id: 'bus-016',
    number: 'KL-07-8801',
    routeName: 'Ernakulam - Kottayam Express',
    from: 'Vytila Hub',
    to: 'Kottayam KSRTC Stand',
    departureTime: '12:00',
    arrivalTime: '13:30',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.0,
    price: 75,
    amenities: ['AC', 'Comfortable Seats'],
    currentLocation: {
      lat: 9.7000,
      lng: 76.4500,
      timestamp: '2025-06-21T12:45:00Z'
    }
  },
  {
    id: 'bus-017',
    number: 'KL-11-4801',
    routeName: 'Malappuram - Thrissur Local',
    from: 'Malappuram KSRTC Stand',
    to: 'Thrissur KSRTC Stand',
    departureTime: '15:00',
    arrivalTime: '17:00',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 3.6,
    price: 65,
    amenities: ['Basic Seating'],
    currentLocation: {
      lat: 10.8000,
      lng: 76.1500,
      timestamp: '2025-06-21T16:00:00Z'
    }
  },
  {
    id: 'bus-018',
    number: 'KL-02-3301',
    routeName: 'Kollam - Pathanamthitta',
    from: 'Kollam KSRTC Stand',
    to: 'Adoor',
    departureTime: '11:00',
    arrivalTime: '12:30',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 3.8,
    price: 45,
    amenities: ['Basic Seating'],
    currentLocation: {
      lat: 9.0500,
      lng: 76.7000,
      timestamp: '2025-06-21T11:45:00Z'
    }
  },
  {
    id: 'bus-019',
    number: 'KL-05-6701',
    routeName: 'Alappuzha - Kottayam Backwater',
    from: 'Alappuzha KSRTC Stand',
    to: 'Kottayam KSRTC Stand',
    departureTime: '13:30',
    arrivalTime: '15:00',
    operator: 'KSRTC',
    busType: 'AC Seater',
    status: 'on-time',
    rating: 4.2,
    price: 80,
    amenities: ['AC', 'Scenic Route', 'Backwater Views'],
    currentLocation: {
      lat: 9.4000,
      lng: 76.4500,
      timestamp: '2025-06-21T14:15:00Z'
    }
  },
  {
    id: 'bus-020',
    number: 'KL-08-3801',
    routeName: 'Thrissur - Guruvayur Devotee Special',
    from: 'Thrissur KSRTC Stand',
    to: 'Guruvayur',
    departureTime: '05:30',
    arrivalTime: '06:15',
    operator: 'KSRTC',
    busType: 'Ordinary',
    status: 'on-time',
    rating: 4.1,
    price: 25,
    amenities: ['Temple Route', 'Early Morning Service'],
    currentLocation: {
      lat: 10.5600,
      lng: 76.1000,
      timestamp: '2025-06-21T06:00:00Z'
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
  },
  {
    id: 'route-002',
    busId: 'bus-004',
    stops: [
      { id: 'stop-1', name: 'Kozhikode KSRTC Stand', district: 'koz', arrivalTime: '22:30', platform: 'A1' },
      { id: 'stop-2', name: 'Malappuram KSRTC Stand', district: 'mpm', arrivalTime: '23:30' },
      { id: 'stop-3', name: 'Palakkad KSRTC Stand', district: 'plk', arrivalTime: '01:00' },
      { id: 'stop-4', name: 'Thrissur KSRTC Stand', district: 'tsr', arrivalTime: '02:15' },
      { id: 'stop-5', name: 'Ernakulam Vytila Hub', district: 'ekm', arrivalTime: '03:30' },
      { id: 'stop-6', name: 'Kollam KSRTC Stand', district: 'kol', arrivalTime: '04:45' },
      { id: 'stop-7', name: 'Thiruvananthapuram Central', district: 'tvm', arrivalTime: '05:45', platform: 'B2' }
    ],
    totalDuration: '7h 15m'
  },
  {
    id: 'route-003',
    busId: 'bus-011',
    stops: [
      { id: 'stop-1', name: 'Vytila Hub', district: 'ekm', arrivalTime: '06:00', platform: 'D1' },
      { id: 'stop-2', name: 'Aluva', district: 'ekm', arrivalTime: '06:30' },
      { id: 'stop-3', name: 'Angamaly', district: 'ekm', arrivalTime: '07:00' },
      { id: 'stop-4', name: 'Chalakudy', district: 'tsr', arrivalTime: '07:45' },
      { id: 'stop-5', name: 'Kottayam KSRTC Stand', district: 'ktm', arrivalTime: '09:00' },
      { id: 'stop-6', name: 'Kumily', district: 'idk', arrivalTime: '10:30' },
      { id: 'stop-7', name: 'Munnar', district: 'idk', arrivalTime: '12:00' }
    ],
    totalDuration: '6h 00m'
  }
];
