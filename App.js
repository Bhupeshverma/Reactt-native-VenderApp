import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import {Provider} from 'react-redux';
import Router from './Routes';
// import {NativeRouter, Route} from 'react-router-native'
import LoginScreen from './src/screens/Auth/login';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
          </Provider>
      );
    }
  }
