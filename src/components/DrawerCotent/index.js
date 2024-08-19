import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Colors, Images} from '../../themes';
import styles from './styles';
import {DrawerActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {userLogoutRequest} from '../../ducks/auth/actions';

const DrawerItems = [
  {
    key: 1,
    icon: Images.results,
    name: 'Results',
    routeName: 'Results',
    about: '',
  },
  {
    key: 2,
    icon: Images.heart,
    name: 'About Heart',
    routeName: 'About',
    about: 'Heart',
  },

  {
    key: 3,
    icon: Images.diabetes,
    name: 'About Diabetes',
    routeName: 'About',
    about: 'Diabetes',
  },
  // {
  //   key: 4,
  //   icon: Images.brain,
  //   name: `About Parkinston's`,
  //   routeName: 'About',
  // },
  {
    key: 5,
    icon: Images.logout,
    name: `Logout`,
    routeName: 'Logout',
    about: '',
  },
];

const DrawerItem = ({onpress, items, routeName}) => {
  return (
    <TouchableOpacity
      style={styles.drawerItemContainer}
      onPress={() => onpress(items.routeName, items.about)}>
      <Image source={items.icon} style={styles.dImg} />
      <Text style={styles.itemTxt}>{items.name}</Text>
    </TouchableOpacity>
  );
};

const DrawerContent = ({navigation}) => {
  const dispatch = useDispatch();

  const naviateToRoute = (routeName, about) => {
    navigation.dispatch(DrawerActions.toggleDrawer());
    navigation.navigate(routeName, {about});
  };

  const logout = () => {
    dispatch(userLogoutRequest());
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });
  };

  return (
    <View style={styles.container}>
      {/* 
      removed profile
      
      <TouchableOpacity
        style={styles.profile}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
          navigation.navigate('Profile');
        }}>
        <View style={styles.profileBorder}>
          <Image
            resizeMode="cover"
            style={styles.userImg}
            source={Images.user}
          />
        </View>

        <Text style={styles.userTxt}>{'Usman'}</Text>
      </TouchableOpacity> */}

      <FlatList
        style={styles.flatList}
        data={DrawerItems}
        renderItem={({item}) => (
          <DrawerItem
            items={item}
            onpress={(routeName, about) => {
              routeName === 'Logout'
                ? logout()
                : naviateToRoute(routeName, {about});
            }}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;
