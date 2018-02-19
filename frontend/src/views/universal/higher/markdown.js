import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

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

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: marked(data),
        }}
      />
    );
  }
}

Instance.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Instance;
