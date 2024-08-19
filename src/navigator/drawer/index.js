import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../../components/DrawerCotent';
import {Home} from '../../screens';

const DrawerStack = createDrawerNavigator();
const Drawer = ({navigation}) => {
  return (
    <DrawerStack.Navigator
      screenOptions={{headerShown: false}}
      drawerStatusBarAnimation="fade"
      drawerType={'front'}
      drawerContent={() => <DrawerComponent navigation={navigation} />}>
      <DrawerStack.Screen name="Home" component={Home} />
    </DrawerStack.Navigator>
  );
};

export default Drawer;
