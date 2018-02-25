import React from 'react';
import PropTypes from 'prop-types';

const instance = ({ data }) => (
  <div className="book-advert">
    <div className="advert">
      <img src={data.img} alt="" />
      <section>
        <h3>
          <a href={data.url}> {data.name}</a>
        </h3>
        <h4>{data.author}</h4>
      </section>
    </div>
  </div>
);

instance.propTypes = {
  data: PropTypes.object.isRequired,
};

export default instance;
