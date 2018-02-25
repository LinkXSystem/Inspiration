import PropTyps from 'prop-types';
import React from 'react';

const element = ({ data }) => (
  <div className="evaluate">
    <img src={data.img} alt="" />
    <section>
      <header>
        <h4>{data.title}</h4>
        <ul className="r-ul">
          <li>
            <a href="https://www.douban.com/people/yukiyuki/">{data.user}</a>
          </li>
          <li>《{data.book}》</li>
        </ul>
      </header>
      <p>{data.content}</p>
    </section>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
