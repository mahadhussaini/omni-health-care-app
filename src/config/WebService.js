export const BASE_URL =
  // 'http://ec2-13-235-241-41.ap-south-1.compute.amazonaws.com/multi-disease/';
  'http://13.232.110.167:3333/';

export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch',
};

//API USER ROUTES

export const API_USER_SIGNUP = {
  route: `${BASE_URL}register`,
  type: REQUEST_TYPE.POST,
  access_token_required: false,
};

export const API_USER_LOGIN = {
  route: `${BASE_URL}login`,
  type: REQUEST_TYPE.POST,
  access_token_required: false,
};
export const API_DIABETES_FORM = {
  route: `${BASE_URL}predict/diabetes`,
  type: REQUEST_TYPE.POST,
  access_token_required: true,
};
export const API_HEART_FORM = {
  route: `${BASE_URL}predict/heart`,
  type: REQUEST_TYPE.POST,
  access_token_required: true,
};
export const API_PERKINSONS_FORM = {
  route: `${BASE_URL}predict/parkinson`,
  type: REQUEST_TYPE.POST,
  access_token_required: true,
};
