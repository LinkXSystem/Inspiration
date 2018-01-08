import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './system.css';

import Audio from '../../view-components/universal/player/music-player/music';
import Directive from '../../view-components/universal/directive/directive';
import Footnote from '../../view-components/universal/footnote/footnote';

import { ImageCarousel } from '../../view-components/universal/carousels';

import {
  ArticleThumbnail,
  BookThumbnail,
  CodeThumbnail,
  DesignThumbnail,
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
                <ImageCarousel />
              </Col>
              <Col sm={12}>
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
              <Col sm={6}>
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
              <Col sm={6}>
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
                <DesignThumbnail />
              </Col>
              <Col sm={6}>
                <CodeThumbnail />
              </Col>
              <Col sm={6}>
                <ArticleThumbnail
                  data={{
                    title: '从时间旅行的乌托邦，看状态管理的设计误区',
                    content:
                      '在刚刚结束的D2上，笔者虽然没有看到完全颠覆性的新轮子，但对于不少开放性的问题获得了全新的答案。这其中的一个问题帮助笔者重新梳理了对前端的理解，并构成了本节最主要的论据。这个问题是：前端的复杂应用该如何分类？传统上，我们会将功能作为区分应用类别的维度。比如：管理后台、活动H5、聊天IM、电商购物、视频直播……我们有非常多细分领域，每个领域都有不同的业务痛点和侧重点，这样看来要想一通百通地『打通任督二脉』是很困难的。但有没有更简单的划分方式呢？这里，我们有了一个更简单的答案，即将复杂的前端应用简单地分为两类：数据驱动和事件驱动。',
                  }}
                />
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
