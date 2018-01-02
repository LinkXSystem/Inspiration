import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../../modules/home/home';
import Books from '../../../modules/books/books';

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
      </div>
    );
  }
}

export default Router;
