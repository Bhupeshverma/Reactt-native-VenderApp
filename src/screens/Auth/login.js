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
  KeyboardAvoidingView,
  ScrollView,
  StatusBar
} from 'react-native';
import {Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import {Actions, ActionConst} from 'react-native-router-flux'
// import {withRouter, Redirect} from 'react-router-native'
import { Font } from 'expo';
const { width, height } = Dimensions.get("window");

const background = require("./bg1.jpg");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      Password: '',
      behavior: 'position',
      fontLoaded: false,
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Helvetica Neue': require('../../assets/fonts/HelveticaNeueIt.ttf'),
      'Poiret One':require('../../assets/fonts/PoiretOne-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  
  }
  _onPressButton(){
    const {email, Password} = this.state
    console.log(email)
    console.log(Password);
    this.props.logIn(email, Password)
  }
  handleUser(){
  Actions.drawer({type: ActionConst.RESET})
  }


  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
        <StatusBar
          hidden={false}
           barStyle = "light-content"
          backgroundColor="black"
         />
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Icon
              name='lock'
              color="#ff5252"
              size= {34}
            />
            {this.state.fontLoaded ? <Text style={styles.mark}>Street Style Store</Text>: null }
          </View>
          {this.state.fontLoaded ? <View style={styles.loginLogo}>
              <Text style={styles.loginText}>Login</Text>
          </View>: null}
          <View style={styles.wrapper}>
            <KeyboardAvoidingView behavior={this.state.behavior}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>

              <TextInput
                placeholder="Username"
                placeholderTextColor="#FFF"
                underlineColorAndroid="transparent"
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
                underlineColorAndroid="transparent"
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
            </KeyboardAvoidingView>
          </View>

          <View style={styles.container}>
            <View style={styles.signupWrap}>


                {this.props.spinner ? <ActivityIndicator size="large"/>:<View></View>}
                {this.props.error ? <Text style={styles.signupLinkText}> Couldn't log in !</Text>: <View></View>}
                {this.props.unauthorized ? <Text style={styles.signupLinkText}> UnAuthorized</Text>:<View></View>}
                {this.props.sessionID ? <View>{this.handleUser()}</View>:<View></View>}


            </View>
          </View>
        </Image>
      </View>
</ScrollView>
    );
  }
}
function mapStateToProps(state){
  return{
    spinner: state.auth.spinner,
    user:state.auth.user,
    unauthorized:state.auth.unauthorized,
    error: state.auth.error,
    sessionID: state.auth.sessionID,
    loggedOut: state.LogOutReducer.loggedOut
  }

};

export default connect(mapStateToProps, {
 logIn
})(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  markWrap: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mark: {
    color:"#fff",
    fontFamily: 'Helvetica Neue',
    fontWeight: "400",
    fontSize: 24
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  loginLogo:{
    justifyContent: "center",
    alignItems: "center",
  },
  loginText:{
    color: "#fff",
    fontWeight: "500",
    fontSize: 36,
    fontFamily: 'Poiret One'
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginHorizontal: 20,
    opacity: 0.5,
    backgroundColor: '#555',
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  sssicon:{
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    paddingVertical: 10
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
    backgroundColor: "#ff5252",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 5
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
