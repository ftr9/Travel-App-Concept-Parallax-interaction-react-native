import { IRecommendation } from './types';
import { Dimensions } from 'react-native';

export const recommendations: IRecommendation[] = [
  {
    city: 'Hong Kong',
    price: 37,
    image:
      'https://images.pexels.com/photos/2481190/pexels-photo-2481190.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    city: 'Bangkok',
    price: 56,
    image:
      'https://images.pexels.com/photos/18939653/pexels-photo-18939653/free-photo-of-illuminated-istanbul-at-night.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    city: 'Macau',
    price: 37,
    image:
      'https://images.pexels.com/photos/18347101/pexels-photo-18347101/free-photo-of-grand-lisboa-skyscraper-in-macau-china.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    city: 'Dubai',
    price: 56,
    image:
      'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    city: 'Instanbul',
    price: 37,
    image:
      'https://images.pexels.com/photos/3573383/pexels-photo-3573383.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const CARD_HEIGHT = (10 / 100) * Dimensions.get('screen').height;
export const CARD_WIDTH = (40 / 100) * Dimensions.get('screen').width;
