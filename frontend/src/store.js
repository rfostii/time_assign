import axios from 'axios';
import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './features';

const LOCAL_STORAGE_KEY = 'time_assign';

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch(e) {}
};

const getState = () => {
  try {
    const state = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch(e) {
    return undefined;
  }
};

const initialState = getState();
const enhancers = [];
const middleware = [
  createLogger(),
  routerMiddleware(browserHistory),
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  const { token } = store.getState();

  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }
  saveState(store.getState());
});

export default store;