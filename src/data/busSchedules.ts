
import { BusSchedule } from '../types/schedule';

export const busSchedules: BusSchedule[] = [
  // Thiruvananthapuram to Ernakulam Route
  {
    id: 'schedule-001',
    busId: 'KL-01-2001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '06:00',
        departureTime: '06:00',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'tvm-attakulangara',
        stopName: 'Attakulangara',
        arrivalTime: '06:15',
        departureTime: '06:17',
        sequence: 2
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '07:30',
        departureTime: '07:35',
        platform: 'B2',
        sequence: 3
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '08:45',
        departureTime: '08:50',
        platform: 'C1',
        sequence: 4
      },
      {
        stopId: 'ekm-aluva',
        stopName: 'Aluva',
        arrivalTime: '09:45',
        departureTime: '09:50',
        sequence: 5
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '10:30',
        departureTime: '10:30',
        platform: 'B3',
        sequence: 6
      }
    ]
  },
  {
    id: 'schedule-002',
    busId: 'KL-01-2002',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '08:00',
        departureTime: '08:00',
        platform: 'A2',
        sequence: 1
      },
      {
        stopId: 'tvm-varkala',
        stopName: 'Varkala',
        arrivalTime: '08:45',
        departureTime: '08:50',
        sequence: 2
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '09:30',
        departureTime: '09:35',
        platform: 'B1',
        sequence: 3
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '10:45',
        departureTime: '10:50',
        platform: 'C2',
        sequence: 4
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '12:30',
        departureTime: '12:30',
        platform: 'B1',
        sequence: 5
      }
    ]
  },
  // Kozhikode to Ernakulam Route
  {
    id: 'schedule-003',
    busId: 'KL-11-3001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'koz-central',
        stopName: 'Kozhikode KSRTC Stand',
        arrivalTime: '06:00',
        departureTime: '06:00',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'mpm-central',
        stopName: 'Malappuram KSRTC Stand',
        arrivalTime: '07:00',
        departureTime: '07:05',
        platform: 'B1',
        sequence: 2
      },
      {
        stopId: 'plk-central',
        stopName: 'Palakkad KSRTC Stand',
        arrivalTime: '08:30',
        departureTime: '08:35',
        platform: 'C1',
        sequence: 3
      },
      {
        stopId: 'tsr-central',
        stopName: 'Thrissur KSRTC Stand',
        arrivalTime: '09:45',
        departureTime: '09:50',
        platform: 'A2',
        sequence: 4
      },
      {
        stopId: 'ekm-aluva',
        stopName: 'Aluva',
        arrivalTime: '10:45',
        departureTime: '10:50',
        sequence: 5
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '11:30',
        departureTime: '11:30',
        platform: 'A3',
        sequence: 6
      }
    ]
  },
  // Local Ernakulam Routes
  {
    id: 'schedule-004',
    busId: 'KL-07-4001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '07:00',
        departureTime: '07:00',
        platform: 'C1',
        sequence: 1
      },
      {
        stopId: 'ekm-kaloor',
        stopName: 'Kaloor',
        arrivalTime: '07:20',
        departureTime: '07:22',
        sequence: 2
      },
      {
        stopId: 'ekm-fort-kochi',
        stopName: 'Fort Kochi',
        arrivalTime: '08:00',
        departureTime: '08:00',
        sequence: 3
      }
    ]
  },
  // Munnar Tourist Route
  {
    id: 'schedule-005',
    busId: 'KL-04-5001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '06:00',
        departureTime: '06:00',
        platform: 'D1',
        sequence: 1
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '08:00',
        departureTime: '08:05',
        platform: 'A1',
        sequence: 2
      },
      {
        stopId: 'idk-kumily',
        stopName: 'Kumily',
        arrivalTime: '10:30',
        departureTime: '10:35',
        sequence: 3
      },
      {
        stopId: 'idk-munnar',
        stopName: 'Munnar',
        arrivalTime: '12:00',
        departureTime: '12:00',
        sequence: 4
      }
    ]
  }
];

export const getScheduleByBusId = (busId: string): BusSchedule | undefined => {
  return busSchedules.find(schedule => schedule.busId === busId);
};

export const getSchedulesByRoute = (fromStopId: string, toStopId: string): BusSchedule[] => {
  return busSchedules.filter(schedule => {
    const fromIndex = schedule.stops.findIndex(stop => stop.stopId === fromStopId);
    const toIndex = schedule.stops.findIndex(stop => stop.stopId === toStopId);
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });
};
