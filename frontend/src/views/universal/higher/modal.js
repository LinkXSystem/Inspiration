import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.display,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { display } = nextProps;
    this.setState({
      display: display,
    });
  }

  render() {
    const { children, click } = this.props;
    const { display } = this.state;
    return (
      <div
        ref={item => {
          this.modal = item;
        }}
        style={{
          position: 'fixed',
          zIndex: '1000',
          width: '100%',
          height: '100%',
          left: '0',
          top: '0',
          display: display,
          backgroundColor: 'rgba(255, 255, 255, 0)',
        }}
      >
        <div
          onClick={click}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Instance.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Instance;
