import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-rote';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/reviews';


type AppScreenProps = {
  placeCardsCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({placeCardsCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {<MainScreen placeCardsCount={placeCardsCount} offers={offers}/>}
        >
        </Route>
        <Route
          path ={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route
          path ={AppRoute.Favorites}
          element = {<FavoritesScreen/>}
        />
        <Route
          path ={AppRoute.Room}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <OfferScreen />
            </PrivateRoute>
          }
        />
        <Route
          path = '*'
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
