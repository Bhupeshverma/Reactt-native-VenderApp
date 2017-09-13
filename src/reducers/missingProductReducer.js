import {MISSING_FETCH_PRODUCTS , MISSING_FETCHED_PRODUCTS , MISSIMG_ERROR_RECIEVING_PRODUCTS} from '../actions/types';

const INITIAL_STATE = { spinner : false , products : null , error : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case MISSING_FETCH_PRODUCTS:
      return { ...state , spinner : true , error: false};
    case MISSING_FETCHED_PRODUCTS:
      return { ...state , spinner : false , products : action.payload.data, error: false}
    case MISSIMG_ERROR_RECIEVING_PRODUCTS:
      return { ...state , spinner : false , error : true, products: null }
    default:
      return state;
  }
}
