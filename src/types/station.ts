
export interface District {
  id: string;
  name: string;
  malayalamName: string;
}

export interface Station {
  id: string;
  name: string;
  district: string;
  type: 'bus-stand' | 'stop' | 'terminal';
  facilities: string[];
  contact?: string;
}
