import {Text, View, TextInput, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Colors, Images} from '../../themes';
import {ButtonWide} from '../../components';
import AnimatedLoader from 'react-native-animated-loader';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {postDiabetesRequest} from '../../ducks/diseases/actions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Modal from 'react-native-modal';
import {Popable} from 'react-native-popable';

const DiabetesDisease = ({navigation}) => {
  const diabetes = useSelector(state => state.diseases?.diabetes);

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onSubmit = values => {
    console.log(values);
    setLoader(true);
    const payload = {
      Pregnancies: values.Pregnancies,
      Glucose: values.Glucose,
      BloodPressure: values.BloodPressure,
      SkinThickness: values.SkinThickness,
      Insulin: values.Insulin,
      BMI: values.BMI,
      DiabetesPedigreeFunction: values.DiabetesPedigreeFunction,
      Age: values.Age,
    };

    console.log('payload--->', payload);
    dispatch(
      postDiabetesRequest(
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

  const DiabetesSchema = Yup.object().shape({
    Pregnancies: Yup.number().required('*required'),
    Glucose: Yup.number().required('*required').moreThan(50).lessThan(250),
    BloodPressure: Yup.number()
      .required('*required')
      .moreThan(40)
      .lessThan(160),
    SkinThickness: Yup.number().required('*required'),
    Insulin: Yup.number().required('*required'),
    BMI: Yup.number().required('*required').moreThan(10).lessThan(60),
    DiabetesPedigreeFunction: Yup.number().required('*required').lessThan(3),
    Age: Yup.number().required('*required').positive(),
  });

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 80}}
      style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.h1}>Diabetes</Text>
        <Text style={styles.desc}>
          chronic condition characterized by high blood sugar levels due to
          insufficient insulin production
        </Text>
      </View>
      <Text style={styles.subText}>Info Form</Text>
      <Text style={styles.h2}>Please Fill all fields</Text>

      <Formik
        initialValues={{
          Pregnancies: '',
          Glucose: '',
          BloodPressure: '',
          SkinThickness: '',
          Insulin: '',
          BMI: '',
          DiabetesPedigreeFunction: '',
          Age: '',
        }}
        onSubmit={values => onSubmit(values)}
        validationSchema={DiabetesSchema}>
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
                style={[styles.txtInput, {marginTop: 30, flex: 1}]}
                placeholder="Pregnancies"
                value={values.Pregnancies}
                onChangeText={handleChange('Pregnancies')}
                onBlur={handleBlur('Pregnancies')}
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
            {errors.Pregnancies && touched.Pregnancies ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.Pregnancies}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="Glucose"
                value={values.Glucose}
                onChangeText={handleChange('Glucose')}
                onBlur={handleBlur('Glucose')}
              />
              <Popable position="left" content="It ranges between 50 to 250">
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
            {errors.Glucose && touched.Glucose ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.Glucose}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="BloodPressure"
                value={values.BloodPressure}
                onChangeText={handleChange('BloodPressure')}
                onBlur={handleBlur('BloodPressure')}
              />
              <Popable position="left" content="It ranges between 40 to 160">
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
            {errors.BloodPressure && touched.BloodPressure ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.BloodPressure}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="SkinThickness"
                value={values.SkinThickness}
                onChangeText={handleChange('SkinThickness')}
                onBlur={handleBlur('SkinThickness')}
              />
            </View>
            {errors.SkinThickness && touched.SkinThickness ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.SkinThickness}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="Insulin"
                value={values.Insulin}
                onChangeText={handleChange('Insulin')}
                onBlur={handleBlur('Insulin')}
              />
            </View>
            {errors.Insulin && touched.Insulin ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.Insulin}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="BMI"
                value={values.BMI}
                onChangeText={handleChange('BMI')}
                onBlur={handleBlur('BMI')}
              />
              <Popable position="left" content="It ranges between 10 to 60">
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
            {errors.BMI && touched.BMI ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.BMI}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="DiabetesPedigreeFunction"
                value={values.DiabetesPedigreeFunction}
                onChangeText={handleChange('DiabetesPedigreeFunction')}
                onBlur={handleBlur('DiabetesPedigreeFunction')}
              />
              <Popable position="left" content="It ranges between 0 to 3">
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
            {errors.DiabetesPedigreeFunction &&
            touched.DiabetesPedigreeFunction ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.DiabetesPedigreeFunction}`}</Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <TextInput
                style={styles.txtInput}
                placeholder="Age"
                value={values.Age}
                onChangeText={handleChange('Age')}
                onBlur={handleBlur('Age')}
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
            {errors.Age && touched.Age ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 30,
                }}>{`${errors.Age}`}</Text>
            ) : null}

            <ButtonWide
              style={{marginTop: 55}}
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
          <Text style={styles.mt2}>{diabetes}</Text>
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

export default DiabetesDisease;
