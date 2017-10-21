import {FETCH_DATA , FETCHED_DATA , ERROR_RECIEVING_DATA , CHANGE_FETCHDATA_STATUS} from '../actions/types';

const INITIAL_STATE = { spinner : false , data : null , error : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state , spinner : true , error: false};
    case FETCHED_DATA:
      return { ...state , spinner : false , data : action.payload.data, error: false}
    case ERROR_RECIEVING_DATA:
      return { ...state , spinner : false , error : true, data: null }
      case CHANGE_FETCHDATA_STATUS:
        return {...state, data: null, error:false}
    default:
      return state;
  }
}
