import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'index.css';
import registerServiceWorker from 'registerServiceWorker';
import store from 'store';
import HomePage from './views/home/Home';
import LoginPage from './views/login/Login';
import SignUpPage from './views/user-registration/UserRegistration';
import SearchResultsPage from './views/search-result/SearchResult';
import CompanyDetailsPage from './views/company-details/CompanyDetails';


render(
    <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage} />
                    <Route exact path="/search/:company_id" component={SearchResultsPage} />
                    <Route exact path="/company/:slug" component={CompanyDetailsPage} />
                </div>
            </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
