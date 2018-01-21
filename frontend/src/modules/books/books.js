import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import gql from 'graphql-tag';
import { apollo } from '../../mock-data';

import Evaluate from '../../view-components/universal/display/evaluate-display/evaluate';
import Article from '../../view-components/universal/display/article-display/article';

import { Error } from '../../view-components/universal/elements';
import { BookList } from '../../view-components/universal/list';
import { BookCarousel } from '../../view-components/universal/carousels';

class Books extends Component {
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
    const client = apollo.build('http://localhost:4200/home');

    const res = await client.query({
      query: gql`
        {
          books {
            source
            name
            author
            img
            description
            icons
          }
        }
      `,
    });
    this.setState({
      data: res.data,
    });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={9}>
            <Row>
              <Col sm={12}>
                <BookCarousel time={10000}>
                  <div>Test</div>
                  <div>Test</div>
                  <div>Test</div>
                  <div>Test</div>
                  <div>Test</div>
                </BookCarousel>
              </Col>
              <Col sm={12}>
                <blockquote>热门推荐</blockquote>
              </Col>
              <Col sm={12}>
                {this.state.data.books ? (
                  <BookList data={this.state.data.books} />
                ) : (
                  <Error />
                )}
              </Col>
              <Col sm={12}>
                <blockquote>书评</blockquote>
              </Col>
              <Col sm={12}>
                <Evaluate />
                <Evaluate />
                <Evaluate />
              </Col>
              <Col sm={12}>
                <blockquote>深度阅读</blockquote>
              </Col>
              <Col sm={12}>
                <Article />
              </Col>
            </Row>
          </Col>
          <Col md={3} />
        </Row>
      </Grid>
    );
  }
}

export default Books;
