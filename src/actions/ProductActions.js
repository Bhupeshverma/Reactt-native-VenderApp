import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  FETCH_PRODUCTS,
  FETCHED_PRODUCTS,
  ERROR_RECIEVING_PRODUCTS,
} from './types';

function isFetchingProducts() {
  return{
    type : FETCH_PRODUCTS
  }
}

function recievedProducts(data) {
    return{
      type : FETCHED_PRODUCTS,
      payload : data
    }
}

function recievedProductsError() {
  return {
    type : ERROR_RECIEVING_PRODUCTS
  }
}
export function fetchProducts( ) {
 return (dispatch , getState) => {

   dispatch(isFetchingProducts());

   const {sessionID} = getState().auth
   const {user : {name_value_list : {user_id : {value}}} } = getState().auth;


   const data =  {
"session": `${sessionID}`,
"user_id": `${value}`,
       "vender_type": "Shoes"
}

   console.log(data);
    return axios.post(`http://crm-dev.streetstylestore.com/webservice/get_missing_product_item.php`, data)
   .then((response) => {
     console.log(response.status)
     dispatch(recievedProducts(response));
   })
   .catch((error) => {
     if (error.response) {
       if (error.response.status === 401) {
         dispatch(recievedProductsError());
       }
     }
     else if (error.request) {
       console.log(error)
       dispatch(recievedProductsError());
     } else {
       console.log(error)
       dispatch(recievedProductsError());
     }
   })
 }

}
