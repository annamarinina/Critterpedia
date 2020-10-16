export interface Bug {
  id: number;
  name: {
    nameUSen: string;
    nameEUen: string;
    nameEUde: string;
    nameEUes: string;
    nameUSes: string;
    nameEUfr: string;
    nameUSfr: string;
    nameEUit: string;
    nameEUnl: string;
    nameCNzh: string;
    nameTWzh: string
    nameJPja: string;
    nameKRko: string;
    nameEUru: string;
  };
  availability: {
    monthNorthern: string;
    monthSouthern: string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Ultra-rare';
    monthArrayNorthern: number[];
    monthArraySouthern: number[];
    timeArray: number[];
  };
  price: number;
  priceFlick: number;
  catchPhrase: string;
  museumPhrase: string;
  imageURI: string;
  iconURI: string;
}