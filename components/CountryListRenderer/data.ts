import { ICountry } from './types';
import { Dimensions } from 'react-native';
export const countryListData: ICountry[] = [
  {
    country: 'Czech Republic ',
    city: 'Prague',
    image:
      'https://images.pexels.com/photos/2588767/pexels-photo-2588767.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'England',
    city: 'London',
    image:
      'https://images.pexels.com/photos/280249/pexels-photo-280249.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'USA',
    city: 'New York',
    image:
      'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'France',
    city: 'Paris',
    image:
      'https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    country: 'Turkey',
    city: 'Instanbul',
    image:
      'https://images.pexels.com/photos/3573383/pexels-photo-3573383.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const CARD_WIDTH = (80 / 100) * Dimensions.get('screen').width;
export const CARD_HEIGHT = (50 / 100) * Dimensions.get('screen').height;
