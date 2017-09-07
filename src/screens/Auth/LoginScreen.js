import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../components/common';
import Login from 'react-native-simple-login'
import {Actions} from 'react-native-router-flux'

class LoginForm extends Component {
  onLogin(email, password){
        this.props.logIn(email, password)
  }
  onResetPassword(email){
    console.log(email)
  }


  render() {
    return (
        <View style={styles.container}>
          <Login
            onLogin={this.onLogin.bind(this)}
            onResetPassword={this.onResetPassword.bind(this)}
          />

          <View style={styles.responseContainer}>
            {this.props.loading ? <ActivityIndicator />: <View></View>}
            {this.props.error ? <Text>Couldn't logIn</Text> : <View></View>}
            {this.props.unauthorized? <Text>UnAuthorized</Text> : <View></View>}
            {this.props.sessionID ? Actions.Main({user: this.props.sessionID}) : <View></View>}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,

    },
    responseContainer: {
      flexDirection: 'column',

    }
});
const mapStateToProps = ({ auth }) => {
  const {  spinner, user, unauthorized, error, sessionID } = auth;

  return { spinner, user, unauthorized, error, sessionID};
};

export default connect(mapStateToProps, {
 logIn
})(LoginForm);
