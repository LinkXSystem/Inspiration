import React, { Component } from 'react';
import { Item } from '../element';
import footer from '../../../layout/footer';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: [
        {
          title: 'Coursera 的 GraphQL 之旅 1',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 2',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 3',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 4',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 5',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 6',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
        {
          title: 'Coursera 的 GraphQL 之旅 7',
          url: '/test',
          type: '前端',
          author: 'linksystem',
          date: '2018.1.5',
        },
      ],
    });
  }

  render() {
    const { data } = this.state;
    return (
      <section className="article-list">
        <header>
          <ul className="r-ul">
            <li>热门</li>
            <li>最新</li>
          </ul>
          <ul className="r-ul">
            <li>本周最热</li>
            <li>本月最热</li>
            <li>历史最热</li>
          </ul>
        </header>
        <div>{data.map(item => <Item key={item.title} data={item} />)}</div>
        <footer>
          <i className="fa fa-globe" aria-hidden="true" /> ヽ(✿ﾟ▽ﾟ)ノ
        </footer>
      </section>
    );
  }
}

export default Instance;
