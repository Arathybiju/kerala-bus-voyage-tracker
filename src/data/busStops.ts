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
  {
    id: 'tvm-nedumangad',
    name: 'Nedumangad',
    district: 'Thiruvananthapuram',
    town: 'Nedumangad',
    lat: 8.6044,
    lng: 77.0171,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },
  {
    id: 'tvm-kazhakootam',
    name: 'Kazhakootam',
    district: 'Thiruvananthapuram',
    town: 'Kazhakootam',
    lat: 8.5658,
    lng: 76.8747,
    type: 'minor',
    facilities: ['IT Park Shuttle']
  },
  {
    id: 'tvm-vizhinjam',
    name: 'Vizhinjam',
    district: 'Thiruvananthapuram',
    town: 'Vizhinjam',
    lat: 8.3829,
    lng: 76.9913,
    type: 'minor',
    facilities: ['Port Connection']
  },
  {
    id: 'tvm-balaramapuram',
    name: 'Balaramapuram',
    district: 'Thiruvananthapuram',
    town: 'Balaramapuram',
    lat: 8.3497,
    lng: 77.0847,
    type: 'minor',
    facilities: ['Handloom Center']
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
  {
    id: 'kol-chavara',
    name: 'Chavara',
    district: 'Kollam',
    town: 'Chavara',
    lat: 8.9667,
    lng: 76.5333,
    type: 'minor',
    facilities: ['Industrial Area']
  },
  {
    id: 'kol-anchal',
    name: 'Anchal',
    district: 'Kollam',
    town: 'Anchal',
    lat: 8.9833,
    lng: 76.7833,
    type: 'minor',
    facilities: ['Waiting Room']
  },
  {
    id: 'kol-kottarakkara',
    name: 'Kottarakkara',
    district: 'Kollam',
    town: 'Kottarakkara',
    lat: 8.9833,
    lng: 76.7833,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },
  {
    id: 'kol-kundara',
    name: 'Kundara',
    district: 'Kollam',
    town: 'Kundara',
    lat: 8.9667,
    lng: 76.6833,
    type: 'minor',
    facilities: ['Temple Connection']
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
  {
    id: 'ptm-konni',
    name: 'Konni',
    district: 'Pathanamthitta',
    town: 'Konni',
    lat: 9.2500,
    lng: 76.8833,
    type: 'minor',
    facilities: ['Forest Connection']
  },
  {
    id: 'ptm-pandalam',
    name: 'Pandalam',
    district: 'Pathanamthitta',
    town: 'Pandalam',
    lat: 9.2667,
    lng: 76.6833,
    type: 'major',
    facilities: ['Waiting Room', 'Temple Town']
  },
  {
    id: 'ptm-ranni',
    name: 'Ranni',
    district: 'Pathanamthitta',
    town: 'Ranni',
    lat: 9.3667,
    lng: 76.8167,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'ptm-mallappuzha',
    name: 'Mallappuzha',
    district: 'Pathanamthitta',
    town: 'Mallappuzha',
    lat: 9.1833,
    lng: 76.8667,
    type: 'minor',
    facilities: ['Dam Connection']
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
  {
    id: 'alp-haripad',
    name: 'Haripad',
    district: 'Alappuzha',
    town: 'Haripad',
    lat: 9.3000,
    lng: 76.4500,
    type: 'major',
    facilities: ['Waiting Room', 'Temple Connection']
  },
  {
    id: 'alp-mavelikkara',
    name: 'Mavelikkara',
    district: 'Alappuzha',
    town: 'Mavelikkara',
    lat: 9.2500,
    lng: 76.5500,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'alp-kuttanad',
    name: 'Kuttanad',
    district: 'Alappuzha',
    town: 'Kuttanad',
    lat: 9.3333,
    lng: 76.4167,
    type: 'minor',
    facilities: ['Backwater Tours']
  },
  {
    id: 'alp-ambalappuzha',
    name: 'Ambalappuzha',
    district: 'Alappuzha',
    town: 'Ambalappuzha',
    lat: 9.3833,
    lng: 76.3667,
    type: 'minor',
    facilities: ['Temple Famous']
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
  {
    id: 'ktm-ettumanoor',
    name: 'Ettumanoor',
    district: 'Kottayam',
    town: 'Ettumanoor',
    lat: 9.6333,
    lng: 76.5167,
    type: 'major',
    facilities: ['Waiting Room', 'Temple Connection']
  },
  {
    id: 'ktm-kumarakom',
    name: 'Kumarakom',
    district: 'Kottayam',
    town: 'Kumarakom',
    lat: 9.6167,
    lng: 76.4333,
    type: 'minor',
    facilities: ['Tourist Info', 'Backwater Access']
  },
  {
    id: 'ktm-vaikom',
    name: 'Vaikom',
    district: 'Kottayam',
    town: 'Vaikom',
    lat: 9.7500,
    lng: 76.3833,
    type: 'major',
    facilities: ['Waiting Room', 'Temple Town']
  },
  {
    id: 'ktm-mundakayam',
    name: 'Mundakayam',
    district: 'Kottayam',
    town: 'Mundakayam',
    lat: 9.5167,
    lng: 76.9000,
    type: 'minor',
    facilities: ['Hill Station Access']
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
  {
    id: 'idk-thodupuzha',
    name: 'Thodupuzha',
    district: 'Idukki',
    town: 'Thodupuzha',
    lat: 9.8936,
    lng: 76.7161,
    type: 'major',
    facilities: ['Waiting Room', 'ATM']
  },
  {
    id: 'idk-kattappana',
    name: 'Kattappana',
    district: 'Idukki',
    town: 'Kattappana',
    lat: 9.6833,
    lng: 77.0833,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'idk-painavu',
    name: 'Painavu',
    district: 'Idukki',
    town: 'Painavu',
    lat: 9.7333,
    lng: 76.9667,
    type: 'minor',
    facilities: ['Dam View']
  },
  {
    id: 'idk-devikulam',
    name: 'Devikulam',
    district: 'Idukki',
    town: 'Devikulam',
    lat: 10.0333,
    lng: 77.1167,
    type: 'minor',
    facilities: ['Hill Station']
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
  {
    id: 'ekm-perumbavoor',
    name: 'Perumbavoor',
    district: 'Ernakulam',
    town: 'Perumbavoor',
    lat: 10.1167,
    lng: 76.4833,
    type: 'major',
    facilities: ['Waiting Room', 'Industrial Area']
  },
  {
    id: 'ekm-muvattupuzha',
    name: 'Muvattupuzha',
    district: 'Ernakulam',
    town: 'Muvattupuzha',
    lat: 9.9833,
    lng: 76.5833,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'ekm-kothamangalam',
    name: 'Kothamangalam',
    district: 'Ernakulam',
    town: 'Kothamangalam',
    lat: 10.0500,
    lng: 76.6333,
    type: 'major',
    facilities: ['Waiting Room']
  },
  {
    id: 'ekm-edappally',
    name: 'Edappally',
    district: 'Ernakulam',
    town: 'Kochi',
    lat: 10.0167,
    lng: 76.3083,
    type: 'minor',
    facilities: ['Shopping Mall', 'Metro']
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
  {
    id: 'tsr-kunnamkulam',
    name: 'Kunnamkulam',
    district: 'Thrissur',
    town: 'Kunnamkulam',
    lat: 10.6500,
    lng: 76.0833,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'tsr-kodungallur',
    name: 'Kodungallur',
    district: 'Thrissur',
    town: 'Kodungallur',
    lat: 10.2167,
    lng: 76.2000,
    type: 'major',
    facilities: ['Waiting Room', 'Historical Site']
  },
  {
    id: 'tsr-guruvayur',
    name: 'Guruvayur',
    district: 'Thrissur',
    town: 'Guruvayur',
    lat: 10.5933,
    lng: 76.0367,
    type: 'major',
    facilities: ['Waiting Room', 'Temple Town', 'ATM']
  },
  {
    id: 'tsr-wadakkanchery',
    name: 'Wadakkanchery',
    district: 'Thrissur',
    town: 'Wadakkanchery',
    lat: 10.6667,
    lng: 76.1333,
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
  {
    id: 'plk-shoranur',
    name: 'Shoranur',
    district: 'Palakkad',
    town: 'Shoranur',
    lat: 10.7667,
    lng: 76.2833,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Junction']
  },
  {
    id: 'plk-mannarkkad',
    name: 'Mannarkkad',
    district: 'Palakkad',
    town: 'Mannarkkad',
    lat: 10.9833,
    lng: 76.4500,
    type: 'major',
    facilities: ['Waiting Room', 'Forest Area']
  },
  {
    id: 'plk-alathur',
    name: 'Alathur',
    district: 'Palakkad',
    town: 'Alathur',
    lat: 10.5167,
    lng: 76.5500,
    type: 'minor',
    facilities: ['Waiting Room']
  },
  {
    id: 'plk-cherpulassery',
    name: 'Cherpulassery',
    district: 'Palakkad',
    town: 'Cherpulassery',
    lat: 10.8667,
    lng: 76.3167,
    type: 'minor',
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
  {
    id: 'mpm-tirur',
    name: 'Tirur',
    district: 'Malappuram',
    town: 'Tirur',
    lat: 10.9167,
    lng: 75.9167,
    type: 'major',
    facilities: ['Waiting Room', 'Railway Connection']
  },
  {
    id: 'mpm-manjeri',
    name: 'Manjeri',
    district: 'Malappuram',
    town: 'Manjeri',
    lat: 11.1167,
    lng: 76.1167,
    type: 'major',
    facilities: ['Waiting Room', 'Medical College']
  },
  {
    id: 'mpm-nilambur',
    name: 'Nilambur',
    district: 'Malappuram',
    town: 'Nilambur',
    lat: 11.2833,
    lng: 76.2167,
    type: 'major',
    facilities: ['Waiting Room', 'Forest Area']
  },
  {
    id: 'mpm-kondotty',
    name: 'Kondotty',
    district: 'Malappuram',
    town: 'Kondotty',
    lat: 11.0167,
    lng: 75.9833,
    type: 'minor',
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
  {
    id: 'koz-koyilandy',
    name: 'Koyilandy',
    district: 'Kozhikode',
    town: 'Koyilandy',
    lat: 11.4333,
    lng: 75.6833,
    type: 'major',
    facilities: ['Waiting Room', 'Beach Access']
  },
  {
    id: 'koz-feroke',
    name: 'Feroke',
    district: 'Kozhikode',
    town: 'Feroke',
    lat: 11.1667,
    lng: 75.8333,
    type: 'minor',
    facilities: ['Industrial Area']
  },
  {
    id: 'koz-quilandy',
    name: 'Quilandy',
    district: 'Kozhikode',
    town: 'Quilandy',
    lat: 11.4333,
    lng: 75.6833,
    type: 'minor',
    facilities: ['Waiting Room']
  },
  {
    id: 'koz-balussery',
    name: 'Balussery',
    district: 'Kozhikode',
    town: 'Balussery',
    lat: 11.4000,
    lng: 75.8333,
    type: 'minor',
    facilities: ['Waiting Room']
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
  {
    id: 'wyd-vythiri',
    name: 'Vythiri',
    district: 'Wayanad',
    town: 'Vythiri',
    lat: 11.5500,
    lng: 76.0167,
    type: 'minor',
    facilities: ['Hill Station', 'Tourist Info']
  },
  {
    id: 'wyd-panamaram',
    name: 'Panamaram',
    district: 'Wayanad',
    town: 'Panamaram',
    lat: 11.7167,
    lng: 76.0833,
    type: 'minor',
    facilities: ['Forest Access']
  },
  {
    id: 'wyd-ambalavayal',
    name: 'Ambalavayal',
    district: 'Wayanad',
    town: 'Ambalavayal',
    lat: 11.6333,
    lng: 76.1833,
    type: 'minor',
    facilities: ['Heritage Site']
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
  {
    id: 'knr-iritty',
    name: 'Iritty',
    district: 'Kannur',
    town: 'Iritty',
    lat: 11.9833,
    lng: 75.6167,
    type: 'major',
    facilities: ['Waiting Room', 'Hill Access']
  },
  {
    id: 'knr-kuthuparamba',
    name: 'Kuthuparamba',
    district: 'Kannur',
    town: 'Kuthuparamba',
    lat: 11.9500,
    lng: 75.5167,
    type: 'minor',
    facilities: ['Waiting Room']
  },
  {
    id: 'knr-mattannur',
    name: 'Mattannur',
    district: 'Kannur',
    town: 'Mattannur',
    lat: 11.9333,
    lng: 75.5667,
    type: 'minor',
    facilities: ['Waiting Room']
  },
  {
    id: 'knr-sreekandapuram',
    name: 'Sreekandapuram',
    district: 'Kannur',
    town: 'Sreekandapuram',
    lat: 11.8500,
    lng: 75.4833,
    type: 'minor',
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
  },
  {
    id: 'ksd-uppala',
    name: 'Uppala',
    district: 'Kasaragod',
    town: 'Uppala',
    lat: 12.4167,
    lng: 74.9333,
    type: 'minor',
    facilities: ['Border Town']
  },
  {
    id: 'ksd-bekal',
    name: 'Bekal',
    district: 'Kasaragod',
    town: 'Bekal',
    lat: 12.3833,
    lng: 75.0333,
    type: 'minor',
    facilities: ['Fort Access', 'Beach']
  },
  {
    id: 'ksd-manjeshwar',
    name: 'Manjeshwar',
    district: 'Kasaragod',
    town: 'Manjeshwar',
    lat: 12.7167,
    lng: 74.8667,
    type: 'minor',
    facilities: ['Temple Town']
  },
  {
    id: 'ksd-udma',
    name: 'Udma',
    district: 'Kasaragod',
    town: 'Udma',
    lat: 12.5500,
    lng: 74.9500,
    type: 'minor',
    facilities: ['Border Check']
  }
];

export const getStopsByDistrict = (district: string): BusStop[] => {
  return keralaStops.filter(stop => stop.district === district);
};

export const getStopById = (id: string): BusStop | undefined => {
  return keralaStops.find(stop => stop.id === id);
};
