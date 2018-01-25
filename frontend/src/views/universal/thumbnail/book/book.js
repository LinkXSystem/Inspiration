import React, { Component } from 'react';
import PropTyps from 'prop-types';
import './thumbnail.css';
import { classname } from '../../../../utils';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  icons(icons) {
    return icons.map(item => (
      <i
        key={item.toString()}
        className={classname(['t-icons'])}
        style={{ backgroundColor: '#000000' }}
      >
        {item}
      </i>
    ));
  }

  render() {
    const { data } = this.props;
    return (
      <div className={classname(['t-container', 'typesetting', 'th-book'])}>
        <div>
          <img src={data.img} alt="" />
        </div>
        <div>
          <p className="t-line">书名：{data.name}</p>
          <p className="t-line">作者：{data.author}</p>
          <p className="t-line">类别：{this.icons(data.icons)}</p>
          <p className="t-line">来源：{data.source}</p>
          <p className={classname(['t-line', 'trigger'])}>
            描述：{data.description}
          </p>
          <div className={classname(['t-container', 'th-madol'])}>
            <h4>书籍简介</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Instance.propTypes = {
  data: PropTyps.object.isRequired,
};

export default Instance;
