import {LOGOUT} from '../ActionTypes';
import {USER_LOGIN, USER_SIGNUP} from './types';

export const initialState = {
  data: [],
  loader: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP.SUCCESS:
      return {
        ...state,
        data: action.data,
        loader: false,
      };

    case USER_SIGNUP.FAILURE:
      return {
        ...state,
        loader: false,
      };

    case LOGOUT:
      return {
        ...state,
        data: [],
        loader: false,
      };

    case USER_LOGIN.SUCCESS:
      return {
        ...state,
        data: action.data,
        loader: false,
      };

    case USER_LOGIN.FAILURE:
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
};

export const access_token = store => store?.getState().auth?.data?.token ?? '';

export default {auth};
