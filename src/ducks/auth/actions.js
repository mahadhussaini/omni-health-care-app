import {LOGOUT} from '../ActionTypes';
import {USER_LOGIN, USER_SIGNUP} from './types';

// user sign up
export const signupUser = (payload, callback, errCallback) => {
  return {
    type: USER_SIGNUP.REQUEST,
    payload,
    callback,
    errCallback,
  };
};
export const signupUserSuccess = data => {
  return {
    type: USER_SIGNUP.SUCCESS,
    data,
  };
};
export const signupUserFailure = err => {
  return {
    type: USER_SIGNUP.FAILURE,
    err,
  };
};

export const userLogoutRequest = () => {
  return {
    type: LOGOUT,
  };
};

export const requestUser = (payload, callback, errCallback) => {
  return {
    type: USER_LOGIN.REQUEST,
    payload,
    callback,
    errCallback,
  };
};
export const successUser = data => {
  return {
    type: USER_LOGIN.SUCCESS,
    data,
  };
};
export const failureUser = err => {
  return {
    type: USER_LOGIN.FAILURE,
    err,
  };
};
