import { TAGS_LOADED_REQUEST, TAGS_LOADED_SUCCESS, TAGS_LOADED_FAILURE } from '../types';

import {getTagsIsLoaded} from '../selectors/selectors'

export function getTagsRequest() {
    return {
      type: TAGS_LOADED_REQUEST,
    };
  }
  
  export function getTagsSuccess(tags) {
    return {
      type: TAGS_LOADED_SUCCESS,
      payload: tags,
    };
  }
  
  export function getTagsFailure(error) {
    return {
      type: TAGS_LOADED_FAILURE,
      error: true,
      payload: error,
    };
  }
  
  export function loadTags() {
    return async function (dispatch, getState, { api }) {
      console.log("primero paso por aqui")
      // if (getTagsIsLoaded(getState())) {
      //   return;
      // }
      dispatch(getTagsRequest());
      try {
        console.log("paso por aqui")
        const tags = await api.adverts.getTags();
        console.log("Soy tags desde la API", tags.result)
        dispatch(getTagsSuccess(tags.result));
      } catch (error) {
        dispatch(getTagsFailure(error));
      }
    };
  }
  
