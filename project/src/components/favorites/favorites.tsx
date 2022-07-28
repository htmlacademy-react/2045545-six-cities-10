import {Offers} from '../../types/offer';
import {groupBy} from '../../utils/utils';
import FavoritesBlock from '../favorites-block/favorites-block';

type FavoritesProps ={
  offers: Offers,
};

function Favorites({offers}: FavoritesProps) : JSX.Element {


  const favoriteOffers: Offers = offers.filter((offer)=> offer.isFavorite === true);
  const offersToGroupByCity = favoriteOffers.slice();


  const offersGroupedByCity = groupBy(offersToGroupByCity, (offer) => offer.city.name);


  const listOfFavoriteCities = Object.keys(offersGroupedByCity);


  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {listOfFavoriteCities.map((city) => ( < FavoritesBlock offersByCity ={offersGroupedByCity[city]} city = {city} key = {city}/>))}
      </ul>
    </section>);

}


export default Favorites;


