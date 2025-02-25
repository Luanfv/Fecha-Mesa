import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../pages/SignUp/index';
import SignIn from '../pages/SignIn/index';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={(SignIn)} />
            <Route path='/signup' component={() => <SignUp />} />
            <PrivateRoute path='/app' component={() => <h1>App (logged in)</h1>} />
            <Route path="*" component={() => <h1>Page Not Found!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;