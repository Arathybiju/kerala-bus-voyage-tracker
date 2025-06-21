
import { BusSchedule } from '../types/schedule';

export const busSchedules: BusSchedule[] = [
  {
    id: 'schedule-001',
    busId: 'bus-001',
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
        stopId: 'ekm-aluva',
        stopName: 'Aluva',
        arrivalTime: '09:45',
        departureTime: '09:50',
        sequence: 3
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '10:30',
        departureTime: '10:30',
        platform: 'B3',
        sequence: 4
      }
    ]
  }
];

export const getScheduleByBusId = (busId: string): BusSchedule | undefined => {
  return busSchedules.find(schedule => schedule.busId === busId);
};
