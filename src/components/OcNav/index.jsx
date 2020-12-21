import React from 'react';
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/imgs/logo-white.png'

import './index.sass';

const OcNav = () => {
  return (
    <div className='nav-wrapper flex flex-between'>
      <div>
        <a href="/">
          <img src={ LOGO } alt="" />
        </a>
      </div>
      <div className='nav-list-wrapper'>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName='nav-selected'>首页</NavLink>
          </li>
          <li>
            <NavLink to="/check" activeClassName='nav-selected'>立即查重</NavLink>
          </li>
          <li>
            <NavLink to="/comments" activeClassName='nav-selected'>用户评价</NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName='nav-selected'>我的账户</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OcNav;
