import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import productReducer from './productReducer';
export default combineReducers({
  auth: AuthReducer,
  productReducer
});
