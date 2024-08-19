import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, TouchableOpacity} from 'react-native';
import {ForgetPwd, Login, Signup, Welcome} from '../../../screens';
import {Colors, Images, Metrics} from '../../../themes';
import styles from './styles';

const Stack = createNativeStackNavigator();

const screenOptions = ({headerTitle}) => {
  return {
    headerTitle: {headerTitle},
    headerTitleAlign: 'center',
    headerTitleStyle: {color: Colors.white},
    headerStyle: {backgroundColor: 'transparent'},
    headerTransparent: true,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Images.back} style={styles.backImage} />
      </TouchableOpacity>
    ),
  };
};
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: Colors.white,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: Colors.white,
        }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: Colors.white,
        }}
        name="ForgetPwd"
        component={ForgetPwd}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
