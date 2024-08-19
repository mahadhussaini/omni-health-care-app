import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Reults = ({navigation}) => {
  const diabetes = useSelector(state => state.diseases?.diabetes);
  const heart = useSelector(state => state.diseases?.heart);
  const perkinsons = useSelector(state => state.diseases?.perkinsons);

  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>Report History</Text>

      <Text style={styles.txt2}>Following are recent results</Text>

      <TouchableOpacity
        activeOpacity={1}
        style={[{marginHorizontal: 30, marginTop: 20}]}
        onPress={() => {}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 2, y: 0}}
          colors={['#02AAB0', '#00CDAC', '#02AAB0']}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Diabetes'}</Text>
          <Text style={[styles.appButtonText, {fontSize: 14, marginTop: 15}]}>
            {diabetes != null ? diabetes : 'Not available'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={[{marginHorizontal: 30, marginTop: 20}]}
        onPress={() => {}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 2, y: 0}}
          colors={['#02AAB0', '#00CDAC', '#02AAB0']}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Heart'}</Text>
          <Text style={[styles.appButtonText, {fontSize: 14, marginTop: 15}]}>
            {heart != null ? heart : 'Not available'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* <TouchableOpacity
        activeOpacity={1}
        style={[{marginHorizontal: 30, marginTop: 20}]}
        onPress={() => {}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 2, y: 0}}
          colors={['#02AAB0', '#00CDAC', '#02AAB0']}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{`Perkinson's`}</Text>
          <Text style={[styles.appButtonText, {fontSize: 14, marginTop: 15}]}>
            {perkinsons != null ? perkinsons : 'Not available'}
          </Text>
        </LinearGradient>
      </TouchableOpacity> */}
    </View>
  );
};

export default Reults;
