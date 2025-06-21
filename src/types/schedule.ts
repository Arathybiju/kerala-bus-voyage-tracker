
export interface BusSchedule {
  id: string;
  busId: string;
  stops: ScheduleStop[];
  frequency: 'daily' | 'weekly' | 'custom';
  validDays: string[]; // ['monday', 'tuesday', etc.]
  startDate: string;
  endDate?: string;
}

export interface ScheduleStop {
  stopId: string;
  stopName: string;
  arrivalTime: string;
  departureTime: string;
  platform?: string;
  sequence: number;
}
