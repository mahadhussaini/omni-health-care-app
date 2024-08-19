import {Text, View, TextInput, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';

import AnimatedLoader from 'react-native-animated-loader';
import {showMessage} from 'react-native-flash-message';
import {postHeartRequest} from '../../ducks/diseases/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Modal from 'react-native-modal';
import {Popable} from 'react-native-popable';

const HeartDisease = ({navigation}) => {
  const heart = useSelector(state => state.diseases?.heart);

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSubmit = values => {
    setLoader(true);
    const payload = {
      age: values.age,
      sex: values.sex,
      cp: values.cp,
      trestbps: values.trestbps,
      chol: values.chol,
      fbs: values.fbs,
      restecg: values.restecg,
      thalach: values.thalach,
      exang: values.exang,
      oldpeak: values.oldpeak,
      slope: values.slope,
      ca: values.cp,
      thal: values.thal,
    };

    console.log('payload--->', payload);
    dispatch(
      postHeartRequest(
        payload,
        () => {
          setLoader(false);
          // navigation.goBack();
          toggleModal();
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

  const HeartSchema = Yup.object().shape({
    age: Yup.number().required('*required').moreThan(20).lessThan(80),
    sex: Yup.string().required('*required'),
    cp: Yup.number().required('*required').lessThan(4),
    trestbps: Yup.number().required('*required').moreThan(80).lessThan(200),
    chol: Yup.number().required('*required').moreThan(100).lessThan(600),
    fbs: Yup.number().required('*required').lessThan(2),
    restecg: Yup.number().required('*required').lessThan(3),
    thalach: Yup.number().required('*required').moreThan(50).lessThan(220),
    exang: Yup.number().required('*required').lessThan(2),
    oldpeak: Yup.string().required('*required'),
    slope: Yup.number().required('*required').lessThan(3),
    ca: Yup.number().required('*required').lessThan(5),
    thal: Yup.number().required('*required').lessThan(4),
  });

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 80}}
      style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.txt1}>Heart Disease</Text>
        <Text style={styles.sub}>
          range of conditions affecting the heart and blood vessels
        </Text>
      </View>
      <Text style={styles.subText}>Info Form</Text>
      <Text style={styles.sub1}>Please Fill all fields</Text>

      <Formik
        initialValues={{
          age: '',
          sex: '',
          cp: '',
          trestbps: '',
          chol: '',
          fbs: '',
          restecg: '',
          thalach: '',
          exang: '',
          oldpeak: '',
          slope: '',
          ca: '',
          thal: '',
        }}
        onSubmit={values => onSubmit(values)}
        validationSchema={HeartSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={[styles.textInput, {marginTop: 30}]}
                placeholder="Age"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
              />
              <Popable
                position="left"
                content="This field accepts numbers only">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.age && touched.age ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.age}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Sex"
                value={values.sex}
                onChangeText={handleChange('sex')}
                onBlur={handleBlur('sex')}
              />
              <Popable position="left" content="M/F">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.sex && touched.sex ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.sex}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Chest Pain"
                value={values.cp}
                onChangeText={handleChange('cp')}
                onBlur={handleBlur('cp')}
              />
              <Popable position="left" content="0 - 4">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.cp && touched.cp ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.cp}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Resting Blood Pressure"
                value={values.trestbps}
                onChangeText={handleChange('trestbps')}
                onBlur={handleBlur('trestbps')}
              />

              <Popable position="left" content="80 - 200">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.trestbps && touched.trestbps ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.trestbps}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Serum Cholesterol"
                value={values.chol}
                onChangeText={handleChange('chol')}
                onBlur={handleBlur('chol')}
              />
              <Popable position="left" content="100 - 600">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.chol && touched.chol ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.chol}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Fasting Blood Sugar"
                value={values.fbs}
                onChangeText={handleChange('fbs')}
                onBlur={handleBlur('fbs')}
              />
              <Popable position="left" content="0 - 2">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.fbs && touched.fbs ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.fbs}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Resting ElectricCardiographic Results"
                value={values.restecg}
                onChangeText={handleChange('restecg')}
                onBlur={handleBlur('restecg')}
              />
              <Popable position="left" content="0 - 3">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.restecg && touched.restecg ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.restecg}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Maximum Heart rate Acheived"
                value={values.thalach}
                onChangeText={handleChange('thalach')}
                onBlur={handleBlur('thalach')}
              />
              <Popable position="left" content="50 - 220">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.thalach && touched.thalach ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.thalach}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Excercise Induce Angina"
                value={values.exang}
                onChangeText={handleChange('exang')}
                onBlur={handleBlur('exang')}
              />
              <Popable position="left" content="0 - 2">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>

            {errors.exang && touched.exang ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.exang}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Old Peak"
                value={values.oldpeak}
                onChangeText={handleChange('oldpeak')}
                onBlur={handleBlur('oldpeak')}
              />
              {/* <Popable position="left" content="It ranges between 40 to 160">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable> */}
            </View>
            {errors.oldpeak && touched.oldpeak ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.oldpeak}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="The Slope of Peak Excercise"
                value={values.slope}
                onChangeText={handleChange('slope')}
                onBlur={handleBlur('slope')}
              />
              <Popable position="left" content="0 - 3">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.slope && touched.slope ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.slope}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Number of Major Vessels"
                value={values.ca}
                onChangeText={handleChange('ca')}
                onBlur={handleBlur('ca')}
              />

              <Popable position="left" content="0 - 5">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>

            {errors.ca && touched.ca ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.ca}`}</Text>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Thal"
                value={values.thal}
                onChangeText={handleChange('thal')}
                onBlur={handleBlur('thal')}
              />

              <Popable position="left" content="0 - 4">
                <Image
                  source={Images.info}
                  style={{
                    height: 23,
                    width: 23,
                    right: 15,
                    top: 3,
                  }}
                />
              </Popable>
            </View>
            {errors.thal && touched.thal ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.thal}`}</Text>
            ) : null}

            <ButtonWide
              style={{marginTop: 35}}
              title="Submit"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <AnimatedLoader
        visible={loader}
        overlayColor="rgba(255,255,255,0)"
        source={Images.loaderDots}
        animationStyle={{width: 200, height: 250}}
        speed={1}
      />
      <Modal isVisible={isModalVisible}>
        <View style={styles.mv}>
          <Text style={styles.mt}>Result</Text>
          <Text style={styles.mt2}>{heart}</Text>
          <ButtonWide
            style={{marginTop: 45}}
            title="Ok"
            onPress={() => {
              toggleModal();
              setTimeout(() => {
                navigation.goBack();
              }, 900);
            }}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HeartDisease;
