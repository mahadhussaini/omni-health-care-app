import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import styles, {screenHeight, screenWidth} from './styles';
import {Colors} from '../../themes';

const aboutData = {
  dibetes: `In the intricate tapestry of health management, our diabetes module unfolds as a comprehensive and user-centric journey within the app. From the user's perspective, it initiates with a seamless onboarding experience, guiding them through an intuitive signup process. Once onboard, users encounter a dedicated diabetes screen, inviting them to input relevant health data effortlessly. This interactive platform serves as a personalized space, allowing individuals to contribute vital information related to their diabetes management journey.

  As users navigate through the diabetes section, they encounter a sophisticated yet user-friendly text field, beckoning them to enter essential data. This feature acts as a gateway for users to actively engage with their health, fostering a sense of empowerment and personal connection to their well-being. The result screen emerges as the culmination of this interaction, presenting clear and insightful outcomes derived from advanced analytics.
  
  Our app's commitment is not just to present data but to empower users with actionable insights. The diabetes flow encapsulates this dedication, ensuring that users can navigate their health information effortlessly, understand their outcomes comprehensively, and, most importantly, take informed steps toward managing and improving their diabetes health.
  `,
  heart: `In the realm of cardiovascular health, our app's dedicated module unfolds as a user-friendly and empowering journey. Beginning with a smooth onboarding experience, users seamlessly navigate through a signup process designed for clarity and accessibility. As individuals delve into the heart section, they encounter a purposeful screen prompting them to input crucial health data, creating a personalized space for their cardiovascular well-being.

  The heart module introduces an interactive text field, inviting users to contribute essential information effortlessly. This feature serves as a conduit for active user engagement, allowing individuals to play a proactive role in managing their heart health. The result screen, a culmination of this dynamic interaction, delivers clear and meaningful outcomes derived from advanced analytics.
  
  Our commitment extends beyond mere data presentation; it aims to empower users with actionable insights. The heart module encapsulates this dedication, ensuring that users navigate their cardiovascular information with ease, comprehend outcomes comprehensively, and make informed decisions to enhance and monitor their heart health proactively.`,
};

const About = ({navigation, route}) => {
  const {about} = route.params.about;
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.seaGreen,
          borderBottomEndRadius: 90,
          width: screenWidth,
          height: screenHeight / 5.5,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: Colors.white,
            marginTop: 70,
            marginHorizontal: 20,
          }}>
          {`${about}`}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 15}}>
          {`${about === 'Dibetes' ? aboutData.dibetes : aboutData.heart}`}
        </Text>
      </ScrollView>
    </View>
  );
};

export default About;
