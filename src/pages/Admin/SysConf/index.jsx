import React, { useState, useEffect } from 'react';
import { Input, Upload, message, Button, Form } from 'antd';
import api from '../../../api';

import './index.sass';

export default function SycConf() {
  const [form] = Form.useForm();

  async function getConf() {
    const res = await api.getConf();
    console.log(res.data);
    form.setFieldsValue(res.data)
  }

  // const submitHandle = async () => {
  //   const res = await api.setConf(form)
  //   if (res.data === 'ok') {
  //     message.success('提交成功');
  //   }
  // }

  const onFinish = async (values) => {
    const res = await api.setConf(values)
    if (res.data === 'ok') {
      message.success('提交成功');
    }
  };

  useEffect(() => {
    getConf()
  }, [])

  return (
   <Form
      form={form}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="注册赠送次数"
        name="signup_count"
        rules={[{ required: true, message: '请输入次数' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="推广赠送次数"
        name="sem_count"
        rules={[{ required: true, message: '请输入次数' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="购买次数单价"
        name="price"
        rules={[{ required: true, message: '请输入价钱' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="通知的手机号"
        name="phone"
        rules={[{ required: true, message: '请输入手机号' }]}
      >
        <Input />
      </Form.Item>



      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}
