// general actions
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const CANCEL = 'CANCEL';
export const RESET = 'RESET';
export const REFRESH = 'REFRESH';
export const LOADING = 'LOADING';
export const LOGOUT = 'LOGOUT';

export const defaultTypes = [REQUEST, SUCCESS, FAILURE, CANCEL, RESET, REFRESH];

// creating all basic type with an object
export default function createRequestTypes(base, types = defaultTypes) {
  const requestType = {};
  types.forEach(type => {
    requestType[type] = `${base}_${type}`;
  });
  return requestType;
}
