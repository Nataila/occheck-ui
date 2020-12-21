import React from 'react';
import './index.sass';

import BannerImg from '../../assets/imgs/banner.png';
import LogoColor from '../../assets/imgs/logo-color.png';
import UseOccheck from '../../components/UseOccheck';

export default function Profile () {
  const p1Style = {
    color: '#333',
    fontSize: '36px',
    borderBottom: '3px solid #F1F2F2',
    padding: '0 0 25px 0'
  }
  const p2Style = {
    color: '#CCCCCC',
    fontWeight: '400',
    fontSize: '24px',
    paddingTop: 20
  }
  return (
    <div className="profile-root top-banner">
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-doc">
            <h1>我的账户</h1>
            <h3>查看您的账户信息和上传记录</h3>
          </div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="title text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>欢迎
          <img src={LogoColor} style={{margin: '0 10px'}} alt="" />
        用户，nataila@163.com</div>
      </div>
      <div className="container">
        <div className="flex last-count-wrapper">
          <div className="last-count">3<span style={{ fontSize: '60px'}}>次</span></div>
          <div className="last-count-text">
            <p style={p1Style}>您还可以免费查重的次数</p>
            <p style={p2Style}>请添加客服获取更多免费查重机会</p>
          </div>
          <div className="oc-btn oc-btn-primary" style={{ marginTop: 20}}>增加免费次数</div>
        </div>
      </div>
      <div className="container">
        <div className="p-sub-title">基本信息</div>
        <div className="oc-shadow profile-panel">
          <div className="flex flex-between profile-item">
            <div className>邮箱: nataila@163.com</div>
            <div className="modify bc">修改</div>
          </div>

          <div className="flex flex-between profile-item">
            <div className>密码:  ******</div>
            <div className="modify bc">修改</div>
          </div>

          <div className="flex flex-between profile-item">
            <div className>国家: 美国</div>
            <div className="modify bc">修改</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-sub-title">上传记录</div>
        <div className="oc-shadow history-item">
          <div className='flex' sytle={{ alignItems: 'center'}}>
            <div className="day bc" style={{ fontSize: 80, fontWeight: 'bold'}}>27</div>
            <div className="file-name" style={{ color: '#656C75', fontSize: 24, marginLeft: 80}}>文件名称 ： Undergraduate Business&Management</div>
          </div>
          <div className='flex' sytle={{ alignItems: 'center'}}>
            <div className="month" style={{ color: '#656C75', fontSize: 20}}>November</div>
            <div className="status bc" style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 80}}>完成状态：上传成功，请耐心等待</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-sub-title">您的评价</div>
      </div>
      <UseOccheck />
    </div>
  )
}