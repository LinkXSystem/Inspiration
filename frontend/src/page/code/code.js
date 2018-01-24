import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Directive from '../../views/universal/directive/directive';

import { ArticleList, CodeList } from '../../views/universal/list';

class Coder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={12}>
                <Directive />
              </Col>
              <Col sm={12}>
                <blockquote>热门推荐</blockquote>
              </Col>
              <Col sm={5}>
                <CodeList />
              </Col>
              {/* <Col sm={8}>
                <Article />
              </Col> */}
              <Col sm={12}>
                <blockquote>实践文章</blockquote>
              </Col>
              <Col sm={12}>
                <ArticleList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Coder;
