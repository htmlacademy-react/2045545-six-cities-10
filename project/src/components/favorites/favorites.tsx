import {Offers} from '../../types/offer';
import {useState} from 'react';
import {sortByCity} from '../../utils/utils';
import PlaceCard from '../../components/place-card/place-card';

type FavoritesProps ={
  offers: Offers,
};

function Favorites({offers}: FavoritesProps) : JSX.Element {

  const [activeCardId, setActiveCardId] = useState< number | null>(null);

  const favoriteOffers: Offers = offers.filter((offer)=> offer.isFavorite === true);
  const sortedFavoriteOffers: Offers = favoriteOffers.sort(sortByCity);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{offers[0].city.name}</span>тз
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {sortedFavoriteOffers.map((offer) => (<PlaceCard offer = {offer} key= {`${offer.id}`} isActive ={offer.id === activeCardId} onHover = {()=>setActiveCardId(offer.id)} isFlex/>))}
          </div>
        </li>

        <li className="favorites__locations-items visually-hidden" >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {/* <PlaceCard/> */}
          </div>
        </li>
      </ul>
    </section>);

}


export default Favorites;


