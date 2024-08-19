import {DIABETES_FORM, HEART_FORM, PERKINSONS_FORM} from './types';

export const postDiabetesRequest = (payload, callback, errCallback) => {
  return {
    type: DIABETES_FORM.REQUEST,
    payload,
    callback,
    errCallback,
  };
};
export const postDiabetesSuccess = data => {
  return {
    type: DIABETES_FORM.SUCCESS,
    data,
  };
};
export const postDiabetesFailure = err => {
  return {
    type: DIABETES_FORM.FAILURE,
    err,
  };
};

export const postHeartRequest = (payload, callback, errCallback) => {
  return {
    type: HEART_FORM.REQUEST,
    payload,
    callback,
    errCallback,
  };
};
export const postHeartSuccess = data => {
  return {
    type: HEART_FORM.SUCCESS,
    data,
  };
};
export const postHeartFailure = err => {
  return {
    type: HEART_FORM.FAILURE,
    err,
  };
};

export const postPerkinsonsRequest = (payload, callback, errCallback) => {
  return {
    type: PERKINSONS_FORM.REQUEST,
    payload,
    callback,
    errCallback,
  };
};
export const postPerkinsonsSuccess = data => {
  return {
    type: PERKINSONS_FORM.SUCCESS,
    data,
  };
};
export const postPerkinsonsFailure = err => {
  return {
    type: PERKINSONS_FORM.FAILURE,
    err,
  };
};
