import axios from 'axios';

import {
  FETCH_DATA,
  FETCHED_DATA,
  ERROR_RECIEVING_DATA,
} from './types';

function isFetchingData() {
  return{
    type : FETCH_DATA
  }
}

function recievedData(data) {
    return{
      type : FETCHED_DATA,
      payload : data
    }
}

function recievedDataError() {
  return {
    type : ERROR_RECIEVING_DATA
  }
}
export function fetchData( ) {
 return (dispatch , getState) => {

   dispatch(isFetchingData());

   const {sessionID} = getState().auth
   const {user : {name_value_list : {user_id : {value}}} } = getState().auth;


   const data =  {
        "session": `${sessionID}`,
        "user_id": `${value}`,
    "module_name": "Users",
    "select_fields": [
            "id",
        "vendor_type",
        "account_parent",
        "account_id"
    ],
    "link_name_to_fields_array":[]
}
    return axios.post(`http://crm-dev.streetstylestore.com/webservice/getDataRelatedModule.php`, data)
   .then((response) => {
     console.log("fetchedData", response.data)
     dispatch(recievedData(response));
   })
   .catch((error) => {
     if (error.response) {
       if (error.response.status === 401) {
         dispatch(recievedDataError());
       }
     }
     else if (error.request) {
       console.log(error)
       dispatch(recievedDataError());
     } else {
       console.log(error)
       dispatch(recievedDataError());
     }
   })
 }

}
