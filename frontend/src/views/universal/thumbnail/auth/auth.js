import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './thumbnail.css';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  signin() {
    const { modal, verify, signin } = this.props;
    return (
      <div className="th-auth">
        <div>
          <strong>登录</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={modal} />
        </div>
        <form>
          <input type="email" placeholder="邮箱" onChange={verify} />
          <input type="password" placeholder="密码" />
          <button>登陆</button>
        </form>
        <div>
          <span>
            没有账户？
            <button className="t-button" onClick={signin}>
              注册
            </button>
          </span>
          <object>
            <a href="/password">忘记密码</a>
          </object>
        </div>
        <p>第三方账号登陆 :</p>
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
      </div>
    );
  }

  signup() {
    const { modal, verify, signup } = this.props;
    return (
      <div className="th-auth">
        <div>
          <strong>注册</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={modal} />
        </div>
        <form>
          <input type="email" placeholder="邮箱" onChange={verify} />
          <input type="password" placeholder="密码" />
          <input type="password" placeholder="校验" />
          <button>注册</button>
        </form>
        <div
          style={{
            justifyContent: 'center',
          }}
        >
          <button className="t-button" onClick={signup}>
            已有账号登录
          </button>
        </div>
        <p>第三方账号登陆 :</p>
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
      </div>
    );
  }

  render() {
    const { state } = this.props;
    return state !== 'signin' ? this.signup() : this.signin();
  }
}

Instance.propTypes = {
  state: Proptypes.string.isRequired,
  modal: Proptypes.func.isRequired,
  verify: Proptypes.func.isRequired,
  signin: Proptypes.func.isRequired,
  signup: Proptypes.func.isRequired,
};

export default Instance;
