import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Book, Code, Design, User } from '../../page';

const Router = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/book" component={Book} />
    <Route path="/code" component={Code} />
    <Route path="/user" component={User} />
    <Route path="/design" component={Design} />
  </div>
);

export default Router;
