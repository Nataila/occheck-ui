import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import api from '../../api';
import './index.sass';

export default function CommentList() {
  const [commentList, setComment] = useState([]);

  async function getCommentList() {
    const list = await api.commentList({limit: 18});
    setComment(list);
  }

  useEffect(() => {
    getCommentList()
  }, [])

  return (
    <div className="comments container">
      <div className="title text-center">用户评价</div>
      <div className="comments-list">
        <Row>
          {commentList.map((item) =>
          <Col span={8} key={item._id.$oid} className='comment-col'>
            <div className="comment-item">
              <div className="name">{ item.name }</div>
              <div className="location">{ item.location }</div>
              <div className="content">{ item.content }</div>
              <div className="time">Nov 24, 2020</div>
              <div className="arrow"></div>
            </div>
          </Col>
          )}
        </Row>
      </div>
    </div>
  )
}

