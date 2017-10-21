import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import {Actions} from 'react-native-router-flux'
// import {withRouter, Redirect} from 'react-router-native'

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      Password: '',
      behavior: 'padding'
    }
  }
  componentDidMount(){

  }

  _onPressButton(){
    const {email, Password} = this.state
    console.log(email)
    console.log(Password);
    this.props.logIn(email, Password)
    this.setState({
      email: '',
      Password: ''
    })
  }
  handleUser(){
  Actions.Main()
  }


  render() {

    return (

      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>

          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>

              <TextInput
                placeholder="Username"
                placeholderTextColor="#FFF"
                style={styles.input}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                onChangeText={(Password) => this.setState({Password})}
                value={this.state.Password}
                secureTextEntry
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={this._onPressButton.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText} >Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={styles.signupWrap}>

              <TouchableOpacity activeOpacity={.5}>
                {this.props.spinner ? <ActivityIndicator size="large"/>:<View></View>}
                {this.props.error ? <Text style={styles.signupLinkText}> Couldn't log in !</Text>: <View></View>}
                {this.props.unauthorized ? <Text style={styles.signupLinkText}> UnAuthorized</Text>:<View></View>}
                {this.props.sessionID ? <View>{this.handleUser()}</View> : <View/>}

              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>

    );
  }
}
const mapStateToProps = ({ auth }) => {
  const {  spinner, user, unauthorized, error, sessionID } = auth;

  return { spinner, user, unauthorized, error, sessionID};
};

export default connect(mapStateToProps, {
 logIn
})(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    fontSize: 20,
    color: "#FFF",
    marginLeft: 5,
  }
});
