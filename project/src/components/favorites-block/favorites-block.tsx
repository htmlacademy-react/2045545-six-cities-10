import { Fragment, useState } from 'react';
import { Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritesBlockProps = {
  offersByCity: Offer[],
  city: string,
};

function FavoritesBlock({offersByCity, city}: FavoritesBlockProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState< number | null>(null);

  return (
    <Fragment>

      {
        offersByCity.map((exactOffer, index) => (
          <li className="favorites__locations-items" key = {`${index}-${index}`}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offersByCity.map((offer) => (<PlaceCard offer = {offer} key= {`${offer.id}`} isActive ={offer.id === activeCardId} onHover = {()=>setActiveCardId(offer.id)} isFlex/>))}
            </div>
          </li>


        ))
      }
    </Fragment>
  );

}


// (
//     <li className="favorites__locations-items">
//     <div className="favorites__locations locations locations--current">
//       <div className="locations__item">
//         <a className="locations__item-link" href="/#">
//           {/* {<span>{offersByCity[exactCity].city.name}</span> } */}
//         </a>
//       </div>
//     </div>
//     <div className="favorites__places">
//       {/*
//     </div>
//   </li>
//   ))})

export default FavoritesBlock;

