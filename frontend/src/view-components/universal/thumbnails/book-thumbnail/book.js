import React from 'react';
import './thumbnail.css';
import Expander from './components/expander/expander';

const Instance = () => (
  <div className="book">
    <img
      src="https://img3.doubanio.com/view/ark_article_cover/retina/public/43242676.jpg?v=1512120177.0"
      alt=""
    />
    <div className="content">
      <h5 className="line">
        <strong>书名：妖猫传</strong>
      </h5>
      <p className="line">作者：梦枕貘</p>
      <p className="line">
        类别：
        <i className="sign">推理悬疑</i>
        <i className="sign">幻想</i>
        <i className="sign">幻想</i>{' '}
      </p>
      <p className="line">来源：豆瓣读书</p>
      <Expander
        description={`自日本东渡大唐的高僧空海与寻求《长恨歌》创作灵感的白居易，一同揭开妖魅事件和杨贵妃死亡的谜团。一切妖怪的怨念，都来自咒术，来自人的内心。`}
      />
    </div>
  </div>
);

export default Instance;
