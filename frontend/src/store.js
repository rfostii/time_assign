import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from 'features';

const LOCAL_STORAGE_KEY = 'time_assign_token';

const saveToken = token => {
  localStorage.setItem(LOCAL_STORAGE_KEY, token);
};

const getToken = () => {
  try {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!token) {
      return;
    }
    return {
      auth: {
        token,
        authorized: true,
      }
    };
  } catch(e) {
    return;
  }
};

const initialState = getToken();
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
  const { auth = {} } = store.getState();
  saveToken(auth.token);
});

export default store;