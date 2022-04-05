import {
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  USERADVERTS_LOADED_REQUEST,
  USERADVERTS_LOADED_SUCCESS,
  USERADVERTS_LOADED_FAILURE,
  ADVERT_LOADED_REQUEST,
  ADVERT_LOADED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  USER_DATA_SUCCESS,
  CATEGORY_LOAD_REQUEST,
  CATEGORY_LOAD_SUCCESS,
  CATEGORY_LOAD_FAILURE,
  TAGS_LOADED_FAILURE,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_REQUEST,
  ADVERTS_CATEGORY_REQUEST,
  ADVERTS_CATEGORY_SUCCESS,
  ADVERTS_CATEGORY_FAILURE,
  USERS_LOADED_FAILURE,
  USERS_LOADED_REQUEST,
  USERS_LOADED_SUCCESS,
  USER_LOADED_FAILURE,
  USER_LOADED_REQUEST,
  USER_LOADED_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS
} from '../types/';

const defaultState = {
  auth: false,
  userData: null,
  publicUser: {
    loaded: false,
    data: null
  },
  forgotPass: {
    isForgotten: false,
    data: null
  },
  adverts: {
    loaded: false,
    data: []
  },
  categories: [],
  tags: [],
  ui: {
    isLoading: false,
    error: null
  }
};

export function auth(authState = defaultState.auth, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_USER:
      return false;

    default:
      return authState;
  }
}

export function userData(userDataState = defaultState.userData, action) {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return action.payload;
    case DELETE_USER_SUCCESS:
    case LOGOUT_USER:
      return null;
    default:
      return userDataState;
  }
}

export function publicUser(publicUserState = defaultState.publicUser, action) {
  switch (action.type) {
    case USER_LOADED_SUCCESS:
      return action.payload;

    default:
      return publicUserState;
  }
}

export function forgotPass(forgotState = defaultState.forgotPass, action) {
  switch (action.type) {
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...forgotState
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...forgotState,
        forgotPass: { isForgotten: false, data: null }
      };
    default:
      return forgotState;
  }
}

export function adverts(advertsState = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { ...advertsState, loaded: true, data: action.payload.results };

    case ADVERT_LOADED_SUCCESS:
      return { ...advertsState, data: [...advertsState.data, action.payload.results] };
    case ADVERTS_CATEGORY_SUCCESS:
    case USERADVERTS_LOADED_SUCCESS:
      return { ...advertsState, data: action.payload.results };
    default:
      return advertsState;
  }
}

export function categories(categoriesState = defaultState.categories, action) {
  switch (action.type) {
    case CATEGORY_LOAD_SUCCESS:
      return action.payload.results;
    default:
      return categoriesState;
  }
}

export function tags(tagsState = defaultState.tags, action) {
  switch (action.type) {
    case TAGS_LOADED_SUCCESS:
      return action.payload;
    default:
      return tagsState;
  }
}

export function ui(uiState = defaultState.ui, action) {
  switch (action.type) {
    case LOGIN_START:
    case USER_SIGNUP_REQUEST:
    case DELETE_USER_REQUEST:
    case RESET_PASSWORD_REQUEST:
    case FORGET_PASSWORD_REQUEST:
    case CHANGE_PASSWORD_REQUEST:
    case ADVERTS_LOADED_REQUEST:
    case USERADVERTS_LOADED_REQUEST:
    case ADVERT_LOADED_REQUEST:
    case CATEGORY_LOAD_REQUEST:
    case ADVERTS_CATEGORY_REQUEST:
    case TAGS_LOADED_REQUEST:
    case USERS_LOADED_REQUEST:
    case USER_LOADED_REQUEST:
    case USER_UPDATE_REQUEST:
      return { ...uiState, isLoading: true, error: null };
    case LOGIN_SUCCESS:
    case USER_SIGNUP_SUCCESS:
    case DELETE_USER_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case CHANGE_PASSWORD_SUCCESS:
    case FORGET_PASSWORD_SUCCESS:
    case ADVERTS_LOADED_SUCCESS:
    case ADVERT_LOADED_SUCCESS:
    case CATEGORY_LOAD_SUCCESS:
    case TAGS_LOADED_SUCCESS:
    case ADVERTS_CATEGORY_SUCCESS:
    case USERADVERTS_LOADED_SUCCESS:
    case USERS_LOADED_SUCCESS:
    case USER_LOADED_SUCCESS:
    case USER_UPDATE_SUCCESS:
      return { ...uiState, isLoading: false, error: null };
    case LOGIN_FAILURE:
    case USER_SIGNUP_FAILURE:
    case DELETE_USER_FAILURE:
    case RESET_PASSWORD_FAILURE:
    case CHANGE_PASSWORD_FAILURE:
    case FORGET_PASSWORD_FAILURE:
    case ADVERTS_LOADED_FAILURE:
    case ADVERT_LOADED_FAILURE:
    case CATEGORY_LOAD_FAILURE:
    case TAGS_LOADED_FAILURE:
    case ADVERTS_CATEGORY_FAILURE:
    case USERADVERTS_LOADED_FAILURE:
    case USERS_LOADED_FAILURE:
    case USER_LOADED_FAILURE:
    case USER_UPDATE_FAILURE:
      return { ...uiState, isLoading: false, error: action.payload };
    default:
      return uiState;
  }
}
