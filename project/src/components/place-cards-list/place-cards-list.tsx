import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';

type PlaceCardsListProps = {
  offers: Offers;
};


function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState< number | null>(null);
  console.log(activeCardId);


  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => (<PlaceCard offer = {offer} key= {`${offer.id}`} isActive = {offer.id === activeCardId} onHover = {()=>setActiveCardId(offer.id)} />)//
      )}

    </div>
  );

}

export default PlaceCardsList;
