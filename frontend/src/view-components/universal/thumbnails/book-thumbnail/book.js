import React, { Component } from 'react';
import PropTyps from 'prop-types';
import './thumbnail.css';
import builder from '../../../../utils/classname';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  icons(icons) {
    return icons.map(item => (
      <i
        key={item.toString()}
        className={builder.build(['t-icons'])}
        style={{ backgroundColor: '#000000' }}
      >
        {item}
      </i>
    ));
  }

  render() {
    return (
      <div className={builder.build(['t-container', 'typesetting', 'th-book'])}>
        <img src={this.props.data.img} alt="" />
        <div>
          <h4 className={builder.build(['t-line'])}>
            书名：{this.props.data.name}
          </h4>
          <p className={builder.build(['t-line'])}>
            作者：{this.props.data.author}
          </p>
          <p className={builder.build(['t-line'])}>
            类别：{this.icons(this.props.data.icons)}
          </p>
          <p className={builder.build(['t-line'])}>
            来源：{this.props.data.source}
          </p>
          <p className={builder.build(['t-line', 'trigger'])}>
            描述：{this.props.data.description}
          </p>
          <div className={builder.build(['t-container', 'th-madol'])}>
            <h4>书籍简介</h4>
            <p>{this.props.data.description}</p>
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
