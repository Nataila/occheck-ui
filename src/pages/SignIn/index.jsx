import React, { useState, useContext } from 'react';
import './index.sass';

import { Form, Input, Checkbox, Modal, Button, Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import api from '../../api';
import { loginContext } from '../../App';

const { Option } = Select;

export default function SignIn () {
  const {isLogin, setLogin} = useContext(loginContext);
  let history = useHistory()

  async function onFinish(values) {
    const res = await api.signIn(values);
    if (res.message === 'Success') {
      localStorage.setItem('user', JSON.stringify(res.data));
      message.success('登录成功！');
      setLogin(true);
      history.push('/');
    }
  }

  return ( 
    <div className="signup-root">
      <div className="signup-content oc-shadow">
        <div className="title text-center">登录</div>
        <Form
          onFinish={onFinish}
          style={{width: 'min-content', margin: '0 auto'}}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
          <Input
            type='email'
            className="signup-input"
            placeholder="E-mail"
            name='email'
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
          <Input
            type="password"
            className="signup-input"
            placeholder="Repeat Your Password"
            name='password' />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <button className="oc-btn-primary submit-btn" htmltype="submit">登录</button>
        </Form>
      </div>
    </div>
  )
}
