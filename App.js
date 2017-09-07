import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import {Provider} from 'react-redux';
import Router from './Routes';

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
