import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Images} from '../../themes';
import {DrawerActions} from '@react-navigation/native';
import styles from './styles';
import {ButtonWide} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={{width: 30, height: 30}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image style={styles.img} source={Images.hamburger} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.user} source={Images.user} />
        </TouchableOpacity> */}
      </View>

      <Image style={styles.omniRemovebgPreview1Icon} source={Images.omniIcon} />

      <Text style={styles.txt1}>
        Welcome to the Disease Classification App!
      </Text>

      <Text style={styles.txt2}>
        Your health, instantly classified. Using cutting-edge AI, get rapid
        insights into your well-being by inputting symptoms or health data.
        Empowering and private, make informed health decisions today.
      </Text>

      <Text style={styles.txt3}>
        Choose and Fill out form to Classify your Disease:
      </Text>

      <ButtonWide
        title={`Diabetes`}
        onPress={() => navigation.navigate('DiabetesDisease')}
      />
      <ButtonWide
        title={`Heart`}
        onPress={() => navigation.navigate('HeartDisease')}
      />
      {/* <ButtonWide
        title={`Parkinson's`}
        onPress={() => navigation.navigate('ParkinsonsDisease')}
      /> */}
    </View>
  );
};

export default Home;
