import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Offers, Offer} from '../../types/offer';
import {Reviews} from '../../types/reviews';
import { useState } from 'react';


type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;

}

function App({offers, reviews}: AppScreenProps): JSX.Element {


  const onListItemHover = (listItemName: string) => {

    const currentOffer = offers.find((offer) =>
      offer.id.toString() === listItemName,
    );
    setSelectedOffer(currentOffer);
  };

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainScreen offers={offers} onListItemHover= {onListItemHover} selectedOffer={selectedOffer}/>}
        >
        </Route>
        <Route
          path ={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route
          path ={AppRoute.Favorites}
          element = {<FavoritesScreen offers = {offers}/>}
        />
        <Route
          path = {AppRoute.Room}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <OfferScreen offers ={offers} reviews= {reviews} onListItemHover= {onListItemHover} selectedOffer={selectedOffer}/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.NotFound}
          element = {<NotFoundScreen/>}
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
