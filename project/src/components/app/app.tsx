import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-rote';


type AppScreenProps = {
  placeCardsCount: number;
  isLoginPage: boolean;
}

function App({placeCardsCount, isLoginPage}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {<MainScreen placeCardsCount={placeCardsCount}/>}
        >
        </Route>
        <Route
          path ={AppRoute.Login}
          element = {<LoginScreen isLoginPage/>}
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
