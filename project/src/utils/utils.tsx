import { Offer } from '../types/offer';
import {MULTIPLIER_RATING_TO_PERCENTAGE} from '../const';

const sortByCity = (offerA: Offer, offerB: Offer) : number =>{
  if (offerA.city.name >= offerB.city.name){
    return 1;
  }
  else {
    return -1;
  }
};

const ratingPercentage = (ratingInStars: number | undefined | null) : number =>{
  if (ratingInStars === undefined || ratingInStars === null) {
    return 0;
  }
  return ratingInStars * MULTIPLIER_RATING_TO_PERCENTAGE;
};

function firstLetterToUpperCase ( word: string | null) : string | null{
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
}

export {sortByCity, ratingPercentage, firstLetterToUpperCase};
