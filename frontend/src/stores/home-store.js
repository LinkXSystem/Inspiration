import { observable, when, action, useStrict } from 'mobx';
import _ from 'lodash';
import { apollo, graphql } from '../mock';

useStrict(true);

class HomeStore {
  constructor(root) {
    this.root = root;
    when(
      () => {
        const { auth } = this.root;
        return !_.isEmpty(auth);
      },
      () => {
        const { auth } = this.root;
        this.mock(auth);
      },
    );
  }

  @observable books = [];

  @action
  setBooks = books => {
    this.books = [...books];
  };

  mock(auth) {
    const client = apollo.build('http://localhost:8080/home', {
      'x-auth-token': auth,
    });

    client
      .query({
        query: graphql.home.querys,
      })
      .then(res => {
        this.setBooks(res.data.books);
      });
  }
}

export default HomeStore;
