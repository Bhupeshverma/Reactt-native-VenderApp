import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {

  IS_LOGGED_IN,
  IS_LOGGING_IN,
  UNAUTHORIZED,
  RECIEVED_ERROR,
  CHANGE_LOG_OUT_STATUS
} from './types';



function unAuthorized() {
  return {
    type : UNAUTHORIZED
  }
}

function isLoggingIn() {
  return{
    type : IS_LOGGING_IN
  }
}

function loggedIn(data) {
  return{
    type : IS_LOGGED_IN ,
    payload : data
  }
}

function recievedError() {
  return {
    type : RECIEVED_ERROR
  }
}
function changeLogOutStatus(){
  return {
    type : CHANGE_LOG_OUT_STATUS
  }
}



export function logIn(email , password) {

  console.log(JSON.stringify({user_name:`${email}` , password :`${password}`} , undefined , 2));
  const data = JSON.stringify({"user_name":`${email}` , "password":`${password}`} , undefined , 2);

  return (dispatch) => {

    dispatch(isLoggingIn());

    return axios.post('http://crm.streetstylestore.com/webservice/login.php',data)
            .then((response) => {
              dispatch(loggedIn(response));
              dispatch(changeLogOutStatus());
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.status === 401) {
                  dispatch(unAuthorized());
                }
              }
              else if (error.request) {
                dispatch(recievedError());
              } else {
                dispatch(recievedError());
              }
            })

  }

}
