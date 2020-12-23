import React from 'react';
import { Select, Upload, message } from 'antd';
import { CaretDownOutlined, FileOutlined } from '@ant-design/icons';

import turnitinImg from '../../assets/imgs/turnitin.png';
import './index.sass';

const { Dragger } = Upload;
const { Option } = Select;

export default function UploadFile() {

  const selectStyle = {
    width: '300px'
  }

  function selectChange (value) {
    console.log(value)
  }
  const { token } = JSON.parse(localStorage.getItem('user'))

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: '/tasks/upload/',
    headers: {
      token,
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="oc-shadow upload-wrapper container">
      <div className="header text-center">
        <div>
          本站为iThenticate官方授权，仅为
          <img src={turnitinImg} alt="" />
          <span className='red-text'>中文入口</span>
        </div>
        <div>国际版、UK版均由Turnitin官网提供检测经本站检测的论文</div>
        <div style={{ marginTop: '10px'}}>
          经本站检测的论文
          <span className='red-text'>绝对不会被收录</span>
          ,请放心使用
        </div>
      </div>
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
      <div className="text-center">
        <a href="" className='oc-btn'>免费查重</a>
      </div>
      <div className='gray-text text-center'>上传文档成功后，将15-30分钟内，将结果发送至您的 OCcheck 账户邮箱</div>
    </div>
  )
}
