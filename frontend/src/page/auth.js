import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../stores';
import { Modal } from '../views/universal/higher';
import { AuthThumbnail } from '../views/universal/thumbnail';

@observer
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      state: '',
    };
    this.modal = this.modal.bind(this);
  }

  modal(state) {
    const { display } = this.state;

    this.setState({
      display: display !== 'block' ? 'block' : 'none',
      state: state,
    });
  }

  verify(dom) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    const { value } = dom.target;
    if (!value.match(regex)) {
      store.setAlert({
        statu: true,
        message: '邮箱格式错误',
      });
    } else {
      store.setAlert({
        statu: false,
        message: '邮箱格式正确',
      });
    }
  }

  submit(data) {
    console.log(data);
  }

  render() {
    const { display, state } = this.state;
    return (
      <div>
        <ul className="ul">
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
        <Modal
          display={display}
          click={() =>
            this.setState({
              display: 'none',
            })
          }
        >
          <AuthThumbnail
            verify={this.verify}
            state={state}
            modal={() =>
              this.setState({
                display: 'none',
              })
            }
            signin={() =>
              this.setState({
                state: 'signup',
              })
            }
            signup={() =>
              this.setState({
                state: 'signin',
              })
            }
            submit={this.submit}
          />
        </Modal>
      </div>
    );
  }
}

export default Auth;
