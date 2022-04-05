import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from '../types';

export function deleteUserRequest() {
  return {
    type: DELETE_USER_REQUEST
  };
}

export function deleteUserSuccess(userId) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId
  };
}

export function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    error: true,
    payload: error
  };
}

export function deleteUser(userId) {
  return async function (dispatch, getState, { api }) {
    dispatch(deleteUserRequest());
    try {
      const userToDelete = await api.users.deleteAccount(userId);
      dispatch(deleteUserSuccess(userToDelete));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
}
