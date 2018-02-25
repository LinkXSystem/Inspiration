import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="article-reader">
        <header>
          <h3>Coursera 的 GraphQL 之旅 1</h3>
          <ul>
            <li
              className="t-icons"
              style={{
                backgroundColor: 'blue',
              }}
            >
              javascript
            </li>
            <li>2018.02.20</li>
          </ul>
        </header>
      </section>
    );
  }
}

export default Article;
