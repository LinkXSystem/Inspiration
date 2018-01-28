import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { UserThumbnail } from '../views/universal/thumbnail';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={9}>
            <Row>
              <Col sm={12}>
                <UserThumbnail />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default User;
