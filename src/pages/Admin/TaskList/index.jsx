import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import './index.sass';
import api from '../../../api';

var fileDownload = require('js-file-download');

export default function TaskList() {
  const [taskList, setTaskList] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await api.taskList();
      console.log(res.data);
      setTaskList(res.data);
    }
    fetchData();
  }, [])

  const downLoad = async (fid, name) => {
    const res = await api.fileDownload(fid)
    fileDownload(res.data, name);
  }

  const getStatus = value => {
    const statusList = ['已上传查询文件', '已上传结果文件', '已生成评分PDF', '已合并PDF', '已发送邮件']
    return statusList[parseInt(value)]
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '邮箱',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '文件',
      dataIndex: 'files',
      key: 'files',
      render: files => {
        const res = files.map(item => {
          return <span className="file-span" key={item.fid} onClick={() => {downLoad(item.fid, item.name)}}>{item.name}</span>
        })
        return res
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: v => {
        return getStatus(v)
      }
    },
    {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/admin/tasks/${ record.id }`}>查看</Link>
      </Space>
    ),
  },
  ]
  return (
    <Table dataSource={taskList} columns={columns} />
  )
}
