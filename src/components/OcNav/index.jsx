import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/imgs/logo-white.png'

import './index.sass';

const OcNav = () => {
  return (
    <div className='nav-wrapper flex flex-between'>
      <div>
        <img src={ LOGO } alt="" />
      </div>
      <div className='nav-list-wrapper'>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/check">立即查重</Link>
          </li>
          <li>
            <Link to="/comments">用户评价</Link>
          </li>
          <li>
            注册/登录
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OcNav;
