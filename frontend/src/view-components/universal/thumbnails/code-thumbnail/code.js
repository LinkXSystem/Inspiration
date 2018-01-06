import React, { Component } from 'react';
import './thumbnail.css';
import { Project } from '../../elements';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        img: 'https://avatars1.githubusercontent.com/u/170270?v=4',
        name: 'sindresorhus/on-change',
        desc: 'Watch an object or array for changes',
        star: '1,119',
        globe: 'JavaScript',
        clock: '25天前',
      },
      {
        img: 'https://avatars1.githubusercontent.com/u/170270?v=4',
        name: 'sindresorhus/on-change',
        desc: 'Watch an object or array for changes',
        star: '1,119',
        globe: 'JavaScript',
        clock: '25天前',
      },
    ];
    return (
      <div className="code">
        {data.map(item => <Project key={item.name} data={item} />)}
      </div>
    );
  }
}

export default Code;
