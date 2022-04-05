import {
  USERS_LOADED_FAILURE,
  USERS_LOADED_REQUEST,
  USERS_LOADED_SUCCESS,
  USER_LOADED_FAILURE,
  USER_LOADED_REQUEST,
  USER_LOADED_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS
} from '../types/UserTypes';

//===================================================================
//Create
//===================================================================

//===================================================================
//Update
//===================================================================
export function userUpdateRequest() {
  return {
    type: USER_UPDATE_REQUEST
  };
}

export function userUpdateSuccess(userUpdate) {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: userUpdate
  };
}

export function userUpdateFailure(error) {
  return {
    type: USER_UPDATE_FAILURE,
    error: true,
    payload: error
  };
}

export function userUpdate(userInfo, userId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(userUpdateRequest());
    try {
      const userUpdate = await api.users.updateUser(userInfo, userId);
      dispatch(userUpdateSuccess(userUpdate));
    } catch (error) {
      dispatch(userUpdateFailure(error));
    }
  };
}

//===================================================================
//Get All Users
//===================================================================

export function usersLoadedRequest() {
  return {
    type: USERS_LOADED_REQUEST
  };
}

export function usersLoadedSuccess(users) {
  return {
    type: USERS_LOADED_SUCCESS,
    payload: users
  };
}

export function usersLoadedFailure(error) {
  return {
    type: USERS_LOADED_FAILURE,
    error: true,
    payload: error
  };
}

export function loadUsers() {
  return async function (dispatch, getState, { api }) {
    // if (areUsersLoaded(getState())) {
    //   return;
    // }
    dispatch(usersLoadedRequest());
    try {
      const users = await api.users.getAllUsers();
      dispatch(usersLoadedSuccess(users));
    } catch (error) {
      dispatch(usersLoadedFailure(error));
    }
  };
}

//===================================================================
//Get User by Id (Detail)
//===================================================================
export function userDetailRequest() {
  return {
    type: USER_LOADED_REQUEST
  };
}

export function userDetailSuccess(user) {
  return {
    type: USER_LOADED_SUCCESS,
    payload: user
  };
}

export function userDetailFailure(error) {
  return {
    type: USER_LOADED_FAILURE,
    error: true,
    payload: error
  };
}

export function loadUserDetail(userId) {
  return async function (dispatch, getState, { api }) {
    // if (getUserDetail(getState(), userId)) {
    //   return;
    // }
    dispatch(userDetailRequest());
    try {
      const user = await api.users.getOneUserForId(userId);
      dispatch(userDetailSuccess(user));
    } catch (error) {
      dispatch(userDetailFailure(error));
    }
  };
}
