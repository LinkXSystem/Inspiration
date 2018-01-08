import React from 'react';
import PropTyps from 'prop-types';
import './element.css';
import builder from '../../../../utils';

const element = props => (
  <div className={builder.classname(['t-container', 'e-project'])}>
    <div>
      <img src="https://avatars1.githubusercontent.com/u/170270?v=4" alt="" />
      <h4>{props.data.name}</h4>
    </div>
    <p>{props.data.desc}</p>
    <ul
      className={builder.classname(['r-ul'])}
      style={{
        justifyContent: 'space-between',
      }}
    >
      <li>
        <i className="fa fa-star" aria-hidden="true" /> {props.data.star}
      </li>
      <li>
        <i className="fa fa-code-fork" aria-hidden="true" /> {props.data.fork}
      </li>
      <li>
        <i className="fa fa-globe" aria-hidden="true" /> {props.data.globe}
      </li>
      <li>
        <i className="fa fa-clock-o" aria-hidden="true" /> {props.data.clock}
      </li>
    </ul>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
