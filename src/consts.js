/**
* @description
*   + description
# cc @ 2019-07-31 12:24:25
*/


export const BASE_URL = process.env.REACT_APP_API_URI;

export const API = {
  SEND_CODE: '/account/send/mail/code/',
  SIGNIN: '/account/signin/',
  SIGNUP: '/account/signup/',
  USER_LIST: '/account/list/',
  USER_DETAIL: '/account/detail/',
  SYS_CONF: '/account/sysconf/',
  USER_UPDATE: '/account/update/',
  WX_PAY_CHECK: '/account/buy/check/',
  FORGET_PWD: '/account/forget/',
  CHANGE_PWD: '/account/changepwd/',
  TASK_NEW: '/tasks/new/',
  TASK_LIST: '/tasks/list/',
  TASK_UPDATE: '/tasks/update/',
  TASK_DETAIL: '/tasks/detail/',
  MY_PROFILE: '/account/me',
  COMMENTS: {
    LIST: '/comments/list/',
    NEW: '/comments/new/',
    UPDATE: '/comments/'
  },
  ACCOUNT_BUY: '/account/buy/',
  FILE_DOWNLOAD: '/download/'
};
