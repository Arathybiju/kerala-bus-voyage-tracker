
import { BusSchedule } from '../types/schedule';

export const busSchedules: BusSchedule[] = [
  // Thiruvananthapuram to Ernakulam Route Buses
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
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '09:30',
        departureTime: '09:35',
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
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '11:45',
        departureTime: '11:50',
        sequence: 5
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '12:30',
        departureTime: '12:30',
        platform: 'B1',
        sequence: 6
      }
    ]
  },
  {
    id: 'schedule-003',
    busId: 'KL-01-2003',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '14:00',
        departureTime: '14:00',
        platform: 'A3',
        sequence: 1
      },
      {
        stopId: 'tvm-neyyattinkara',
        stopName: 'Neyyattinkara',
        arrivalTime: '14:30',
        departureTime: '14:35',
        sequence: 2
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '15:30',
        departureTime: '15:40',
        platform: 'B3',
        sequence: 3
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '16:45',
        departureTime: '16:55',
        platform: 'C3',
        sequence: 4
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '17:45',
        departureTime: '17:55',
        sequence: 5
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '19:00',
        departureTime: '19:00',
        platform: 'B2',
        sequence: 6
      }
    ]
  },

  // Kozhikode to Thiruvananthapuram Route Buses
  {
    id: 'schedule-004',
    busId: 'KL-14-5012',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'koz-central',
        stopName: 'Kozhikode KSRTC Stand',
        arrivalTime: '22:30',
        departureTime: '22:30',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'mpm-central',
        stopName: 'Malappuram KSRTC Stand',
        arrivalTime: '23:30',
        departureTime: '23:35',
        platform: 'B1',
        sequence: 2
      },
      {
        stopId: 'plk-central',
        stopName: 'Palakkad KSRTC Stand',
        arrivalTime: '01:00',
        departureTime: '01:10',
        platform: 'C1',
        sequence: 3
      },
      {
        stopId: 'tsr-central',
        stopName: 'Thrissur KSRTC Stand',
        arrivalTime: '02:15',
        departureTime: '02:25',
        platform: 'A2',
        sequence: 4
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '03:30',
        departureTime: '03:40',
        platform: 'A3',
        sequence: 5
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '04:45',
        departureTime: '04:50',
        sequence: 6
      },
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '05:45',
        departureTime: '05:45',
        platform: 'B2',
        sequence: 7
      }
    ]
  },
  {
    id: 'schedule-005',
    busId: 'KL-14-5013',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'koz-central',
        stopName: 'Kozhikode KSRTC Stand',
        arrivalTime: '20:00',
        departureTime: '20:00',
        platform: 'A2',
        sequence: 1
      },
      {
        stopId: 'koz-vadakara',
        stopName: 'Vadakara',
        arrivalTime: '20:45',
        departureTime: '20:50',
        sequence: 2
      },
      {
        stopId: 'mpm-central',
        stopName: 'Malappuram KSRTC Stand',
        arrivalTime: '21:30',
        departureTime: '21:35',
        sequence: 3
      },
      {
        stopId: 'plk-central',
        stopName: 'Palakkad KSRTC Stand',
        arrivalTime: '23:00',
        departureTime: '23:10',
        sequence: 4
      },
      {
        stopId: 'tsr-central',
        stopName: 'Thrissur KSRTC Stand',
        arrivalTime: '00:15',
        departureTime: '00:25',
        sequence: 5
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '01:30',
        departureTime: '01:35',
        sequence: 6
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '02:30',
        departureTime: '02:35',
        sequence: 7
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '03:45',
        departureTime: '03:50',
        sequence: 8
      },
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '04:30',
        departureTime: '04:30',
        sequence: 9
      }
    ]
  },

  // Local Ernakulam Routes
  {
    id: 'schedule-006',
    busId: 'KL-07-8901',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '14:15',
        departureTime: '14:15',
        platform: 'C1',
        sequence: 1
      },
      {
        stopId: 'ekm-edappally',
        stopName: 'Edappally',
        arrivalTime: '14:30',
        departureTime: '14:32',
        sequence: 2
      },
      {
        stopId: 'alp-cherthala',
        stopName: 'Cherthala',
        arrivalTime: '15:15',
        departureTime: '15:20',
        sequence: 3
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '16:00',
        departureTime: '16:00',
        sequence: 4
      }
    ]
  },
  {
    id: 'schedule-007',
    busId: 'KL-07-8902',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '16:30',
        departureTime: '16:30',
        platform: 'C2',
        sequence: 1
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '17:45',
        departureTime: '17:45',
        sequence: 2
      }
    ]
  },

  // Thrissur to Ernakulam Routes
  {
    id: 'schedule-008',
    busId: 'KL-08-3501',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'tsr-central',
        stopName: 'Thrissur KSRTC Stand',
        arrivalTime: '07:00',
        departureTime: '07:00',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'tsr-chalakudy',
        stopName: 'Chalakudy',
        arrivalTime: '07:30',
        departureTime: '07:35',
        sequence: 2
      },
      {
        stopId: 'ekm-angamaly',
        stopName: 'Angamaly',
        arrivalTime: '08:00',
        departureTime: '08:05',
        sequence: 3
      },
      {
        stopId: 'ekm-aluva',
        stopName: 'Aluva',
        arrivalTime: '08:20',
        departureTime: '08:25',
        sequence: 4
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '08:30',
        departureTime: '08:30',
        platform: 'B1',
        sequence: 5
      }
    ]
  },

  // Tourist Routes
  {
    id: 'schedule-009',
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
        stopId: 'ekm-aluva',
        stopName: 'Aluva',
        arrivalTime: '06:30',
        departureTime: '06:35',
        sequence: 2
      },
      {
        stopId: 'ekm-angamaly',
        stopName: 'Angamaly',
        arrivalTime: '07:00',
        departureTime: '07:05',
        sequence: 3
      },
      {
        stopId: 'tsr-chalakudy',
        stopName: 'Chalakudy',
        arrivalTime: '07:45',
        departureTime: '07:50',
        sequence: 4
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '09:00',
        departureTime: '09:10',
        sequence: 5
      },
      {
        stopId: 'idk-kumily',
        stopName: 'Kumily',
        arrivalTime: '10:30',
        departureTime: '10:35',
        sequence: 6
      },
      {
        stopId: 'idk-munnar',
        stopName: 'Munnar',
        arrivalTime: '12:00',
        departureTime: '12:00',
        sequence: 7
      }
    ]
  },
  {
    id: 'schedule-010',
    busId: 'KL-04-5002',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '08:00',
        departureTime: '08:00',
        platform: 'D2',
        sequence: 1
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '09:30',
        departureTime: '09:40',
        sequence: 2
      },
      {
        stopId: 'idk-kumily',
        stopName: 'Kumily',
        arrivalTime: '11:30',
        departureTime: '11:35',
        sequence: 3
      },
      {
        stopId: 'idk-thekkady',
        stopName: 'Thekkady',
        arrivalTime: '13:30',
        departureTime: '13:30',
        sequence: 4
      }
    ]
  },

  // Additional Routes for more comprehensive coverage
  {
    id: 'schedule-011',
    busId: 'KL-10-4201',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'plk-central',
        stopName: 'Palakkad KSRTC Stand',
        arrivalTime: '06:30',
        departureTime: '06:30',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'plk-ottapalam',
        stopName: 'Ottapalam',
        arrivalTime: '07:15',
        departureTime: '07:20',
        sequence: 2
      },
      {
        stopId: 'mpm-perinthalmanna',
        stopName: 'Perinthalmanna',
        arrivalTime: '08:00',
        departureTime: '08:05',
        sequence: 3
      },
      {
        stopId: 'mpm-central',
        stopName: 'Malappuram KSRTC Stand',
        arrivalTime: '08:30',
        departureTime: '08:35',
        sequence: 4
      },
      {
        stopId: 'koz-central',
        stopName: 'Kozhikode KSRTC Stand',
        arrivalTime: '09:00',
        departureTime: '09:00',
        sequence: 5
      }
    ]
  },
  {
    id: 'schedule-012',
    busId: 'KL-12-6001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'knr-central',
        stopName: 'Kannur KSRTC Stand',
        arrivalTime: '10:00',
        departureTime: '10:00',
        platform: 'A1',
        sequence: 1
      },
      {
        stopId: 'knr-thalassery',
        stopName: 'Thalassery',
        arrivalTime: '10:30',
        departureTime: '10:35',
        sequence: 2
      },
      {
        stopId: 'knr-payyanur',
        stopName: 'Payyanur',
        arrivalTime: '11:30',
        departureTime: '11:35',
        sequence: 3
      },
      {
        stopId: 'ksd-kanhangad',
        stopName: 'Kanhangad',
        arrivalTime: '12:00',
        departureTime: '12:05',
        sequence: 4
      },
      {
        stopId: 'ksd-central',
        stopName: 'Kasaragod KSRTC Stand',
        arrivalTime: '12:30',
        departureTime: '12:30',
        sequence: 5
      }
    ]
  },
  {
    id: 'schedule-013',
    busId: 'KL-13-7001',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'wyd-kalpetta',
        stopName: 'Kalpetta',
        arrivalTime: '07:30',
        departureTime: '07:30',
        sequence: 1
      },
      {
        stopId: 'wyd-vythiri',
        stopName: 'Vythiri',
        arrivalTime: '07:50',
        departureTime: '07:55',
        sequence: 2
      },
      {
        stopId: 'wyd-sulthan-bathery',
        stopName: 'Sulthan Bathery',
        arrivalTime: '08:30',
        departureTime: '08:30',
        sequence: 3
      }
    ]
  },
  {
    id: 'schedule-014',
    busId: 'KL-01-2101',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'tvm-central',
        stopName: 'Thiruvananthapuram Central',
        arrivalTime: '21:00',
        departureTime: '21:00',
        platform: 'A4',
        sequence: 1
      },
      {
        stopId: 'kol-central',
        stopName: 'Kollam KSRTC Stand',
        arrivalTime: '22:00',
        departureTime: '22:05',
        sequence: 2
      },
      {
        stopId: 'alp-central',
        stopName: 'Alappuzha KSRTC Stand',
        arrivalTime: '23:00',
        departureTime: '23:05',
        sequence: 3
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '23:45',
        departureTime: '23:50',
        sequence: 4
      },
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '00:45',
        departureTime: '00:50',
        sequence: 5
      },
      {
        stopId: 'tsr-central',
        stopName: 'Thrissur KSRTC Stand',
        arrivalTime: '01:45',
        departureTime: '01:50',
        sequence: 6
      },
      {
        stopId: 'plk-central',
        stopName: 'Palakkad KSRTC Stand',
        arrivalTime: '03:00',
        departureTime: '03:05',
        sequence: 7
      },
      {
        stopId: 'mpm-central',
        stopName: 'Malappuram KSRTC Stand',
        arrivalTime: '04:00',
        departureTime: '04:05',
        sequence: 8
      },
      {
        stopId: 'koz-central',
        stopName: 'Kozhikode KSRTC Stand',
        arrivalTime: '04:30',
        departureTime: '04:30',
        sequence: 9
      }
    ]
  },
  {
    id: 'schedule-015',
    busId: 'KL-07-8801',
    frequency: 'daily',
    validDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    startDate: '2025-01-01',
    stops: [
      {
        stopId: 'ekm-vytila',
        stopName: 'Vytila Hub',
        arrivalTime: '12:00',
        departureTime: '12:00',
        platform: 'B4',
        sequence: 1
      },
      {
        stopId: 'ktm-vaikom',
        stopName: 'Vaikom',
        arrivalTime: '12:45',
        departureTime: '12:50',
        sequence: 2
      },
      {
        stopId: 'ktm-central',
        stopName: 'Kottayam KSRTC Stand',
        arrivalTime: '13:30',
        departureTime: '13:30',
        sequence: 3
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
