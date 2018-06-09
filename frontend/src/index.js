import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Home from './scenes/Home';
import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import SearchResults from './scenes/SearchResults';
import CompanyPage from './scenes/Company';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/search" component={SearchResults} />
      <Route exact path="/company" component={CompanyPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
