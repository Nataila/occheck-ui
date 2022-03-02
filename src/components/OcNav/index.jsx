import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../assets/imgs/logo-white.png'
import EDULOGO from '../../assets/imgs/logo-edu.png'
import MenuImg from '../../assets/imgs/menu.png'

import './index.sass';

import { loginContext } from '../../App';

const OcNav = (props) => {
  const {isLogin, setLogin} = useContext(loginContext);
  const [isSuperuser, setSuperuser] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false)

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
    window.location.href='/';
  }

  return (
    <div className='nav-wrapper flex flex-between'>
      <div>
        <a href="/" class="logo-group">
          <img className='logo' src={ LOGO } alt="" />
          <img className='logo-edu' src={ EDULOGO } alt="" />
        </a>
      </div>
      <div className="mobile-menu just-mobile">
        <img src={ MenuImg } alt="" onClick={() => {setMenuToggle(!menuToggle)}} />
      </div>
      <div className='just-mobile nav-mobile-login'>
        {isLogin ?
        <div>
          <a href="#" onClick={ loginOut }>退出</a>
        </div>
        :
        <div>
          <Link to="/signup"> 注册 </Link>
          / 
          <Link to="/signin"> 登录</Link>
        </div>
        }
      </div>
      <div className='nav-list-wrapper nav-list-wrapper-mobile just-mobile' style={{ display: menuToggle ? 'block': 'none'}}>
        <ul onClick={() => {setMenuToggle(false)}}>
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
          </>
          : <> </>
          }
        </ul>
      </div>

      <div className='nav-list-wrapper just-pc'>
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
            <a href="https://yinghelunwen.com/" target="_blank">硬核论文</a>
          </li>
          <li>
            <a href="https://beitailunwen.com/" target="_blank">备胎论文</a>
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
          <li className='just-pc'>
            <a href="#" onClick={ loginOut }>退出</a>
          </li>
          </>
          :
          <li className='just-pc'>
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
