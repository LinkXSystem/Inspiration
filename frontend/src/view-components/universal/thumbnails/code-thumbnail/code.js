import React, { Component } from 'react';
import { axios } from '../../../../mock-data';
import './thumbnail.css';
import { Project } from '../../elements';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.build = this.build.bind(this);
  }

  componentWillMount() {
    this.build();
  }

  async build() {
    const client = axios.build('https://api.github.com');
    const res = await client.get('/search/repositories', {
      params: {
        q: 'topic:javascript',
        sort: 'stars',
        order: 'desc',
      },
    });
    this.setState({
      data: res.data.items.slice(0, 2),
    });
  }

  render() {
    return (
      <div className="code">
        {this.state.data.map(item => <Project key={item.name} data={item} />)}
      </div>
    );
  }
}

export default Code;
