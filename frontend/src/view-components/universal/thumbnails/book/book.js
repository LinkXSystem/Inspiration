import React, { Component } from 'react';
import PropTyps from 'prop-types';
import './thumbnail.css';
import builder from '../../../../utils';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  icons(icons) {
    return icons.map(item => (
      <i
        key={item.toString()}
        className={builder.classname(['t-icons'])}
        style={{ backgroundColor: '#000000' }}
      >
        {item}
      </i>
    ));
  }

  render() {
    const { data } = this.props;
    return (
      <div
        className={builder.classname(['t-container', 'typesetting', 'th-book'])}
      >
        <img src={data.img} alt="" />
        <div>
          <h4 className={builder.classname(['t-line'])}>书名：{data.name}</h4>
          <p className={builder.classname(['t-line'])}>作者：{data.author}</p>
          <p className={builder.classname(['t-line'])}>
            类别：{this.icons(data.icons)}
          </p>
          <p className={builder.classname(['t-line'])}>来源：{data.source}</p>
          <p className={builder.classname(['t-line', 'trigger'])}>
            描述：{data.description}
          </p>
          <div className={builder.classname(['t-container', 'th-madol'])}>
            <h4>书籍简介</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  data: PropTyps.object.isRequired,
};

export default Book;
