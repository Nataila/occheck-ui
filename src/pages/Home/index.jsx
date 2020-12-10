import React from 'react';
import { Row, Col } from 'antd';

import './index.sass';

import BannerImg1 from '../../assets/imgs/home/banner1.png';
import Step1Img from '../../assets/imgs/home/step1.png';
import Step2Img from '../../assets/imgs/home/step2.png';
import Step3Img from '../../assets/imgs/home/step3.png';
import TopIconImg from '../../assets/imgs/home/t.png';
import BottomIconImg from '../../assets/imgs/home/b.png';

import UseOccheck from '../../components/UseOccheck';
import CommentList from '../../components/CommentsList';
import UploadFile from '../../components/UploadFile';


export default function Home () {
  return (
    <div className='home'>
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-doc">
            <h1>每 2 篇 留学生的 Essay </h1>
            <h1>就有 1 篇使用 OCcheck</h1>
            <h3>英美澳加留学生都在用的免费查重工具</h3>
          </div>
          <img src={BannerImg1} alt="" />
        </div>
      </div>
      <div className="step container">
        <Row>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 1</div>
            <div>上传需要查重的文档</div>
            <div>上传文档时，需填写您的邮箱，用于接收查重结果</div>
            <img src={Step1Img} alt="" />
          </Col>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 2</div>
            <div>等待查重结果</div>
            <div>成功上传后，我们将在15-30分钟内将结果发送至您的邮箱，请您耐心等待</div>
            <img src={Step2Img} alt="" />
          </Col>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 3</div>
            <div>接收查重语法审核报告</div>
            <div>查重结果出来后将自动发送到您的邮箱。您将通过您的注册邮箱来接收您的查重及语法报告</div>
            <img src={Step3Img} alt="" />
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: '62px'}}>
        <UploadFile />
      </div>
      <div className="about container">
        <div className="title text-center">关于OCcheck</div>
        <div className="about-top-icon">
          <img src={TopIconImg} alt="" />
        </div>
        <div className="about-content">
          OCcheck.com是一家专注于留学生课程辅导与论文润色的学术平台，由硅谷著名天使基金KPCB创始人托姆斯·铂金斯(Thomas Perkins)投资，旗下拥有产品OCcheck（Oxford&Cambridge Check）免费论文检测系统基于大数据海量学术文献资源及互联网资源，与Turnitin、Grammaly、知网等国内外大型论文学术检测机构深度授权合作，坚持客观、公正、精准、全面的原则，对学术不端行为进行管理，为用户提供客观详实的查重报告，为出版、科研、学术等提供支持。
        </div>
        <div className="about-bottom-icon">
          <img src={BottomIconImg} alt="" />
        </div>
        <div className="sub-title" style={{ fontSize: "30px"}}>一站式免费查重及语法检查和预打分服务</div>
        <div>
          <ul className="about-ul">
            <li>提供免费Turnitin（国际版、UK版）查重报告</li>
            <li>提供免费Grammaly（高级版）语法检测报告</li>
            <li>短时间内通过AIspring全球博士数据库匹配专家对论文进行打分评估</li>
          </ul>
        </div>
      </div>
      <UseOccheck />
    </div>
  )
}
