import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import combineReducers from '../ducks/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../ducks/rootSaga';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers);
const middleware = [logger, sagaMiddleware];
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
