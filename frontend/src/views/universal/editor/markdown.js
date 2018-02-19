import React, { Component } from 'react';
import marked from 'marked';
import './editor.scss';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

class Instaner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {
        __html: marked(''),
      },
      read: true,
    };
    this.update = this.update.bind(this);
    this.reader = this.reader.bind(this);
  }

  update(dom) {
    this.setState({
      context: {
        __html: marked(dom.target.value),
      },
    });
  }

  reader() {
    this.setState({
      read: !this.state.read,
    });
  }

  render() {
    return (
      <div className="markdown">
        <div className="editor">
          <ul className="r-ul">
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
          <ul className="r-ul">
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
        <div
          className={this.state.read ? 'content' : 'content hidden'}
          dangerouslySetInnerHTML={this.state.context}
        />
        <hr />
      </div>
    );
  }
}

export default Instaner;
