/* @flow */

import React from 'react';

import {
   Button, Platform, ScrollView, StyleSheet ,Dimensions 
  ,View , Text,Modal ,TouchableHighlight ,Image,
} from 'react-native';
import SampleText from './../SampleText';
/**
 * Used across examples as a screen placeholder.
 */


const LeftRightWideBoxx = ({ navigation, banner }) => (
    
    <View>
    <SampleText>{banner} home tab 0</SampleText>
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
    </View>
);

export default LeftRightWideBoxx ;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  
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

