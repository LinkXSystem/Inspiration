import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { Image } from '../views/universal/player';
import { DesignThumbnail } from '../views/universal/thumbnail';
import { PictureList } from '../views/universal/group';

class Design extends Component {
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
              <Col sm={12}>
                <DesignThumbnail />
              </Col>
              <Col sm={12} className="group">
                <Image />
              </Col>
              <Col sm={12}>
                <PictureList
                  data={[
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/261ad53b1320f2c142ea35f142b1e95c3df404a33d161-JiDSeR',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/e68f4928cc84ce36db3741cc54527007b100f41c2f17e-StC7Lh',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/ddeb7d93eedfbc07075b0236748c3f67d82c2c7f3248c-VG9XG8',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/f812ec81cc57c9d0f42d8c0c26f4ac29daac922a2465e-hzN6se',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/2288e4c37877abfa23fed96ec22e1bab6a6cd6084b8c9-UrOlqy',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/65d0e41b81f4f45452e92fd70890a7664a44261bee719-WINBEe',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/832448186d28f63dfd2760a33d9eccdab2bb44b416143c-y82d8a',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/fa263e2d38d4438684807f8217dd5d56b45528682a1e4d-vqSn16',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/94ff2d9b2ff75d7bdf96ba431c8f4155152995ce10868d-NoD6DY',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/983575a2d74fadfe8d879e2edf0f650e3e9b90c0ad8b7-6LPE3Z',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/2ae4f75e872fd6f8c2c177ed54fc125c5c54ecc12f342f-5UaiYa',
                      info: 'あけましておめでとうございます',
                    },
                    {
                      img:
                        'https://hbimg.b0.upaiyun.com/5329be84c4ef13dedfae1c668879dff36c789d04a8e8f-OEDdHF',
                      info: 'あけましておめでとうございます',
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

export default Design;
