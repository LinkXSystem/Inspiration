import { observable, useStrict } from 'mobx';

useStrict(true);

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = {};
}

export default UserStore;
