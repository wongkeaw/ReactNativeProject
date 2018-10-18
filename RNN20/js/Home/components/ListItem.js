import React, {Component} from 'react';
import ReactNative from 'react-native';
import firebase from 'firebase' ;
const { View, TouchableHighlight , StyleSheet , Text , Dimensions  , Image } = ReactNative;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKkia9XaY_MOjjVLJS4lcN68Xorr2eMvA",
  authDomain: "rnn19-56b60.firebaseapp.com",
  databaseURL: "https://rnn19-56b60.firebaseio.com",
  projectId: "rnn19-56b60",
  storageBucket: "rnn19-56b60.appspot.com",
  messagingSenderId: "451833285042"
};
const firebaseApp = firebase.initializeApp(config, "other");
const storage = firebaseApp.storage() ;

const downloadImage = (name) => {
  return storage.ref('images').child(name).getDownloadURL() ;
}

class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      imageNew : null
    };
  }

  componentDidMount() {
    downloadImage(this.props.item.title).then(url => {
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
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.viewSlide} >
          {this.state.imageNew ? this.renderImageNew(this.state.imageNew) : <Text>{this.props.item.title}</Text>}
          <Text>{this.props.item.title}{this.state.imageNew}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
//module.exports = ListItem;

const ListItemx = ({item,onPress}) => (
  <ListItemComponent item={item} onPress={onPress} />
);

export default ListItem ;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  
    viewSlide: {
      backgroundColor: 'blue',
      height: 220,
      width: width,
      flex:1 ,
    },
    viewSlide2: {
      backgroundColor: 'red',
      height: 220,
      width: width - 80,
      flex:1 ,
    },
  
  });