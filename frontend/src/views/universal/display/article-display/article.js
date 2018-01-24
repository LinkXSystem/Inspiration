import React, { Component } from 'react';

import { classname } from '../../../../utils';

import './display.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article">
        <h3 className="title">忆起风筝</h3>
        <div className="info">
          <img src={require('../../../public/imgs/user.png')} alt="用户" />
          <div className="author">
            <span>惊鸿2017</span>
            <ul>
              <li>
                <i className="fa fa-plus-square" aria-hidden="true" /> 关注
              </li>
              <li>
                <i className="fa fa-calendar" aria-hidden="true" /> 2018.01.01
                16:58
              </li>
              <li>
                <i className="fa fa-comments" aria-hidden="true" /> 123
              </li>
              <li>
                <i className="fa fa-eye" aria-hidden="true" /> 2018
              </li>
              <li>
                <i className="fa fa-heart" aria-hidden="true" /> 2018
              </li>
            </ul>
          </div>
        </div>
        <div className={classname(['content', 'typesetting'])}>
          <p>
            她和他认识的时候，她已经经历了爱情海洋里的狂风暴雨，对爱情有了不屑一顾的态度。
            他们是在朋友组织的聚会上遇到的，灯红酒绿，纸醉金迷。
            她在隐隐绰绰的灯光里张扬不羁、活力四射，与大伙儿开心地笑着闹着。
            他是最后一个进来包厢的，推开门的时候屋内热闹非凡，她拿着话筒大声地K着歌，不经意地瞟了他一眼。
            他是个不起眼的微胖男子，但没有小男生的青涩和单薄，进到屋内，只是神色平静地环顾了一下在场的人，尔后找了个角落安静地坐下。
            聚会中途众人玩起了喝酒游戏，她兴致不减，大口喝酒，毫不避讳，一圈下来，人已经有些晕眩。
            后来他负责倒酒，她的酒杯只倒了一半，所有人都趁热起哄，另一半让他代喝，他笑了笑，倒了满满一杯一饮而尽。
            微醺的她看着他，在心里暗自嘲笑，拐着弯想搭讪，装什么假正经英雄救美。
            她一点也不相信他的好意，自己又径自倒满了一杯。
            散场的时候她已经有些摇晃，一大堆人笑嚷着告别，引来街上行人的频频侧目。
            她拦下路边一辆的士，挥手就要和众人告别，他思考了几秒钟，硬拉着另外清醒的一男一女钻进后座，在她不领情的话语中一路护送她回家。
            原来俩人居然住毗邻的小区，第二天他出来晨跑，顺路买了一碗热粥放在她家门口，敲门听她应声便离开。
            她也只是笑笑，这样的把戏看过太多。
            她其实对他有些好奇，只是觉得，单从外表看来，他是把她看成能轻易搭讪的不良女子。
            但她并不表现出来这一点点顾忌，在往后的每一次见面中，都刻意趾高气昂地和他说话。
            但他却每一次似乎都不介意，从容温和而有礼地应对，一点也没有她自认为的讨好和自卑。
            就这样慢慢认识和接近了，她也被沉稳体贴的他吸引了。
            在一起的一年多时间里，日子缓慢而温馨。
            他负责做饭和打扫，而她，负责挑剔和吵闹，他始终温暖如初，宠溺她，如同爱护一个小女孩。
            她觉得自己终究还是个好运的女子，在历经多次爱情劫难后，还能遇到这么沉稳体贴的他，感受到爱情的暖意，就这么自然而然地走到了婚姻殿堂。
            结婚前几天，他们的好朋友一起组了个局，聊起了早些年的他们。
            她的朋友说，当年的她个性恬静，有着浓厚的文艺青年气息。
            他的朋友说，当年的他经常吟诗作对，喜爱一切和文艺有关的事物。
            屋内笑声翻飞，有朋友打趣道，可惜你们没有早几年碰上，那才真正叫做天作之合。
            他笑了，她也笑，相互看看，却都没有说话。
            那一刻，他们心里都很明白。幸好，没有早几年碰上。
            那年的他，虽然热衷吟诗作对，却满腹自卑，只会暗恋校园舞会上光鲜亮丽的女孩。
            那年的她，虽然周身充盈着文艺情怀，却有些孤傲清冷，最看不得假正经的男人。
            他们，就是这样，因为心存偏见，因为年轻卑微，在最灿烂的时光里一再遇上错误爱情。
            而现在，他们都在爱情的风吹雨打里，慢慢成熟起来。内心也不再浮躁不安，而是渐渐变得宽厚而平和，都懂得了为对方着想。
            会一起逛街买菜，打扫卫生；他在厨房做饭，她在一旁摘菜；她回家时，他叮嘱她给家人备上礼物；他加班时，她等着他回家一起入眠……
            生活就这么一直有序而幸福地行进着。
            所以，现在遇见，于他们而言，才是最好的。
            其实，真的不用惶恐和遗憾，没有在最美的时光和你相遇。
            因为我们需要的，终究不是那一场奋不顾身、轰轰烈烈的爱情，而是笃定踏实、温暖如一的永久相伴。
            晚点遇见，恰逢其时，余生与共，不负韶光。
          </p>
        </div>
        <div className="collect">
          <div className="like">
            <span>
              <i className="fa fa-heart-o" aria-hidden="true" /> 喜欢
            </span>
            <span>31</span>
          </div>
          <ul className="enjoy">
            <li>
              <i className="fa fa-weixin" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-weibo" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-qq" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Article;
