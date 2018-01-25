import HomeStore from './home-store';

class RootStore {
  constructor() {
    this.home = HomeStore;
  }
}

const store = new RootStore();

export default store;
