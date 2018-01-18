import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import gql from 'graphql-tag';
import { apollo } from '../../mock-data';

import { Music } from '../../view-components/universal/player';
import Directive from '../../view-components/universal/directive/directive';

import { ActionCarousel } from '../../view-components/universal/carousels';

import { BookList, Image } from './auxiliary';

import { ArticleList, CodeList } from '../../view-components/universal/list';

import { Drag } from '../../view-components/universal/higher';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.build = this.build.bind(this);
  }

  componentWillMount() {
    this.build();
  }

  async build() {
    const client = apollo.build('http://localhost:4200/home');

    const res = await client.query({
      query: gql`
        {
          books {
            source
            name
            author
            img
            description
            icons
          }
        }
      `,
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
                <ActionCarousel />
              </Col>
              <BookList data={this.state.data.books} />
              <Image />
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
                <Directive />
                <Drag random={false}>
                  <Music />
                </Drag>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
