import React, { Component } from 'react';
import PropTyps from 'prop-types';
import Element from '../../elements';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const html = this.props.data.map(item => (
      <Element.Article key={item.info} data={item} />
    ));
    return <div>{html}</div>;
  }
}

Article.propTypes = {
  data: PropTyps.array.isRequired,
};

export default Article;
