import React, { Component } from 'react';

import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';
import {withRouter, Route} from 'react-router-native'
class Home extends Component{
  render(){
    return(
      <View>
        <Route exact path='/home' component={MainScreen}/>
        <Route  path='/home/order-details' component={DetailScreen}/>
      </View>
    )
  }
}
export default withRouter(Home)
