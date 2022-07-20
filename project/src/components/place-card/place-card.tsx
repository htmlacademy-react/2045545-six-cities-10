import {Offer} from '../../types/offer';
import { Link } from 'react-router-dom';


const MULTIPLIER_RATING_TO_PERCENTAGE = 20;

type PlaceCardProps = {
  offer: Offer;
  isActive: boolean,
  onHover: ()=>void,
};

function PlaceCard(props: PlaceCardProps): JSX.Element {


  const {offer, isActive, onHover} = props;
  const {
    id,
    previewImage,
    title,
    isFavorite,
    isPremium,
    rating,
    type,
    price,
    description,
  } = offer;

  const ratingPercentage = (ratingInStars: number | undefined) : number =>{
    if (ratingInStars === undefined) {
      return 0;
    }
    return ratingInStars * MULTIPLIER_RATING_TO_PERCENTAGE;
  };

  const starWidth: number = ratingPercentage(rating);


  return (
    <article className= "cities__card place-card" onMouseOver = {onHover}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className={`place-card__image ${ isActive ? 'place-card__image--active' : null}` } src={previewImage} width="260" height="200" alt={description} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''}  button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to='/' id={`${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
