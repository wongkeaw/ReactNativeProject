import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator ,TabNavigator , RouteConfigs, StackNavigatorConfig } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

class MyProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'MyProfileScreen',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home', {name: 'Lucy'})}
        title="Go to Lucy's Home"
      />
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),

  },
});

AppRegistry.registerComponent('RNN01', () => ModalStack);
