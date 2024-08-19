import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from './styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';
import {screenHeight} from '../HeartDisease/styles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.seaGreen,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          height: screenHeight / 1.5,
        }}>
        <Image
          resizeMode="contain"
          style={styles.omniRemovebgPreview1Icon}
          source={Images.omniIcon}
        />
        <Text
          style={{
            alignSelf: 'center',
            color: Colors.fadeWhite,
            marginTop: -10,
            fontSize: 13,
            fontWeight: 'normal',
          }}>
          Disease Decoder: Knowledge for Healthier Lives
        </Text>
      </View>

      <View style={{marginTop: screenHeight / 14}}>
        <ButtonWide
          isWhite={true}
          style={{marginTop: 25}}
          title="Create an account"
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
        <ButtonWide
          style={{marginTop: 15}}
          title="I already have an account"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
