import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const fetchRestaurants = (search) => dispatch => {
   return APIUtil.fetchRestaurants(search).then(restaurants => {
    dispatch({
      type: RECEIVE_RESTAURANTS,
      restaurants
    });
  });
};

export const fetchRestaurant = (id) => dispatch => {
  APIUtil.fetchRestaurant(id).then(restaurant => {
    dispatch({
      type: RECEIVE_RESTAURANT,
      restaurant
    });
  });
};

export const createReview = (review) => dispatch => {
  APIUtil.createReview(review).then(review => {
    dispatch({
      type: RECEIVE_REVIEW,
      review
    });
  });
};

export const fetchReviews = (id) => dispatch => {
  APIUtil.fetchReviews(id).then(reviews => {
    dispatch({
      type: RECEIVE_REVIEWS,
      reviews
    });
  });
};

export const searchRestaurants = (search) => dispatch => {
  APIUtil.searchRestaurants(search).then(restaurants => {
    dispatch({
      type: RECEIVE_RESTAURANTS,
      restaurants
    });
  });
};


// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author
// });

