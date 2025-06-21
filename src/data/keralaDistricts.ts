
import { District, Station } from '../types/station';

export const keralaDistricts: District[] = [
  { id: 'tvm', name: 'Thiruvananthapuram', malayalamName: 'തിരുവനന്തപുരം' },
  { id: 'kol', name: 'Kollam', malayalamName: 'കൊല്ലം' },
  { id: 'ptm', name: 'Pathanamthitta', malayalamName: 'പത്തനംതിട്ട' },
  { id: 'alp', name: 'Alappuzha', malayalamName: 'ആലപ്പുഴ' },
  { id: 'ktm', name: 'Kottayam', malayalamName: 'കോട്ടയം' },
  { id: 'idk', name: 'Idukki', malayalamName: 'ഇടുക്കി' },
  { id: 'ekm', name: 'Ernakulam', malayalamName: 'എറണാകുളം' },
  { id: 'tsr', name: 'Thrissur', malayalamName: 'തൃശ്ശൂർ' },
  { id: 'plk', name: 'Palakkad', malayalamName: 'പാലക്കാട്' },
  { id: 'mpm', name: 'Malappuram', malayalamName: 'മലപ്പുറം' },
  { id: 'koz', name: 'Kozhikode', malayalamName: 'കോഴിക്കോട്' },
  { id: 'wyd', name: 'Wayanad', malayalamName: 'വയനാട്' },
  { id: 'knr', name: 'Kannur', malayalamName: 'കണ്ണൂർ' },
  { id: 'ksd', name: 'Kasaragod', malayalamName: 'കാസർഗോഡ്' }
];

export const stationsByDistrict: Record<string, Station[]> = {
  tvm: [
    { id: 'tvm-central', name: 'Thiruvananthapuram Central', district: 'tvm', type: 'terminal', facilities: ['AC Waiting', 'Food Court', 'ATM'] },
    { id: 'tvm-fort', name: 'Fort', district: 'tvm', type: 'bus-stand', facilities: ['Waiting Room'] },
    { id: 'tvm-neyyattinkara', name: 'Neyyattinkara', district: 'tvm', type: 'bus-stand', facilities: ['Parking'] },
    { id: 'tvm-varkala', name: 'Varkala', district: 'tvm', type: 'stop', facilities: [] }
  ],
  ekm: [
    { id: 'ekm-vytila', name: 'Vytila Hub', district: 'ekm', type: 'terminal', facilities: ['AC Waiting', 'Food Court', 'Shopping'] },
    { id: 'ekm-aluva', name: 'Aluva', district: 'ekm', type: 'bus-stand', facilities: ['Waiting Room', 'ATM'] },
    { id: 'ekm-fort-kochi', name: 'Fort Kochi', district: 'ekm', type: 'stop', facilities: ['Tourist Info'] },
    { id: 'ekm-kakkanad', name: 'Kakkanad', district: 'ekm', type: 'stop', facilities: ['IT Park'] }
  ],
  koz: [
    { id: 'koz-central', name: 'Kozhikode KSRTC Stand', district: 'koz', type: 'terminal', facilities: ['AC Waiting', 'Food Court'] },
    { id: 'koz-mavoor', name: 'Mavoor Road', district: 'koz', type: 'bus-stand', facilities: ['Waiting Room'] },
    { id: 'koz-beach', name: 'Kozhikode Beach', district: 'koz', type: 'stop', facilities: [] }
  ]
};
