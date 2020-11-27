export interface Fish {
  id: number;
  name: {
    'name-USen': string;
    'name-EUen': string;
    'name-EUde': string;
    'name-EUes': string;
    'name-USes': string;
    'name-EUfr': string;
    'name-USfr': string;
    'name-EUit': string;
    'name-EUnl': string;
    'name-CNzh': string;
    'name-TWzh': string
    'name-JPja': string;
    'name-KRko': string;
    'name-EUru': string;
  };
  availability: {
    'month-northern': string;
    'month-southern': string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Ultra-rare';
    'month-array-northern': number[];
    'month-array-southern': number[];
    'time-array': number[];
  };
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  image_uri: string;
  icon_uri: string;
}