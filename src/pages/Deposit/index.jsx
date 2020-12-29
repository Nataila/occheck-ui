import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Form, Input, message, Modal, Button } from 'antd';
import QRCode  from 'qrcode.react';
import api from '../../api';

import './index.sass';
import QrCode from '../../assets/imgs/qrcode.jpg';
import pay1Img from '../../assets/imgs/pay1.png';
import pay2Img from '../../assets/imgs/pay2.png';
import logoColor from '../../assets/imgs/logo-color.png';
import WxPayImg from '../../assets/imgs/wxpay.png';
import ScanImg from '../../assets/imgs/scan.png';


export default function Deposit() {
  let [count, setCount] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [payInfo, setPayInfo] = useState({})

  function subCountHandle() {
    if (count <= 1) {
      return
    } else {
      setCount(count -= 1)
    }
  }

  async function buySubmit() {
    const res = await api.buyCount({count});
    setPayInfo(res.data)
    setModalVisible(true)
  }

  return (
    <div className="deposit-root top-banner">
      <Modal
        visible={ modalVisible }
        footer={ null }
        header={ null }
        onCancel={() => {setModalVisible(false)}}
      >
        <div className="signup-content pay-content" style={{ height: 'fit-content'}}>
          <div className="title text-center">您将要付款</div>
          <div className="logo-color-wrapper">
            <img src={ logoColor } alt="" />
          </div>
          <div className="flex flex-between" style={{ marginTop: 40}}>
            <span>付款金额</span>
            <span className='bc'>￥{ payInfo.price}</span>
          </div>
          <div className="flex flex-between">
            <span>支付方式</span>
            <img src={ WxPayImg} alt="" />
          </div>
          <div className="qrcode">
            <QRCode value={ payInfo.qrcode} size={280} />
          </div>
          <div className="wx-scan flex">
            <img src={ ScanImg } alt="" />
            <div>
              <p>请使用微信“扫一扫”</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
          <p style={{ color: '#999999', margin: '10px 0'}}>付款完成后，请点击下方“已付款”</p>
          <button className="oc-btn-primary">已付款</button>
        </div>
      </Modal>
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
            <img src={ pay1Img } alt="" className='pay-img'/>
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
            <img src={ pay2Img } alt="" className='pay-img'/>
          </div>
          <div className="buy-bottom">
            <div className="num">02</div>
            <p style={{ fontSize: 24, fontWeight: 'bold'}}>直接购买次数</p>
            <div className='flex buy-wrapper'>
              <span className="deposit-subtitle">购买次数</span>
              <div className='flex counter'>
                <span className="sub" onClick={subCountHandle}>
                  <MinusOutlined />
                </span>
                <input type="text" readOnly value={count} onChange={(e) => setCount(parseInt(e.target.value))}/>
                <span className="plus" onClick={e => setCount(count + 1)}>
                  <PlusOutlined />
                </span>
              </div>
            </div>
            <div className="flex price">
              <span className="deposit-subtitle">所需价格</span>
              <span className="rmb">￥</span>
              <input type="text" style={{ width:220}} value={ count * 50 } />
            </div>
            <div>
              <button className="oc-btn-primary buy-btn" onClick={ buySubmit }>购买</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
