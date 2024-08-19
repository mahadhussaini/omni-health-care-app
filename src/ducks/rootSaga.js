import {fork} from '@redux-saga/core/effects';
import {auth} from './auth/saga';
import {diseases} from './diseases/saga';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(diseases);
}
