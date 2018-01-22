import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

const Instance = () => (
  <Carousel>
    <Carousel.Item>
      <div
        className="c-image"
        style={{
          backgroundImage: 'url(http://www.bootcss.com/p/layoutit/img/2.jpg)',
        }}
      />
      <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="c-image"
        style={{
          backgroundImage: 'url(http://www.bootcss.com/p/layoutit/img/2.jpg)',
        }}
      />
      <Carousel.Caption>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="c-image"
        style={{
          backgroundImage: 'url(http://www.bootcss.com/p/layoutit/img/2.jpg)',
        }}
      />
      <Carousel.Caption>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Instance;
