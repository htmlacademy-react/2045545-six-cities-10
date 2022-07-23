import {Offer} from '../../types/offer';
import {NavLink} from 'react-router-dom';


const MULTIPLIER_RATING_TO_PERCENTAGE = 20;

type PlaceCardProps = {
  offer: Offer;
  isActive: boolean,
  onHover: ()=>void,
  isFlex: boolean,
};

function PlaceCard(props: PlaceCardProps): JSX.Element {


  const {offer, isActive, onHover, isFlex} = props;
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
    <article className= "cities__card place-card" onMouseOver = {onHover} style = {{display : `${isFlex ? 'flex' : 'block'}`, width: `${isFlex ? '421px' : '260px'}` }} >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null }
      <div className="cities__image-wrapper place-card__image-wrapper " style = {{minWidth: `${isFlex ? '150px' : ''}`, marginRight: `${isFlex ? '16px' : ''}` }} >
        <a href="/#">
          <img className={`place-card__image ${ isActive ? 'place-card__image--active' : null}` } src={previewImage} width={isFlex ? '150px' : '260px'} height="200" alt={description} />
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
          <NavLink to={`/offer/${id}`} id={`${id}`}>{title}</NavLink>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
