import React, { Component } from 'react';
import './directive.css';

class Directive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="directive">
        <h5>
          <i className="inspiration-terminal" aria-hidden="true" /> Controler
        </h5>
        <div className="directive-enters" />
      </div>
    );
  }
}

export default Directive;
