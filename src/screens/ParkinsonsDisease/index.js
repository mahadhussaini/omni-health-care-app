import {Text, View, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ButtonWide} from '../../components';
import AnimatedLoader from 'react-native-animated-loader';
import {showMessage} from 'react-native-flash-message';
import {Colors, Images} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {postPerkinsonsRequest} from '../../ducks/diseases/actions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Modal from 'react-native-modal';

const ParkinsonsDisease = ({navigation}) => {
  const perkinsons = useSelector(state => state.diseases?.perkinsons);

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSubmit = values => {
    setLoader(true);
    const payload = {
      name: values.name,
      fo: values.fo,
      fhi: values.fhi,
      flo: values.flo,
      Jitter_percent: values.Jitter_percent,
      Jitter_Abs: values.Jitter_Abs,
      RAP: values.RAP,
      PPQ: values.PPQ,
      DDP: values.DDP,
      Shimmer: values.Shimmer,
      Shimmer_dB: values.Shimmer_dB,
      APQ3: values.APQ3,
      APQ5: values.APQ5,
      APQ: values.APQ,
      DDA: values.DDA,
      NHR: values.NHR,
      HNR: values.HNR,
      RPDE: values.RPDE,
      DFA: values.DFA,
      D2: values.D2,
      spread1: values.spread1,
      spread2: values.spread2,
      PPE: values.PPE,
    };

    console.log('payload--->', payload);

    dispatch(
      postPerkinsonsRequest(
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

  const PerkinsonsSchema = Yup.object().shape({
    name: Yup.string().required('*required'),
    fo: Yup.number().required('*required'),
    fhi: Yup.number().required('*required'),
    flo: Yup.number().required('*required'),
    Jitter_percent: Yup.number().required('*required'),
    Jitter_Abs: Yup.number().required('*required'),
    RAP: Yup.number().required('*required'),
    PPQ: Yup.number().required('*required'),
    DDP: Yup.number().required('*required'),
    Shimmer: Yup.number().required('*required'),
    Shimmer_dB: Yup.number().required('*required'),
    APQ3: Yup.number().required('*required'),
    APQ5: Yup.number().required('*required'),
    APQ: Yup.number().required('*required'),
    DDA: Yup.number().required('*required'),
    NHR: Yup.number().required('*required'),
    HNR: Yup.number().required('*required'),
    RPDE: Yup.number().required('*required'),
    DFA: Yup.number().required('*required'),
    D2: Yup.number().required('*required'),
    spread1: Yup.number().required('*required'),
    spread2: Yup.number().required('*required'),
    PPE: Yup.number().required('*required'),
  });

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 80}}
      style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.h1}>Parkinsons</Text>
        <Text style={styles.desc}>
          progressive neurological disorder that affects movement control.
        </Text>
      </View>
      <Text style={styles.subText}>Info Form</Text>
      <Text style={styles.h2}>Please Fill all fields</Text>

      <Formik
        initialValues={{
          name: '',
          fo: '',
          fhi: '',
          flo: '',
          Jitter_percent: '',
          Jitter_Abs: '',
          RAP: '',
          PPQ: '',
          DDP: '',
          Shimmer: '',
          Shimmer_dB: '',
          APQ3: '',
          APQ5: '',
          APQ: '',
          DDA: '',
          NHR: '',
          HNR: '',
          RPDE: '',
          DFA: '',
          D2: '',
          spread1: '',
          spread2: '',
          PPE: '',
        }}
        onSubmit={values => onSubmit(values)}
        validationSchema={PerkinsonsSchema}>
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
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.txtInput}
              placeholder="Name"
            />
            {errors.name && touched.name ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.name}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              MDVP (Multidimensional Voice Program)
            </Text>

            <TextInput
              onChangeText={handleChange('fo')}
              onBlur={handleBlur('fo')}
              value={values.fo}
              style={styles.txtInput}
              placeholder="Average vocal fundamental frequency (fo)"
            />
            {errors.fo && touched.fo ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.fo}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('fhi')}
              onBlur={handleBlur('fhi')}
              value={values.fhi}
              style={styles.txtInput}
              placeholder="Maximum vocal fundamental frequency (fhi)"
            />
            {errors.fhi && touched.fhi ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.fhi}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('flo')}
              onBlur={handleBlur('flo')}
              value={values.flo}
              style={styles.txtInput}
              placeholder="Minimum vocal fundamental frequency (flo)"
            />
            {errors.flo && touched.flo ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.flo}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('Jitter_percent')}
              onBlur={handleBlur('Jitter_percent')}
              value={values.Jitter_percent}
              style={styles.txtInput}
              placeholder="Jitter (%)"
            />
            {errors.Jitter_percent && touched.Jitter_percent ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.Jitter_percent}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('Jitter_Abs')}
              onBlur={handleBlur('Jitter_Abs')}
              value={values.Jitter_Abs}
              style={styles.txtInput}
              placeholder="Jitter (Abs)"
            />
            {errors.Jitter_Abs && touched.Jitter_Abs ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.Jitter_Abs}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('RAP')}
              onBlur={handleBlur('RAP')}
              value={values.RAP}
              style={styles.txtInput}
              placeholder="RAP"
            />
            {errors.RAP && touched.RAP ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.RAP}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('PPQ')}
              onBlur={handleBlur('PPQ')}
              value={values.PPQ}
              style={styles.txtInput}
              placeholder="PPQ"
            />
            {errors.PPQ && touched.PPQ ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.PPQ}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('DDP')}
              onBlur={handleBlur('DDP')}
              value={values.DDP}
              style={styles.txtInput}
              placeholder="DDP"
            />
            {errors.DDP && touched.DDP ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.DDP}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              Measures of variation in amplitutde
            </Text>

            <TextInput
              onChangeText={handleChange('Shimmer')}
              onBlur={handleBlur('Shimmer')}
              value={values.Shimmer}
              style={styles.txtInput}
              placeholder="Shimmer"
            />
            {errors.Shimmer && touched.Shimmer ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.Shimmer}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('Shimmer_dB')}
              onBlur={handleBlur('Shimmer_dB')}
              value={values.Shimmer_dB}
              style={styles.txtInput}
              placeholder="Shimmer (dB)"
            />
            {errors.Shimmer_dB && touched.Shimmer_dB ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.Shimmer_dB}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('APQ3')}
              onBlur={handleBlur('APQ3')}
              value={values.APQ3}
              style={styles.txtInput}
              placeholder="APQ3"
            />
            {errors.APQ3 && touched.APQ3 ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.APQ3}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('APQ5')}
              onBlur={handleBlur('APQ5')}
              value={values.APQ5}
              style={styles.txtInput}
              placeholder="APQ5"
            />
            {errors.APQ5 && touched.APQ5 ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.APQ5}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('APQ')}
              onBlur={handleBlur('APQ')}
              value={values.APQ}
              style={styles.txtInput}
              placeholder="APQ"
            />
            {errors.APQ && touched.APQ ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.APQ}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('DDA')}
              onBlur={handleBlur('DDA')}
              value={values.DDA}
              style={styles.txtInput}
              placeholder="DDA"
            />
            {errors.DDA && touched.DDA ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.DDA}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              Measures of Ratio of noice to tonal components in the voice
            </Text>

            <TextInput
              onChangeText={handleChange('NHR')}
              onBlur={handleBlur('NHR')}
              value={values.NHR}
              style={styles.txtInput}
              placeholder="NHR"
            />
            {errors.NHR && touched.NHR ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.NHR}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('HNR')}
              onBlur={handleBlur('HNR')}
              value={values.HNR}
              style={styles.txtInput}
              placeholder="HNR"
            />
            {errors.HNR && touched.HNR ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.HNR}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              Measures of Nonlinear dynamical complexity
            </Text>

            <TextInput
              onChangeText={handleChange('RPDE')}
              onBlur={handleBlur('RPDE')}
              value={values.RPDE}
              style={styles.txtInput}
              placeholder="RPDE"
            />
            {errors.RPDE && touched.RPDE ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.RPDE}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('D2')}
              onBlur={handleBlur('D2')}
              value={values.D2}
              style={styles.txtInput}
              placeholder="D2"
            />
            {errors.D2 && touched.D2 ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.D2}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              Signal fractal scaling component
            </Text>

            <TextInput
              onChangeText={handleChange('DFA')}
              onBlur={handleBlur('DFA')}
              value={values.DFA}
              style={styles.txtInput}
              placeholder="DFA"
            />
            {errors.DFA && touched.DFA ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.DFA}`}</Text>
            ) : null}

            <Text style={styles.subHeading}>
              Measures of Nonlinear fundamental frequency variation
            </Text>

            <TextInput
              onChangeText={handleChange('spread1')}
              onBlur={handleBlur('spread1')}
              value={values.spread1}
              style={styles.txtInput}
              placeholder="Spread 1"
            />
            {errors.spread1 && touched.spread1 ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.spread1}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('spread2')}
              onBlur={handleBlur('spread2')}
              value={values.spread2}
              style={styles.txtInput}
              placeholder="Spraed 2"
            />
            {errors.spread2 && touched.spread2 ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.spread2}`}</Text>
            ) : null}

            <TextInput
              onChangeText={handleChange('PPE')}
              onBlur={handleBlur('PPE')}
              value={values.PPE}
              style={styles.txtInput}
              placeholder="PPE"
            />
            {errors.PPE && touched.PPE ? (
              <Text
                style={{
                  color: Colors.redErr,
                  fontSize: 10,
                  marginHorizontal: 20,
                }}>{`${errors.PPE}`}</Text>
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
          <Text style={styles.mt2}>{perkinsons}</Text>
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

export default ParkinsonsDisease;
