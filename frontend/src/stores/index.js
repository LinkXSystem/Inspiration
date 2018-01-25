import { observable, action } from 'mobx';

// Store
import HomeStore from './home-store';

class RootStore {
  constructor() {
    this.home = new HomeStore(this);
  }

  @observable auth = undefined;

  @action
  setAuth = auth => {
    this.auth = auth;
  };
}

const store = new RootStore();

export default store;
