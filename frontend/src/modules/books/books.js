import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { BookCarousel } from '../../view-components/universal/carousels';
import { BookThumbnail } from '../../view-components/universal/thumbnails';
import Evaluate from '../../view-components/universal/display/evaluate-display/evaluate';
import Article from '../../view-components/universal/display/article-display/article';

class Books extends Component {
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
                <BookCarousel />
              </Col>
              <Col sm={12}>
                <blockquote>热门推荐</blockquote>
              </Col>
              <Col sm={8}>
                <BookThumbnail
                  data={{
                    img:
                      'https://img3.doubanio.com/view/ark_article_cover/retina/public/43242676.jpg?v=1512120177.0',
                    name: '妖猫传',
                    author: '梦枕貘',
                    icons: ['推理悬疑', '幻想'],
                    source: '豆瓣读书',
                    description:
                      '自日本东渡大唐的高僧空海与寻求《长恨歌》创作灵感的白居易，一同揭开妖魅事件和杨贵妃死亡的谜团。一切妖怪的怨念，都来自咒术，来自人的内心。',
                  }}
                />
              </Col>
              <Col sm={4}>
                <BookThumbnail
                  data={{
                    img:
                      'https://img3.doubanio.com/view/ark_article_cover/retina/public/43242676.jpg?v=1512120177.0',
                    name: '妖猫传',
                    author: '梦枕貘',
                    icons: ['推理悬疑', '幻想'],
                    source: '豆瓣读书',
                    description:
                      '自日本东渡大唐的高僧空海与寻求《长恨歌》创作灵感的白居易，一同揭开妖魅事件和杨贵妃死亡的谜团。一切妖怪的怨念，都来自咒术，来自人的内心。',
                  }}
                />
              </Col>
              <Col sm={12}>
                <blockquote>书评</blockquote>
              </Col>
              <Col sm={12}>
                <Evaluate />
                <Evaluate />
                <Evaluate />
              </Col>
              <Col sm={12}>
                <blockquote>深度阅读</blockquote>
              </Col>
              <Col sm={12}>
                <Article />
              </Col>
            </Row>
          </Col>
          <Col md={4} />
        </Row>
      </Grid>
    );
  }
}

export default Books;
