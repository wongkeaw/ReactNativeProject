/**
 * Sample Firebase & React Native App
 * https://github.com/davideast/firebase-react-native-sample
 */
'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const firebase = require('firebase');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js')
import FBSDK, { LoginManager , AccessToken } from 'react-native-fbsdk'
import {GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TouchableOpacity,
} = ReactNative;

// Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAN5gxvztEvmhaB8EllyNkbu4AU5gahdmA",
    authDomain: "rnn03-91899.firebaseapp.com",
    databaseURL: "https://rnn03-91899.firebaseio.com",
    projectId: "rnn03-91899",
    storageBucket: "rnn03-91899.appspot.com",
    messagingSenderId: "613562485565"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

class RNN03 extends Component {

  constructor(props) {
    super(props);
    this._setupGoogleSignin();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }) ,
      user: null
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function(result) {
          if (result.isCancelled) {
             alert('Login cancelled');
          } else {
           AccessToken.getCurrentAccessToken().then(accessTokenData => {
             const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
             firebase.auth().signInWithCredential(credential).then(result => {
               // promise was successfull
               alert('promise was successfull') ;
               console.log('promise was successfull'+result);
             }, error => {
               // promise was rejected
               console.log('promise was rejected '+error);
               alert('promise was rejected '+error);
             })
           },(error => {
             console.log('some error occured '+error);
             alert('some error occured '+error);
           }))
          }
       },
       function(error) {
          alert('Login fail with error: ' + error);
       }
    );
 }
/* begin GoogleSignin add by ongart.w 2017-05-22*/
/*
componentDidMount() {
  this._setupGoogleSignin();
}
*/
async _setupGoogleSignin() {
  try {
    await GoogleSignin.hasPlayServices({ autoResolve: true });

    await GoogleSignin.configure({
      iosClientId: '584645620232-bdmvvt4kbkjehn25go731b6rsp8kgig3.apps.googleusercontent.com',
      client_secret: '6uXcrQuelzkQH7JKyrp9DMpC',
      webClientId: '584645620232-occvq1qotqsg4iofb236m3k1tkk7gnbv.apps.googleusercontent.com',
      offlineAccess: false
    });


    const user = await GoogleSignin.currentUserAsync();
    console.log(user);
    this.setState({user});

  }
  catch(err) {
    alert(err) ;
    console.log("Google signin error", err.code , err.message);
  }
}

_signIn() {
  GoogleSignin.signIn().then((result) => {
    if (result.isCancelled) {
       AlertIOS('Login cancelled');
    }else {
      console.log('log_1 :'+result.idToken);
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).then(res => {
        // promise was successfull
        alert('google promise was successfull') ;
        console.log('log_2 :'+res);
      }, error => {
        // promise was rejected
        console.log('promise was rejected'+error);
        alert('google promise was rejected'+error);
      })
    }
    //console.log(result);
    this.setState({user: result});
  }).catch((err) => {
    console.log('WRONG SIGNIN', err);
  }).done();
}
_signOut() {
  GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
    //alert('google log out was successfull') ;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert("Sign-out successful.");
    }).catch(function(error) {
      // An error happened.
      console.log("An error happened.");
      console.log(error);
    });
    this.setState({user: null});
  }).done();
}
/* end GoogleSignin add by ongart.w 2017-05-22*/
  render() {
    return (
          <View style={styles.container}>
            <StatusBar title="RNN03" />
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}
              enableEmptySections={true}
              style={styles.listview}/>
            <ActionButton onPress={this._addItem.bind(this)} title="Add" />
            <ActionButton onPress={this._fbAuth} title="Login with Facebook" />
            <ActionButton onPress={this._signIn.bind(this)} title="Google-Signin" />
            <ActionButton onPress={() => {this._signOut(); }} title="Google-Signout" />
          </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

}

AppRegistry.registerComponent('RNN03', () => RNN03);
