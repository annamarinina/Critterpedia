export interface SeaCreature {
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
    timeArray: number[];
  };
  speed: 'Stationary' | 'Very slow' | 'Very fast' | 'Slow' | 'Medium' | 'Fast'
  shadow: string;
  price: number;
  catchPhrase: string;
  museumPhrase: string;
  imageURI: string;
  iconURI: string;
}