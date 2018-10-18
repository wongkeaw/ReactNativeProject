'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { StyleSheet, Text, View} = ReactNative;

class StatusBar2 extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title} ongart.w</Text>
        </View>
      </View>
    );
  }
}
/*
module.exports = StatusBar;
*/

const StatusBar = ({title}) => (
  <StatusBar2 title={title} />
);
export default StatusBar ;
