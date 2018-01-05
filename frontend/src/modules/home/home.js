import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './system.css';

import Audio from '../../view-components/universal/player/music-player/music';
import Directive from '../../view-components/universal/directive/directive';
import Footnote from '../../view-components/universal/footnote/footnote';

import Carousel from '../../view-components/universal/carousels/carousel';

import {
  Article,
  Book,
  Code,
  Design,
} from '../../view-components/universal/thumbnails/';

class Home extends Component {
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
                <Carousel />
              </Col>
              <Col sm={12}>
                <Book
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
              <Col sm={6}>
                <Book
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
              <Col sm={6}>
                <Book
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
                <Design />
              </Col>
              <Col sm={6}>
                <Code />
              </Col>
              <Col sm={6}>
                <Article />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col sm={12}>
                <Audio />
                <Directive />
                <Footnote />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
