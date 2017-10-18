import {
    UPDATE_PRODUCTS
} from '../actions/types';
import {REHYDRATE} from 'redux-persist/constants'
const INITIAL_STATE = { updatedproducts : [] }

export default function (state=INITIAL_STATE , action) {
    switch (action.type) {

        case UPDATE_PRODUCTS:
            return { ...state, updatedproducts : action.payload}
        case REHYDRATE:
            return action.payload.updatedproductReducer || []

        default:
            return state;
    }
}