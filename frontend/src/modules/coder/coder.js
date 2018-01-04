import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Directive from '../../view-components/universal/directive/directive';

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
            <Directive />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Coder;
