import { getAdvertDetail } from '../selectors/selectors';
import { ADVERT_LOADED_FAILURE, ADVERT_LOADED_REQUEST, ADVERT_LOADED_SUCCESS } from '../types';

export function advertDetailRequest() {
  return {
    type: ADVERT_LOADED_REQUEST
  };
}

export function advertDetailSuccess(advert) {
  return {
    type: ADVERT_LOADED_SUCCESS,
    payload: advert
  };
}

export function advertDetailFailure(error) {
  return {
    type: ADVERT_LOADED_FAILURE,
    error: true,
    payload: error
  };
}

export function loadAdvertDetail(id) {
  return async function (dispatch, getState, { api }) {
    if (getAdvertDetail(getState(), id)) {
      return;
    }
    dispatch(advertDetailRequest());
    try {
      const advert = await api.adverts.getSingleAdvert(id);
      dispatch(advertDetailSuccess(advert));
    } catch (error) {
      dispatch(advertDetailFailure(error));
    }
  };
}

