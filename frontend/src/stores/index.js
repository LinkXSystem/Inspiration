import { observable, action } from 'mobx';

// Store
import HomeStore from './home-store';

class RootStore {
  constructor() {
    this.home = new HomeStore(this);
  }

  @observable auth = undefined;

  @observable
  alert = {
    statu: false,
    message: '系统正常',
  };

  @action
  setAuth = auth => {
    this.auth = auth;
  };

  @action
  setAlert = alert => {
    this.alert = alert;
  };
}

const store = new RootStore();

export default store;
