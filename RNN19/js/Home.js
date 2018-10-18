/* @flow */

import React from 'react';

import { Button, Platform, ScrollView, StyleSheet ,Dimensions ,View , Text,Modal ,TouchableHighlight ,} from 'react-native';
import SampleText from './SampleText1';
import Swiper from 'react-native-swiper'
/**
 * Used across examples as a screen placeholder.
 */

const Home = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
  <Swiper height={220} horizontal={true} autoplay>
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide2} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide2} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide2} />
    <View style={styles.viewSlide} />
    <View style={styles.viewSlide2} />
  </Swiper>
    <View style={{ 
      height: 200, 
      backgroundColor: 'powderblue' , 
      flexDirection: 'row'
    , }} >
    <View style={{flex: 3, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>

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

export default Home;

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
    //marginTop: 20,
    backgroundColor: 'blue',
    //width: width - 80,
    //margin: 10,
    height: 220,
    //borderRadius: 30,
    //paddingHorizontal : 30
  },
  viewSlide2: {
    //marginTop: 20,
    backgroundColor: 'red',
    //width: width - 80,
    //margin: 10,
    height: 220,
    //borderRadius: 30,
    //paddingHorizontal : 30
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
    //paddingHorizontal : 30
  },

});

