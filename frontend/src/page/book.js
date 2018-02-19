import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import gql from 'graphql-tag';
import { apollo } from '../mock';

import { Blockquote, Error } from '../views/universal/element';
import { BookList, EvaluateList } from '../views/universal/group';
import { BookCarousel } from '../views/universal/carousel';
import { BookAdvert } from '../views/universal/advert';

class Books extends Component {
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
                <BookCarousel time={10000}>
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
                  <BookAdvert
                    data={{
                      img: 'https://img1.doubanio.com/lpic/s29679627.jpg',
                      url: 'https://book.douban.com/subject/27200268/',
                      name: '知日·世上只有一个京都',
                      author: '茶乌龙 主编',
                    }}
                  />
                </BookCarousel>
              </Col>
              <Col sm={12}>
                <Blockquote name="热门推荐" url="" />
                {this.state.data.books ? (
                  <BookList data={this.state.data.books} />
                ) : (
                  <Error />
                )}
              </Col>
              <Col sm={12}>
                <Blockquote name="书评" url="" />
                <EvaluateList
                  data={[
                    {
                      img: 'https://img3.doubanio.com/mpic/s29617101.jpg',
                      title: '此时，爱了/此刻，不爱',
                      user: '枫枫',
                      book: '没道理的爱情',
                      content:
                        '冬天真是容易饿啊，今年大阪还格外得冷，每天下班回家，我要先吃块面包再给自己冲杯暖暖的红豆沙才能开始准备晚饭，姐弟俩也变得很能吃，睡觉前还要再吃一碗茶渍泡饭，而晚饭一直吃草的老中也扛虽然读库小众...',
                    },
                    {
                      img: 'https://img3.doubanio.com/mpic/s29617101.jpg',
                      title: '此时，爱了/此刻，不爱',
                      user: '枫枫',
                      book: '没道理的爱情',
                      content:
                        '冬天真是容易饿啊，今年大阪还格外得冷，每天下班回家，我要先吃块面包再给自己冲杯暖暖的红豆沙才能开始准备晚饭，姐弟俩也变得很能吃，睡觉前还要再吃一碗茶渍泡饭，而晚饭一直吃草的老中也扛虽然读库小众...',
                    },
                  ]}
                />
              </Col>
            </Row>
          </Col>
          <Col md={3} />
        </Row>
      </Grid>
    );
  }
}

export default Books;
