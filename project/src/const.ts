const MAX_OFFER_IMAGE_QUANTITY = 9;
const MULTIPLIER_RATING_TO_PERCENTAGE = 20;

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


export {MULTIPLIER_RATING_TO_PERCENTAGE, MAX_OFFER_IMAGE_QUANTITY, AppRoute, AuthorizationStatus};
