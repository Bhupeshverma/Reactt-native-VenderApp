import {
    SYNCING_PRODUCTS,
    SYNCED_PRODUCTS,
    ERROR_SYNCING_PRODUCTS
} from '../actions/types';
import {REHYDRATE} from 'redux-persist/constants'
const INITIAL_STATE = { spinner : false , products : null , error : false }

export default function (state=INITIAL_STATE , action) {

        switch (action.type) {
        case SYNCING_PRODUCTS:
                return { ...state , spinner : true , error: false};
        case SYNCED_PRODUCTS:
                return { ...state , spinner : false , products : action.payload.data, error: false}
        case ERROR_SYNCING_PRODUCTS:
                return { ...state , spinner : false , error : true, products: null }

        default:
            return state;
        }

}