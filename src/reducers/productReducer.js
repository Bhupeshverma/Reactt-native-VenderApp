import {FETCH_PRODUCTS , FETCHED_PRODUCTS , ERROR_RECIEVING_PRODUCTS} from '../actions/types';

const INITIAL_STATE = { spinner : false , products : null , error : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state , spinner : true };
    case FETCHED_PRODUCTS:
      return { ...state , spinner : false , products : action.payload.data}
    case ERROR_RECIEVING_PRODUCTS:
      return { ...state , spinner : false , error : true }

    default:
      return state;
  }
}
