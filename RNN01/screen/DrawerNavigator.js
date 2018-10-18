import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator,
  TabNavigator,
  DrawerNavigator,
  RouteConfigs,
  StackNavigatorConfig,
  DrawerNavigatorConfig,
  DrawerItems,
} from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        //this.props.navigation.navigate('DrawerOpen'); // open drawer
        //this.props.navigation.navigate('DrawerClose'); // close drawer
        //this.props.navigation.navigate('Notifications') ; // normal
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
    drawerWidth: 100,
    drawerPosition: 'right',
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

AppRegistry.registerComponent('RNN01', () => MyApp);
