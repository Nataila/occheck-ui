import React, { useState, useEffect } from 'react';
import { Table, Space, Button, message } from 'antd';
import api from '../../../api';

import './index.sass';
var moment = require('moment');

export default function UserList() {
  const [userList, setUserList] = useState([]);

  async function getUserList() {
    const list = await api.userList({limit: 18, status: 0});
    setUserList(list);
  }

  useEffect(() => {
    getUserList()
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: ['_id', '$oid'],
      key: '_id.$oid',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '用户组',
      key: 'group',
      render: record => {
        let groupList = ['普通用户', '管理员'];
        let group = groupList[parseInt(record.group)]
        return <span>{group}</span>
      }
    },
    {
      title: '国家',
      key: 'country',
      render: record => {
        let countryList = ['美国', '英国', '澳洲', '加拿大'];
        let country = countryList[parseInt(record.country)]
        return <span>{country}</span>
      }
    },
    {
      title: '剩余次数',
      dataIndex: 'query_count',
      key: 'query_count',
    },
    {
      title: '注册时间',
      key: 'created_at',
      render: record => {
        let d = moment(record.created_at.$date).format('YYYY-MM-DD HH:mm:ss');
        return <span>{ d }</span>
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href={`/admin/users/${record._id.$oid}/`}>查看</a>
        </Space>
      ),
    },
  ]

  return (
    <Table dataSource={userList} columns={columns} />
  )
}
