/* @flow */

import React from 'react';

import { Button, Platform, ScrollView, StyleSheet ,Dimensions ,View , Text,} from 'react-native';
import SampleText from './SampleText1';
/**
 * Used across examples as a screen placeholder.
 */

const Notification = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
      <View style={{ height: 350, backgroundColor: 'powderblue'}} >
        <SampleText>{banner} ongart test jar</SampleText>
        <Button
          onPress={() => navigation.navigate('HomeTab')}
          title="Go to home tab"
        />
        <Button
        onPress={() => navigation.navigate('ProfileTab')}
        title="Go to People tab"
        />
        <Button
        onPress={() => navigation.navigate('NotificationTab')}
        title="Go to Notification tab"
        />
        <Button
          onPress={() => navigation.navigate('SettingsTab')}
          title="Go to settings tab"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </View>
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

export default Notification ;

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
  view: {
    marginTop: 20,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
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

