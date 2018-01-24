import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Book, Code, Design, User } from '../../page';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/book" component={Book} />
        <Route path="/code" component={Code} />
        <Route path="/user" component={User} />
        <Route path="/design" component={Design} />
      </div>
    );
  }
}

export default Router;
