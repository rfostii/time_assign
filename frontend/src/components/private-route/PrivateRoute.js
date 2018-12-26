import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
                />
            )
        }
    />
);