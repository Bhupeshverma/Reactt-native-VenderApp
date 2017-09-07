import React, { Component } from 'react';
import {View, Text, AsyncStorage} from 'react-native';

export default class MainScreen extends Component {

  render() {
      AsyncStorage.getItem('id').then((value)=>{
          console.log(value)
      })

    return (
      <View>
        <Text>{this.props.user}</Text>
      </View>
    );
  }
}
