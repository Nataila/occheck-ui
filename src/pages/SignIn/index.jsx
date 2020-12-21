import React, { useState } from 'react';
import './index.sass';
import { Checkbox, Modal, Button } from 'antd';

export default function SignIn () {
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

  return ( 
    <div className="signup-root">
      <div className="signup-content oc-shadow">
        <div className="title text-center">创建一个账户</div>
        <div className="form-content">
          <input className="signup-input" placeholder="E-mail"></input>
          <input className="signup-input" placeholder="Your Password"></input>
          <Checkbox style={{ marginTop: 20, color: '#AAB2BC'}}>记住密码</Checkbox>
        </div>
        <div className="oc-btn-primary submit-btn">注册</div>
        <p className="text-center"> 通过创建一个帐户，我接受<a onClick={showModal} href="javascript:void(0)">OC check 的条款或服务</a></p>
      </div>
        <Modal title="服务条款" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确定" cancelText="取消">
      </Modal>
    </div>
  )
}
