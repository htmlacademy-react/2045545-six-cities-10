import { Fragment } from 'react';
import { Offer} from '../../types/offer';
import FavoritesBlock from '../favorites-block/favorites-block';


type favoritesInCityProps = {
  offersByCity: Offer[],
  exactCity: string,
};

function favoritesInCity({offersByCity, exactCity}: favoritesInCityProps): JSX.Element {

  console.log(offersByCity);

  return (
    <Fragment>
      {offersByCity.map((offer, index) => ( < FavoritesBlock city= {`${offersByCity[index].city.name}`} offersByCity= {offersByCity} key= {`${offersByCity[index]}-${exactCity}`}/> ))}
    </Fragment>
  );
}


export default favoritesInCity;

