import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import './index.sass';
import QrCode from '../../assets/imgs/qrcode.jpg';
import pay1Img from '../../assets/imgs/pay1.png';
import pay2Img from '../../assets/imgs/pay2.png';


export default function Deposit() {
  let [count, setCount] = useState(1)

  function subCountHandle() {
    if (count <= 1) {
      return
    } else {
      setCount(count -= 1)
    }
  }

  return (
    <div className="deposit-root top-banner">
      <div className="banner">
        <div className="banner-wrapper" style={{ height: 400}}>
          <div className="banner-doc">
            <h3>强烈建议您<span style={{ fontWeight: 'bold'}}>添加客服免费升级无限查重账户</span></h3>
            <h3>或通过购买获得更多查重机会</h3>
          </div>
        </div>
      </div>
      <div className="deposit-content container flex">
        <div className="to-service">
          <div className="pay-img-wrapper">
            <img src={ pay1Img } alt="" class='pay-img'/>
          </div>
          <div className="to-service-bottom">
            <div className="num bc">01</div>
            <p className='bc' style={{ fontSize: 24, fontWeight: 'bold'}}>添加客服，免费升级无限查重账户</p>
            <div className="service-qrcode">
              <img src={ QrCode } alt="" />
            </div>
          </div>
        </div>
        <div className="buy">
          <div className="pay-img-wrapper">
            <img src={ pay2Img } alt="" class='pay-img'/>
          </div>
          <div className="buy-bottom">
            <div className="num">02</div>
            <p style={{ fontSize: 24, fontWeight: 'bold'}}>直接购买次数</p>
            <div className='flex buy-wrapper'>
              <span className="deposit-subtitle">购买次数</span>
              <div className='flex counter'>
                <span className="sub" onClick={subCountHandle}>
                  <PlusOutlined />
                </span>
                <input type="text" value={ count } onChange={(e) => setCount(parseInt(e.target.value))}/>
                <span className="plus" onClick={e => setCount(count + 1)}>
                  <MinusOutlined />
                </span>
              </div>
            </div>
            <div className="flex price">
              <span className="deposit-subtitle">所需价格</span>
              <span className="rmb">￥</span>
              <input type="text" style={{ width:220}} value={ count * 50 } />
            </div>
            <div>
              <button className="oc-btn-primary buy-btn">购买</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
