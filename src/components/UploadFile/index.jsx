import React, { useState } from 'react';
import { Button, Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import turnitinImg from '../../assets/imgs/turnitin.png';
import api from '../../api';
import { API } from '../../consts';

import './index.sass';

const { Dragger } = Upload;
const { Option } = Select;

export default function UploadFile() {

  let history = useHistory()
  const [fileList, setFileList] = useState([]);
  const [version, setVersion] = useState(0);
  const user = localStorage.getItem('user');

  const selectStyle = {
    width: '300px'
  }

  async function submitHandle () {
    if (!user) {
      history.push('/signin');
      return false;
    }
    if (fileList.length === 0) {
      message.error('请先上传文件!')
      return false;
    }
    const params = {
      file_path: fileList,
      version
    };
    const res = await api.taskNew(params)
    if (res.data == 'ok') {
      message.success('上传文档成功后，将15-30分钟内，将结果发送至您的 OCcheck 账户邮箱');
      history.push('/profile');
    } else {
      message.error(res.data);
    }
  }

  const { token } = user ? JSON.parse(user) : '';

  function selectChange (value) {
    setVersion(value)
  }

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: API.UPLOAD,
    headers: {
      token,
    },
    data: {category: 0, tuid: 'xx'},
    onChange(info) {
      const { status } = info.file;
      console.log(status)
      if (status !== 'uploading') {
        if (!user) {
          history.push('/signin');
          return false;
        }
      }
      if (status === 'done') {
        const fileId = info.file.response.data.id;
        setFileList([...fileList, fileId])
        message.success(`${info.file.name} 上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败.`);
      }
    },
  };

  return (
    <div className="oc-shadow upload-wrapper container">
      <div className="header text-center just-pc">
        <div>
          本站为iThenticate官方授权，仅为
          <img src={turnitinImg} alt="" />
          <span className='red-text'>中文入口</span>
        </div>
        <div>国际版、UK版均由Turnitin官网提供检测经本站检测的论文</div>
        <div style={{ marginTop: '10px'}}>
          经本站检测的论文
          <span className='red-text'>绝对不会被收录</span>
          <span className="just-pc">,请放心使用</span>
        </div>
      </div>
      <div className="header text-center just-mobile">
        <div>
          本站为iThenticate官方授权<br />仅为
          <img src={turnitinImg} alt="" />
          <span className='red-text'>中文入口</span>
        </div>
        <div>国际版、UK版均由Turnitin官网提供检测经本站检测的论文</div>
        <div style={{ marginTop: '10px'}}>
          经本站检测的论文
          <span className='red-text'>绝对不会被收录</span>
          <span className="just-pc">,请放心使用</span>
        </div>
      </div>

      <div className="just-mobile">
        <div className="upload-form flex">
          <div className="select-contry-m">
            <Select
              defaultValue="0"
              onChange={selectChange} 
            >
              <Option value="0">turnitin检测 国际版</Option>
              <Option value="1">turnitin检测 UK版</Option>
            </Select>
          </div>
          <div className="upload-content">
            <Upload {...uploadProps}>
              <button className='oc-btn upload-btn'>点击此处上传文件</button>
            </Upload>,
          </div>
        </div>
      </div>
      <div className="just-pc">
        <div className="upload-form">
          <div className="select-contry">
            <Select
              defaultValue="0"
              style={selectStyle} 
              onChange={selectChange} 
              suffixIcon={<CaretDownOutlined style={{ fontSize:"24px" }} />}
            >
              <Option value="0">turnitin检测 国际版</Option>
              <Option value="1">turnitin检测 UK版</Option>
            </Select>
          </div>
          <div className="upload-content">
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <FileOutlined style={{ color: '#9B9B9B', fontSize: '25px'}} />
              </p>
              <p className="ant-upload-hint">
                拖拽文件到此处或本地上传
              </p>
            </Dragger>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className='oc-btn' onClick={ submitHandle }>免费查重</button>
      </div>
      <div className='gray-text text-center'>上传文档成功后，将15-30分钟内，将结果发送至您的 OCcheck 账户邮箱</div>
    </div>
  )
}
