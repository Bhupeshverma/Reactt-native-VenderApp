
import {
IS_LOGGING_OUT,
    LOGGED_OUT,
    LOGGING_OUT_ERROR,
    CHANGE_FETCHDATA_STATUS,
    CHANGE_PRODUCT_STATUS

} from './types'
import axios from 'axios';

function isLoggingOut() {
    return{
        type : IS_LOGGING_OUT
    }
}

function loggedOut() {
    return{
        type : LOGGED_OUT
    }
}

function recievedLoggingOutError() {
    return{
        type : LOGGING_OUT_ERROR
    }
}

function changeproductstatus() {
    return{
        type: CHANGE_PRODUCT_STATUS
    }
}

function changefetchdatastatus() {
    return{
        type: CHANGE_FETCHDATA_STATUS
    }
}


export function Logout() {

    return (dispatch , getState) => {

        dispatch(isLoggingOut());
        const {sessionID} = getState().auth;
        console.log(sessionID)

        const data = JSON.stringify({"session":`${sessionID}`} , undefined , 2);
        console.log(data)


        return axios.post(`http://crm.streetstylestore.com/webservice/logout.php`,data)
            .then((response) => {
            console.log(response.status)
            if(response.status === 200){
                dispatch(loggedOut(response));
                dispatch(changefetchdatastatus())
                dispatch(changeproductstatus())

            }

            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        dispatch(recievedLoggingOutError());
                    }
                }
                else if (error.request) {
                    dispatch(recievedLoggingOutError());
                } else {
                    dispatch(recievedLoggingOutError());
                }
            })

    }

}
