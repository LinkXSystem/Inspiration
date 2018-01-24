import React, { Component } from 'react';
import { Modal } from '../../higher';

import './thumbnail.css';

class element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      state: '',
    };
    this.modal = this.modal.bind(this);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  modal(state) {
    const { display } = this.state;

    this.setState({
      display: display !== 'block' ? 'block' : 'none',
      state: state,
    });
  }

  signin() {
    return (
      <div className="th-auth">
        <div>
          <strong>登录</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={this.modal} />
        </div>
        <form>
          <input type="email" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <button>登陆</button>
        </form>
        <div>
          <span>
            没有账户？
            <button
              className="t-button"
              onClick={() =>
                this.setState({
                  state: 'signup',
                })
              }
            >
              注册
            </button>
          </span>
          <a href="/password">忘记密码</a>
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
    return (
      <div className="th-auth">
        <div>
          <strong>注册</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={this.modal} />
        </div>
        <form>
          <input type="email" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <input type="password" placeholder="校验" />
          <button>注册</button>
        </form>
        <div
          style={{
            justifyContent: 'center',
          }}
        >
          <button
            className="t-button"
            onClick={() =>
              this.setState({
                state: 'signin',
              })
            }
          >
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
    const { display, state } = this.state;
    return (
      <div>
        <ul className="r-ul">
          <li onClick={() => this.modal('signin')}>登录</li>
          <li
            onClick={() => this.modal('signup')}
            style={{
              borderLeft: '1px solid #b2b2b2',
              paddingLeft: '0.5em',
            }}
          >
            注册
          </li>
        </ul>
        <Modal display={display} click={this.modal}>
          {state !== 'signin' ? this.signup() : this.signin()}
        </Modal>
      </div>
    );
  }
}

export default element;
