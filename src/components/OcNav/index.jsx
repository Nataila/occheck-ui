import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../assets/imgs/logo-white.png'

import './index.sass';

import { loginContext } from '../../App';

const OcNav = (props) => {
  const {isLogin, setLogin} = useContext(loginContext);
  const [isSuperuser, setSuperuser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const { group } = JSON.parse(user);
      if (parseInt(group) == 1) {
        setSuperuser(true)
      }
    }
  }, [isLogin])

  function loginOut(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    setLogin(false);
  }

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
          {isSuperuser && isLogin ? 
            <li>
              <NavLink to="/admin" activeClassName='nav-selected'>后台管理</NavLink>
            </li>
            : <> </>
          }
          {isLogin ?
          <>
          <li>
            <NavLink to="/profile" activeClassName='nav-selected'>我的账户</NavLink>
          </li>
          <li>
            <a href="#" onClick={ loginOut }>退出</a>
          </li>
          </>
          :
          <li>
            <Link to="/signup"> 注册 </Link>
            / 
            <Link to="/signin"> 登录</Link>
          </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default OcNav;
