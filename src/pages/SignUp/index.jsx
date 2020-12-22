import React, { useState } from 'react';
import './index.sass';
import { Form, Input, Checkbox, Modal, Button, Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history'
import api from '../../api';

const { Option } = Select;

const history = createBrowserHistory()

export default function SignUp () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    password2: '',
    country: 0,
  })

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const formChangeHandle = e => {
    console.log(e.target.name);
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value
    })
  }

  async function onFinish(values) {
    const res = await api.signUp(values);
    if (res.message === 'Success') {
      message.success('注册成功！');
      history.push('/');
    }
  }

  return ( 
    <div className="signup-root">
      <div className="signup-content oc-shadow">
        <div className="title text-center">创建一个账户</div>
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
          <button className="oc-btn-primary submit-btn" htmlType="submit">注册</button>
          <p className="text-center"> 通过创建一个帐户，我接受<a onClick={showModal} href="javascript:void(0)">OC check 的条款或服务</a></p>
        </Form>
      </div>
        <Modal title="服务条款" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确定" cancelText="取消">
      </Modal>
    </div>
  )
}
