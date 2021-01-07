import React, { useState, useContext } from 'react';
import './index.sass';

import { Form, Input, Checkbox, Modal, Button, Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import api from '../../api';
import { loginContext } from '../../App';
import logoColor from '../../assets/imgs/logo-color.png';

const { Option } = Select;

export default function SignIn () {
  const {isLogin, setLogin} = useContext(loginContext);
  let history = useHistory()

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <div className="logo-color-wrapper">
          <img src={ logoColor } alt="" />
        </div>
        <Form
          onFinish={onFinish}
          initialValues={{ remember: true }}
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
          <Link to="/forget" style={{ float: 'right', marginTop: '-50px', position: 'relative'}}>忘记密码?</Link>
          <button className="oc-btn-primary submit-btn" htmltype="submit">登录</button>

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
