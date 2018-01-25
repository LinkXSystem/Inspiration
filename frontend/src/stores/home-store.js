import { observable, autorun, action, useStrict } from 'mobx';
import { apollo, graphql } from '../mock';

useStrict(true);

class HomeStore {
  constructor(root) {
    this.root = root;
    autorun(() => {
      const { auth } = this.root;
      if (auth) {
        this.mock(auth);
      }
    });
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
