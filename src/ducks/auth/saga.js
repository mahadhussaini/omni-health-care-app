import {call, put, takeLatest} from 'redux-saga/effects';
import {USER_LOGIN, USER_SIGNUP} from './types';
import {API_USER_SIGNUP, API_USER_LOGIN} from '../../config/WebService';
import {callRequest} from '../../utils/Apisauce';
import {
  failureUser,
  signupUserFailure,
  signupUserSuccess,
  successUser,
} from './actions';
import Toast from 'react-native-toast-message';

function* Signup(action) {
  const {payload, callback, errCallback} = action;
  {
    try {
      const response = yield call(callRequest, API_USER_SIGNUP, payload);
      if (response && response.length != 0) {
        yield put(signupUserSuccess(response));
        callback();
      }
    } catch (err) {
      yield put(signupUserFailure(err.message));
      errCallback(err);
    }
  }
}

function* Login(action) {
  const {payload, callback, errCallback} = action;
  {
    try {
      const response = yield call(callRequest, API_USER_LOGIN, payload);
      if (response) {
        yield put(successUser(response));
        callback(response);
      }
    } catch (err) {
      yield put(failureUser(err.message));
      errCallback(err);
    }
  }
}

export function* auth() {
  yield takeLatest(USER_SIGNUP.REQUEST, Signup);
  yield takeLatest(USER_LOGIN.REQUEST, Login);
}

export default auth;
