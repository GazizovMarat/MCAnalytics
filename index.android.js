/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SelfAnalytics from './analytics';
//let SelfAnalytics = require('./analytics');

export default class MCAnalytics extends Component {
  onPressMCEvent(){
    console.log('MCAnalytics Start');

    // message: “Facebook login button clicked”; 
    // properties: {“Page”: “Login”, “Category”: “Clicks”}
    let analytics = new SelfAnalytics({});
    analytics.track('fb_login');
    analytics.track('login_api_request_result', {"Social network":'Facebook', 'Result': 'true'});
    //SelfAnalytics.track('fb_login');
    console.log('MCAnalytics End');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={this.onPressMCEvent}
          title="Learn More"
          color="#841584"
        >     
        </Button>
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

AppRegistry.registerComponent('MCAnalytics', () => MCAnalytics);
