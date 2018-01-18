import PropTyps from 'prop-types';
import React from 'react';
import moment from 'moment';
import builder from '../../../utils';

import './element.css';

function element(props) {
  const { data } = props;
  return (
    <div className="e-repository">
      <div>
        <img src={data.owner.avatar_url} alt="" />
        <h4>
          <a href={data.html_url}>{data.name}</a>{' '}
        </h4>
      </div>
      <p>{data.description}</p>
      <ul
        className={builder.classname(['r-ul'])}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <li>
          <i className="fa fa-star" aria-hidden="true" />{' '}
          {data.stargazers_count}
        </li>
        <li>
          <i className="fa fa-code-fork" aria-hidden="true" />{' '}
          {data.forks_count}
        </li>
        <li>
          <i className="fa fa-globe" aria-hidden="true" /> {data.language}
        </li>
        <li>
          <i className="fa fa-clock-o" aria-hidden="true" />{' '}
          {moment(data.pushed_at).format('YYYY-MM-DD')}
        </li>
      </ul>
    </div>
  );
}

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
