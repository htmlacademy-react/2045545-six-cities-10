import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';


const Settings = {
  PLACE_CARDS_COUNT: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placeCardsCount={Settings.PLACE_CARDS_COUNT}
      offers ={offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
