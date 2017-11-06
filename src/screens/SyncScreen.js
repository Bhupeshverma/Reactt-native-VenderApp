import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ToastAndroid} from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { connect } from 'react-redux';
import {  ClearProducts} from '../actions';
import {Actions} from 'react-native-router-flux'

class SyncScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:true
    }
  }
  handleSync(){
    this.props.ClearProducts()
    Actions.pop()

  }
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {this.props.response? <View>{this.handleSync()}</View> :null}
        {this.props.spinner ? <ActivityIndicator size="large"/> : null}
        {this.props.error ? ToastAndroid.show("ERROR IN SYNCING", ToastAndroid.SHORT): null }
      </View>
    )
  }
}
function  mapStateToProps(state){
    return {
        spinner: state.syncReducer.spinner,
        response: state.syncReducer.response,
        error: state.syncReducer.error
    }
}
export default connect(mapStateToProps,{ClearProducts})(SyncScreen);
