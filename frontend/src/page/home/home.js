import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { apollo, graphql } from '../../mock';

import { Music } from '../../views/universal/player';
import Directive from '../../views/universal/directive/directive';

import { ActionCarousel } from '../../views/universal/carousel';
import { Error } from '../../views/universal/element';
import { DesignThumbnail } from '../../views/universal/thumbnail';

import { ArticleList, BookList, CodeList } from '../../views/universal/list';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.init = this.init.bind(this);
  }

  componentWillMount() {
    this.init();
  }

  async init() {
    const token = sessionStorage.getItem('x-auth-token');

    const client = apollo.build('http://localhost:8080/home', {
      'x-auth-token': token,
    });

    const res = await client.query({
      query: graphql.home.querys,
    });
    this.setState({
      data: res.data,
    });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={9}>
            <Row>
              <Col sm={12}>
                <ActionCarousel time={10000}>
                  <div>test</div>
                  <div>test</div>
                </ActionCarousel>
              </Col>
              <Col sm={12}>
                {this.state.data.books ? (
                  <BookList data={this.state.data.books} />
                ) : (
                  <Error />
                )}
              </Col>
              <Col sm={12}>
                <DesignThumbnail />
              </Col>
              <Col sm={5}>
                <CodeList />
              </Col>
              <Col sm={7}>
                <ArticleList />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col sm={12}>
                <Music />
                <Directive />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
