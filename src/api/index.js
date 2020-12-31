/**
* long description for the file
* @author cc <nataila.cc.814@gmail.com>
* Created at2020/12/08
*/

import Axios from "axios";
import { API } from '../consts';
import { httpGet, httpPost, httpPut } from '../helper/request';

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

const taskNew = async (params = {}) => {
  const res = await httpPost(API.TASK_NEW, params);
  return res
}

const commentNew = async (params = {}) => {
  const res = await httpPost(API.COMMENTS.NEW, params);
  return res
}

const commentUpdate = async (cid, params = {}) => {
  const res = await httpPut(`${API.COMMENTS.UPDATE}${cid}/`, params);
  return res
}

const taskList = async (params = {}) => {
  const res = await httpGet(API.TASK_LIST, params);
  return res
}

const taskDetail = async (fid) => {
  console.log(fid)
  const res = await httpGet(`${API.TASK_DETAIL}${fid}/`);
  return res
}

const myProfile = async (params = {}) => {
  const res = await httpGet(API.MY_PROFILE, params);
  return res
}


const buyCount = async (params = {}) => {
  const res = await httpPost(API.ACCOUNT_BUY, params);
  return res
}

const taskUpdate = async (params = {}) => {
  const res = await httpPost(API.TASK_UPDATE, params);
  return res
}

const fileDownload = async (fid, params = {}) => {
  const res = await Axios({
    url: `${API.FILE_DOWNLOAD}${fid}/`,
    method: 'GET',
    responseType: 'blob', // Important
  })
  return res
}

export default {
  commentList: getCommentList,
  signUp,
  signIn,
  taskNew,
  taskList,
  commentNew,
  commentUpdate,
  myProfile,
  buyCount,
  fileDownload,
  taskDetail,
  taskUpdate
}
