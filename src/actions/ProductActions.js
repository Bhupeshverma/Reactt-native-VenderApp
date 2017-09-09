import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {

  FETCH_PRODUCTS,
  FETCHED_PRODUCTS,
  ERROR_RECIEVING_PRODUCTS
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
   console.log('The request started!');
    return axios.get(`https://shielded-depths-33593.herokuapp.com/`)
   .then((response) => {
     console.log(response);
     dispatch(recievedProducts(response));
   })
   .catch((error) => {
     if (error.response) {
       if (error.response.status === 401) {
         dispatch(recievedProductsError());
       }
     }
     else if (error.request) {
       dispatch(recievedProductsError());
     } else {
       dispatch(recievedProductsError());
     }
   })
 }

}
