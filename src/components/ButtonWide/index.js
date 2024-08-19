import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../themes';

const ButtonWide = ({title, style, onPress, isDisable, isWhite = false}) => {
  return (
    <>
      {isWhite ? (
        <TouchableOpacity
          activeOpacity={1}
          style={[
            style,
            {
              borderRadius: 32,
              paddingVertical: 15,
              paddingHorizontal: 12,
              marginHorizontal: 30,
              marginTop: 20,
              borderWidth: 1,
              borderColor: Colors.seaGreen,
            },
          ]}
          onPress={onPress}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.seaGreen,
              fontWeight: 'bold',
              alignSelf: 'center',
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={1}
          style={[{marginHorizontal: 30, marginTop: 20}, style]}
          onPress={onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 2, y: 0}}
            colors={['#02AAB0', '#00CDAC', '#02AAB0']}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ButtonWide;
