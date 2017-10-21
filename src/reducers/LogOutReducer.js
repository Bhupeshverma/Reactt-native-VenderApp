import {IS_LOGGING_OUT , LOGGED_OUT , LOGGING_OUT_ERROR} from '../actions/types';

const INITIAL_STATE = { spinner : false , loggedOut : false , error : false }

export default function (state = INITIAL_STATE , action) {
    switch (action.type) {
        case IS_LOGGING_OUT:
            return {...state , spinner : true , error:false};
        case LOGGED_OUT:
            return {...state , spinner : false , loggedOut : true, error:false};
        case LOGGING_OUT_ERROR:
            return {...state , spinner : false , error : true};
        default:
            return state;
    }
}