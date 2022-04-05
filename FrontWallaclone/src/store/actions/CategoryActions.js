import { CATEGORY_LOAD_REQUEST, CATEGORY_LOAD_SUCCESS, CATEGORY_LOAD_FAILURE } from '../types';
import { getCagetoriesIsLoaded } from '../selectors/selectors';

//===================================================================
//Load Categories
//===================================================================
export function loadCategoriesRequest() {
  return {
    type: CATEGORY_LOAD_REQUEST
  };
}

export function loadCategoriesSuccess(categories) {
  return {
    type: CATEGORY_LOAD_SUCCESS,
    payload: categories
  };
}

export function loadCategoriesFailure(error) {
  return {
    type: CATEGORY_LOAD_FAILURE,
    error: true,
    payload: error
  };
}

export function loadCategories() {
  return async function (dispatch, getState, { api, history }) {
    if (getCagetoriesIsLoaded(getState())) {
      return;
    }
    dispatch(loadCategoriesRequest());
    try {
      const categories = await api.categories.getAllCategories();
      dispatch(loadCategoriesSuccess(categories));
    } catch (error) {
      dispatch(loadCategoriesFailure(error));
    }
  };
}
