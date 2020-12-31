import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { message, Form, Input, InputNumber, Radio, Button, Checkbox, Select } from 'antd';
import { groupDisplay } from '../../../helper/filters';

import api from '../../../api';

import './index.sass';

const { Option } = Select;

export default function UserDetail() {
  let { uid } = useParams()
  const [user, setUser] = useState({})
  const [form] = Form.useForm();

  useEffect(() => {
    async function fetchData() {
      const res = await api.userDetail(uid);
      setUser(res);
      form.setFieldsValue({
        query_count: res.query_count,
        group: res.group,
      })
    }
    fetchData()
  }, [])

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async values => {
    const res = await api.userUpdate(uid, values);
    if (res.data === 'ok') {
      message.success('更新成功');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const groupDisplay = index => {
    const group_list = ['普通用户', '管理员']
    const group = group_list[parseInt(index)];
    return group
  }
  
  console.log(user.group)
  return (
    <Form
      name="basic"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="邮箱"
      >
        <span>{ user.email }</span>
      </Form.Item>

      <Form.Item name="group" label="用户组">
        <Radio.Group>
          <Radio value={0}>普通用户</Radio>
          <Radio value={1}>管理员</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="query_count"
        label="剩余次数"
      >
        <InputNumber />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
}
