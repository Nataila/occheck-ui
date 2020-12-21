import React from 'react';
import './index.sass';
import { Checkbox } from 'antd';

export default function SignIn () {
  return (
    <div className="signup-root">
      <div className="signup-content oc-shadow">
        <div className="title">创建一个账户</div>
        <input className="signup-input" placeholder="E-mail"></input>
        <input className="signup-input" placeholder="Your Password"></input>
        <Checkbox>Remember me</Checkbox>
        <div className="oc-btn-primary submit-btn">注册</div>
      </div>
    </div>
  )
}
