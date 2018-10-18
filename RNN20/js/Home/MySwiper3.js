
import React, {Component} from 'react';
import firebase from 'firebase' ;

import {
   Button, Platform, ScrollView, StyleSheet ,Dimensions
  ,View , Text,Modal ,TouchableHighlight ,Image , RefresherListView , ListView , LoadingBarIndicator,
  AlertIOS,
} from 'react-native';
import SampleText from './../SampleText';
import Swiper from 'react-native-swiper' ;

const stylesx = require('./styles.js')

import ActionButton from './components/ActionButton' ;
import StatusBar from './components/StatusBar' ;
import ListItem from './components/ListItem' ;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKkia9XaY_MOjjVLJS4lcN68Xorr2eMvA",
  authDomain: "rnn19-56b60.firebaseapp.com",
  databaseURL: "https://rnn19-56b60.firebaseio.com",
  projectId: "rnn19-56b60",
  storageBucket: "rnn19-56b60.appspot.com",
  messagingSenderId: "451833285042"
};
const firebaseApp = firebase.initializeApp(config);
const storage = firebaseApp.storage() ;

class ImageComponent extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
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
    
    render() {
      return (
        <View style={styles.container}> 
          <ListView
            horizontal={true}
            onScroll={this._onScroll.bind(this)}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
            snapToAlignment={"center"}
            />
            <ActionButton onPress={this._addItem.bind(this)} title="Add" />
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
              this.itemsRef.push({ title: text  , detail : 'ongart love you' , photo : 'my photo'})
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
            {text: 'Complete', onPress: (text) => { this.itemsRef.child(item._key).remove() ; }} ,
            {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
          ]
        );
      };
  
      return (
        <ListItem item={item} onPress={onPress} />
      );
    }
    _onScroll = event => {
      //offset =  width ;
      const currentOffset = event.nativeEvent.contentOffset.x;
      const dif = currentOffset - (this.offset || 0);
      //console.log(dif) ;
      this.offset = currentOffset;
      //this.rowID = 5 ;
    };

    renderMyRow(rowData, sectionID, rowID) {
      console.log("renderMyRow") ;
      console.log(rowData) ;
      console.log(sectionID) ;
      console.log(rowID) ;
    }
  
  }

const MySwiper = ({ navigation, banner }) => (
    <ImageComponent/>
);

export default MySwiper ;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({

  viewSlide: {
    backgroundColor: 'blue',
    height: 220,
    flex:1 ,
  },
  viewSlide2: {
    backgroundColor: 'red',
    height: 220,
    flex:1 ,
  },

});
