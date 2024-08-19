import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  profile: {
    justifyContent: 'center',
    // backgroundColor: Colors.seaGreen,
    paddingBottom: 20,
  },
  userImg: {
    width: 70,
    height: 70,
    borderColor: 'black',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  profileBorder: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 3,
    marginTop: 100,
    borderColor: Colors.seaGreen,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {marginVertical: 30, marginTop: 100},
  userTxt: {
    marginTop: 4,
    color: Colors.black,
    fontSize: 20,
    marginLeft: 40,
    fontWeight: 'bold',
  },
  drawerItemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    marginTop: 3,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderColor: Colors.seaGreen,
  },
  dImg: {height: 25, width: 25},
  itemTxt: {
    color: 'black',
    fontSize: 16,
    marginStart: 10,
  },
});
