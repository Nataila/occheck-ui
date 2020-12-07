import React from 'react';
import './index.sass';

export default function OcFooter() {
  return (
    <div class="footer">
      <div className="footer-top">
        <div className="container">
          <div className="left">
            <div className="title">
              联系我们
              <div className="title-line"></div>
            </div>
            <div className="contact-us-item">
              <div className="sub-title">联系电话:</div>
              <div className="contact-us-doc">1234-567-8900</div>
            </div>
            <div className="contact-us-item">
              <div className="sub-title">E-mail:</div>
              <div className="contact-us-doc">123@qqw.com</div>
            </div>
            <div className="contact-us-item">
              <div className="sub-title">地址:</div>
              <div className="contact-us-doc">北京市朝阳区建外SOHO东区6号楼712室</div>
            </div>
          </div>
          <div className="right">
            <div className="title">
              网站地图
              <div className="title-line"></div>
            </div>
            <div className="flex">
              <div className="map-left">
                <ul>
                  <li><a href="">首页</a></li>
                  <li><a href="">立即查重</a></li>
                  <li><a href="">用户评价</a></li>
                </ul>
              </div>
              <div className="map-right">
                <ul>
                  <li><a href="">Q&A</a></li>
                  <li><a href="">我的账户</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container flex">
          <div>Copyright ® 2020  All rights reserved.</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}
