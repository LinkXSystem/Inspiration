import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// 系统
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// 组件
import Header from './layout/header/header';
import Center from './layout/router/router';
import Footer from './layout/footer/footer';
// 数据
import { axios } from './mock';
import store from './stores';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  componentWillMount() {
    this.init();
  }

  async init() {
    const token = await axios.grant();
    sessionStorage.setItem('x-auth-token', token);
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
        <DevTools />
      </Router>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));
