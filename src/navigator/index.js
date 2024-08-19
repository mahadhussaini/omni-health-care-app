import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Signup,
  Home,
  Profile,
  HeartDisease,
  DiabetesDisease,
  ParkinsonsDisease,
  DiseaseSymtoms,
  Reults,
} from '../screens';
import AuthStack from './substacks/auth';
import AppStack from './substacks/app';
import {Colors} from '../themes';
import About from '../screens/About';
import {useSelector} from 'react-redux';

const Mainstack = createNativeStackNavigator();

const AppNavigator = ({navigation}) => {
  const user = useSelector(state => state.auth?.data);

  const routeName = user.length != 0 ? 'AppStack' : 'AuthStack';
  return (
    <NavigationContainer>
      <Mainstack.Navigator initialRouteName={routeName} headerMode={true}>
        <Mainstack.Screen
          options={{
            headerShown: false,
          }}
          name="AuthStack"
          component={AuthStack}
        />
        <Mainstack.Screen
          options={{headerShown: false}}
          name="AppStack"
          component={AppStack}
        />
        <Mainstack.Screen
          options={{headerShown: true}}
          name="Profile"
          component={Profile}
        />
        <Mainstack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: Colors.white,
          }}
          name="HeartDisease"
          component={HeartDisease}
        />
        <Mainstack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: Colors.white,
          }}
          name="DiabetesDisease"
          component={DiabetesDisease}
        />
        <Mainstack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: Colors.white,
          }}
          name="ParkinsonsDisease"
          component={ParkinsonsDisease}
        />
        <Mainstack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: Colors.white,
          }}
          name="About"
          component={About}
        />
        <Mainstack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: Colors.seaGreen,
          }}
          name="Results"
          component={Reults}
        />
      </Mainstack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
