import { observable, useStrict, action } from 'mobx';
import { axios } from '../mock';

useStrict(true);

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = {};

  @action
  setUser = user => {
    this.user = user;
  };

  async signup(data) {
    const client = await axios.build(this.root.auth);
    const res = await client.post('/user/signup', data);
    this.setUser(res.data);
  }

  async signin(data) {
    const client = await axios.build(this.root.auth);
    const res = await client.post('/user/signin', data);
    this.setUser(res.data);
  }
}

export default UserStore;
