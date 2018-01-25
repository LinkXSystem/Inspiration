import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// PropTypes
import PropTypes from 'prop-types';
// mobx
import { observer } from 'mobx-react';
import store from './stores';
// component
import Header from './layout/header/header';
import Center from './layout/router/router';
import Footer from './layout/footer/footer';
// data
import { axios } from './mock';
import { fingerprint } from './utils';

@observer
class App extends Component {
  getChildContext() {
    return {
      store: store,
    };
  }

  async componentWillMount() {
    const canvas = await fingerprint();
    const auth = await axios.grant(
      'http://localhost:8080/auth',
      {
        access: 'linksystem-inspiration',
        canvas: canvas,
      },
      'x-auth-token',
    );
    store.setAuth(auth);
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
        </div>
      </Router>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object,
};

ReactDOM.render(<App />, document.getElementById('root'));
