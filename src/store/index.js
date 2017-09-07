import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import localForage from 'localforage'
import {persistStore , autoRehydrate} from 'redux-persist';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
      applyMiddleware( ReduxPromise, thunk)
)
)
persistStore(store , {storage: localForage}).purge()

export default store;
