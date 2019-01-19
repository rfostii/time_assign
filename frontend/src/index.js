import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import history from './createHistory';
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from 'registerServiceWorker';
import store from 'store';
import Routes from './routes';

render(
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
