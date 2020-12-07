import React from 'react';

import { Row, Col } from 'antd';

import './index.sass';
import BannerImg from '../../assets/imgs/banner.png';
import Banner1Img from '../../assets/imgs/banner1.png';
import UseOccheck from '../../components/UseOccheck';


export default function Home () {
  return (
    <div className='home'>
      <div className="banner">
        <div className="banner-wrapper">
          <img src={Banner1Img} className='banner1img' alt="" />
          <div className="banner-doc">
            <h1>用户评价</h1>
            <h3>您的评价就是我们的动力</h3>
          </div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
      <div className="comments container">
        <div className="title text-center">用户评价</div>
        <div className="comments-list">
          <Row>
            {[...Array(18).keys()].map((item) =>
            <Col span={8} key={item} className='comment-col'>
              <div className="comment-item">
                <div className="name">Ann</div>
                <div className="location">UIUC</div>
                <div className="content">在这边使用7-8次了，服务人员全程都很负责，很棒，支持一个！</div>
                <div className="time">Nov 24, 2020</div>
                <div className="arrow"></div>
              </div>
            </Col>
            )}
          </Row>
        </div>
      </div>
      <UseOccheck />
    </div>
  )
}
