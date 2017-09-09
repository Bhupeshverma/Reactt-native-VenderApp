import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
// import  reactNativeDebuggerOpen from "react-native-debugger-open"

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
      applyMiddleware( ReduxPromise, thunk)
)
)

export default store;
