import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.seaGreen,
        borderBottomEndRadius: 90,
        width: screenWidth,
        height: screenHeight / 4.2,
      }}>
      <Text
        style={{
          fontSize: 36,
          color: Colors.white,
          marginTop: 74,
          marginHorizontal: 20,
        }}>
        Heart Disease
      </Text>
      <Text
        style={{
          color: '#eeeade',
          marginHorizontal: 20,
          paddingBottom: 50,
          marginTop: -5,
        }}>
        range of conditions affecting the heart and blood vessels
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
