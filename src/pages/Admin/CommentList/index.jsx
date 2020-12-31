import React, { useState, useEffect } from 'react';
import { Table, Space, Button, message } from 'antd';

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

  async function updateStatus(cid, status) {
    const res = await api.commentUpdate(cid, {status})
    if (res.data === 'ok') {
      let msg = '审核成功, 已拒绝'
      if (status === 1) {
        msg = '审核成功, 已通过'
      }
      message.success(msg);
      getCommentList()
    }
  }

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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type='primary' onClick={() => {updateStatus(record._id.$oid, 1)}}>通过</Button>
          <Button type='primary' danger onClick={() => {updateStatus(record._id.$oid, 2)}}>拒绝</Button>
        </Space>
      ),
    },
  ]

  return (
    <Table dataSource={commentList} columns={columns} />
  )
}
