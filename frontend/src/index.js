import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// 系统
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// 组件
import Header from './view-components/layout/header/header';
import RouterInstance from './view-components/layout/router/router';
import Footer from './view-components/layout/footer/footer';

const App = () => (
  <Router>
    <div>
      <Header
        routers={[
          { name: '书籍', router: '/books' },
          { name: '设计', router: '/design' },
          { name: '编程', router: '/coder' },
          { name: '音乐', router: '/music' },
          { name: '视频', router: '/video' },
        ]}
      />
      <RouterInstance />
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
