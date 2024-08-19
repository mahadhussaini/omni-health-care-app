import React from 'react';
import {Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../../screens';
import styles from './styles';
import Drawer from '../../drawer';
import {Images} from '../../../themes';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={false}>
      <Stack.Screen
        options={{headerShown: false, headerTitle: ''}}
        name="Drawer"
        component={Drawer}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
