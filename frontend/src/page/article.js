import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { observer } from 'mobx-react';
import store from '../stores';

import { ArticleReader } from '../views/universal/reader';
import { FunctionList, CommentList } from '../views/universal/group';
import { UserThumbnail } from '../views/universal/thumbnail';
import { CommentEditor } from '../views/universal/editor';

@observer
class Article extends Component {
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
              <Col className="group" sm={12}>
                <FunctionList />
                <div style={{ flex: 1 }}>
                  <ArticleReader data={store.code.repository} />
                  <CommentEditor />
                  <CommentList />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col sm={12}>
                <UserThumbnail name="user-article" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Article;
