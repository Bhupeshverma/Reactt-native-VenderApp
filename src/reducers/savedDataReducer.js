import {
  SAVED_PRODUCTS,
  CLEAR_SAVED_PRODUCTS
} from '../actions/types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';



export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.savedDataReducer || [];
    case CLEAR_SAVED_PRODUCTS:
      return []
    case SAVED_PRODUCTS:
      return _.uniqBy([
        action.payload, ...state
      ], 'product_id');
    default:
      return state;
  }
}
