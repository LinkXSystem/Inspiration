import React, { Component } from 'react';

import './display.css';

class Evaluate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="evaluate">
        <img src="https://img3.doubanio.com/mpic/s29617101.jpg" alt="" />
        <div className="content">
          <h4>
            {/* <a href="#">要么孤独，要么庸俗</a> */}
          </h4>
          <ul>
            <li>
              {/* <a href="#">江南小柒</a> */}
            </li>
            <li>
              {/* <a href="#">《孤独通行证》</a> */}
            </li>
          </ul>
          <p>
            《论语·雍也》里有一句话是这样说的：“一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。”这是孔子对学生颜回高尚品质的赞美。是啊，一箪饭，一瓢水，住在简陋的小屋里，别人都忍受不了这种穷困清苦，颜回
          </p>
        </div>
      </div>
    );
  }
}

export default Evaluate;
