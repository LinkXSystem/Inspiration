import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { BookCarousel } from '../../view-components/universal/carousels';
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
          <Col md={9}>
            <Row>
              <Col sm={12}>
                <BookCarousel>
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
