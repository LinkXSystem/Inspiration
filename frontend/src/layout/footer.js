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
