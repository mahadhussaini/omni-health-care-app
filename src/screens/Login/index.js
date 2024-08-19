import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';
import {useDispatch} from 'react-redux';
import {requestUser} from '../../ducks/auth/actions';
import AnimatedLoader from 'react-native-animated-loader';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Login = ({navigation}) => {
  // textinputs values
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [hidePass, setHidePass] = useState(false);
  const [password, setPassword] = useState('');
  const onSubmit = values => {
    const payload = {email: values.email, password: values.password};
    console.log('payload-->', values);
    setLoader(true);
    dispatch(
      requestUser(
        payload,
        () => {
          setLoader(false);
          navigation.reset({
            index: 0,
            routes: [{name: 'AppStack'}],
          });
        },
        err => {
          setLoader(false);
          showMessage({
            message: `${err?.msg?.data?.message}`,
            type: 'info',
            duration: 6000,
            backgroundColor: Colors.redErr,
          });
        },
      ),
    );
  };

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required('*required'),
    email: Yup.string().email('Invalid email').required('*required'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image style={styles.omniRemovebgPreview1Icon} source={Images.login} />
        <Text style={styles.txt1}>Sign in</Text>
        <Text style={styles.subHead}>Your Journey to a Healthier Future</Text>
      </View>
      <View style={styles.mainView}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => onSubmit(values)}
          validationSchema={LoginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.password}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Text
                  style={{
                    color: Colors.redErr,
                    fontSize: 10,
                  }}>{`${errors.email}`}</Text>
              ) : null}

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={[
                    styles.password,
                    {
                      flex: 1,
                    },
                  ]}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePass}
                />
                <TouchableOpacity
                  style={{
                    padding: 5,
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    right: 5,
                    bottom: 10,
                  }}
                  onPress={() => {
                    {
                      Keyboard.dismiss();
                      setHidePass(!hidePass);
                    }
                  }}>
                  <Image
                    style={{
                      width: 16,
                      height: 16,
                    }}
                    source={hidePass ? Images.showPwd : Images.hidePwd}
                  />
                </TouchableOpacity>
              </View>

              {errors.password && touched.password ? (
                <Text
                  style={{
                    color: Colors.redErr,
                    fontSize: 10,
                  }}>{`${errors.password}`}</Text>
              ) : null}
              <ButtonWide
                style={{marginTop: 35}}
                title="Login"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <AnimatedLoader
          visible={loader}
          overlayColor="rgba(255,255,255,0.5)"
          source={Images.loader}
          animationStyle={{width: 200, height: 250}}
          speed={1}></AnimatedLoader>

        {/* <TextInput
          style={styles.email}
          placeholder="Email or Username"
          value={email}
          onChangeText={text => setEmail(text)}></TextInput>

        <TextInput
          style={styles.password}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgetPwd')}>
          <Text style={styles.forgotPasswordTxt}>Forgot password?</Text>
        </TouchableOpacity>

        <ButtonWide style={{marginTop: 35}} title="Login" onPress={onSubmit} /> */}
      </View>
    </View>
  );
};

export default Login;
