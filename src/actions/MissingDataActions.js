import axios from 'axios';

import {
  MISSING_FETCH_PRODUCTS,
  MISSING_FETCHED_PRODUCTS,
  MISSIMG_ERROR_RECIEVING_PRODUCTS
} from './types'

function missingisFetchingProducts() {
  return{
    type : MISSING_FETCH_PRODUCTS
  }
}

function missimgrecievedProducts(data) {
    return{
      type : MISSING_FETCHED_PRODUCTS,
      payload : data
    }
}

function missingrecievedProductsError() {
  return {
    type : MISSIMG_ERROR_RECIEVING_PRODUCTS
  }
}

export function missingfetchProducts() {

 return (dispatch , getState) => {

   dispatch(missingisFetchingProducts());

   const {sessionID } = getState().auth;
   const {user : {name_value_list : {user_id : {value}}} } = getState().auth;


   const data = JSON.stringify(
    {
      "session": `${sessionID}`,
        "user_id":`${value}` ,
   }
      , undefined , 2);

      console.log(data)

   return axios.post(`http://192.168.100.13/crm/webservice/get_missing_product_item.php`,data)
   .then((response) => {
     dispatch(missimgrecievedProducts(response));
   })
   .catch((error) => {
     if (error.response) {
       if (error.response.status === 401) {
         dispatch(missingrecievedProductsError());
       }
     }
     else if (error.request) {
       dispatch(missingrecievedProductsError());
     } else {
       dispatch(missingrecievedProductsError());
     }
   })
 }

}
