import React, {Component }from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class VRapp extends Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to The Colored Girls Museum
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    // backgroundImage: url('CGMlogo.png'),
    backgroundColor: '#000000',
  //   // borderColor: '#EEEEEE',
  //   borderWidth: 2,
  },
  // greeting: {
  //   fontSize: 30,
  // },
});

AppRegistry.registerComponent('VRapp', () => VRapp);
