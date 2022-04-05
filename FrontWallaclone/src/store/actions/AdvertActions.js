import {
  ADVERT_CREATE_FAILURE,
  ADVERT_CREATE_REQUEST,
  ADVERT_CREATE_SUCCESS,
  ADVERT_DELETE_FAILURE,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_SUCCESS,
  ADVERT_UPDATE_FAILURE,
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_SUCCESS
} from '../types';
import {
  ADVERT_REVIEW_CREATE_FAILURE,
  ADVERT_REVIEW_CREATE_REQUEST,
  ADVERT_REVIEW_CREATE_SUCCESS
} from '../types/AdvertTypes';

//===================================================================
//Create
//===================================================================
export function advertCreateRequest() {
  return {
    type: ADVERT_CREATE_REQUEST
  };
}

export function advertCreateSuccess(newAdvert) {
  return {
    type: ADVERT_CREATE_SUCCESS,
    payload: newAdvert
  };
}

export function advertCreateFailure(error) {
  return {
    type: ADVERT_CREATE_FAILURE,
    error: true,
    payload: error
  };
}

export function createAdvert(advert) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertCreateRequest());
    try {
      const advertCreate = await api.adverts.createAdvert(advert);
      dispatch(advertCreateSuccess(advertCreate));
      history.push(`/account/products`);
    } catch (error) {
      dispatch(advertCreateFailure(error));
    }
  };
}

//===================================================================
//Update
//===================================================================
export function advertUpdateRequest() {
  return {
    type: ADVERT_UPDATE_REQUEST
  };
}

export function advertUpdateSuccess(advertUpdate) {
  return {
    type: ADVERT_UPDATE_SUCCESS,
    payload: advertUpdate
  };
}

export function advertUpdateFailure(error) {
  return {
    type: ADVERT_UPDATE_FAILURE,
    error: true,
    payload: error
  };
}

export function updateAdvert(advert, advertId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertUpdateRequest());
    try {
      const advertUpdate = await api.adverts.updateAdvert(advert, advertId);
      dispatch(advertUpdateSuccess(advertUpdate));
      history.push(`/account/products`);
    } catch (error) {
      dispatch(advertUpdateFailure(error));
    }
  };
}

//===================================================================
//Delete
//===================================================================
export function advertDeleteRequest() {
  return {
    type: ADVERT_DELETE_REQUEST
  };
}

export function advertDeleteSuccess(advertId) {
  return {
    type: ADVERT_DELETE_SUCCESS,
    payload: advertId
  };
}

export function advertDeleteFailure(error) {
  return {
    type: ADVERT_DELETE_FAILURE,
    error: true,
    payload: error
  };
}

export function deleteAdvert(advertId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertDeleteRequest());
    try {
      const advert = await api.adverts.deleteAdvert(advertId);
      dispatch(advertDeleteSuccess(advert));
      history.push(`/account/products`);
    } catch (error) {
      dispatch(advertDeleteFailure(error));
    }
  };
}

//===================================================================
//Create Review
//===================================================================
export function advertReviewCreateReview() {
  return {
    type: ADVERT_REVIEW_CREATE_REQUEST
  };
}

export function advertReviewCreateSuccess(newReview) {
  return {
    type: ADVERT_REVIEW_CREATE_SUCCESS,
    payload: newReview
  };
}

export function advertReviewCreateFailure(error) {
  return {
    type: ADVERT_REVIEW_CREATE_FAILURE,
    error: true,
    payload: error
  };
}

export function createAdvertReview(advertId, review) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertCreateRequest());
    try {
      const advertReviewCreate = await api.adverts.createAdvertReview(advertId, review);
      dispatch(advertReviewCreateSuccess(advertReviewCreate));
      history.push(`/account/products`);
    } catch (error) {
      dispatch(advertReviewCreateFailure(error));
    }
  };
}
