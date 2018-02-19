import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { Metadata, Markdown } from '../views/universal/editor';

class Writer extends Component {
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
                <Metadata />
              </Col>
              <Col sm={12}>
                <Markdown />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Writer;
