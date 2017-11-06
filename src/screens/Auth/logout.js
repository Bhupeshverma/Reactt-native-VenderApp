import React, {Component} from 'react'
import { Logout} from '../../actions';
import { connect } from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux'
import {View ,Alert, Text, ActivityIndicator} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class LogoutComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount(){
        this.props.Logout()
    }
    render(){
        return(
            <View>
              {this.props.spinner? <View style={{ flex: 1 }}>
                  <Spinner visible={true} textContent={"Signing out..."} textStyle={{color: '#FFF'}} />
              </View>:null}
                {this.props.error?Alert.alert(
                    'Error Logging Out',
                    'could not log out !!'
                ) :null}
                {this.props.loggedOut? Actions.Main({type: ActionConst.RESET}) :null }
            </View>
        )
    }
}
function  mapStateToProps(state){
    return {
        spinner: state.LogOutReducer.spinner,
        error: state.LogOutReducer.error,
        loggedOut: state.LogOutReducer.loggedOut
    }
}
export default connect(mapStateToProps, {Logout})(LogoutComponent);
