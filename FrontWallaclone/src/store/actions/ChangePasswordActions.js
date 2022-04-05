import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE
} from '../types';

export function changePasswordRequest() {
  return {
    type: CHANGE_PASSWORD_REQUEST
  };
}

export function changePasswordSuccess(passwords) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: passwords
  };
}

export function changePasswordFailure(error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    error: true,
    payload: error
  };
}

export function changePassword(newPassword, id) {
  return async function (dispatch, getState, { api }) {
    console.log(newPassword, id);
    dispatch(changePasswordRequest());
    try {
      const sendNewPassword = await api.users.setNewPassword(newPassword, id);
      dispatch(changePasswordSuccess(sendNewPassword));
    } catch (error) {
      dispatch(changePasswordFailure(error));
    }
  };
}
