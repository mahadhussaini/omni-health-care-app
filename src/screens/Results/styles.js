import {StyleSheet, Text, View} from 'react-native';

export default styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  btnView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  omniRemovebgPreview1Icon: {
    marginTop: -30,
    width: 240,
    height: 200,
    tintColor: '#00989d',
    alignSelf: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    //     alignSelf: 'center',
  },
  img: {width: 20, height: 20},
  user: {width: 30, height: 30},
  txt1: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 70,
  },
  txt2: {
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: 14,
  },
  txt3: {
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
