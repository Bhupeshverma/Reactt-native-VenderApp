import {
  SAVED_SYNC_PRODUCTS,
  CLEAR_SYNC_PRODUCTS
} from '../actions/types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';



export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.savedDataReducer || [];
      case CLEAR_SYNC_PRODUCTS:
        return []
    case SAVED_SYNC_PRODUCTS:
      return _.uniqBy([
        action.payload, ...state
      ], 'product_id');
    default:
      return state;
  }
}
