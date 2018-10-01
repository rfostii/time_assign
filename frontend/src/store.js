import { createLogger } from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { init } from "@rematch/core";
import { models, reducers } from 'features';


const enhancers = [];
const middleware = [
  createLogger(),
  routerMiddleware(browserHistory),
  thunk,
];

console.log(models);

const store = init({  
  models,
  redux: {
    reducers,
    middlewares: [...middleware]
  },
});

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension()(store))
  }
}

syncHistoryWithStore(browserHistory, store);

export default store;