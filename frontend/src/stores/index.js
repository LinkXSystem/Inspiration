import { observable, action } from 'mobx';

// Store
import HomeStore from './home-store';
import CodeStore from './code-store';

class RootStore {
  constructor() {
    this.home = new HomeStore(this);
    this.code = new CodeStore(this);
  }

  @observable auth = undefined;

  @observable user = undefined;

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

  @action
  setUser = user => {
    this.user = user;
  };
}

const store = new RootStore();

export default store;
