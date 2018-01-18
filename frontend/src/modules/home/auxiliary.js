import PropTyps from 'prop-types';
import React from 'react';
import { Col } from 'react-bootstrap';

import {
  BookThumbnail,
  DesignThumbnail,
} from '../../view-components/universal/thumbnails';

import { Error, Item } from '../../view-components/universal/elements';

function ArticleList(props) {
  const { data } = props;
  return (
    <div>
      <Col sm={7}>{data.map(item => <Item data={item} />)}</Col>
    </div>
  );
}

function BookList(props) {
  const { data } = props;
  return data ? (
    <div>
      {data.map(item => (
        <Col key={item.name} sm={4}>
          <BookThumbnail data={item} />
        </Col>
      ))}
    </div>
  ) : (
    <div>
      <Col sm={12}>
        <Error />
      </Col>
    </div>
  );
}

function Image() {
  return (
    <div>
      <Col sm={12}>
        <DesignThumbnail />
      </Col>
    </div>
  );
}

ArticleList.propTypes = {
  data: PropTyps.array,
};

BookList.propTypes = {
  data: PropTyps.array,
};

export { ArticleList, BookList, Image };
