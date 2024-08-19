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
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  password: {
    padding: 5,
    // marginHorizontal: 30,
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
    marginHorizontal: 20,
    marginTop: 25,
  },
  loginTxt: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  download1Icon: {
    top: 0,
    width: 428,
    left: 0,
    height: 708,
    borderRadius: Border.br_185xl,
    position: 'absolute',
  },
  omniRemovebgPreview1Icon: {
    marginTop: screenHeight / 5,
    width: 100,
    height: 100,
    tintColor: 'white',
    marginHorizontal: 20,
  },

  forgotPassword: {
    fontWeight: '500',
    fontSize: FontSize.size_3xs,
    alignItems: 'flex-end',
    marginTop: 20,
  },
  forgotPasswordTxt: {color: 'red', fontSize: 13},
  v1: {
    backgroundColor: Colors.seaGreen,
    borderBottomEndRadius: 90,
    width: screenWidth,
    height: screenHeight / 2,
  },
  txt1: {
    color: Colors.white,
    fontSize: 38,
    marginHorizontal: 20,
  },
  subHead: {
    color: Colors.white,
    fontSize: 16,
    marginHorizontal: 20,
  },
});
