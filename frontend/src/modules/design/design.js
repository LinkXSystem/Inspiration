import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Color from '../../view-components/universal/display/color-display/color';
import Photo from '../../view-components/universal/display/photo-display/photo';
import {
  PhotoWall,
  WaterfallWall,
} from '../../view-components/universal/walls';

import './system.css';

class Design extends Component {
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
                <PhotoWall />
              </Col>
              {/* <Col sm={12}>
                <Image />
              </Col> */}
              <Col sm={12} className="image-group">
                <Color />
                <Photo />
              </Col>
              <Col sm={12}>
                <WaterfallWall />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Design;
