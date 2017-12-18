import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './system.css';

import Carousel from '../../view-components/universal/carousel/carousel';
import Book from '../../view-components/universal/thumbnails/book-thumbnail/book';
import Design from '../../view-components/universal/thumbnails/design-thumbnail/design';
import Code from '../../view-components/universal/thumbnails/code-thumbnail/code';
import Article from '../../view-components/universal/thumbnails/article-thumbnail/article';

import Audio from '../../view-components/universal/player/music-player/music';
import Directive from '../../view-components/universal/directive/directive';
import Footnote from '../../view-components/universal/footnote/footnote';

class Home extends Component {
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
                <Book />
              </Col>
              <Col sm={6}>
                <Book />
              </Col>
              <Col sm={6}>
                <Book />
              </Col>
              <Col sm={12}>
                <Design />
              </Col>
              <Col sm={6}>
                <Code />
              </Col>
              <Col sm={6}>
                <Article />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col sm={12}>
                <Audio />
                <Directive />
                <Footnote />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
