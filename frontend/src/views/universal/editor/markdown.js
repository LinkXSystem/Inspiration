import React, { Component } from 'react';
import { Markdown } from '../higher';

class Instaner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: '',
      read: true,
    };
    this.update = this.update.bind(this);
    this.reader = this.reader.bind(this);
  }

  update(dom) {
    this.setState({
      context: dom.target.value,
    });
  }

  reader() {
    this.setState({
      read: !this.state.read,
    });
  }

  render() {
    return (
      <div className="markdown-editor">
        <div className="editor">
          <ul>
            <li>
              <i className="inspiration-bold" aria-hidden="true" />
            </li>
            <li>
              <i className="inspiration-italic" aria-hidden="true" />
            </li>
            <li>
              <i className="inspiration-link" aria-hidden="true" />
            </li>
            <li>
              <i className="inspiration-code" aria-hidden="true" />
            </li>
            <li>
              <i className="inspiration-bookmark" aria-hidden="true" />
            </li>
          </ul>
          <ul>
            <li>
              <i
                className="inspiration-columns"
                aria-hidden="true"
                onClick={() => {
                  this.reader();
                }}
              />
            </li>
          </ul>
        </div>
        <textarea
          name="mark"
          id="mark"
          cols="30"
          rows="30"
          onChange={this.update}
          style={{
            width: this.state.read ? '50%' : '100%',
          }}
        />
        <Markdown data={this.state.context} />
        <hr />
      </div>
    );
  }
}

export default Instaner;
