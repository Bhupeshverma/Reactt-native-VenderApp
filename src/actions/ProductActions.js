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

function decreaseMissingCount(productID) {
  return (dispatch , getState) => {
    var {products} = getState().productReducer ;
     return products.missing_item.forEach((item , index)=>{
       var formattedID = productID.slice(0,5);
       var size = productID.slice(5,7);
       if (formattedID === item.product_id) {
         if (size === '34' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '35' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '36' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '37' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '38' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '39' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '40' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '41' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
         if (size === '42' && item.size_34 !== 0) {
           item.size_34 -= 1 ;
         }else {
           item.size_34 = 0
         }
       }
     })
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
