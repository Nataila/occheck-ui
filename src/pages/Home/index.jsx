import React from 'react';
import { Row, Col } from 'antd';

import './index.sass';

import BannerImg1 from '../../assets/imgs/home/banner1.png';
import Step1Img from '../../assets/imgs/home/step1.png';
import Step2Img from '../../assets/imgs/home/step2.png';
import Step3Img from '../../assets/imgs/home/step3.png';

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
      <UseOccheck />
    </div>
  )
}
