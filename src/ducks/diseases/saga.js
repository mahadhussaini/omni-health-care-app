import {call, put, takeLatest} from 'redux-saga/effects';
import {DIABETES_FORM, HEART_FORM, PERKINSONS_FORM} from './types';
import {
  API_DIABETES_FORM,
  API_HEART_FORM,
  API_PERKINSONS_FORM,
} from '../../config/WebService';
import {callRequest} from '../../utils/Apisauce';
import {
  postDiabetesFailure,
  postDiabetesSuccess,
  postHeartFailure,
  postHeartSuccess,
  postPerkinsonsFailure,
  postPerkinsonsSuccess,
} from './actions';
import Toast from 'react-native-toast-message';

function* PostDiabetes(action) {
  const {payload, callback, errCallback} = action;
  {
    try {
      const response = yield call(callRequest, API_DIABETES_FORM, payload);
      if (response && response.length != 0) {
        yield put(postDiabetesSuccess(response));
        callback();
      }
    } catch (err) {
      yield put(postDiabetesFailure(err.message));
      errCallback(err);
    }
  }
}

function* PostHeart(action) {
  const {payload, callback, errCallback} = action;
  {
    try {
      const response = yield call(callRequest, API_HEART_FORM, payload);
      if (response && response.length != 0) {
        yield put(postHeartSuccess(response));
        callback();
      }
    } catch (err) {
      yield put(postHeartFailure(err.message));
      errCallback(err);
    }
  }
}

function* PostPerkinsons(action) {
  const {payload, callback, errCallback} = action;
  {
    try {
      const response = yield call(callRequest, API_PERKINSONS_FORM, payload);
      if (response && response.length != 0) {
        yield put(postPerkinsonsSuccess(response));
        callback();
      }
    } catch (err) {
      yield put(postPerkinsonsFailure(err.message));
      errCallback(err);
    }
  }
}

export function* diseases() {
  yield takeLatest(DIABETES_FORM.REQUEST, PostDiabetes);
  yield takeLatest(HEART_FORM.REQUEST, PostHeart);
  yield takeLatest(PERKINSONS_FORM.REQUEST, PostPerkinsons);
}

export default diseases;
