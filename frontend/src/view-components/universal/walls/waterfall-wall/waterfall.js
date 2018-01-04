import React, { Component } from 'react';

import './wall.css';

class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  build() {
    // const width = document.getElementsByClassName('waterfall-wall')[0]
    //   .clientWidth;
    const row = Math.floor(867 / 182);
    const data = [
      {
        img:
          'https://hbimg.b0.upaiyun.com/ddeb7d93eedfbc07075b0236748c3f67d82c2c7f3248c-VG9XG8',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/983575a2d74fadfe8d879e2edf0f650e3e9b90c0ad8b7-6LPE3Z',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/ddeb7d93eedfbc07075b0236748c3f67d82c2c7f3248c-VG9XG8',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/5329be84c4ef13dedfae1c668879dff36c789d04a8e8f-OEDdHF',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/ddeb7d93eedfbc07075b0236748c3f67d82c2c7f3248c-VG9XG8',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/0a2e402cce27dfa50e6d079ebc207e6625084ba2b193d-2Iwr0T',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/ddeb7d93eedfbc07075b0236748c3f67d82c2c7f3248c-VG9XG8',
        info: 'あけましておめでとうございます',
      },
      {
        img:
          'https://hbimg.b0.upaiyun.com/0a2e402cce27dfa50e6d079ebc207e6625084ba2b193d-2Iwr0T',
        info: 'あけましておめでとうございます',
      },
    ];

    const html = [];

    for (let i = 0; i < row; i += 1) {
      html[i] = (
        <div className="drip-row">
          <div className="drip" key={i}>
            <img src={data[i].img} alt="" />
            <div className="info">
              <span>
                <i className="fa fa-file-text" aria-hidden="true" />{' '}
                {data[i].info}
              </span>
            </div>
          </div>
          <div className="drip" key={i + row}>
            <img src={data[i + row].img} alt="" />
            <div className="info">
              <span>
                <i className="fa fa-file-text" aria-hidden="true" />{' '}
                {data[i + row].info}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return html;
  }

  render() {
    return <div className="waterfall-wall">{this.build()}</div>;
  }
}

export default Waterfall;
