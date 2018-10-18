import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  /*
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
    headerRight: <Button title="Info" />,
  });
  */
  static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  const isInfo = state.params.mode === 'info';
  const {user} = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    ),
  };
};
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
/*
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});
*/
class RecentChatsScreen extends React.Component {
  render() {
    return <View>
          <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'ongart' })}
          title="Recent Chats Screen"
          />
    </View>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <View>
          <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'wongkeaw' })}
          title="All Contacts Screen"
          />
    </View>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
} );
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const RNN01 = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },

});

AppRegistry.registerComponent('RNN01', () => RNN01);
