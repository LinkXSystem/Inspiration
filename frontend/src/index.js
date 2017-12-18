import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// 系统
import ReactDOM from 'react-dom';
import React from 'react';
// 组件
import Header from './view-components/layout/header/header';
import Footer from './view-components/layout/footer/footer';
import Router from './view-components/layout/router/router';

const App = () => (
  <div>
    <Header routers={['书籍', '设计', '编程', '音乐', '视频']} />
    <Router />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
