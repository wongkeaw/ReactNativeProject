/* @flow */

import React from 'react';

import { Button, Platform, ScrollView, StyleSheet ,Dimensions ,View , Text,Modal ,TouchableHighlight ,} from 'react-native';
import SampleText from './../SampleText';
import Swiper from 'react-native-swiper' ;
import MySwiper from './MySwiper2' ;
import FixBoxx from './FixBoxx' ;
import LeftRightWideBoxx from './LeftRightWideBoxx' ;
/**
 * Used across examples as a screen placeholder.
 */

const Home = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <MySwiper banner={banner} navigation={navigation} />
    <FixBoxx banner={banner} navigation={navigation} />
    <LeftRightWideBoxx banner={banner} navigation={navigation} />
    <LeftRightWideBoxx banner={banner} navigation={navigation} />
    <LeftRightWideBoxx banner={banner} navigation={navigation} />
    <LeftRightWideBoxx banner={banner} navigation={navigation} />
    <FixBoxx banner={banner} navigation={navigation} />
  </ScrollView>
);

export default Home;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : 0,
  },
  
});

