import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './views/home/Home';
import LoginPage from './views/login/Login';
import SignUpPage from './views/user-registration/UserRegistration';
import SearchResultsPage from './views/search-results/SearchResults';
import CompanyDetails from './views/company-details/CompanyDetails';

export default () => (
    <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/search_results" component={SearchResultsPage} />
        <Route exact path="/company/:slug" component={CompanyDetails} />
    </Fragment>
);
