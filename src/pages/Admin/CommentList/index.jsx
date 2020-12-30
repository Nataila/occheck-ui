import React, { useState, useEffect } from 'react';
import { Table, Space, Button } from 'antd';

import api from '../../../api';
import './index.sass';

export default function CommentList() {
  const [commentList, setComment] = useState([]);

  async function getCommentList() {
    const list = await api.commentList({limit: 18, status: 0});
    setComment(list);
  }

  useEffect(() => {
    getCommentList()
  }, [])

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '审核',
      key: 'audit',
      render: (text, record) => {
        <Space size='middle'>
           <Button type="primary">通过</Button>
           <Button type="primary" danger>拒绝</Button>
        </Space>
      }
    },
  ]

  return (
    <Table dataSource={commentList} columns={columns} />
  )
}
