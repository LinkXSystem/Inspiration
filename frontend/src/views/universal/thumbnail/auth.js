import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: {},
      signup: {},
    };
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  signin() {
    const { modal, signin, submit } = this.props;
    return (
      <section className="auth-thumbnail">
        <header>
          <strong>登录</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={modal} />
        </header>
        <form>
          <input
            type="email"
            placeholder="邮箱"
            onChange={dom =>
              this.setState({
                signin: Object.assign(this.state.signin, {
                  email: dom.target.value,
                }),
              })
            }
          />
          <input
            type="password"
            placeholder="密码"
            onChange={dom =>
              this.setState({
                signin: Object.assign(this.state.signin, {
                  password: dom.target.value,
                }),
              })
            }
          />
          <button
            onClick={() => {
              submit({ type: 'signin', data: this.state.signin });
            }}
          >
            登陆
          </button>
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
        <ul>
          <li>
            <i className="inspiration-weibo" aria-hidden="true" />
          </li>
          <li>
            <i className="inspiration-wechat" aria-hidden="true" />
          </li>
          <li>
            <i className="inspiration-github" aria-hidden="true" />
          </li>
        </ul>
      </section>
    );
  }

  signup() {
    const { modal, signup, submit } = this.props;
    return (
      <section className="auth-thumbnail">
        <header>
          <strong>注册</strong>
          <i className="fa fa-times" aria-hidden="true" onClick={modal} />
        </header>
        <form>
          <input
            type="text"
            placeholder="昵称"
            onChange={dom =>
              this.setState({
                signup: Object.assign(this.state.signup, {
                  username: dom.target.value,
                }),
              })
            }
          />
          <input
            type="email"
            placeholder="邮箱"
            onChange={dom =>
              this.setState({
                signup: Object.assign(this.state.signup, {
                  email: dom.target.value,
                }),
              })
            }
          />
          <input
            type="password"
            placeholder="密码"
            onChange={dom =>
              this.setState({
                signup: Object.assign(this.state.signup, {
                  password: dom.target.value,
                }),
              })
            }
          />
          <button
            onClick={() => {
              submit({ type: 'signin', data: this.state.signin });
            }}
          >
            注册
          </button>
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
        <ul>
          <li>
            <i className="inspiration-weibo" aria-hidden="true" />
          </li>
          <li>
            <i className="inspiration-wechat" aria-hidden="true" />
          </li>
          <li>
            <i className="inspiration-github" aria-hidden="true" />
          </li>
        </ul>
      </section>
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
  signin: Proptypes.func.isRequired,
  signup: Proptypes.func.isRequired,
  submit: Proptypes.func.isRequired,
};

export default Instance;
