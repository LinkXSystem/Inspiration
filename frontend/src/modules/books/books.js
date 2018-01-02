import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Carousel from '../../view-components/universal/carousels/carousel';
import Book from '../../view-components/universal/thumbnails/book-thumbnail/book';
import Evaluate from '../../view-components/universal/display/evaluate-display/evaluate';
import Article from '../../view-components/universal/display/article-display/article';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={8}>
            <Row>
              <Col sm={12}>
                <Carousel />
              </Col>
              <Col sm={12}>
                <blockquote>热门推荐</blockquote>
              </Col>
              <Col sm={8}>
                <Book />
              </Col>
              <Col sm={4}>
                <Book />
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
          <Col md={4} />
        </Row>
      </Grid>
    );
  }
}

export default Books;
