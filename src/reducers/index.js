import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import productReducer from './productReducer';
import fetchedReducer from './fetchedReducer';
import syncReducer from './syncReducer';
import LogOutReducer from './LogOutReducer';
import savedDataReducer from './savedDataReducer';
export default combineReducers({
  auth: AuthReducer,
  productReducer,
  fetchedReducer,
    syncReducer,
    LogOutReducer,
    savedDataReducer
});
