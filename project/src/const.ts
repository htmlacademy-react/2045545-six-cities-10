import { City } from './types/offer';

const MAX_OFFER_IMAGE_QUANTITY = 9;
const MULTIPLIER_RATING_TO_PERCENTAGE = 20;
const DEFAULT_CITY : City = {
  name:'Amsterdam',
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom:13
  }
};

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found'
}


enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {MULTIPLIER_RATING_TO_PERCENTAGE, MAX_OFFER_IMAGE_QUANTITY, DEFAULT_CITY, AppRoute, AuthorizationStatus};
