/* @flow */

import React from 'react';

import {
   Button, Platform, ScrollView, StyleSheet ,Dimensions 
  ,View , Text,Modal ,TouchableHighlight ,Image,
} from 'react-native';
/**
 * Used across examples as a screen placeholder.
 */


const FixBoxx = ({ navigation, banner }) => (
  <View style={{ 
    height: 200, 
    backgroundColor: 'powderblue' , 
    flexDirection: 'row'
  , }} >
  <View style={{flex: 3, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
  </View>
);

export default FixBoxx ;

const styles = StyleSheet.create({

});

