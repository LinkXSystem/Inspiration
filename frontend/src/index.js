import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// 系统
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// 组件
import Header from './view-components/layout/header/header';
import RouterInstancer from './view-components/layout/router/router';

const App = () => (
  <Router>
    <div>
      <Header routers={['书籍', '设计', '编程', '音乐', '视频']} />
      <RouterInstancer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));
