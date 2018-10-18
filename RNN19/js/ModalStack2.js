/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, Text , StyleSheet,View ,Dimensions ,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText1';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('HeaderTest')}
      title="Go to a header toggle screen"
    />
    {navigation.state.routeName === 'HeaderTest' &&
      <Button
        title="Toggle Header"
        onPress={() =>
          navigation.setParams({
            headerVisible: !navigation.state.params ||
              !navigation.state.params.headerVisible,
          })}
      />}
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
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome ongart.w',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen banner={`${navigation.state.params.name}'s Profile`} navigation={navigation} />
);
MyProfileScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}'s Profile!`,
});

const ProfileNavigator = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Profile: {
      path: 'people/:name',
      screen: MyProfileScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

const MyHeaderTestScreen = ({ navigation }) => (
  <MyNavScreen banner={`Full screen view`} navigation={navigation} />
);
MyHeaderTestScreen.navigationOptions = ({ navigation }) => {
  const headerVisible =
    navigation.state.params && navigation.state.params.headerVisible;
  return {
    header: headerVisible ? undefined : null,
    title: 'Now you see me',
  };
};
const { width } = Dimensions.get('window');

const ModalStack = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    ProfileNavigator: {
      screen: ProfileNavigator,
    },
    HeaderTest: { screen: MyHeaderTestScreen },
  },
  {
    mode: 'modal',
  }
);

const styles = StyleSheet.create({
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

export default ModalStack;
