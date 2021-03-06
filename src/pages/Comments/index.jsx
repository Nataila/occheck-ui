import React from 'react';

import './index.sass';

import BannerImg from '../../assets/imgs/banner.png';
import Banner1Img from '../../assets/imgs/banner1.png';
import UseOccheck from '../../components/UseOccheck';
import CommentList from '../../components/CommentsList';


export default function Comments () {
  return (
    <div className='comments-root'>
      <div className="banner">
        <div className="banner-wrapper">
          <img src={Banner1Img} className='banner1img just-pc' alt="" />
          <div className="banner-doc">
            <h1>用户评价</h1>
            <h3>您的评价就是我们的动力</h3>
          </div>
          <img src={BannerImg} width='100%' alt="" />
        </div>
      </div>
      <div className='comment-list-wrapper'>
        <CommentList/>
      </div>
      <UseOccheck />
    </div>
  )
}
