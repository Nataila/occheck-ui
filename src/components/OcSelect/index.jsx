import React, { useState } from 'react';
import './index.sass';

import { CaretDownOutlined } from '@ant-design/icons';

export const OcSelect = props => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(props.defaultValue);
  const optionList = React.Children.map(props.children, item => {
    return <div className="oc-input" onClick={() => {props.onChange(item.props.value)}}>{item.props.children}</div>
  })
  return (
    <div className="oc-select">
      <div className="oc-input selected" onClick={() => {setOpen(!isOpen)}}>
        <span>{ value }</span>
        <CaretDownOutlined class="caret-down" />
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
