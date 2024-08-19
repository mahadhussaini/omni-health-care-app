import React, {useEffect} from 'react';
import AppNavigator from './navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {store, persistor} from './store';
import Toast from 'react-native-toast-message';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <Toast />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};
export default App;
