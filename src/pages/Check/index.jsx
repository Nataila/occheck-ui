import React from 'react';
import './index.sass';
import UploadFile from '../../components/UploadFile';
import BannerImg from '../../assets/imgs/banner.png';

export default function Check () {
  return (
    <div className="check-root top-banner">
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-doc">
            <h1>立即查重</h1>
            <h3>上传您的论文，获取一站式免费服务</h3>
          </div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
      <div style={{ padding: '40px 0'}}>
        <UploadFile />
      </div>
    </div>
  )
}
