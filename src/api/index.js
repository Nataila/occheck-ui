/**
* long description for the file
* @author cc <nataila.cc.814@gmail.com>
* Created at2020/12/08
*/

import { API } from '../consts';
import { httpGet } from '../helper/request';

const getCommentList = async (params = {}) => {
  const res = await httpGet(API.COMMENTS.LIST, params);
  return res.data
}

export default {
  commentList: getCommentList
}
