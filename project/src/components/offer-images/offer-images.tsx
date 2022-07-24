import {MAX_OFFER_IMAGE_QUANTITY} from '../../const';

type OfferImagesProps= {
  chosenOfferImages: string[] | undefined,
}


function OfferImages({chosenOfferImages}:OfferImagesProps): JSX.Element {
  const reducedChosenOfferImages = chosenOfferImages?.slice(0, MAX_OFFER_IMAGE_QUANTITY);


  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {reducedChosenOfferImages?.map((image) => (
          <div className="property__image-wrapper" key = {`${image}-${image}`}>
            <img className="property__image" src={image} alt="studio" />
          </div >))}
      </div>
    </div>
  );
}

export default OfferImages;
