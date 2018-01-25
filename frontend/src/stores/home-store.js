import { observable, action, useStrict } from 'mobx';

useStrict(true);

class HomeStore {
  @observable repositories = [];

  @action
  setRepositories = repositories => {
    this.repositories = [...repositories];
  };
}

const store = new HomeStore();

export default store;
