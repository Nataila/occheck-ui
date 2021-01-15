import React, { useState, useEffect } from 'react';
import { Input, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import api from '../../../api';
import { API } from '../../../consts.js';
import './index.sass';

export default function TaskDetail() {
  let { id } = useParams();
  const [task, setTask] = useState({'_id': {'$oid': ''}, 'uid': {'$oid': ''}});
  const [form, setForm] = useState({tid: id});

  useEffect(() => {
    async function fetchData() {
      const res = await api.taskDetail(id);
      setTask(res.data);
      const {repeat, program} = res.data;
      setForm({
        ...form,
        ...{
          repeat: repeat ? repeat['$oid'] : '',
          program: program ? program['$oid'] : '',
          repeatScore: res.data.repeatScore,
          score: res.data.score
        }
      })
    }
    fetchData()
  }, [])

  const user = localStorage.getItem('user');
  const { token } = user ? JSON.parse(user) : '';

  const submitHandle = async () => {
    const res = await api.taskUpdate(form)
    if (res.data === 'ok') {
      message.success('提交成功');
      window.location.href='/admin'
    }
  }

  const props = {
    name: 'file',
    action: API.UPLOAD,
    headers: {
      token,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
        const { category, id } = info.file.response.data;
        let fileType = {repeat: id}
        if (category === 2) {
          fileType = {program: id}
        }
        setForm({...form, ...fileType})
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const props1 = {...props, data: {category: 1, tuid: task.uid.$oid}}
  const props2 = {...props, data: {category: 2, tuid: task.uid.$oid}}
  return (
    <div>
      <div className="flex task-list-item">
        <div className='task-list-item-title'>ID: </div>
        <div>{task['_id']['$oid']}</div>
      </div>
      <div className="flex task-list-item">
        <div className='task-list-item-title'>邮箱: </div>
        <div>{ task.username }</div>
      </div>
      <div className="flex task-list-item">
        <div className='task-list-item-title'>重复率: </div>
        <div> <Input placeholder="重复率" key={task.repeatScore} defaultValue={task.repeatScore} onChange={(e) => {setForm({...form, repeatScore: e.target.value})}}/> </div>
      </div>

      <div className="flex task-list-item">
        <div className='task-list-item-title'>评分: </div>
        <div> <Input placeholder="评分" key={task.score} defaultValue={task.score} onChange={(e) => {setForm({...form, score: e.target.value})}}/> </div>
      </div>
      <div className="flex task-list-item">
        <div className="sub-title task-list-item-title">查重结果</div>
        {task.repeat ? '已上传' :
        <Upload {...props1}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>}
      </div>
      <div className="flex task-list-item">
      <div className="sub-title task-list-item-title">语法结果</div>
        {task.program ? '已上传' :
        <Upload {...props2}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>}
      </div>
      <Button style={{ marginTop: 30 }} type='primary' onClick={ submitHandle }>确认提交</Button>
    </div>
  )
}
