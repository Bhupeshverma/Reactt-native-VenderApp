import {
  FETCH_PRODUCTS ,
   FETCHED_PRODUCTS ,
    ERROR_RECIEVING_PRODUCTS,
     UPDATED_PRODUCTS,
     ALERT_GENERAL_CASE,
     ALERT_GENERAL_CASE_CLOSE,
      ALERT_TWIN_CASE,
      ALERT_TWIN_CASE_CLOSE,
      ALERT_NO_MORE_PRODUCTS,
      ALERT_NO_MORE_PRODUCTS_CLOSE
    } from '../actions/types';

const INITIAL_STATE = { spinner : false , products : null , error : false, alertGeneralCase: false, alertTwinCase: false , alertNoMoreProducts : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state , spinner : true , error: false};
    case FETCHED_PRODUCTS:
      return { ...state , spinner : false , products : action.payload.data, error: false}
    case ERROR_RECIEVING_PRODUCTS:
      return { ...state , spinner : false , error : true, products: null }
    case UPDATED_PRODUCTS:
      return {...state , products : action.payload}
    case ALERT_GENERAL_CASE:
      return {...state , alertGeneralCase: true}
    case ALERT_GENERAL_CASE_CLOSE:
      return {...state , alertGeneralCase: false}
    case ALERT_TWIN_CASE:
      return {...state , alertTwinCase: true}
    case ALERT_TWIN_CASE:
      return {...state , alertTwinCase: false}
    case ALERT_NO_MORE_PRODUCTS:
      return {...state , alertNoMoreProducts: true}
    case ALERT_NO_MORE_PRODUCTS_CLOSE:
      return {...state , alertNoMoreProducts: false}
    default:
      return state;
  }
}
