import React, { Component } from 'react';
import createStore from './app/store/createStore'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Home } from './app/Home';

console.log('***')
console.log(Home)
console.log('***')

const store = createStore();

export default class App extends Component {
  render() {
    return (
          <View style={styles.container}>
             <Home />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
