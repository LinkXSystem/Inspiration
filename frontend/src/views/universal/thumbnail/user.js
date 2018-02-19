import React, { Component } from 'react';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-thumbnail">
        <div
          style={{
            backgroundImage:
              'url(http://img.hb.aicdn.com/b54eaea559df3c79543038a0eb506495c1635d0b1fade0-E4viRX)',
          }}
        />
        <fieldset>
          <legend>
            <img
              src="https://pic4.zhimg.com/2178611728bab8ec024569e1ba2f81e9_im.jpg"
              alt=""
            />
          </legend>
          <ul className="r-ul">
            <li>
              <i className="fa fa-github" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-weixin" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-globe" aria-hidden="true" />
            </li>
          </ul>
          <div className="fieldset-info">
            <div>
              <ul>
                <li>
                  <h3>LinkSystem</h3>
                </li>
                <li className="t-line">
                  <i className="fa fa-code" aria-hidden="true" />{' '}
                  <i className="t-icons" style={{ backgroundColor: '#cde4e2' }}>
                    javascript
                  </i>
                  <i className="t-icons" style={{ backgroundColor: '#cde4e2' }}>
                    css
                  </i>
                  <i className="t-icons" style={{ backgroundColor: '#cde4e2' }}>
                    python
                  </i>
                </li>
              </ul>
              <p className="t-line">
                <i className="fa fa-briefcase" aria-hidden="true" />
              </p>
              <p className="t-line">
                <i className="fa fa-tags" aria-hidden="true" />{' '}
                欢迎有激情的你加入大数据、人工智能产品的开发（前端、Android、iOS
                P5～P7）
              </p>
            </div>
            <button>关注</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Instance;
