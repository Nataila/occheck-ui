import React, { useState } from 'react';
import './index.sass';

import { CaretDownOutlined } from '@ant-design/icons';

export const OcSelect = props => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(props.defaultValue);

  const clickHandle = (p) => {
    setValue(p.children);
    props.onChange(p);
    setOpen(false);
  }
  const optionList = React.Children.map(props.children, item => {
    return<div className="oc-input" onClick={() => clickHandle(item.props)}> {item.props.children}</div>
  })
  return (
    <div className="oc-select">
      <div className="oc-input selected" onClick={() => {setOpen(!isOpen)}}>
        <span>{ value }</span>
        <CaretDownOutlined className="caret-down" />
      </div>
      <div className={ isOpen ? 'option-list open': 'option-list'}>
        { optionList }
      </div>
    </div>
  )
}

export const OcOption = (props) => {
  return (
    <>
      <div>{ props.children }</div>
    </>
  )
}
