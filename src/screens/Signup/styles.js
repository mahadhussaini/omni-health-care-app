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
  },
  mainView: {
    // top: screenHeight / 2.2,
    // borderTopEndRadius: 40,
    // borderTopLeftRadius: 40,
    // bottom: 60,
    // borderRadius: 40,
    // backgroundColor: Color.white,
    // zIndex: 6,
    marginTop: 30,
    marginHorizontal: 20,
  },
  email: {
    padding: 5,
    // marginHorizontal: 30,
    color: '#756f6e',
    fontSize: 15,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  password: {
    padding: 5,
    marginHorizontal: 30,
    color: '#756f6e',
    fontSize: 15,
    marginTop: 18,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  loginBtn: {
    backgroundColor: '#01979d',
    padding: 7,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 40,
    marginTop: 45,
  },
  loginTxt: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },

  omniRemovebgPreview1Icon: {
    marginTop: screenHeight / 5,
    width: 80,
    height: 80,
    tintColor: 'white',
    marginLeft: 20,
  },

  txt: {
    marginTop: 45,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  v1: {
    backgroundColor: Colors.seaGreen,
    borderBottomEndRadius: 90,
    width: screenWidth,
    height: screenHeight / 2.4,
  },
  signup: {
    color: Colors.white,
    fontSize: 38,
    marginLeft: 20,
  },
  subTxt: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 20,
  },
});
