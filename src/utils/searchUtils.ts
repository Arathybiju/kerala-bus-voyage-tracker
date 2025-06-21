
import { Bus, Route } from '../types/bus';
import { BusStop } from '../types/location';
import { BusSchedule } from '../types/schedule';

// Find buses that travel from source stop to destination stop
export const findMatchingBuses = (
  sourceStopId: string,
  destinationStopId: string,
  buses: Bus[],
  routes: Route[],
  schedules: BusSchedule[]
): Bus[] => {
  const matchingBuses: Bus[] = [];

  for (const bus of buses) {
    // Get route for this bus
    const route = routes.find(r => r.busId === bus.id);
    const schedule = schedules.find(s => s.busId === bus.id);

    if (!route && !schedule) continue;

    // Check if bus route includes both stops in correct order
    const stops = route?.stops || schedule?.stops || [];
    const sourceIndex = stops.findIndex(stop => 
      stop.id === sourceStopId || (schedule && stop.stopId === sourceStopId)
    );
    const destIndex = stops.findIndex(stop => 
      stop.id === destinationStopId || (schedule && stop.stopId === destinationStopId)
    );

    // Both stops must exist and source must come before destination
    if (sourceIndex !== -1 && destIndex !== -1 && sourceIndex < destIndex) {
      matchingBuses.push(bus);
    }
  }

  return matchingBuses;
};

// Get route segment between two stops
export const getRouteSegment = (
  busId: string,
  sourceStopId: string,
  destinationStopId: string,
  routes: Route[],
  schedules: BusSchedule[]
): any[] => {
  const route = routes.find(r => r.busId === busId);
  const schedule = schedules.find(s => s.busId === busId);
  
  if (!route && !schedule) return [];

  const stops = route?.stops || schedule?.stops || [];
  const sourceIndex = stops.findIndex(stop => 
    stop.id === sourceStopId || (schedule && stop.stopId === sourceStopId)
  );
  const destIndex = stops.findIndex(stop => 
    stop.id === destinationStopId || (schedule && stop.stopId === destinationStopId)
  );

  if (sourceIndex === -1 || destIndex === -1) return [];

  return stops.slice(sourceIndex, destIndex + 1);
};

// Search buses by keywords
export const searchBusesByKeyword = (
  keyword: string,
  buses: Bus[]
): Bus[] => {
  const searchTerm = keyword.toLowerCase().trim();
  
  return buses.filter(bus => 
    bus.number.toLowerCase().includes(searchTerm) ||
    bus.routeName.toLowerCase().includes(searchTerm) ||
    bus.from.toLowerCase().includes(searchTerm) ||
    bus.to.toLowerCase().includes(searchTerm) ||
    bus.operator.toLowerCase().includes(searchTerm)
  );
};
