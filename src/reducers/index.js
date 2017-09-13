import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import productReducer from './productReducer';
import barcodeReducer from './barcodeReducer';
import detailbarcodeReducer from './detailbarcodeReducer';
import missingProductReducer from './missingProductReducer';
import fetchedReducer from './fetchedReducer';

export default combineReducers({
  auth: AuthReducer,
  productReducer,
  barcodeReducer,
  detailbarcodeReducer,
  missingProductReducer,
  fetchedReducer
});
