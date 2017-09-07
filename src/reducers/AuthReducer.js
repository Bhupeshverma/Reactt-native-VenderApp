import {IS_LOGGING_IN , IS_LOGGED_IN , LOGGED_OUT , UNAUTHORIZED , RECIEVED_ERROR } from '../actions/types';

import {REHYDRATE} from 'redux-persist/constants';

const INITIAL_STATE = { user : null , sessionID : null , spinner : false , unauthorized:false , error : false };

export default function (state = INITIAL_STATE , action) {
  switch (action.type) {

    case IS_LOGGING_IN:
      return {...state , spinner : true};
    case IS_LOGGED_IN:
      return {...state , spinner : false , sessionID : action.payload.data.id , user : action.payload.data }
    case UNAUTHORIZED:
      return {...state , spinner : false , unauthorized : true}
    case RECIEVED_ERROR:
      return {...state , spinner : false , error : true}
    case LOGGED_OUT:
      return {...state , sessionID : null , user : null}
    case REHYDRATE:
      var incoming = action.payload.AuthReducer
      if (incoming) return {...state, sessionID:action.payload.AuthReducer.sessionID , user:action.payload.AuthReducer.user}
        return state
    default:
      return state;
  }
}
