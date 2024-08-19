import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const {width, height} = Dimensions.get('window');

export const screenWidth = width < height ? width : height;
export const screenHeight = width < height ? height : width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  txtInput: {
    padding: 5,
    marginHorizontal: 20,
    color: '#756f6e',
    fontSize: 15,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  subText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    alignSelf: 'left',
    color: Colors.black,
    //     paddingBottom: 30,
  },

  icon: {
    marginTop: 50,
    marginHorizontal: 60,
    width: 150,
    height: 100,
    tintColor: Colors.white,
    alignSelf: 'center',
  },
  v1: {
    backgroundColor: Colors.seaGreen,
    borderBottomEndRadius: 90,
    width: screenWidth,
    height: screenHeight / 4.2,
  },
  h1: {
    fontSize: 36,
    color: Colors.white,
    marginTop: 74,
    marginHorizontal: 20,
  },
  desc: {
    color: '#eeeade',
    marginHorizontal: 20,
    paddingBottom: 50,
    marginTop: -5,
  },
  h2: {
    fontSize: 14,
    marginHorizontal: 20,
    alignSelf: 'left',
    color: Colors.black,
  },
  subHeading: {
    marginTop: 22,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    alignSelf: 'left',
    color: 'black',
    textAlign: 'center',
  },
  mv: {
    flex: 0.3,
    backgroundColor: Colors.white,
    borderRadius: 18,
    paddingVertical: 6,
  },
  mt: {
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  mt2: {
    fontSize: 17,
    marginTop: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
