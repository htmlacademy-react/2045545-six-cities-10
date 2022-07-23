import { Fragment } from 'react';
import {Reviews} from '../../types/reviews';
import Feedback from '../feedback/feedback';


type FeedbacksListProps = {
  reviews: Reviews;
};

function FeedbacksList({reviews}: FeedbacksListProps): JSX.Element {


  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Feedback review={review} key= {review.id}/>)}
      </ul>
    </Fragment>

  );
}

export default FeedbacksList;
