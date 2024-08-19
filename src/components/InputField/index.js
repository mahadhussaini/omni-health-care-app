import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import {images, colors} from '../../theme';

const InputFeild = ({imageIcon, placeholderText, margintop, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image source={imageIcon} style={styles.imageIcon} />
      <TextInput
        placeholder={placeholderText}
        style={styles.tab}
        placeholderTextColor="black"
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 22,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginTop: 12,
  },
  imageIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    // marginTop: 9,
    tintColor: colors.yellow,
  },
  tab: {
    flex: 1,
    // alignSelf: 'center',
  },
});

export default InputFeild;
