/* @flow */

import React from 'react';

import { Button, Platform, ScrollView, StyleSheet ,Dimensions ,View , Text,} from 'react-native';
import SampleText from './SampleText';
import Swiper from 'react-native-swiper'
/**
 * Used across examples as a screen placeholder.
 */

const Profile = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
  <Swiper height={220} horizontal={false} autoplay>
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide} />
  </Swiper>
    <SampleText>{banner} ongart test jar</SampleText>
    <ScrollView 
      ref={(scrollView) => { this.scrollView = scrollView; }}
      style={styles.container}
      //pagingEnabled={true}
      horizontal= {true}
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment={"center"}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}>
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
    </ScrollView>

    <SampleText>{banner} home tab 1</SampleText>

    <ScrollView 
      ref={(scrollView) => { this.scrollView = scrollView; }}
      style={styles.container}
      //pagingEnabled={true}
      horizontal= {true}
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment={"center"}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}>
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
      <View style={styles.view2} />
      <View style={styles.view} />
    </ScrollView>

    <SampleText>{banner} home tab 2</SampleText>

      <ScrollView 
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
      </ScrollView>
  </ScrollView>
);

export default Profile;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  contentContainer: {
    paddingVertical: 20,
    flex: 1,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

  container: {},
  viewSlide: {
    marginTop: 20,
    backgroundColor: 'blue',
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
  view: {
    marginTop: 20,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    paddingHorizontal : 30
  },
  view2: {
    marginTop: 20,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    paddingHorizontal : 30
  },

});

