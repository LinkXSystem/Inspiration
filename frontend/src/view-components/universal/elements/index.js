import PropTyps from 'prop-types';
import React from 'react';
import moment from 'moment';
import builder from '../../../utils';

import './element.css';

/**
 * Article
 * @param {*} props
 */
const Article = props => (
  <div className={builder.classname(['t-container', 'e-article'])}>
    <span className={builder.classname(['t-title'])}>
      <a href={props.data.url}>{props.data.title}</a>
    </span>
    <ul className={builder.classname(['r-ul'])}>
      <li
        className={builder.classname(['t-icons'])}
        style={{
          backgroundColor: 'blue',
        }}
      >
        {props.data.type}
      </li>
      <li>{props.data.author}</li>
      <li>{props.data.date}</li>
    </ul>
  </div>
);

Article.propTypes = {
  data: PropTyps.object.isRequired,
};

/**
 * Error
 * @param {*} props
 */
const Error = () => (
  <div className={builder.classname(['t-container', 'e-error'])} />
);

/**
 * Photo
 * @param {*} props
 */
const Photo = props => (
  <div className="e-image">
    <img src={props.data.img} alt="" />
    <div>
      <span>
        <i className="fa fa-file-text" aria-hidden="true" /> {props.data.info}
      </span>
    </div>
  </div>
);

Photo.propTypes = {
  data: PropTyps.object.isRequired,
};

/**
 * Project
 * @param {*} props
 */
const Project = props => (
  <div className={builder.classname(['t-container', 'e-project'])}>
    <div>
      <img src={props.data.owner.avatar_url} alt="" />
      <h4>
        <a href={props.data.html_url}>{props.data.name}</a>{' '}
      </h4>
    </div>
    <p>{props.data.description}</p>
    <ul
      className={builder.classname(['r-ul'])}
      style={{
        justifyContent: 'space-between',
      }}
    >
      <li>
        <i className="fa fa-star" aria-hidden="true" />{' '}
        {props.data.stargazers_count}
      </li>
      <li>
        <i className="fa fa-code-fork" aria-hidden="true" />{' '}
        {props.data.forks_count}
      </li>
      <li>
        <i className="fa fa-globe" aria-hidden="true" /> {props.data.language}
      </li>
      <li>
        <i className="fa fa-clock-o" aria-hidden="true" />{' '}
        {moment(props.data.pushed_at).format('YYYY-MM-DD')}
      </li>
    </ul>
  </div>
);

Project.propTypes = {
  data: PropTyps.object.isRequired,
};

export { Article, Error, Photo, Project };
