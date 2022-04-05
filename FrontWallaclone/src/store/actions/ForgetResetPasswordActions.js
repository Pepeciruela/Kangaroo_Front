import {
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from '../types';

export function forgetPasswordRequest() {
  return {
    type: FORGET_PASSWORD_REQUEST
  };
}

export function forgetPasswordSuccess(email) {
  return {
    type: FORGET_PASSWORD_SUCCESS,
    payload: email
  };
}

export function forgetPasswordFailure(error) {
  return {
    type: FORGET_PASSWORD_FAILURE,
    error: true,
    payload: error
  };
}

export function forgetPassword(email) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(forgetPasswordRequest());
    try {
      const sendEmail = await api.users.forgottenPassword(email);
      dispatch(forgetPasswordSuccess(sendEmail));
    } catch (error) {
      dispatch(forgetPasswordFailure(error));
    }
  };
}

export function resetPasswordRequest() {
  return {
    type: RESET_PASSWORD_REQUEST
  };
}
export function resetPasswordSuccess(data) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data
  };
}
export function resetPasswordFailure(error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    error: true,
    payload: error
  };
}
export function resetPassword(data, userToken) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(resetPasswordRequest());
    try {
      const changePassword = await api.users.resetForgottenPassword(data, userToken);
      dispatch(resetPasswordSuccess(changePassword));
    } catch (error) {
      dispatch(resetPasswordFailure(error));
    }
  };
}
