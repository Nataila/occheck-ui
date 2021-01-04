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

export default function ForgetPwd () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [country, setCountry] = useState(0)
  const [codeVal, setCodeVal] = useState('发送验证码')
  const [counting, setCounting] = useState(false)
  const [email, setEmail] = useState('')


  let count = 60;

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
    console.log(values)
    const res = await api.forgetPwd(values);
    if (res.data === 'ok') {
      message.success('重置成功！');
      window.location.href='/signin';
    }
  }

  const countrySelect = v => {
    setCountry(parseInt(v.value))
  }

  const countDown = () => {
    const clock = setTimeout(function () {
      count -= 1
      setCodeVal(`${count}s后重新发送`)
      if (count == 0) {
        setCodeVal('发送验证码')
        setCounting(false)
      } else {
        countDown()
      }
    }, 1000)
  }

  const countDownFunc = async () => {
    if (counting) {
      return false
    } else {
      if (!email) {
        message.error('请输入邮箱')
        return false
      }
      const res = await api.sendCode({email})
      if (res) {
        message.success('已发送！');
        count -= 1
        setCodeVal(`${count}s后重新发送`)
        setCounting(true)
        countDown()
      }
    }
  }

  return ( 
    <div className="signup-root">
      <div className="signup-content oc-shadow">
        <div className="title text-center">忘记密码</div>
        <div className="logo-color-wrapper">
          <img src={ logoColor } alt="" />
        </div>
        <Form
          onFinish={onFinish}
          style={{width: 'min-content', margin: '0 auto', position: 'relative'}}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
          <Input
            type='email'
            className="signup-input"
            placeholder="请输入邮箱"
            name='email'
            onChange={e => {setEmail(e.target.value)}}
            />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
          <Input
            type='text'
            className="signup-input"
            placeholder="验证码"
            name='code'
            />
          </Form.Item>

          <Form.Item
            name="new_password1"
            rules={[{ required: true, message: '重置您的密码' }]}
          >
            <Input
              type="password"
              className="signup-input"
              placeholder="重置您的密码"
              name='new_password1' />
          </Form.Item>

          <Form.Item
            name="new_password2"
            rules={[{ required: true, message: '请再次输入密码' }]}
          >
            <Input
              type="password"
              className="signup-input"
              placeholder="请再次输入密码"
              name='new_password2' />
          </Form.Item>
          <span className='send-code' onClick={countDownFunc}>{ codeVal }</span>
          <button className="oc-btn-primary submit-btn" htmlType="submit">提交</button>
        </Form>
      </div>
    </div>
  )
}
