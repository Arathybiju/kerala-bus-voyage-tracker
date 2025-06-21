
import { BusStop } from '../types/location';

export const keralaStops: BusStop[] = [
  // Thiruvananthapuram District
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
  {
    id: 'tvm-neyyattinkara',
    name: 'Neyyattinkara',
    district: 'Thiruvananthapuram',
    town: 'Neyyattinkara',
    lat: 8.4019,
    lng: 77.0847,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },
  {
    id: 'tvm-kovalam',
    name: 'Kovalam',
    district: 'Thiruvananthapuram',
    town: 'Kovalam',
    lat: 8.4004,
    lng: 76.9784,
    type: 'minor',
    facilities: ['Tourist Info']
  },
  {
    id: 'tvm-varkala',
    name: 'Varkala',
    district: 'Thiruvananthapuram',
    town: 'Varkala',
    lat: 8.7379,
    lng: 76.7163,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },

  // Kollam District
  {
    id: 'kol-central',
    name: 'Kollam KSRTC Stand',
    district: 'Kollam',
    town: 'Kollam',
    lat: 8.8932,
    lng: 76.6141,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM']
  },
  {
    id: 'kol-karunagappally',
    name: 'Karunagappally',
    district: 'Kollam',
    town: 'Karunagappally',
    lat: 9.0533,
    lng: 76.5330,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'kol-punalur',
    name: 'Punalur',
    district: 'Kollam',
    town: 'Punalur',
    lat: 8.9553,
    lng: 76.9278,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },

  // Pathanamthitta District
  {
    id: 'ptm-adoor',
    name: 'Adoor',
    district: 'Pathanamthitta',
    town: 'Adoor',
    lat: 9.1574,
    lng: 76.7326,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },
  {
    id: 'ptm-thiruvalla',
    name: 'Thiruvalla',
    district: 'Pathanamthitta',
    town: 'Thiruvalla',
    lat: 9.3833,
    lng: 76.5746,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'ptm-sabarimala',
    name: 'Sabarimala',
    district: 'Pathanamthitta',
    town: 'Sabarimala',
    lat: 9.4347,
    lng: 76.9906,
    type: 'minor',
    facilities: ['Pilgrimage Center']
  },

  // Alappuzha District
  {
    id: 'alp-central',
    name: 'Alappuzha KSRTC Stand',
    district: 'Alappuzha',
    town: 'Alappuzha',
    lat: 9.4981,
    lng: 76.3388,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM']
  },
  {
    id: 'alp-cherthala',
    name: 'Cherthala',
    district: 'Alappuzha',
    town: 'Cherthala',
    lat: 9.6843,
    lng: 76.3357,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'alp-kayamkulam',
    name: 'Kayamkulam',
    district: 'Alappuzha',
    town: 'Kayamkulam',
    lat: 9.1751,
    lng: 76.5019,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },

  // Kottayam District
  {
    id: 'ktm-central',
    name: 'Kottayam KSRTC Stand',
    district: 'Kottayam',
    town: 'Kottayam',
    lat: 9.5916,
    lng: 76.5222,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM']
  },
  {
    id: 'ktm-changanassery',
    name: 'Changanassery',
    district: 'Kottayam',
    town: 'Changanassery',
    lat: 9.4418,
    lng: 76.5497,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'ktm-pala',
    name: 'Pala',
    district: 'Kottayam',
    town: 'Pala',
    lat: 9.7197,
    lng: 76.6876,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },

  // Idukki District
  {
    id: 'idk-munnar',
    name: 'Munnar',
    district: 'Idukki',
    town: 'Munnar',
    lat: 10.0889,
    lng: 77.0595,
    type: 'major',
    facilities: ['Tourist Info', 'Waiting Room']
  },
  {
    id: 'idk-thekkady',
    name: 'Thekkady',
    district: 'Idukki',
    town: 'Thekkady',
    lat: 9.5936,
    lng: 77.1570,
    type: 'minor',
    facilities: ['Tourist Info']
  },
  {
    id: 'idk-kumily',
    name: 'Kumily',
    district: 'Idukki',
    town: 'Kumily',
    lat: 9.5936,
    lng: 77.1570,
    type: 'major',
    facilities: ['Waiting Room', 'Tourist Info']
  },

  // Ernakulam District
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
  {
    id: 'ekm-fort-kochi',
    name: 'Fort Kochi',
    district: 'Ernakulam',
    town: 'Fort Kochi',
    lat: 9.9654,
    lng: 76.2424,
    type: 'minor',
    facilities: ['Tourist Info']
  },
  {
    id: 'ekm-angamaly',
    name: 'Angamaly',
    district: 'Ernakulam',
    town: 'Angamaly',
    lat: 10.1908,
    lng: 76.3869,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },

  // Thrissur District
  {
    id: 'tsr-central',
    name: 'Thrissur KSRTC Stand',
    district: 'Thrissur',
    town: 'Thrissur',
    lat: 10.5276,
    lng: 76.2144,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM']
  },
  {
    id: 'tsr-irinjalakuda',
    name: 'Irinjalakuda',
    district: 'Thrissur',
    town: 'Irinjalakuda',
    lat: 10.3422,
    lng: 76.2151,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'tsr-chalakudy',
    name: 'Chalakudy',
    district: 'Thrissur',
    town: 'Chalakudy',
    lat: 10.3075,
    lng: 76.3372,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },

  // Palakkad District
  {
    id: 'plk-central',
    name: 'Palakkad KSRTC Stand',
    district: 'Palakkad',
    town: 'Palakkad',
    lat: 10.7867,
    lng: 76.6548,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM', 'Railway Connection']
  },
  {
    id: 'plk-ottapalam',
    name: 'Ottapalam',
    district: 'Palakkad',
    town: 'Ottapalam',
    lat: 10.7709,
    lng: 76.3776,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'plk-chittur',
    name: 'Chittur',
    district: 'Palakkad',
    town: 'Chittur',
    lat: 10.6999,
    lng: 76.7451,
    type: 'major',
    facilities: ['Waiting Room']
  },

  // Malappuram District
  {
    id: 'mpm-central',
    name: 'Malappuram KSRTC Stand',
    district: 'Malappuram',
    town: 'Malappuram',
    lat: 11.0510,
    lng: 76.0711,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM']
  },
  {
    id: 'mpm-perinthalmanna',
    name: 'Perinthalmanna',
    district: 'Malappuram',
    town: 'Perinthalmanna',
    lat: 10.9712,
    lng: 76.2287,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'mpm-ponnani',
    name: 'Ponnani',
    district: 'Malappuram',
    town: 'Ponnani',
    lat: 10.7684,
    lng: 75.9264,
    type: 'major',
    facilities: ['Waiting Room']
  },

  // Kozhikode District
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
  {
    id: 'koz-vadakara',
    name: 'Vadakara',
    district: 'Kozhikode',
    town: 'Vadakara',
    lat: 11.6094,
    lng: 75.5972,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },

  // Wayanad District
  {
    id: 'wyd-kalpetta',
    name: 'Kalpetta',
    district: 'Wayanad',
    town: 'Kalpetta',
    lat: 11.6082,
    lng: 76.0856,
    type: 'major',
    facilities: ['Waiting Room', 'Tourist Info']
  },
  {
    id: 'wyd-mananthavady',
    name: 'Mananthavady',
    district: 'Wayanad',
    town: 'Mananthavady',
    lat: 11.8081,
    lng: 76.0056,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'wyd-sulthan-bathery',
    name: 'Sulthan Bathery',
    district: 'Wayanad',
    town: 'Sulthan Bathery',
    lat: 11.6853,
    lng: 76.2739,
    type: 'major',
    facilities: ['Waiting Room', 'Tourist Info']
  },

  // Kannur District
  {
    id: 'knr-central',
    name: 'Kannur KSRTC Stand',
    district: 'Kannur',
    town: 'Kannur',
    lat: 11.8745,
    lng: 75.3704,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM', 'Railway Connection']
  },
  {
    id: 'knr-thalassery',
    name: 'Thalassery',
    district: 'Kannur',
    town: 'Thalassery',
    lat: 11.7519,
    lng: 75.4919,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'knr-payyanur',
    name: 'Payyanur',
    district: 'Kannur',
    town: 'Payyanur',
    lat: 12.0985,
    lng: 75.2033,
    type: 'major',
    facilities: ['Waiting Room']
  },

  // Kasaragod District
  {
    id: 'ksd-central',
    name: 'Kasaragod KSRTC Stand',
    district: 'Kasaragod',
    town: 'Kasaragod',
    lat: 12.4996,
    lng: 74.9869,
    type: 'major',
    facilities: ['AC Waiting', 'Food Court', 'ATM', 'Railway Connection']
  },
  {
    id: 'ksd-kanhangad',
    name: 'Kanhangad',
    district: 'Kasaragod',
    town: 'Kanhangad',
    lat: 12.3081,
    lng: 75.0947,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'ksd-nileshwar',
    name: 'Nileshwar',
    district: 'Kasaragod',
    town: 'Nileshwar',
    lat: 12.2569,
    lng: 75.1335,
    type: 'minor',
    facilities: ['Waiting Room']
  }
];

export const getStopsByDistrict = (district: string): BusStop[] => {
  return keralaStops.filter(stop => stop.district === district);
};

export const getStopById = (id: string): BusStop | undefined => {
  return keralaStops.find(stop => stop.id === id);
};
