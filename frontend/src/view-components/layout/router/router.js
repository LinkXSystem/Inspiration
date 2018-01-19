import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../../modules/home/home';
import Books from '../../../modules/books/books';
import Design from '../../../modules/design/design';
import Coder from '../../../modules/coder/coder';
import User from '../../../modules/user/user';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/design" component={Design} />
        <Route path="/Coder" component={Coder} />
        <Route path="/User" component={User} />
      </div>
    );
  }
}

export default Router;
