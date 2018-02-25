import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// mobx
import { observer } from 'mobx-react';
import store from '../stores';

import Directive from '../views/universal/directive/directive';

import { ArticleList, CodeList } from '../views/universal/group';
import { ProjectReader } from '../views/universal/reader';

@observer
class Coder extends Component {
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
              <Col md={12}>
                <Directive />
              </Col>
              <Col md={5}>
                <CodeList />
              </Col>
              <Col md={7}>
                <ProjectReader data={store.code.repository} />
              </Col>
              <Col md={12}>
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
