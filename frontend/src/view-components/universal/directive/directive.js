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
        <div className="directive-header">
          <h5>Controler</h5>
        </div>
        <div className="directive-enters" />
      </div>
    );
  }
}

export default Directive;
