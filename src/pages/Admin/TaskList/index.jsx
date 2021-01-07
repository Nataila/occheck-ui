import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import './index.sass';
import api from '../../../api';

var fileDownload = require('js-file-download');

export default function TaskList() {
  const [taskList, setTaskList] = useState([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const prePageCount = 50

  const fetchData = async (page=1) => {
    const skip = (page - 1) * prePageCount
    const res = await api.taskList({skip, limit: prePageCount});
    setTaskList(res.data);
    setTotal(res.total);
  }

  useEffect(() => {
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
      title: '版本',
      dataIndex: 'version',
      key: 'version',
      render: text => {
        return ['国际版', 'UK版'][parseInt(text)]
      }
    },
    {
      title: '语法评分',
      dataIndex: 'score',
      key: 'score'
    },
    {
      title: '重复率',
      dataIndex: 'repeatScore',
      key: 'repeatScore'
    },
    {
      title: '综合评分',
      dataIndex: 'composite',
      key: 'composite'
    },
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
      render: text => {
        return ['优秀', '合格', '不合格'][parseInt(text)]
      }
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

  const pageOption = {
    hideOnSinglePage: true,
    current: currentPage,
    total,
    pageSize: prePageCount,
    onChange: value => {
      fetchData(value)
      setCurrentPage(value)
  }}

  return (
    <Table dataSource={taskList} pagination={pageOption} columns={columns} />
  )
}
