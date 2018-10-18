
import React, {Component} from 'react';
import firebase from 'firebase' ;

import {
   Button, Platform, ScrollView, StyleSheet ,Dimensions
  ,View , Text,Modal ,TouchableHighlight ,Image,ActionButton , FlatList
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
      imageNew : null
    };
  }
  
  componentDidMount() {
    var items = ['images.jpg','DSC_0188.JPG'];
    items.forEach((child) => {
      //alert(child) ;
    });
    downloadImage(this.props.fileName).then(url => {
      this.setState({
        imageNew : url
      });
    }).catch(error => {console.log(error)}
    )
  }
  
  renderImageNew(image) {
    return <Image style={styles.viewSlide} source={{uri: image }}/>
  }

  render() {

    var items = ['images.jpg','DSC_0188.JPG'];
    var ret = [] ;
    items.forEach((child) => {
      //alert(child) ;
      ret.push(<View style={styles.viewSlide} />) ;
    });
    
    return (
      <Swiper height={220} horizontal={true} autoplay>
        {this.state.imageNew ? this.renderImageNew(this.state.imageNew) : null}
        <View style={styles.viewSlide} />
        <View style={styles.viewSlide2} />
      </Swiper>
    );
  }
  /*
  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderItem.bind(this)}
      enableEmptySections={true}
      style={styles.listview}/>
    );
  }
  */
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
