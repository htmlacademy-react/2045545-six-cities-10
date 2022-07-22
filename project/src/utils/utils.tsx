import { Offer } from '../types/offer';

const sortByCity = (offerA: Offer, offerB: Offer) : number =>{
  if (offerA.city.name >= offerB.city.name){
    return 1;
  }
  else {
    return -1;
  }
};

export {sortByCity};
