/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, Text ,StyleSheet,View ,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText1';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView contentContainerStyle={styles.contentContainer} >
    <View style={{flex: 1}}>
      <View style={{flex: 2, backgroundColor: 'powderblue'}} >
        <SampleText>{banner}</SampleText>
        <Button style={styles.red}
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
          title="Go to a profile screen"
        />
      </View>
      <View style={{flex: 2, backgroundColor: 'skyblue'}} >
        <Button style={styles.bigblue}
          onPress={() => navigation.navigate('HeaderTest')}
          title="Go to a header toggle screen"
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'steelblue'}} >
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
      </View>
    </View>
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome',
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
});

export default ModalStack;
