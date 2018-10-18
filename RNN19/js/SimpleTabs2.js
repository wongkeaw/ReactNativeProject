/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet ,Dimensions ,View ,} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import Home from './Home';
import Profile from './Profile';

const { width } = Dimensions.get('window');

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner} ongart test jar</SampleText>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
    onPress={() => navigation.navigate('People')}
    title="Go to People tab"
    />
    <Button
    onPress={() => navigation.navigate('Chat')}
    title="Go to Chat tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />



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

  <SampleText>{banner}</SampleText>

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

const MyHomeScreen = ({ navigation }) => (
  <Home banner="Home Tab" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyPeopleScreen = ({ navigation }) => (
  <Profile banner="People Tab" navigation={navigation} />
);

MyPeopleScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyChatScreen = ({ navigation }) => (
  <MyNavScreen banner="Chat Tab" navigation={navigation} />
);

MyChatScreen.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Tab" navigation={navigation} />
);

MySettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    People: {
      screen: MyPeopleScreen,
      path: 'cart',
    },
    Chat: {
      screen: MyChatScreen,
      path: 'chat',
    },
    Settings: {
      screen: MySettingsScreen,
      path: 'settings',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  view: {
    marginTop: 100,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },

});


export default SimpleTabs;
