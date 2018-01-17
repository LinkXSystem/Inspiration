import PropTyps from 'prop-types';
import React from 'react';
import { Col } from 'react-bootstrap';

import { BookThumbnail } from '../../view-components/universal/thumbnails';
import { Error } from '../../view-components/universal/elements';

function book(props) {
  const { data } = props;
  return data ? (
    <div>
      <Col sm={12}>
        <BookThumbnail data={data[0]} />
      </Col>
      <Col sm={6}>
        <BookThumbnail data={data[1]} />
      </Col>
      <Col sm={6}>
        <BookThumbnail data={data[2]} />
      </Col>
    </div>
  ) : (
    <Error />
  );
}

book.propTypes = {
  data: PropTyps.array,
};

export default { book };
