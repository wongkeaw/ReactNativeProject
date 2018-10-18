
import React, {Component} from 'react';
import firebase from 'firebase' ;

import {
   Button, Platform, ScrollView, StyleSheet ,Dimensions
  ,View , Text,Modal ,TouchableHighlight ,Image,ActionButton , FlatList , ListView
} from 'react-native';
import SampleText from './../SampleText';
import Swiper from 'react-native-swiper' ;

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
const storage = firebase.storage() ;

class ImageComponent extends Component {

  constructor() {
    super();
    this.state = {
      isStarted : false ,
      myArr : [ "images.jpg", "images2.jpg", "images.jpg", "images2.jpg" ,"images.jpg", "images2.jpg", "images.jpg", "images2.jpg"] ,
      myLink : [] ,
    };
  }
  
  componentDidMount() {
    this.state.myArr.map((a, i) => {
      downloadImage(a).then(url => {
          this.state.isStarted = true ;
          this.state.myLink.push(url) ;
          //console.log( this.state.myLink ) ;
          this.setState(previousState => {
            return {
              isStarted : previousState.isStarted ,
              myArr : previousState.myArr ,
              myLink : previousState.myLink ,
            };
          });
      }).catch(error => {
        console.log(error) ;
      }) ;
    }) ;
  }
  
  renderImageNew(image) {
    return <Image style={styles.viewSlide} source={{uri: image }}/>
  }

  render() {
    var arr = this.state.myArr.map((a, i) => {
      return <View key={i} > 
            { this.state.myLink.length >= i && this.state.isStarted ? this.renderImageNew(this.state.myLink[i]) : <Image style={styles.viewSlide} source={require('../assets/loader1.gif')} />  }
            </View>
    }) 
    var swiper =  <Swiper height={220} horizontal={true} autoplay >
                    { arr }
                  </Swiper>
    return (
      <View>{swiper}</View>
    );
  }
}
const downloadImage = (name) => {
  return storage.ref('images').child(name).getDownloadURL() ;
}

const MySwiper = ({ navigation, banner }) => (
    <ImageComponent fileName='images.jpg'/>
);

export default MySwiper ;

const styles = StyleSheet.create({

  viewSlide: {
    backgroundColor: 'blue',
    height: 220,
  },
  viewSlide2: {
    backgroundColor: 'red',
    height: 220,
  },

});
