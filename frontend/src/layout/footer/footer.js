import React from 'react';

const Footer = () => (
  <footer
    className="footer"
    style={{
      backgroundColor: '#ffffff',
    }}
  >
    <hr />
    <div className="row footer-top">
      <div className="col-sm-6 col-lg-5 col-sm-offset-1">
        <h4>LinkSystem</h4>
        <p>
          本网站所列相关资料及项目全部由
          <a href="http://www.bootcss.com/">LinkSystem</a>成员整理，并全部遵循
          <a href="http://creativecommons.org/licenses/by/3.0/">
            CC BY 3.0
          </a>协议发布。
        </p>
      </div>
      <div className="col-sm-6  col-lg-4 col-sm-offset-1">
        <div className="row about">
          <div className="col-xs-3">
            <h4>关于</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/ad/">广告合作</a>
              </li>
              <li>
                <a href="/links/">友情链接</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h4>联系方式</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="http://weibo.com/bootcss"
                  title="Bootstrap中文网官方微博"
                >
                  新浪微博
                </a>
              </li>
              <li>
                <a href="mailto:admin@bootcss.com">电子邮件</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h4>旗下网站</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.golaravel.com/">LinkSystem & Email</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h4>赞助商</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.ucloud.cn/">LinkSystem</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="row footer-bottom">
      <ul className="list-inline text-center">
        <li>
          <a href="http://www.miibeian.gov.cn/">京ICP备11008151号</a>
        </li>
        <li>京公网安备11010802014853</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
