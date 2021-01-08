import React from 'react';
import './index.sass';
import useOccheckImg from '../../assets/imgs/useoccheck.png';

export default function UseOccheck() {
  return (
    <div className='use-occheck-wrapper just-pc'>
      <div className="container">
        <div className="flex">
          <div className="flex">
            <img src={ useOccheckImg } alt="" />
            <div>
              <div style={{fontSize: '32px'}}>我也要使用OCcheck</div>
              <div style={{fontSize: '16px'}}>英美澳加留学生都在用的免费查重工具</div>
            </div>
          </div>
          <a href="/check" className="to-check-btn">免费查重</a>
        </div>
      </div>
    </div>
  )
}
