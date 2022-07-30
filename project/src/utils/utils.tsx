import { Offer} from '../types/offer';
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

const firstLetterToUpperCase = ( word: string | null) : string | null => {
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const groupBy = <T extends Record<string, any>, K extends keyof T>(array: T[], key: K | { (obj: T): string }) => {
  const keyFn = key instanceof Function ? key : (obj: T) => obj[key];
  return array.reduce((objectsByKeyValue, obj) => {
    const value = keyFn(obj);
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {} as Record<string, T[]>);};


export {sortByCity, ratingPercentage, firstLetterToUpperCase, groupBy};
