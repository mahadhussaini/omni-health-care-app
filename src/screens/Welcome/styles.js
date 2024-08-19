import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

/* font sizes */
export const FontSize = {
  size_3xs: 10,
  size_6xs: 7,
};
/* Colors */
export const Color = {
  white: '#fff',
  darkgray: '#AAA4A4',
  silver: '#BDB3B3',
  black: '#000',
};
/* border radiuses */
export const Border = {
  br_185xl: 204,
  br_22xl: 41,
};
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  loginBtn: {
    backgroundColor: '#01979d',
    padding: 7,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 40,
    marginTop: 25,
  },
  loginTxt: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },

  omniRemovebgPreview1Icon: {
    marginTop: screenHeight / 5,
    width: 280,
    height: 240,
    tintColor: Colors.white,
    alignSelf: 'center',
  },
});
