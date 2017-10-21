import {
  FETCH_PRODUCTS ,
   FETCHED_PRODUCTS ,
    ERROR_RECIEVING_PRODUCTS,
CHANGE_PRODUCT_STATUS
    } from '../actions/types';

const INITIAL_STATE = { spinner : false , products : null , error : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state , spinner : true , error: false};
    case FETCHED_PRODUCTS:
      return { ...state , spinner : false , products : action.payload.data, error: false}
    case ERROR_RECIEVING_PRODUCTS:
      return { ...state , spinner : false , error : true, products: null }
      case CHANGE_PRODUCT_STATUS:
          return {...state, products:null, error:false}


    default:
      return state;
  }
}
