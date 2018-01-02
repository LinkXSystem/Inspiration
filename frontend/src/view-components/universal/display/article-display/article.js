import React, { Component } from 'react';

import './display.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article">
        <h3>忆起风筝</h3>
        <div className="head">
          <img src={require('../../../public/imgs/user.png')} alt="用户" />
          <span>惊鸿2017</span>
          <span>
            <i className="fa fa-plus-square" aria-hidden="true" />关注
          </span>
          <ul>
            <li>
              <i className="fa fa-calendar" aria-hidden="true" />2018.01.01
              16:58
            </li>
            <li>
              <i className="fa fa-comments" aria-hidden="true" /> 123
            </li>
          </ul>
        </div>
        <a href="#">linksystem</a>
      </div>
    );
  }
}

export default Article;
