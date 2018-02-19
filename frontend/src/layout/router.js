import { Route, Redirect } from 'react-router-dom';
import React from 'react';

import { observer } from 'mobx-react';
import store from '../stores';

import { Home, Book, Code, Design, User, Writer } from '../page';

const PrivateRoute = observer(({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )
    }
  />
));

const Router = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/book" component={Book} />
    <Route path="/code" component={Code} />
    <Route path="/user" component={User} />
    <Route path="/design" component={Design} />
    <PrivateRoute path="/writer" component={Writer} />
  </div>
);

export default Router;
