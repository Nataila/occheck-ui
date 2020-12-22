/**
* long description for the file
* @author cc <nataila.cc.814@gmail.com>
* Created at2020/12/08
*/

import { API } from '../consts';
import { httpGet, httpPost } from '../helper/request';

const getCommentList = async (params = {}) => {
  const res = await httpGet(API.COMMENTS.LIST, params);
  return res.data
}

const signUp = async (params = {}) => {
  const res = await httpPost(API.SIGNUP, params);
  return res
}

const signIn = async (params = {}) => {
  const res = await httpPost(API.SIGNIN, params);
  return res
}

export default {
  commentList: getCommentList,
  signUp,
  signIn
}
