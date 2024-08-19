import {combineReducers} from 'redux';
import {auth} from './auth/reducer';
import {diseases} from './diseases/reducer';

export default combineReducers({
  auth,
  diseases,
});
