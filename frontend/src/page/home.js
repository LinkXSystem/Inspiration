// react
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// lodash
import _ from 'lodash';
// mobx
import { observer } from 'mobx-react';
import store from '../stores';

import { Music } from '../views/universal/player';
import Directive from '../views/universal/directive/directive';

import { ActionCarousel } from '../views/universal/carousel';
import { BookAdvert } from '../views/universal/advert';
import { Error } from '../views/universal/element';
import { DesignThumbnail } from '../views/universal/thumbnail';

import { ArticleList, BookList, CodeList } from '../views/universal/group';

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={9}>
            <Row>
              <Col sm={12}>
                <ActionCarousel time={10000}>
                  <BookAdvert
                    data={{
                      img: 'https://img1.doubanio.com/lpic/s29679627.jpg',
                      url: 'https://book.douban.com/subject/27200268/',
                      name: '知日·世上只有一个京都',
                      author: '茶乌龙 主编',
                    }}
                  />
                  <BookAdvert
                    data={{
                      img: 'https://img1.doubanio.com/lpic/s29679627.jpg',
                      url: 'https://book.douban.com/subject/27200268/',
                      name: '知日·世上只有一个京都',
                      author: '茶乌龙 主编',
                    }}
                  />
                </ActionCarousel>
              </Col>
              <Col sm={12}>
                {_.isEmpty(store.home.books) ? (
                  <Error />
                ) : (
                  <BookList data={store.home.books} />
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
