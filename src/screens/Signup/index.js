import {
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../ducks/auth/actions';
import {showMessage} from 'react-native-flash-message';
import AnimatedLoader from 'react-native-animated-loader';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Signup = ({navigation}) => {
  // textinputs values
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [hidePass, setHidePass] = useState(false);

  const onSubmit = values => {
    console.log(values);
    const payload = {
      name: values.username,
      email: values.email,
      password: values.password,
    };
    setLoader(true);
    dispatch(
      signupUser(
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
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('*required'),
    password: Yup.string().min(8, 'Too Short!').required('*required'),
    username: Yup.string().required('*required'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image style={styles.omniRemovebgPreview1Icon} source={Images.signup} />
        <Text style={styles.signup}>Sign Up</Text>
        <Text style={styles.subTxt}>Embrace a Better Quality of Life</Text>
      </View>
      <View style={styles.mainView}>
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          onSubmit={values => onSubmit(values)}
          validationSchema={SignupSchema}>
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
                style={styles.email}
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />
              {errors.username && touched.username ? (
                <Text
                  style={{
                    color: Colors.redErr,
                    fontSize: 10,
                  }}>{`${errors.username}`}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.email}
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
                  style={[styles.email, {flex: 1}]}
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
                style={{marginTop: 50}}
                title="Signup"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <AnimatedLoader
        visible={loader}
        overlayColor="rgba(255,255,255,0.5)"
        source={Images.loader}
        animationStyle={{width: 200, height: 250}}
        speed={1}></AnimatedLoader>
    </View>

    //   <TextInput
    //     style={styles.email}
    //     placeholder="Confirm Password"
    //     value={confirmPassword}
    //     onChangeText={text => setConfirmPassword(text)}></TextInput>

    // //  <ButtonWide style={{marginTop: 50}} title="Signup" onPress={onSubmit} />

    // <ImageBackground source={Images.omnibg} style={styles.container}>
    //   <Image style={styles.omniRemovebgPreview1Icon} source={Images.omniIcon} />
    //   <View style={styles.mainView}>
    //     <TextInput style={styles.email} placeholder="Email"></TextInput>

    //     <TextInput style={styles.password} placeholder="Password"></TextInput>

    //     <TextInput
    //       style={styles.password}
    //       placeholder="Confirm Password"></TextInput>

    //     <ButtonWide
    //       style={{marginTop: 40}}
    //       title="Signup"
    //       onPress={() => navigation.goBack()}
    //     />
    //   </View>
    // </ImageBackground>
  );
};

export default Signup;
