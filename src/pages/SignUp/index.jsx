import React, { useState } from 'react';
import './index.sass';
import { Form, Input, Checkbox, Modal, Button, Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history'
import { OcSelect, OcOption } from '../../components/OcSelect';
import logoColor from '../../assets/imgs/logo-color.png';
import api from '../../api';

const { Option } = Select;

const history = createBrowserHistory()

export default function SignUp () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [country, setCountry] = useState(0)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  async function onFinish(values) {
    values['country'] = country
    const res = await api.signUp(values);
    if (res.message === 'Success') {
      message.success('注册成功！');
      window.location.href='/signin'
    }
  }

  const countrySelect = v => {
    console.log(v.value)
    setCountry(parseInt(v.value))
  }

  return ( 
    <div className="signup-root">
      <div className="mobile signup-content oc-shadow">
        <div className="title text-center">创建一个账户</div>
        <div className="logo-color-wrapper">
          <img src={ logoColor } alt="" />
        </div>
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
            placeholder="Your Password"
            name='password' />
          </Form.Item>
          <OcSelect onChange={ countrySelect } defaultValue="美国">
            <OcOption value="0">美国</OcOption>
            <OcOption value="1">英国</OcOption>
            <OcOption value="2">澳洲</OcOption>
            <OcOption value="3">加拿大</OcOption>
          </OcSelect>
          <button className="oc-btn-primary submit-btn" htmlType="submit">注册</button>
    {/*
          <p className="text-center"> 通过创建一个帐户，我接受<a onClick={showModal} href="javascript:void(0)">OC check 的条款或服务</a></p>
*/}
        </Form>
      </div>
        <Modal title="服务条款" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确定" cancelText="取消">
      </Modal>
    </div>
  )
}
