import {DIABETES_FORM, HEART_FORM, PERKINSONS_FORM} from './types';

export const initialState = {
  data: null,
  diabetes: null,
  heart: null,
  perkinsons: null,
};

export const diseases = (state = initialState, action) => {
  switch (action.type) {
    case DIABETES_FORM.SUCCESS:
      return {
        ...state,
        diabetes: action.data.result,
      };
    case HEART_FORM.SUCCESS:
      return {
        ...state,
        heart: action.data.result,
      };
    case PERKINSONS_FORM.SUCCESS:
      return {
        ...state,
        perkinsons: action.data.result,
      };
    default:
      return state;
  }
};

export default {diseases};
