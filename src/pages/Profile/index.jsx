import React, { useState, useEffect } from 'react';
import './index.sass';

import BannerImg from '../../assets/imgs/banner.png';
import UseOccheck from '../../components/UseOccheck';
import { useHistory, Link } from 'react-router-dom';

import { Form, Input, message, Modal, Button } from 'antd';
import { OcSelect, OcOption } from '../../components/OcSelect';
import { toCountry } from '../../helper/filters';
import LogoColor from '../../assets/imgs/logo-color.png';

import api from '../../api';

export default function Profile () {
  const p1Style = {
    color: '#333',
    fontSize: '28px',
    borderBottom: '3px solid #F1F2F2',
    padding: '0 0 25px 0'
  }
  const p2Style = {
    color: '#CCCCCC',
    fontWeight: '400',
    fontSize: '18px',
    paddingTop: 20
  }

  let history = useHistory()

  const [tasks, setTasks] = useState([]);
  const [isPwdModalVisible, setPwdModalVisible] = useState(false);
  const [isCountryModalVisible, setCountryModalVisible] = useState(false);
  const [country, setCountry] = useState(1);
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      history.push('/signin');
      return false
    }
     
    async function fetchData() {
      const res = await api.taskList();
      setTasks(res.data);
      const me = await api.myProfile();
      setLoginUser(me.data);
    }
    fetchData();
  }, []);

  function statusStr(flag) {
    return flag === 4 ? '已发送至账户邮箱' : '上传成功，请耐心等待'
  }

  function filesListToStr(data) {
    let l = []
    data.forEach(item => {
      l.push(item.name)
    })
    return l.join(', ')
  }

  const countrySelect = async value => {
    setCountry(value.value);
  }


  const onFinish = async values => {
    const res = await api.commentNew(values);
    if (res.data == 'ok') {
      history.push('/comments');
      message.success('评价成功！');
    }
  }

  const onPwdFinish = async values => {
  }

  return (
    <div className="profile-root top-banner">
      <Modal
        visible={isCountryModalVisible}
        footer={ null }
        header={ null }
        onCancel={() => {setCountryModalVisible(false)}}
      >
        <div className="signup-content" style={{ height: 'fit-content'}}>
        <div className="title text-center">修改国家</div>
        <div className="logo-color-wrapper">
          <img src={ LogoColor } alt="" />
          <div className="oc-select-wrapper" style={{ marginTop: 30}}>
            <OcSelect onChange={ countrySelect } defaultValue={ toCountry(loginUser.country) }>
              <OcOption value="0">美国</OcOption>
              <OcOption value="1">英国</OcOption>
              <OcOption value="2">澳洲</OcOption>
              <OcOption value="3">加拿大</OcOption>
            </OcSelect>
            <button className="oc-btn-primary" style={{ width: '100%', marginTop: 20}}>提交</button>
          </div>
        </div>
      </div>
      </Modal>

      <Modal
        visible={isPwdModalVisible}
        footer={ null }
        header={ null }
        onCancel={() => {setPwdModalVisible(false)}}
      >
        <div className="signup-content" style={{ height: 'fit-content'}}>
        <div className="title text-center">修改密码</div>
        <div className="logo-color-wrapper">
          <img src={ LogoColor } alt="" />
        </div>
        <Form
          onFinish={onPwdFinish}
          style={{width: 'min-content', margin: '0 auto'}}>
          <Form.Item
            name="oldPassword"
            rules={[{ required: true, message: '请输入密码' }]}
          >
          <Input
            type="password"
            className="signup-input"
            placeholder="请输入旧密码"
            name='password' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
          <Input
            type="password"
            className="signup-input"
            placeholder="请输入新密码"
            name='password1' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
          <Input
            type="password"
            className="signup-input"
            placeholder="请确认新密码"
            name='password2' />
          </Form.Item>
          <button className="oc-btn-primary submit-btn" htmltype="submit">确认修改</button>
        </Form>
      </div>
      </Modal>

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
        用户，{ loginUser.email }</div>
      </div>
      <div className="container">
        <div className="flex last-count-wrapper">
          <div className="last-count">{ loginUser.query_count }<span style={{ fontSize: '40px'}}>次</span></div>
          <div className="last-count-text">
            <p style={p1Style}>您还可以免费查重的次数</p>
            <p style={p2Style}>请添加客服获取更多免费查重机会</p>
          </div>
          <Link to="/deposit" className="oc-btn oc-btn-primary" style={{ marginTop: 20}}>增加免费次数</Link>
        </div>
      </div>
      <div className="container">
        <div className="p-sub-title">基本信息</div>
        <div className="oc-shadow profile-panel">
          <div className="flex flex-between profile-item">
            <div>邮箱: { loginUser.email }</div>
            <div className="modify bc"></div>
          </div>

          <div className="flex flex-between profile-item">
            <div>密码:  ******</div>
            <div className="modify bc" onClick={() => {setPwdModalVisible(true)}}>修改</div>
          </div>

          <div className="flex flex-between profile-item">
            <div>国家: { toCountry(loginUser.country) }</div>
            <div className="modify bc" onClick={() => {setCountryModalVisible(true)}}>修改</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-sub-title">上传记录</div>
        {tasks.map((item) => (
          <div className="oc-shadow history-item" key={ item.id }>
            <div className='flex' sytle={{ alignItems: 'center'}}>
              <div className="day bc" style={{ fontSize: 50, fontWeight: 'bold', marginLeft: 20}}>{ item.day }</div>
              <div className="file-name" style={{ color: '#656C75', fontSize: 24, marginLeft: 100}}>文件名称 ： { filesListToStr(item.files) }</div>
            </div>
            <div className='flex' sytle={{ alignItems: 'center'}}>
              <div className="month" style={{ color: '#656C75', fontSize: 20}}>{ item.month }</div>
              <div className="status bc" style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 80}}>完成状态：{statusStr(item.status)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="p-sub-title">您的评价</div>
        <Form
          name="comment"
          className="comment-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: '此项为必填项' }]}
          >
            <Input placeholder="name" className='oc-input' />
          </Form.Item>
          <Form.Item
            name="location"
            rules={[{ required: true, message: '此项为必填项' }]}
          >
            <Input
              type="text"
              placeholder="University"
              className='oc-input'
            />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: '此项为必填项' }]}
          >
            <Input.TextArea className='content-textarea' rows={7} />
          </Form.Item>
          <button className="oc-btn-primary" htmltype="submit">发表评价</button>
        </Form>
      </div>
      <UseOccheck />
    </div>
  )
}
