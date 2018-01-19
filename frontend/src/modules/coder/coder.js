import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Directive from '../../view-components/universal/directive/directive';

import { ArticleWall } from '../../view-components/universal/walls';

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
              {/* <Col sm={6}>
                <CodeThumbnail />
              </Col> */}
              {/* <Col sm={8}>
                <Article />
              </Col> */}
              <Col sm={12}>
                <blockquote>实践文章</blockquote>
              </Col>
              <Col sm={12}>
                <ArticleWall
                  data={[
                    {
                      title: 'Coursera 的 GraphQL 之旅',
                      url: '/test',
                      type: '前端',
                      author: 'linksystem',
                      date: '2018.1.5',
                    },
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Coder;
