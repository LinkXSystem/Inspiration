import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// mobx
import { observer } from 'mobx-react';
import store from './stores';
// component
import { Header, Router as Center, Footer } from './layout';
import { Alert } from './views/universal/element';
import { Affix } from './views/universal/higher';
// data
import { axios } from './mock';
import { fingerprint } from './utils';

import './views/styles/index.scss';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  async init() {
    const canvas = await fingerprint();
    try {
      const auth = await axios.grant(
        'http://localhost:2017/auth',
        {
          access: 'linksystem-inspiration',
          canvas: canvas,
        },
        'x-auth-token',
      );
      store.setAuth(auth);
    } catch (e) {
      store.setAlert({
        statu: true,
        message: '网络请求无效',
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header
            routers={[
              { name: '书籍', router: '/book' },
              { name: '编程', router: '/code' },
              { name: '设计', router: '/design' },
              { name: '音乐', router: '/music' },
              { name: '视频', router: '/video' },
            ]}
          />
          <Center />
          <Footer />
          <Alert data={store.alert} />
          <Affix />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
