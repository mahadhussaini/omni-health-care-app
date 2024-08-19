import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../HeartDisease/styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';
import styles from './styles';

const ForgetPwd = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.seaGreen,
          borderBottomEndRadius: 90,
          width: screenWidth,
          height: screenHeight / 2,
        }}>
        {/* <Image style={styles.omniRemovebgPreview1Icon} source={Images.login} /> */}
        <Text
          style={{
            color: Colors.white,
            fontSize: 38,
            marginHorizontal: 20,
            marginTop: screenHeight / 2.8,
          }}>
          Forgot Password
        </Text>
      </View>
      <View style={styles.mainView}>
        <TextInput
          style={styles.email}
          placeholder="Email or Username"></TextInput>

        <ButtonWide
          style={{marginTop: 50}}
          title="Reset"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default ForgetPwd;
