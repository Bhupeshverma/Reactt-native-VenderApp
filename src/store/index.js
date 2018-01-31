import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools';
// import  reactNativeDebuggerOpen from "react-native-debugger-open"

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
      applyMiddleware(thunk),
       autoRehydrate()
)
)
 persistStore(store, {storage: AsyncStorage, whitelist: ['savedDataReducer','productReducer','auth']})
export default store;
